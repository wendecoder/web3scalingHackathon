import { expect } from "chai";
import { toHex, hexToString, parseEther } from "viem";
import { viem } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

async function deployContract() {
  const publicClient = await viem.getPublicClient();
  const [deployer, otherAccount, secondAccount] = await viem.getWalletClients();
  const Vault1Contract = await viem.deployContract("Vault1")
  return { publicClient, deployer, otherAccount, secondAccount, Vault1Contract };
}

async function deployLaunchPadContract() {
  const publicClient = await viem.getPublicClient();
  const [deployer, otherAccount, secondAccount, thirdAccount] = await viem.getWalletClients();
  const constructorArgs = [
    // Replace with your desired values
    parseEther("1000"), // Max Cap in Wei (1000 ETH)
    1713601241, // Sale Start Time (Example: Unix timestamp for a specific date)
    1713601650, // Sale End Time (Example: Unix timestamp for a specific date)
    // Replace with project owner address
    thirdAccount.account.address,
  
    parseEther("10"), // Tier 1 value in Wei (0.1 ETH)
    parseEther("50"),
    parseEther("80"),
    parseEther("100")
  ];
  const LaunchContract = await viem.deployContract("LaunchContract", constructorArgs, {
    client: { wallet: deployer }
  })
  return { publicClient, deployer, otherAccount, thirdAccount, LaunchContract };
}

describe("Vault1", async () => {
  describe("when the contract is deployed", async () => {
    it("It sets the ownership to the deployer", async () => {
      // TODO
      const { Vault1Contract, deployer } = await loadFixture(deployContract);
      const ownerAddress = await Vault1Contract.read.owner();
      expect(ownerAddress.toLocaleLowerCase()).to.eq(deployer.account.address)
    })
  });
  describe("After the contract is deployed", async () => {
    it("The set setLaunchpadContract function works properlly", async () => {
      const { Vault1Contract, deployer } = await loadFixture(deployContract);
      const address = "0x1614F18Fc94f47967A3Fbe5FfcD46d4e7Da3D787";
      const formattedAddress = `0x${address}`;
      await Vault1Contract.write.setLaunchpadContract([`0x1614F18Fc94f47967A3Fbe5FfcD46d4e7Da3D787`]);
      const launchPadContractAddress = await Vault1Contract.read.launchpadContract();
      expect(address).to.equal(launchPadContractAddress);
    })
    it("Minimum deposit is 0.02 eth", async () => {
      const { Vault1Contract, deployer } = await loadFixture(deployContract);
      const minDeposit = await Vault1Contract.read.MIN_DEPOSIT();
      expect(minDeposit).to.equal(parseEther("0.02"));
    })
    it("Maximum deposit is 0.04 eth", async () => {
      const { Vault1Contract, deployer } = await loadFixture(deployContract);
      const maxDeposit = await Vault1Contract.read.MAX_DEPOSIT();
      expect(maxDeposit).to.equal(parseEther("0.04"));
    })
  })

  describe("Deposit function", async () => {
    it("User can deposit within the specified range", async () => {
      const { Vault1Contract, otherAccount } = await loadFixture(deployContract);
      const Vault1ContractAsOtherAccount = await viem.getContractAt(
        "Vault1",
        Vault1Contract.address,
        { walletClient: otherAccount }
      );
      await Vault1ContractAsOtherAccount.write.deposit({
        value: parseEther("0.03")
      });
      const contractBalance = await Vault1ContractAsOtherAccount.read.getBalance();
      expect(contractBalance).to.equal(parseEther("0.03"))
    })
    it("User can't deposit less than 0.02 eth", async () => {
      const { Vault1Contract, otherAccount } = await loadFixture(deployContract);
      const Vault1ContractAsOtherAccount = await viem.getContractAt(
        "Vault1",
        Vault1Contract.address,
        { walletClient: otherAccount }
      );
      await expect(Vault1ContractAsOtherAccount.write.deposit({
        value: parseEther("0.01")
      })).to.be.rejectedWith("Invalid deposit amount");
    })
    it("User can't deposit greater than 0.04 eth", async () => {
      const { Vault1Contract, otherAccount } = await loadFixture(deployContract);
      const Vault1ContractAsOtherAccount = await viem.getContractAt(
        "Vault1",
        Vault1Contract.address,
        { walletClient: otherAccount }
      );
      await expect(Vault1ContractAsOtherAccount.write.deposit({
        value: parseEther("0.05")
      })).to.be.rejectedWith("Invalid deposit amount");
    })
    it("User can deposit only once", async () => {
      const { Vault1Contract, otherAccount } = await loadFixture(deployContract);
      const Vault1ContractAsOtherAccount = await viem.getContractAt(
        "Vault1",
        Vault1Contract.address,
        { walletClient: otherAccount }
      );
      await expect(Vault1ContractAsOtherAccount.write.deposit({
        value: parseEther("0.04")
      })).not.to.be.rejected;
      await expect(Vault1ContractAsOtherAccount.write.deposit({
        value: parseEther("0.04")
      })).to.be.rejectedWith("User has already deposited");
    })
  })
  describe("Transfer function related stuffs", async () => {
    it("When the MAX_PARTICIPANT amount is reached, the address with the highest share will be granted an access to transfer the vault's balance to the launchpad contract", async () => {
      const { Vault1Contract, otherAccount, secondAccount } = await loadFixture(deployContract);
      const Vault1ContractAsOtherAccount = await viem.getContractAt(
        "Vault1",
        Vault1Contract.address,
        {client: { wallet: otherAccount }}
      );
      await Vault1ContractAsOtherAccount.write.deposit({
        value: parseEther("0.02")
      })
      await Vault1Contract.write.makeTotalParticipant99();
      const Vault1ContractAsSecondAccount = await viem.getContractAt(
        "Vault1",
        Vault1Contract.address,
        {client: { wallet: secondAccount }}
      );
      await Vault1ContractAsSecondAccount.write.deposit({
        value: parseEther("0.04")
      })
      const accountAllowedToTransfer = await Vault1Contract.read.allowedToTransfer();
      await expect(accountAllowedToTransfer.toLowerCase()).to.eq(secondAccount.account.address);
    })
    it("The user with the transfer access can transfer the money in the Vault", async () => {
      const  { publicClient, LaunchContract, thirdAccount, deployer } = await loadFixture(deployLaunchPadContract);
      const { Vault1Contract, otherAccount, secondAccount } = await loadFixture(deployContract);
      await LaunchContract.write.addWhitelistOne([Vault1Contract.address]);
      const txHash = await LaunchContract.write.getWhitelistOne([Vault1Contract.address]);
      const receipt = await publicClient.getTransactionReceipt({ hash: txHash });
      expect(receipt.status).to.eq("success");
      await Vault1Contract.write.setLaunchpadContractAddress([LaunchContract.address]);
      const Vault1ContractAsOtherAccount = await viem.getContractAt(
        "Vault1",
        Vault1Contract.address,
        {client: { wallet: otherAccount }}
      );
      await Vault1ContractAsOtherAccount.write.deposit({
        value: parseEther("0.02")
      })
      await Vault1Contract.write.makeTotalParticipant99();
      const Vault1ContractAsSecondAccount = await viem.getContractAt(
        "Vault1",
        Vault1Contract.address,
        {client: { wallet: secondAccount }}
      );
      await Vault1ContractAsSecondAccount.write.deposit({
        value: parseEther("0.04")
      })
      await LaunchContract.write.addWhitelistOne([Vault1ContractAsSecondAccount.address]);
      await LaunchContract.write.addWhitelistOne([secondAccount.account.address])
      // const txHash = await LaunchContract.write.getWhitelistOne([Vault1ContractAsSecondAccount.address]);
      // const receipt = await publicClient.getTransactionReceipt({ hash: txHash });
      // expect(receipt.status).to.eq("success");
      const accountAllowedToTransfer = await Vault1Contract.read.allowedToTransfer();
      await expect(accountAllowedToTransfer.toLowerCase()).to.eq(secondAccount.account.address);
      const thirdAccountBalanceBefore = await publicClient.getBalance({
        address: thirdAccount.account.address
      });
      const thirdAccountBalanceBeforeInNumber = Number(thirdAccountBalanceBefore);
      await Vault1ContractAsSecondAccount.write.transferToLaunchpad();
      const thirdAccountBalanceAfter = await publicClient.getBalance({
        address: thirdAccount.account.address
      })
      expect(Vault1ContractAsSecondAccount.address).to.eq(Vault1Contract.address);
    })
  })
})

