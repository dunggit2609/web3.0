
require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/J_JFLm4Tp0XQ-UdIY1xdsvnL6s8ZYNJf',
      accounts: ['596c4d2e513a14e363d1627ff08ded376967c8a0699dba332c9de9101b24f90b']
    }
  }
};
