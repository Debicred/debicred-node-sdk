
const fetch = require('node-fetch');
const url = "https://debicred-wallet-api.herokuapp.com/api/v1"

exports.Customer = function (id,public_key,secret_key){

    // initialise customer details

    this.id = id;
    this.public_key = public_key;
    this.secret_key = secret_key;

    this.headers = {
        "customer_id":this.id,
        "public-key":this.public_key,
        "Authorization":`Bearer ${this.secret_key}`
    };

    this.createWallet = async function(){return CreateWallet(this.headers);}
    this.getWalletDetails = async function(wallet_id){return GetWalletDetails(this.headers,wallet_id)};
    this.getCurrencies = async function(){return GetCurrencies(this.headers)};

    this.creditWallet = async function (payload,wallet_id){
        return CreditWallet(this.headers,payload,wallet_id);
    }
    this.debitWallet = async function(payload,wallet_id){
        DebitWallet(this.headers,payload,wallet_id);
    }

    this.getTransactions = async function(wallet_id){
        GetTransactions(this.headers,wallet_id);
    }

    return this;
}


async function CreateWallet(head){
    fetch(url + '/wallet',{
        method: "POST",
        headers: head
    })
    .then(resp => resp.json())
    .then(data => {
        return data;
    })
}

async function GetWalletDetails(head,wallet_id){
    fetch(url + `/wallet/${wallet_id}`,{
        headers : head
    })
    .then(resp => resp.json())
    .then(data => {
        return data;
    })
}

async function GetCurrencies(head){
    fetch(url+'/currencies',{
        headers : head
    })
    .then(resp => resp.json())
    .then(data => {
        return data;
    })
}

async function CreditWallet(head,payload,wallet_id){
    fetch(url+`/wallet/credit/${wallet_id}`,{
        headers : head,
        method:"POST",
        body : JSON.stringify(payload),
    })
    .then(resp => resp.json())
    .then(data => {
        return data;
    })
}
async function DebitWallet(head,payload,wallet_id){
    fetch(url+`/wallet/debit/${wallet_id}`,{
        headers : head,
        method:"POST",
        body : JSON.stringify(payload)
    })
    .then(resp => resp.json())
    .then(data => {
        return data;
    })
}

async function GetTransactions(wallet_id){
    fetch(url+`/wallet/transactions/${wallet_id}`,{
        headers:head
    })
    .then(resp => resp.json())
    .then(data => {
        return data;
    })
}