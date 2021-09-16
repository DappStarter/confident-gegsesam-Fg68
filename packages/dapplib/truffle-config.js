require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn provide grace describe sun toy'; 
let testAccounts = [
"0xc27fb91d5048fad54631c9c7156bd402eef6a8f54ecdf4567c12928f0dc0f002",
"0x205b7e8bb080b6a59b2608901fbfac69b1138d90fec7557205729252594d9b19",
"0x4533af321f76dd0ec2a453dba3032a04b20ae3e2c9ebaa9b533f10398de2dd39",
"0x85f266bd7ab26289f47154a340f2b67bcec933c18f98b22864c10fd0126ef8c9",
"0xf65f9408b90e75b0685f3e035def90596dfb0fdd2f50ca36c2af9c7bb3b4204f",
"0xfd6a297906ea19a5117ae677c8910b530dcacbb309b9d1f6c8660621d13f22d8",
"0x8d9735a321ef8e4ceb9024b0ce2347f1c37f913bb2a0b0273239574ad99f664c",
"0xb114ec2ff72a1e0ca10116018ebf734a60ec1ce574ca5870c5e7cff619927cc1",
"0x9589307b3deecc87177261fbdcb820e016d3af6be7fbb2b62afa81a56bf4fc12",
"0xba70a6f9ffbf905091dd69d20be102c7e3d18fac9ab691fbbbc18f0496643acd"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

