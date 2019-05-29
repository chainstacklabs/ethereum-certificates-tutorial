const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = 'misery walnut expose ...'; // replace with your mnemonic phrase

module.exports = {
 networks: {
    development: {
        host: "127.0.0.1",
        port: 9545,
        network_id: "5777"
    },
    mainnet: {
        provider: () => new HDWalletProvider(mnemonic, "https://nd-123-456-789.p2pify.com"), // replace with your node RPC endpoint
        network_id: 1,
        gas: 4500000,
        gasPrice: 10000000000
    }
   }
};
