'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
console.log(inputTransferTo);
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovement = function(movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a,b) => a - b) : movements;

     movs.forEach(function(mov, i) {
     const type = mov > 0 ? 'deposit' : 'withdrawal';

      const html = `
      <div class="movements__row"> 
      <div class="movements__type 
      movements__type--${type}">${i + 1} ${type}</div>
      <div class="movements__value">${mov}₤</div>
    </div>
      `;
      containerMovements.insertAdjacentHTML('afterbegin',html);
     });
};

const calcPrintBalance = function(acc) {
  const balance = acc.movements.reduce(function(acc, curr) {
    return acc + curr
  });
  acc.balance = balance;
  labelBalance.textContent = `${acc.balance}₤`;
} 


const displayBalance = function(acc) {
const income = acc.movements.filter(mov => mov > 0).reduce((acc,curr) => acc + curr);
labelSumIn.textContent = `${income}₤`;

const Expenses = acc.movements.filter(mov => mov < 0).reduce((acc,curr) => acc + curr);
labelSumOut.textContent = `${Math.abs(Expenses)}₤`;

const interest = acc.movements.filter(mov => mov > 0).map(deposit => deposit * acc.interestRate/100)
.filter(int => int >= 1)
.reduce((acc, int) => acc + int);
labelSumInterest.textContent = interest;

}

const createUserName = function(accs){
    accs.forEach(function(acc) {
    acc.userName = acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');

    });
};
createUserName(accounts);

const updateUI = function(acc) {
  displayMovement(acc.movements);
  displayBalance(acc);
  calcPrintBalance(acc);
}

let currentAccount;
containerApp.style.opacity = 0;

btnLogin.addEventListener('click', function(e) {
  e.preventDefault();
 currentAccount = accounts.find(acc => acc.userName === inputLoginUsername.value);
 console.log(currentAccount);
 
 if(currentAccount?.pin === Number(inputLoginPin.value)) {

  labelWelcome.textContent = `Welcome back,${currentAccount.owner.split(' ')[0]}`;
  updateUI(currentAccount)
  containerApp.style.opacity = 100;

inputLoginUsername.value = inputLoginPin.value = '';
inputLoginPin.blur();
 }
});

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAccount = accounts.find(acc => acc.userName === inputTransferTo.value); 
  console.log(inputTransferTo.value);
  console.log(amount, recieverAccount);

  if(amount > 0 && recieverAccount && currentAccount.balance >= amount && recieverAccount?.userName !== currentAccount.userName) {
    currentAccount.movements.push(-amount);
    recieverAccount.movements.push(amount);
    updateUI(currentAccount);
  }0
  inputTransferAmount.value = inputTransferTo.value = ' ';
});

btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  if(inputCloseUsername.value === currentAccount.userName && Number(inputClosePin.value) === currentAccount.pin) {

    const index = accounts.findIndex(acc => acc.userName === currentAccount.userName)
    accounts.splice(index, 1);
    console.log(index);

    containerApp.style.opacity = 0;
  }
  labelWelcome.textContent = 'Login to get started';
  inputCloseUsername.value = currentAccount.value = ' ';
});

const anyDeposits = account1.movements.some(mov => mov > 100)
console.log(anyDeposits);

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
})
//   if(amount > 0 && currentAccount.balance >= amount && recieverAccount?.userName !== currentAccount.userName) {
//     console.log('Transfer Valid');
//   }
// })

// const balance = account1.movements.reduce(function(acc,curr) {
//   return acc + curr;
// }, 0)
// console.log(balance);

// const numbers = [1, 2, 3, 4, 5];

// const totalNunbers = numbers.reduce(function(acc, ini) {
//   return acc + ini;
// })
// console.log(totalNunbers);
//  const deposit = account1.movements.filter(function(mov) {
//   return mov > 0;
//  });
//  console.log(deposit);


// const withdrawals = account1.movements.filter(function(mov){
//   return mov < 0;
// })
// console.log(withdrawals);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


// let arr = ['a', 'b', 'c', 'd', 'e']
// console.log(arr.slice(2))
// console.log(arr.slice(2,4));
// console.log(arr.slice(-2));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// console.log(arr.splice(2));

// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

// arr = ['a', 'b', 'c', 'd', 'e']
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log(letters.join(' , '));

// const arrs = [23,11 ,64];
// console.log(arrs.at(0));
// console.log(arrs[arrs.length-1]);
// console.log(arrs.slice(-1)[0]);
// console.log(arrs.at(-1));


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// movements.forEach = function(movement, i, arr)  {
//    if(movement > 0) {
//     console.log(`Movement: ${i + 1} You deposited ${movement}`);
//    } else {
//     console.log(`Movement: ${i + 1}You deposited ${Math.abs(movement)}`);
//    }
// };

// for(const [i, movement] of movements.entries()) {
//   if(movement > 0) {
//     console.log(`Movement:${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement:${i + 1} You deposited ${Math.abs(movement)}`);
//   }
// }

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
// console.log('-----Space-----');
// for(const [value, key] of currencies) {
//      console.log(`${key}: ${value}`);
// }


// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// const checkDogs = function(dogsJulia,dogsKate) {
//    const shallowCopy = [...dogsJulia.slice(1, -2)];
//    const correctArray = [...shallowCopy,...dogsKate]
//    console.log(correctArray);

//    correctArray.forEach(function(dog, i) {
//     if(dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy`);
//     }
//    }) 
// };
// checkDogs(dogsJulia,dogsKate);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const movementsUSD = movements.map(function(mov) {
//   return mov * euroToUSD;
// });
// console.log(movementsUSD);

// const max = account1.movements.reduce(function(acc,curr) {
//    return acc > curr ? acc : curr;
// }, [0]);
// console.log(max);

/*
const DogsAges = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = function(DogsAges) {
 const DogAgeInHumanYears = DogsAges.map(function(age) {
  return age <= 2 ? 2 * age : age * 4 + 16;
  })
  console.log(DogAgeInHumanYears);

 const LowerThanEighteen = DogAgeInHumanYears.filter(function(age) {
    return age > 18;
  })
  console.log(LowerThanEighteen);

  const AverageAge = LowerThanEighteen.reduce(function(acc, age) {
    return acc + age / LowerThanEighteen.length;
  })
  console.log(AverageAge);
};
console.log(calcAverageHumanAge(DogsAges));
*/

// const euroToUSD = 1.1;
// const totalDeposit = movements.filter(mov => mov > 0).map(mov => mov * euroToUSD).
// reduce((acc, curr) => acc + curr, 0);
// console.log(totalDeposit);

// const DogsAges = [5, 2, 4, 1, 15, 8, 3];
// const calcAverageHumanAge = function(DogAges) {
//   const DogAgeInHumanYears = DogAges.map(age => age <= 2 ? 2 * age : age * 4 + 16)
//   .filter(age => age > 18).reduce((acc,age,i,arr) => acc + age / arr.length, 0);
//   return DogAgeInHumanYears
// }
// console.log(calcAverageHumanAge(DogsAges));

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal );

// const account = accounts.find(acc => acc.owner === 'Jessica Davis')
// console.log(account);

// for(account of accounts) {
//   if(account === 'Jessica Davis') console.log(account);
// }


// const username = prompt('Enter your username: ');
// const password = parseInt(prompt('Enter your password: '))

// const Library = [
//   {author: 'Ola', title: 'GhostRider', otherBooks: ['Love you', 'Bad brothers', 'Queen-Makers']},
//   {author: 'Shola', title: "Love don't cost a dime", otherBooks: ['Love you', 'Bad brothers', 'Queen-Makers']},
//   {author: 'Segun', title: 'Oh, My Lady', otherBooks: ['Love you', 'Bad brothers', 'Queen-Makers']},
//   {author: 'Divine', title: 'Soul Sisters', otherBooks: ['Love you', 'Bad brothers', 'Queen-Makers']},

// ];
// const users = [
//   {Names : 'Ibrahim', password : '1111'},
//   {Names : 'Shalom', password : '2222'},
// ];
//  Library.map(function(user, i) {  
//    console.log(`${i+1} ${user.author}: ${user.title}`);
//  })

 /*
users.map(function(userLogin){ 
  if(username == userLogin.Names && password == userLogin.password) {
    alert((`Welcome ${userLogin.Names}. \n Press ok to continue`));
  } else {
    alert(('Username or password is not correct'));
  }
    const AuthorOption = prompt('Enter your author choice from the below available choices: \n 1: Ola \n2: Shola \n3: Segun \n4: Divine' );
     Library.map(function(user) {
      AuthorOption == user.author ? alert((`You have ${user.title} to read. \nOther Books written by ${user.author} is \n${user.otherBooks}`)):  console.log(('Input the correct author'));
  })
})
// } else{
//   alert('UserName or password is not correct')
// }
*/
// const totalAmounts = accounts.map(acc => acc.movements);
// console.log(totalAmounts);
// const allMovements = totalAmounts.flat();
// console.log(allMovements);
// const allBalance = allMovements.reduce((acc,curr) => acc + curr);
// console.log(allBalance);

// const owners = ['jack', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort);

// movements.sort((a,b) => {
//   if (a < b) return 1;
//   if (a > b) return -1;
// });
// console.log(movements );

// const x = new Array[7];
// console.log(x);
// x.fill(1);
// console.log(x);

// const y = Array.from({length: 7}, (curr, i) => i + 1);
// console.log(y);
// const diceRolls = Array.from({length: 100}, (curr, i) => Math.random(i) + 1);
// console.log(diceRolls);

// const bankdeposit = accounts.flatMap(acc => acc.movements)
// .filter(mov => mov > 0).reduce((acc, curr) => acc + curr, 0)
// console.log(bankdeposit);

// const numDeposits = accounts.flatMap(acc => acc.movements)
// .filter(mov => mov >= 1000).length

// console.log(numDeposits);
// const sums = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
//    cur > 0 ? sums.deposit += cur : sums.withdrawals += cur;
//    return sums;
// }, { deposit: 0, withdrawals: 0});
// console.log(sums);

// const convertTitlecase = function(title) {
//   const exceptions = ['a', 'an', 'the', 'but', 'or', 'an', 'in', 'with'];

//   const titlecase = title.toLowerCase().split(' ')
//   .map(word => word[0].toUpperCase() + word.slice(1));
//   return titlecase
// }
// console.log(convertTitlecase('this is a nice title'));
// console.log(convertTitlecase('this is a LONG title but not too long'));
// console.log(convertTitlecase('and here is another title with an EXAMPLE'));

// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// 1
 dogs.forEach(portion => (portion.recFood = Math.trunc(portion.weight ** 0.75 * 28)));
 console.log(dogs);

// 2
 dogs.find(dogOwner => dogOwner.owners === 'Sarah');
console.log(dogs);


 
