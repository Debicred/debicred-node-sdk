
const pub = "c18e2302da8dd251ab0090473847c8ddd24b04e06352ada12e4b819f338e8800"
const sec = "fb7f85d6bc48380f3baec6e8600138f8a51fec147c99d50ca04e9985acc2ffbfef05f7c759bf079269b9e8c8ef07ab73b2c857d84fcccd32f9ad5e9c"
const id = "ba6145c57ddb42af90b7ceecf033948b"
const customer = require('debicred-sdk');

const Customer = customer.Customer(id,pub,sec);

// console.log(Customer)

// const newWallet = Customer.createWallet();

// console.log(newWallet)

const walletDetails = Customer.getWalletDetails("6f6755ffa9fe498988983e4c933850e1");
console.log(walletDetails)

async function t(){
    const curr = Customer.getCurrencies();
    console.log(curr)
}

t()

