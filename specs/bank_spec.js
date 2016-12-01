var Bank = require('../Bank');
var assert = require('assert');

var bank;

describe('Bank function', function() {

  beforeEach(function() {
    bank = new Bank();
    var account1 = {
      name: 'Bob',
      amount: 20.00,
    };
    var account2 = {
      name: 'Randall',
      amount: 100.00,
    };
    var account3 = {
      name: 'Betty',
      amount: 200.00,
    };
  });

  it('accounts start empty', function() {
    assert.equal(0, bank.accounts.length);
  })
});



