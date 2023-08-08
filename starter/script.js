'use strict';

// selecting elements for future reference

let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
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

//  Score variable declaration

let currentScore = 0;

let totalScore0 = 0;
let totalScore1 = 0;

let switchPlayer = function () {
  player0Section.classList.toggle('player--active');
  player1Section.classList.toggle('player--active');
};

// Roll button actions

btnRoll.addEventListener('click', () => {
  // generate random dice

  const randomDice = Math.ceil(Math.random() * 6);

  // Display the dice image

  imgDice.classList.remove('hidden');

  imgDice.src = `dice-${randomDice}.png`;

  // Check if dice is 1. If true switch to the next player

  if (randomDice !== 1) {
    currentScore += randomDice;

    // add the score to the urrent player if dice is not 1

    if (player0Section.classList.contains('player--active')) {
      current0El.textContent = currentScore;
    } else {
      current1El.textContent = currentScore;
    }
  } else {
    // Switch to next player
    switchPlayer();
    // a. change color theme through class manipulation
    // if (player0Section.classList.contains('player--active')) {
    //   player0Section.classList.remove('player--active');
    // } else player0Section.classList.add('player--active');

    // if (player1Section.classList.contains('player--active')) {
    //   player1Section.classList.remove('player--active');
    // } else player1Section.classList.add('player--active');

    currentScore = 0;
    current1El.textContent = 0;
    current0El.textContent = 0;
  }
});

btnHold.addEventListener('click', () => {
  // 1. Add current score to total score of active player
  if (player0Section.classList.contains('player--active')) {
    totalScore0 += currentScore;
    score0El.textContent = totalScore0;
    currentScore = 0;
  } else {
    totalScore1 += currentScore;
    score1El.textContent = totalScore1;
    currentScore = 0;
  }
  // 2. set surrent score to 0
  // 3. swich to next player if score is < 100; else display winner
  // debugger;
  if (score0El.textContent < 100 && score1El.textContent < 100) {
    //
    switchPlayer();

    current0El.textContent = 0;
    currentScore = 0;
    current1El.textContent = 0;
    //  else display winner
  } else if (score0El.textContent >= 100) {
    player0Section.classList.add('player--winner');
  } else if (score1El.textContent >= 100)
    player1Section.classList.add('player--winner');
});

btnNewGame.addEventListener('click', () => {
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  imgDice.classList.add('hidden');
  player0Section.classList.toggle('player--active', true);
  player1Section.classList.toggle('player--active', false);
});
