'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const imgDice = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

btnNewGame.addEventListener('click', () => {
  score0El.textContent = 0;
  score1El.textContent = 0;
  imgDice.style.display = 'none';
});
