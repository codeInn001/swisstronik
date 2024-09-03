
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  defaultNetwork: "kakarot-sepolia",
  networks: {
    "kakarot-sepolia": {
      url: "https://sepolia-rpc.kakarot.org",
      accounts: ['684a03734955ffb13e75e6db09bf21f3c1d8605f3f695b9a9d7d10b2f651a0b4']
    }
  },
  solidity: "0.8.24",
  ignition: {
    blockPollingInterval: 3_000,
    timeBeforeBumpingFees: 3 * 60 * 1_000,
    maxFeeBumps: 0,
    requiredConfirmations: 1,
  },
};
export default config;


