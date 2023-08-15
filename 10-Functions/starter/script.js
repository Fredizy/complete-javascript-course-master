'use strict';


// const bookings = [];

// const createBooking = function(flightNum, numPassengers = 1,price = 199 * numPassengers) {
    // numPassengers = numPassengers || 1;
    // price = price || 199;

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//  bookings.push();
//  console.log(booking );
// }

// createBooking('LH123');
// createBooking('LH123',5);
// createBooking('LH123',undefined,5);

// const flight = 'LH123';
// const jonas = {
//     name: 'Asoata Fredrick',
//     Passport: 234938472939
// }

// const checkIn = function(flightNum,passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr ' + passenger.name;

//     if(passenger.Passport === 234938472939) {
//         alert('Check In');
//     } else {
//         alert('Wrong Passport')
//     }
// }
// checkIn(flight,jonas);
// console.log(flight);
// console.log(jonas);

// const oneWord = function(str) {
//     return str.replaceAll(' ','').toLowerCase();
// }

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// }

// const transformer = function(str,fn) {
//    console.log(`Transformation string: ${fn(str)}`);
// }
// transformer('JavaScript is the best', upperFirstWord);

// const high5 = function() {
//     console.log('🤗');
// }
// document.body.addEventListener('click', high5);
// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// } 

// const greeter = greet('Hey');
// greeter('Jonas');
// greeter('Steven');

// greet('Hey')('Jonas'); 

// const lufthansa = {
//     airline: 'Lufthana',
//     iataCode: 'LH',
//     bookings: [],

//     book: function(flightNum,passengerName) {
//         console.log(`${passengerName} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum} `);
//         this.bookings.push({flight: `${this.airline} flight ${this.iataCode} ${flightNum}`})
//     }
// } 

// lufthansa.book(239, 'Asoata Fredrick');
// console.log(lufthansa);

// const euroWings = {
//     airline: 'Eurowings',
//     iataCode: 'EM',
//     bookings: [], 
// }

// const book = lufthansa.book;

// book.call(euroWings, 23, 'sarah willams')
// console.log(euroWings); 

// const bookEw = book.bind(euroWings);
// bookEw(23, 'steven willams');

// const bookEw23 = book.bind(euroWings,23,);
// bookEw23('Asoata Fredrick');

// lufthansa.planes = 300;
// lufthansa.buyplane = function() {
//     console.log(this);
//     this.planes++
//     console.log(this.planes);

// };
 
// document.querySelector('.buy').addEventListener('click', lufthansa.buyplane.bind(lufthansa));

// const addTax = (rate,value) =>  value + value * rate;
// console.log(addTax(0.1, 200));

// const addtax = addTax.bind(null, 0.23);
// console.log(addtax(100));

// const addTaxRate = function(rate) {
//     return function(value) {
//         return value + value * rate
//     }
// }

// const addtaxs = addTaxRate(0.23);
// console.log(addtaxs(100));

// const poll = {
//     question: 'What is your favourite programming language?',
//     options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//     // This generates [0, 0, 0, 0]. More in the next section 😃
//     answers: new Array(4).fill(0),
    
//     registerNewAnswer() { 
//         const favouriteLanguage = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option Number)`)); 

//          console.log(favouriteLanguage);

//         typeof favouriteLanguage === 'number' && 
//         favouriteLanguage < this.options.length && 
//         this.answers[favouriteLanguage]++; 
        
//     } 
// }
// poll.registerNewAnswer();
// document.querySelector('.poll').addEventListener
// ('click', poll.registerNewAnswer.bind(poll))

// const runOnce = function() {
//     console.log('This will never run again');
// }
 
// (function() {
//     console.log('This will never run again');
// })();

//  const secureBooking = function() {
//     let passengerCount = 0;

//     return function() {
//         passengerCount++
//         console.log(`${passengerCount} passengers`);
//     }
//  }

// const booker = secureBooking; 

// let f;

// const g = function() {
//     const a = 23;
//     f = function() {
//         console.log(a * 2);
//     }
// }
// g();
// f();

// (function() {
//     const header = document.querySelector('h1')
//     header.style.color = 'red';


// document.querySelector('body').addEventListener('click', function() {
//     header.style.color = 'blue';
// });
// })();


  