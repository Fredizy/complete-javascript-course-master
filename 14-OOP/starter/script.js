'use strict';

const Person = function(firstName, birthYear) {
   this.firstName = firstName;
   this.birthYear = birthYear;
}

const jonas = new Person('Jonas', 1991);
const maltilda = new Person('Matilda', 2017);
const jack = new Person('jack', 1975);
console.log(maltilda, jack);

console.log(jonas instanceof Person);
console.log(jonas instanceof Person);

console.log(Person.prototype);

Person.prototype.calcAge = function () {
   console.log(2037 - this.birthYear);
};
jonas.calcAge();
maltilda.calcAge();

console.log(Person.prototype.isProtypeOf(jonas));
console.log(Person.prototype.isProtypeOf(maltilda));

const arr = [3, 6, 4, 5, 6, 9, 3];
console.log(arr.__proto__);


const Car = function(make, speed) {
   this.make = make;
   this.speed = speed;
};

Car.prototype.accelerate = function() {
   const newSpeed = this.speed + 10;
   console.log(newSpeed);
};

Car.prototype.brake = function() {
   const brake = this.speed - 5;
   console.log(brake);
}

const Car1 = new Car('BMW',120);999
const Car2 =  new Car('Mercedes', 95);

Car1.accelerate();
Car1.brake();

Car2.accelerate();
Car2.brake();