require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note oval coconut include clog success gauge'; 
let testAccounts = [
"0x787248ca4034d4000d42a7146cf3124f5ce8b135be923309cfc8a242cc955615",
"0x7d2c80cd17e45be0756638fb63e696db57f26ead8479abe66f8136645b6aa8f9",
"0xd4ec31232283d7cee30929ecd25fbc4cfc31928412e2d1095f5f39f0e4f39561",
"0x3237a07410c1deef77cb16185bf218a96ab288aa74d6ee37d014f3b3c99415d8",
"0x5fae0f07f69eaecc1802ff652e47e3e8cd361cfd6eea14bb8ab4e122c8dc2d2a",
"0x2701066b66d8b3da15c5ade1b597915428cc468cf31f801d3838870740a9323c",
"0x612aec1a86b2463c4924bd4be93e12f3368cac05f4b31518d7c35f67700b9c1e",
"0x2dad8589452803c68c6e0dec28ddee47d38b27690f194370ca691faef586795a",
"0x9b2ed83d87961f3b8140050c4ee4e80bac8e29f613d3a63b33cc957cc6287f09",
"0x1ea7e1376d2d01ba47c7bc75bceccf8bfc57ef0bcdd5bc343e5c96e309c39f41"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


