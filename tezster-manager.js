'use strict';
const { Accounts } = require('./modules/accounts/accounts.js'),
      { Setup } = require('./modules/setup/setup.js'),
      { Contracts } = require('./modules/contract/contracts.js'),
      { Transactions } = require('./modules/transactions/transactions.js');
var args = process.argv.slice(3);

class TezsterManager{

    constructor(){
        this.accounts = new Accounts();
        this.setup = new Setup();
        this.contracts = new Contracts();
        this.transactions = new Transactions();
    } 
    
    setupNodes(){
        this.setup.setup();
    }

    startNodes(){
        this.setup.startNodes();
    }

    stopNodes(){
        this.setup.stopNodes();
    }

    getLogFiles(){
        this.setup.getLogFiles();
    }

    setProvider(){
        this.accounts.setProvider(args);
    }

    getProvider(){
        this.accounts.getProvider();
    }

    listAccounts(){
        this.accounts.listAccounts();
    }

    getBalance(){
        this.accounts.getBalance(args);
    }

    createAccount(){
        this.accounts.createAccount(args);
    }

    addTestnetAccount(){
        this.accounts.addTestnetAccount(args);
    }

    activateTestnetAccount(){
        this.accounts.activateTestnetAccount(args);
    }

    listContracts(){
        this.contracts.listContracts();
    }

    deployContract(){
        this.contracts.deployContract(args);
    }

    callContract(){
        this.contracts.callContract(args);
    }

    getStorage(){
        this.contracts.getStorage(args);
    }

    addContract(){
        this.contracts.addContract(args);
    }

    transfer(){
        this.transactions.transfer(args);
    }

    listTransactions(){
        this.transactions.listTransactions();
    }
}

module.exports = {TezsterManager};