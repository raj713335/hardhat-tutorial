/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 
const INFURA_URL = 'https://rinkeby.infura.io/v3/94dbac5b3ff04f9da1854e01ae406dd6';
const PRIVATE_KEY = 'private_key';

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.0",
  networks: {
	  rinkeby: {
		  url: INFURA_URL,
		  accounts: [`0x${PRIVATE_KEY}`]
	  }
  }
};
