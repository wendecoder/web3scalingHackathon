import * as dotenv from "dotenv";
import { viem } from "hardhat";
import { HardhatUserConfig } from "hardhat/types";
import { createPublicClient, http, parseEther, formatEther, createWalletClient } from "viem";
import { etherlinkTestnet } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

dotenv.config();

import { abi, bytecode } from "../artifacts/contracts/launchpad.sol/LaunchContract.json"
 
const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const deployerPrivateKey = process.env.PRIVATE_KEY || "";

// const config: HardhatUserConfig = {
//     solidity: {
//      version: "0.8.24",
//      settings: {
//       viaIR: true,
//      }
//     },
//     networks: {
//       etherlinkTest: {
//         url: "https://node.ghostnet.etherlink.com",
//         accounts: [deployerPrivateKey],
//       }
//     }
//   };
// async function main() {
    // const publicClient = await viem.getPublicClient();
    // const blockNumber = await publicClient.getBlockNumber();
    // console.log("Last block number:", blockNumber);
    // const [deployer] = await viem.getWalletClients();
    // console.log("Deployer address:", deployer.account.address);
    // const balance = await publicClient.getBalance({
    //   address: deployer.account.address,
    // });
    // console.log(
    //   "Deployer balance:",
    //   formatEther(balance),
    //   deployer.chain.nativeCurrency.symbol
    // );
// }



async function main() {
    const constructorArgs = [
        // Replace with your desired values
        parseEther("1000"), // Max Cap in Wei (1000 ETH)
        1713686509, // Sale Start Time (Example: Unix timestamp for a specific date)
        1713740000, // Sale End Time (Example: Unix timestamp for a specific date)
        // Replace with project owner address
        "0xcA54b717Dd163F3401eFc41B9977211B24eDD9C6",
      
        parseEther("10"), // Tier 1 value in Wei (0.1 ETH)
        parseEther("50"),
        parseEther("80"),
        parseEther("100")
      ];
  
    const account = privateKeyToAccount(`0x${deployerPrivateKey}`);
    const deployer = createWalletClient({
      account,
      chain: etherlinkTestnet,
      transport: http("https://node.ghostnet.etherlink.com"),
    });
    const publicClient = createPublicClient({
        chain: etherlinkTestnet,
        transport: http("https://node.ghostnet.etherlink.com"),
      });
    console.log("Deployer address:", deployer.account.address);
    const balance = await publicClient.getBalance({
      address: deployer.account.address,
    });
    console.log(
      "Deployer balance:",
      formatEther(balance),
      deployer.chain.nativeCurrency.symbol
    );
    console.log("\nDeploying WeLaunch contract");
  const hash = await deployer.deployContract({
    abi,
    bytecode: bytecode as `0x${string}`,
    args: constructorArgs,
  });
  console.log("Transaction hash:", hash);
  console.log("Waiting for confirmations...");
  const receipt = await publicClient.waitForTransactionReceipt({ hash });
  console.log("WeLaunch contract deployed to:", receipt.contractAddress);
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });