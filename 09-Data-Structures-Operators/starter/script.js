'use strict';

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25 +_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";


  const getCode = str => str.slice(0,3).toUpperCase();
  
// Data needed for first part of the section
const flyth = (flights.split('+'));
for(const flight of flyth) {
  const [type,from,to,time] = flight.split(';') 
  const output = `${type.startsWith('_Delayed') ? '🔴' : ' '}${type.padStart(20,' ').replaceAll('_',' ')} ${getCode(from)} ${getCode(to)} ${time.replace(':','h')}`.padStart(36);
  console.log(output);

}
  
const restaurant = { 
  names: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Ital ian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12, 
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderPasta: function(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  }
};

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));
// const text = document.querySelector('textarea').value;

// document.querySelector('button'),addEventListener('click', function() {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows);
//   for(const row of rows) {
//    const [first, second] =  row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(second[0],second[0].toUpperCase())}`;
//     console.log(output);
//   }
// }
// ) 

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a  textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
// 1

// String;
// const passenger = 'jOnAS';
// const passengerLower = passenger.toLowerCase();
// console.log(passengerLower);
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect); 

// const passengerName = function(incorrectName) {
//    const lowercase = incorrectName.toLowerCase();
//    const correctName = lowercase[0].toUpperCase() + lowercase.slice(1)
//    console.log(correctName);
// }
// passengerName('fRedRick')
// passengerName('oSaS')
// passengerName('aBraHam')

// const email = 'hellojonas.io';
// const loginEmail = ' HelloJonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normarlizedEmail = loginEmail.toLowerCase().trim();
// console.log(normarlizedEmail);

// console.log(email === normarlizedEmail);

// const priceNa = '288,97#';
// const priceUS = priceNa.replace('#','$').replace(',','.');
// console.log(priceUS);

// const announcement = 'ALL passengers come to  boarding door 23. Boarding door 23';
// console.log(announcement.replace('door','gate'));
// console.log(announcement.replaceAll('door','gate'));

// const plane = 'A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('Air'));

// console.log('a+very+nice+string'.split('+'));

// const [first_name, lastName] = 'Asoata Fredrick'.split(' ');

// const newName = ['Mr.', first_name, lastName.toUpperCase()].join(' ');
// console.log(newName);





// const capitalizeName = function(name) {
//    const names = name.split(' ');
//    const upper = [];

//    for(const n of names) {
//    upper.push(n.replace(n[0], n[0].toUpperCase()));
//   //  upper.push(n[0].toUpperCase() + n.slice(1));
//    }
//    console.log(upper.join(' '));
// } 
// capitalizeName('Jessisa Ann smith Davies');
// capitalizeName('Asoata Fredrick');
// capitalizeName('Asoata Fredrick');

// const maskCreditCard = function(number) {
//   const convertstr = number + '';
//   const last = convertstr.slice(-4);
//   return last.padStart(convertstr.length, '*');
// }
// console.log(maskCreditCard(2003033399394494));
// console.log(maskCreditCard(8107649930));
// console.log(maskCreditCard(8034397730));


// const airLine = 'TAP Air Portugal';
// const plane =  'A320';
// console.log(plane[0]);
// console.log('B234'[0]);
// console.log('B737'.length);
// console.log(airLine.indexOf('r'));
// console.log(airLine.lastIndexOf('r'));

// console.log(airLine.slice(4));
// console.log(airLine.slice(4,7));

// console.log(airLine.slice(0, airLine.indexOf(' ')));
// console.log(airLine.slice( airLine.lastIndexOf(' ') + 1));

// console.log(airLine.slice(1,-1));

// const checkMiddleSeat = function(seat) {
//   const s = seat.slice(-1);
//   if(s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You are surely lucky'); 
// }
// checkMiddleSeat('11B');
// checkMiddleSeat('11r');
// checkMiddleSeat('11E');

// console.log(new String('Jonas'));


///////////////////////////////////////
// Coding Challenge 

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, '⚽️ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// const Events = [...new Set(gameEvents.values())];
// console.log(Events); 

// gameEvents.delete(64);
// console.log(gameEvents);

// const average = [...gameEvents.keys()].pop();
// console.log(`An event happened, on average, every ${average / gameEvents.size} minutes` );

// for(const [key, value] of gameEvents) {
//   const half = key >= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} ${key}: ${value}]`);
// }

// SETS
// const orderSet = new Set([
//   'pasta',
//   'pizza',
//   'pizza',
//   'rissoto',
//   'pasta',
//   'pizza'
// ])
// console.log(orderSet);
// To check the length of a set
// console.log(orderSet.size);  
// To check if a set has a certain elements 
// console.log(orderSet.has('pizza'));
// To add element to a set 
// orderSet.add('Garlic Bread')
// To delete element to a set 
// orderSet.delete("Garlic bread")

// const staff = ['waiter', 'chef','waiter','manager','chef','waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['waiter', 'chef','waiter','manager','chef','waiter']).size);

// Maps
// const rest = new Map();
// rest.set('Name', 'Classico italiano');
// rest.set(1,'Firenze,Italy');
// rest.set(2,'Lisbon,Portugal');

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
// .set('open',11)
// .set('close',23)
// .set(true, 'We are open :D')
// .set[false, 'We are closed :C']
// ;
// console.log(rest.get('name'));

// const time = 21;
// console.log( rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.set([1,2], 'Test'));
// rest.set(document.querySelector('h1'), 'Heading');
// const question = new Map([
//   ['question', 'What is the best programming Language in the world?'],
//   [1, 'C'],
//   [2,'Java'],
//   [3,'JavaScript'],
//   ['correct',3],
//   [true,'Correct'],
//   [false,'Try again'],
// ]);
// console.log(question);
// const hoursMap = new Map(Object.entries(restaurant.openingHours));
// console.log(hoursMap);

// for(const [key,value] of question) {
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },

// };
// Coding Challenge 2;
// let PlayerScores = 0
// for(const scores of game.scored) {
// console.log(` Goal!!  ${PlayerScores += 1}: ${scores}`);
// };

// let sumOdds = 0;
// let length = 0;
// for(const [_,odd] of Object.entries(game.odds)){
//   sumOdds += odd;
//   length++;
// }
// const average = sumOdds/length;
// console.log(average);

// let sum = 0;
// let length = 0;
// for(const odd of Object.values(game.odds)) {
//   sum += odd;
//   length++;
// }
//  const average = sum/length;
//  console.log(average);


//  const{team1,team2} = game;
//  console.log(team1,team2);

//  for(const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`
//   console.log(`Odd of ${teamStr} ${odd}`);
  
//  }


// console.log(restaurant.openingHours.mon?.open);

// const days = ['Mon','Tues','Wed','Thurs','Fri','Sat','Sun'];
//    for(const day of days) {
//    const open = restaurant.openingHours[day]?.open || 'closed';
//     console.log(`On ${day} we open at ${open}`);
//   }

// const menu = [...restaurant.starterMenu,...restaurant.mainMenu]
// for(const item of menu) console.log(item);

// for(const item of menu.entries) {
//   console.log(`${item[0] + 1}: ${item}[1]`); 
// }

  

 

// const [a,b,...others] = [1,2,3,4,5,6]
// console.log(a,b,others);
// const [pizza, , Risotto,...others] = [...restaurant.starterMenu,...restaurant.mainMenu];
// console.log(pizza, Risotto,others);

// const{sat, ...weekday} = restaurant.openingHours;
// console.log(weekday);

// const add = function(...numbers){

// }


// const ingredients = [prompt('Let"s make pasta! Ingredient 1'),
//  prompt('Let"s make pasta! Ingredient 2'),
//  prompt('Let"s make pasta! Ingredient 3'),
// ];
// console.log(ingredients)

// restaurant.orderPasta(...ingredients);


// const arr = [7,8,9];
// const badNewArray = [1,2, arr[0],arr[1],arr[2]];
// console.log(badNewArray);

// const newARR = [1, 2,...arr];
// console.log(newARR);

// const newMenu = [...restaurant.mainMenu, 'gnocci'];
// console.log(newMenu);

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(menu);




// const {names, openingHours, categories} = restaurant;
// console.log(names, openingHours,categories);

// const {names: restaurantName, openingHours: Hours, categories: tgs} = restaurant;
// console.log(restaurantName, Hours, tgs);

// let a = 113;
// let b = 920;
// const obj = {a: 23, b: 7};
// ({a,b} = obj);
// console.log(a,b);

// const {fri: {open, close}} = openingHours;
// console.log(open, close);



// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const[x, y, z] = arr;
// console.log(x,y,z);

// let [first, ,second] = restaurant.categories;
// console.log(first,second);

// const temp = first;
// first = second;
// second = temp;
// console.log(first,second);

// [first, second] = [second, first];
// console.log(first, second);

// const [start, main] = (restaurant.order(2,0));
// console.log(start, main);

// const nested = [2,4, [5,6]];
// const [i, ,[j, k]] = nested;
// console.log(i , j , k);

// restaurant.newGuests = 0;
// const guestCorrect = restaurant.newGuests ?? 10;
// console.log(guestCorrect);

// const rest1 = {
//   name: 'Capri',
//   numGuests: 20,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// But by using the assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },

// };


// const [players1, players2] = game.players;
// console.log(players1,players2);    

// const[gk, ...fieldPlayers] = players1;
// console.log(gk, ...fieldPlayers);

// const allPlayers = [...players1,...players2]
// console.log(allPlayers);

// const players1Final = ['Thiago','countinho','perisic', ...players1];
// console.log(players1Final);

// const {odds: {team1, x: draw, team2 }} = game;
// console.log(team1,draw,team2);

// const printGoal = function(...players) {
//   console.log(players);
// }
// printGoal(...game.scored)

// team1 < team2 && console.log("Team one is more likey to win");
