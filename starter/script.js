'use strict';

// selecting elements for future reference

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const imgDice = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player1Section = document.querySelector('.player--1');
const player0Section = document.querySelector('.player--0');

// initial conditions

score0El.textContent = 0;
score1El.textContent = 0;
imgDice.classList.add('hidden');

// Roll button actions

let currentScore = 0;

btnRoll.addEventListener('click', () => {
  // generate random dice

  const randomDice = Math.ceil(Math.random() * 6);

  // Display the dice image

  imgDice.classList.remove('hidden');

  imgDice.src = `dice-${randomDice}.png`;

  // Check if dice is 1. If true switch to the next player

  if (randomDice !== 1) {
    currentScore += randomDice;
    console.log(currentScore);
    current0El.textContent = currentScore;
  } else {
    // Switch to next player
    // a. change color theme
    player0Section.classList.remove('player--active');
    player1Section.classList.add('player--active');

    // b.
  }
});

btnNewGame.addEventListener('click', () => {
  score0El.textContent = 0;
  score1El.textContent = 0;
  imgDice.classList.add('hidden');
});
