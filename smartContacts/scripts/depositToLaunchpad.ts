import * as dotenv from "dotenv";
import { viem } from "hardhat";
import { HardhatUserConfig } from "hardhat/types";
import { createPublicClient, http, parseEther, formatEther, createWalletClient } from "viem";
import { etherlinkTestnet } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

dotenv.config();

import { abi, bytecode } from "../artifacts/contracts/launchpad.sol/LaunchContract.json"

const deployerPrivateKey = process.env.PRIVATE_KEY || "";
const testerPrivateKey = process.env.PRIVATE_KEY2 || "";

async function main(){
    const account = privateKeyToAccount(`0x${deployerPrivateKey}`);
    // const account = privateKeyToAccount(`0x${testerPrivateKey}`);
    const deployer = createWalletClient({
        account,
        chain: etherlinkTestnet,
        transport: http("https://node.ghostnet.etherlink.com"),
    })
    // const tester = createWalletClient({
    //   account,
    //   chain: etherlinkTestnet,
    //   transport: http("https://node.ghostnet.etherlink.com"),
    // });
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
      console.log("\n Checking 'addWhitelistOne' function");
      const { request } = await publicClient.simulateContract({
        address: '0xf4a2d726ffd3832e34ca0cf3101a47e198677ac7',
        abi: abi,
        functionName: 'addWhitelistOne',
        args: ["0xb54d5e33457ca130fed0ffbc6d8899d5b54e750b"],
        account
      })
    //   await deployer.writeContract(request);
    //   console.log("\n Depositing to WeLaunch contract");
    //   const { request } = await publicClient.simulateContract({
    //     address: '0x13354237aed69aab01c9754620f5eb9d4d2a11d9',
    //     abi: abi,
    //     functionName: 'deposit',
    //     value: parseEther('0.04'),
    //     account
    //   })
    //   await deployer.writeContract(request);
    // await deployer.sendTransaction({
    //     account,
    //     to: "0x13354237aed69aab01c9754620f5eb9d4d2a11d9",
    //     value: parseEther("0.05")
    // })
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });