var Bank = require('../Bank');
var assert = require('assert');

describe('Bank function', function() {

  var bank;
  var account1;
  var account2;
  var account3;

  beforeEach(function() {
    bank = new Bank();
    account1 = {
      name: 'Bob',
      amount: 20.00,
    };
    account2 = {
      name: 'Randall',
      amount: 100.00,
    };
    account3 = {
      name: 'Betty',
      amount: 200.00,
    };
  });

  it('accounts start empty', function() {
    assert.equal(0, bank.accounts.length);
  })

  it('account can be added to bank', function() {
    bank.addAccount(account1);
    assert.equal(1, bank.accounts.length);
  })

  it('find account by name', function(){
    bank.addAccount(account1);
    bank.addAccount(account2);
    bank.addAccount(account3);
    assert.equal( account3, bank.findAccountByName("Betty") );
  })
});



