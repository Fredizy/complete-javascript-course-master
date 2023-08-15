'use strict';

// selecting elements
const score1 = document.querySelector('#score--0');
const score2 = document.getElementById('score--1');
const dice = document.querySelector('.dice');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const NewGame = document.querySelector('.btn--new');
const currentscore1 = document.querySelector('#current--0');
const currentscore2 = document.querySelector('#current--1');

score1.textContent = 0;
score2.textContent = 0;
dice.classList.add(" hidden")
