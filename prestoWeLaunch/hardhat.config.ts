
    /*
Save The Private Key in the .env file
PRIVATE_KEY="YOUR PRIVATE KEY"
Important: Add the .env file to your .gitignore
*/
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config()

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    "shoulderequinox": {
      url: "https://shoulderequinox-rpc.eu-north-2.gateway.fm",
      chainId: 1570066745,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      
    }
  }
};

export default config;
    