import * as dotenv from "dotenv";
import { viem } from "hardhat";
import { HardhatUserConfig } from "hardhat/types";
import { createPublicClient, http, parseEther, formatEther, createWalletClient } from "viem";
import { etherlinkTestnet } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

dotenv.config();

// import { abi, bytecode } from "../artifacts/contracts/launchpad.sol/LaunchContract.json"
import { abi, bytecode } from "../artifacts/contracts/Vault1.sol/Vault1.json"

const deployerPrivateKey = process.env.PRIVATE_KEY || "";

async function main() {

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
    console.log("\ User 1 depositing to Vault 1");
    const data = await publicClient.readContract({
        address: '0xb54d5e33457ca130fed0ffbc6d8899d5b54e750b',
        abi: abi,
        functionName: 'getAddressAllowedToTransfer',
        account
    })
    console.log(`An account allowed to transfer from the smart contract ${data} is the same with 0xcA54b717Dd163F3401eFc41B9977211B24eDD9C6`)
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});