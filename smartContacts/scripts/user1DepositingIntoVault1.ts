import * as dotenv from "dotenv";
import { viem } from "hardhat";
import { HardhatUserConfig } from "hardhat/types";
import { createPublicClient, http, parseEther, formatEther, createWalletClient } from "viem";
import { etherlinkTestnet } from "viem/chains";
import { privateKeyToAccount } from "viem/accounts";

dotenv.config();

// import { abi, bytecode } from "../artifacts/contracts/launchpad.sol/LaunchContract.json"
import { abi, bytecode } from "../artifacts/contracts/Vault1.sol/Vault1.json"
// const providerApiKey = process.env.ALCHEMY_API_KEY || "";
const user1PrivateKey = process.env.PRIVATE_KEY2 || "";
// const user2PrivateKey = process.env.PIVATE_KEY2 || "";
async function main() {

    const account = privateKeyToAccount(`0x${user1PrivateKey}`);
    const user1 = createWalletClient({
        account,
        chain: etherlinkTestnet,
        transport: http("https://node.ghostnet.etherlink.com"),
    });
    const publicClient = createPublicClient({
        chain: etherlinkTestnet,
        transport: http("https://node.ghostnet.etherlink.com"),
    });
    console.log("Deployer address:", user1.account.address);
    const balance = await publicClient.getBalance({
        address: user1.account.address,
    });
    console.log(
        "Deployer balance:",
        formatEther(balance),
        user1.chain.nativeCurrency.symbol
    );
    console.log("\ User 1 depositing to Vault 1");
    const { request } = await publicClient.simulateContract({
        address: '0xb54d5e33457ca130fed0ffbc6d8899d5b54e750b',
        abi: abi,
        functionName: 'deposit',
        value: parseEther("0.02"),
        account
    })
    await user1.writeContract(request);
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});