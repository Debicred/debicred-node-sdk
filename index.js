
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

    this.createWallet = CreateWallet(this.headers);
    this.getWalletDetails = GetWalletDetails(this.headers);
    this.getCurrencies = GetCurrencies(this.headers);

    this.creditWallet = function (payload,wallet_id){
        return CreditWallet(this.headers,payload,wallet_id);
    }
    this.debitWallet = function(payload,wallet_id){
        DebitWallet(this.headers,payload,wallet_id);
    }

    this.getTransactions = function(wallet_id){
        GetTransactions(this.headers,wallet_id);
    }
}


function CreateWallet(head){
    fetch(url + '/wallet',{
        method: "POST",
        headers: head
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        return data;
    })
}

function GetWalletDetails(head){
    fetch(url + `/wallet/${head.id}`,{
        headers : head
    })
    .then(resp => resp.json())
    .then(data => {
        console(data)
        return data;
    })
}

function GetCurrencies(head){
    fetch(url+'/currencies',{
        headers : head
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        return data;
    })
}

function CreditWallet(head,payload,wallet_id){
    fetch(url+`/wallet/credit/${wallet_id}`,{
        headers : head,
        method:"POST",
        body : JSON.stringify(payload),
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        return data;
    })
}
function DebitWallet(head,payload,wallet_id){
    fetch(url+`/wallet/debit/${wallet_id}`,{
        headers : head,
        method:"POST",
        body : JSON.stringify(payload)
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        return data;
    })
}

function GetTransactions(wallet_id){
    fetch(url+`/wallet/transactions/${wallet_id}`,{
        headers:head
    })
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        return data;
    })
}