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
    console.log("\ Make total participants in the vault 99");
    const { request } = await publicClient.simulateContract({
        address: '0xb54d5e33457ca130fed0ffbc6d8899d5b54e750b',
        abi: abi,
        functionName: 'makeTotalParticipant99',
        account
    })
    await deployer.writeContract(request);
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});