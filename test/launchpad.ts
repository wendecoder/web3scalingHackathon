import { expect } from "chai";
import { toHex, hexToString, parseEther, formatEther } from "viem";
import { viem } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";

async function deployContract() {
  const publicClient = await viem.getPublicClient();
  const [deployer, otherAccount, thirdAccount, fourthAccount] = await viem.getWalletClients();
  const constructorArgs = [
    // Replace with your desired values
    parseEther("1000"), // Max Cap in Wei (1000 ETH)
    1713612438, // Sale Start Time (Example: Unix timestamp for a specific date)
    1713640000, // Sale End Time (Example: Unix timestamp for a specific date)
    // Replace with project owner address
    fourthAccount.account.address,
  
    parseEther("10"), // Tier 1 value in Wei (0.1 ETH)
    parseEther("50"),
    parseEther("80"),
    parseEther("100")
  ];
  const launchpadContract = await viem.deployContract("LaunchContract", constructorArgs)
  // const ballotContract = await viem.deployContract("WeLaunchContract", constructorArgs);
  return { publicClient, deployer, otherAccount, thirdAccount, fourthAccount, launchpadContract };
}

describe("WeLaunch", async () => {
  describe("when the contract is deployed", async () => {
    it("the sale isn't started ", async () => {
      // TODO
      const { launchpadContract } = await loadFixture(deployContract);
      const saleStartTime = await launchpadContract.read.saleStartTime();
      const unixSaleStartTime = Number(saleStartTime);
      const currentUnixTime = Math.floor(Date.now() / 1000);
      expect(unixSaleStartTime).to.above(currentUnixTime)
    });

    it("the max capital is set correctly", async () => {
      const { launchpadContract } = await loadFixture(deployContract);
      const maxCap = await launchpadContract.read.maxCap();
      expect(maxCap).to.eq(parseEther("1000"))
    });
    it("Tier one max cap is set correctly", async () => {
      const { launchpadContract } = await loadFixture(deployContract);
      const tierOneMaxCap = await launchpadContract.read.tierOneMaxCap();
      expect(tierOneMaxCap).to.eq(parseEther("10"));
    });
  });
  describe("The whitelisting functions", async () => {
    it("addWhitelistOne() and getWhitelistOne() functions work correctly", async () => {
      const { publicClient, launchpadContract, otherAccount, thirdAccount } = await loadFixture(deployContract);
      await launchpadContract.write.addWhitelistOne([otherAccount.account.address]);
      const txHash = await launchpadContract.write.getWhitelistOne([otherAccount.account.address]);
      const receipt = await publicClient.getTransactionReceipt({ hash: txHash });
      expect(receipt.status).to.eq("success");
    })
    it("addWhitelistTwo() and getWhitelistTwo() functions work correctly", async () => {
      const { publicClient, launchpadContract, otherAccount, thirdAccount } = await loadFixture(deployContract);
      await launchpadContract.write.addWhitelistTwo([thirdAccount.account.address]);
      const txHash = await launchpadContract.write.getWhitelistTwo([thirdAccount.account.address]);
      const receipt = await publicClient.getTransactionReceipt({ hash: txHash });
      expect(receipt.status).to.eq("success");
    })
  })
  describe("Whitelisted users can deposit to the launchpad contract", async () => {
    it("Tier one whitelisted users can deposit to the launchpad contract", async () => {
      const { publicClient, launchpadContract, deployer, otherAccount, thirdAccount, fourthAccount } = await loadFixture(deployContract);
      const txHash = await launchpadContract.write.addWhitelistOne([otherAccount.account.address]);
      const receipt = await publicClient.getTransactionReceipt({hash: txHash});
      expect(receipt.status).to.eq("success");
      const balanceOfFourthAccountBefore = await publicClient.getBalance({
        address: fourthAccount.account.address
      });
      const balanceOfFourthAccountBeforeInNumber = Number(balanceOfFourthAccountBefore);
      const launchpadContractAsOtherAccount = await viem.getContractAt(
        "LaunchContract",
        launchpadContract.address,
        {client: {wallet: otherAccount}}
      )
      await otherAccount.sendTransaction({
        otherAccount,
        to: launchpadContract.address,
        value: parseEther("0.4")
      })
      // await launchpadContractAsOtherAccount.write.deposit({
      //   value: parseEther("0.4")
      // })
      const balanceOfFourthAccountAfter = await publicClient.getBalance({
        address: fourthAccount.account.address
      });
      
      const balanceOfFourthAccountAfterInNumber = Number(balanceOfFourthAccountAfter);     
      expect(balanceOfFourthAccountAfterInNumber).to.greaterThan(balanceOfFourthAccountBeforeInNumber);
    })
  })
})