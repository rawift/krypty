// https://eth-goerli.g.alchemy.com/v2/gLBKqBVvZ2XC9lI_DtfBmJ4zmdGxbSiq

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    Goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/gLBKqBVvZ2XC9lI_DtfBmJ4zmdGxbSiq',
      accounts: ['4fd878751cc0c30a428f6ab289f8bf52b8a72d4668622784dd15b4e074b77547']
    }
  }
}