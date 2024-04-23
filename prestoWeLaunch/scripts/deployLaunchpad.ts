import { ethers, parseEther } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();


import { LaunchContract__factory} from "../typechain-types"
 
async function main() {

      const maxCap = parseEther("1000");
      const saleStartime = 1713901042;
      const saleEndTime = 1713990000;
      const projectOwnerAddress = "0xcA54b717Dd163F3401eFc41B9977211B24eDD9C6";
      const tierOneMaxCap = parseEther("10");
      const tierTwoMaxCap = parseEther("50");
      const tierThreeMaxCap = parseEther("80");
      const tierFourMaxCap = parseEther("100");
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

  const weLaunchContractFactoy = new LaunchContract__factory(wallet);
  const weLaunchContract = await weLaunchContractFactoy.deploy(maxCap, saleStartime, saleEndTime, projectOwnerAddress, tierOneMaxCap, tierTwoMaxCap, tierThreeMaxCap, tierFourMaxCap);
  console.log("Waiting for TokenizedBallot deployment...");
  await weLaunchContract.waitForDeployment();
  console.log(`TokenizedBallot deployed to ${weLaunchContract.target}`);

}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });