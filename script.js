console.log('hello');

var accountsArray = [
  {
    account: 'Everyday',
    balance: 328.67
  },
  {
    account: 'Savings',
    balance: 6781.45
  },
  {
    account: 'Loan',
    balance: 37897
  }
];

var everyDay = accountsArray[0].account + ' - $' + accountsArray[0].balance;
console.log(everyDay);
var savings = accountsArray[1].account + ' - $' + accountsArray[1].balance;
console.log(savings);
var loan = accountsArray[2].account + ' - $' + accountsArray[2].balance;
console.log(loan);

document.getElementById('everyDay').innerHTML
  = '$' + accountsArray[0].balance;
document.getElementById('savings').innerHTML
  = '$' + accountsArray[1].balance;
document.getElementById('loan').innerHTML
  = '$' + accountsArray[2].balance;


document.getElementById('from').innerHTML +=
'<option selected disabled>Select account</option>'
+ '<option>' + everyDay + '</option>'
+ '<option>' + savings + '</option>'
+ '<option>' + loan + '</option>';

document.getElementById('to').innerHTML +=
'<option selected disabled>Select account</option>'
+ '<option>' + everyDay + '</option>'
+ '<option>' + savings + '</option>'
+ '<option>' + loan + '</option>';
