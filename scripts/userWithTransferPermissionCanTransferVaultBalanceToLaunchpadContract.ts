import * as dotenv from "dotenv";
import { viem } from "hardhat";
import { HardhatUserConfig } from "hardhat/types";
import { createPublicClient, http, parseEther, formatEther, createWalletClient } from "viem";
import { etherlinkTestnet } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

dotenv.config();

// import { abi, bytecode } from "../artifacts/contracts/launchpad.sol/LaunchContract.json"
import { abi, bytecode } from "../artifacts/contracts/Vault1.sol/Vault1.json"

const user2PrivateKey = process.env.PRIVATE_KEY3 || "";

async function main() {

    const account = privateKeyToAccount(`0x${user2PrivateKey}`);
    const user2 = createWalletClient({
        account,
        chain: etherlinkTestnet,
        transport: http("https://node.ghostnet.etherlink.com"),
    });
    const publicClient = createPublicClient({
        chain: etherlinkTestnet,
        transport: http("https://node.ghostnet.etherlink.com"),
    });
    console.log("user2 address:", user2.account.address);
    const balance = await publicClient.getBalance({
        address: user2.account.address,
    });
    console.log(
        "user2 balance:",
        formatEther(balance),
        user2.chain.nativeCurrency.symbol
    );
    console.log("\ User with the transfer permission transfering the Vault's balance to the launchpad contract");
    const { request } = await publicClient.simulateContract({
        address: '0xb54d5e33457ca130fed0ffbc6d8899d5b54e750b',
        abi: abi,
        functionName: 'transferToLaunchpad',
        account
    })
    await user2.writeContract(request);
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});