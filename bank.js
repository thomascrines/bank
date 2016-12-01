var Bank = function() {
  this.accounts = []; 
}

Bank.prototype = {
  addAccount: function(account) {
    this.accounts.push(account);
  },

  findAccountByName: function(name){
      var account = this.accounts.find( function(account) {
        return account.name === name
      })
      return account;
    }  
}

module.exports = Bank