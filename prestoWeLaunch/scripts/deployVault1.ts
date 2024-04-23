import { ethers, parseEther } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();


import { Vault1__factory} from "../typechain-types"
 
async function main() {
      const provider = new ethers.JsonRpcProvider(
        process.env.RPC_ENDPOINT_URL ?? ""
      );

      // Configuring the wallet
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
  console.log(`Using address ${wallet.address}`);
  const Walletbalance = await provider.getBalance(wallet.address);
  const balance = Number(ethers.formatUnits(Walletbalance));
  console.log(`Wallet balance ${balance} ETH`);
  if (balance < 0.01) {
    throw new Error("Not enough ether");
  }

  const weLaunchContractFactoy = new Vault1__factory(wallet);
  const weLaunchContract = await weLaunchContractFactoy.deploy();
  console.log("Waiting for Vault1Contract deployment...");
  await weLaunchContract.waitForDeployment();
  console.log(`Vault1Contract deployed to ${weLaunchContract.target}`);

}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });