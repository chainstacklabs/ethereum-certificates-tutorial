const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = 'misery walnut expose ...'; // replace with your mnemonic phrase

module.exports = {
 networks: {
    development: {
        host: "127.0.0.1",
        port: 9545,
        network_id: "5777"
    },
    mainnet: {
        provider: () => new HDWalletProvider(mnemonic, "https://user-name:pass-word-pass-word-pass-word@nd-123-456-789.p2pify.com"), // replace with your node RPC endpoint and credentials
        network_id: 1, //Ethereum network ID. 1 for mainnet; 3 for Ropsten. 
        gas: 4500000,
        gasPrice: 10000000000
    }
   }
};
