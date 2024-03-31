'use strict';

//---------- Selecting elements ----------
const diceElement = document.querySelector('.dice');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');

//---------- Selecting buttons ----------
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//---------- Starting conditions ----------
diceElement.classList.add('hidden');
score0Element.textContent = 0;
score1Element.textContent = 0;

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

// Rolling functionality for dice
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generating random a dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Display dices
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    // Check for rolled: if is true
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Else switch to other player
      switchPlayer();
    }
  }
});

// Holding functionality for dice
btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to active player's score
    score[activePlayer] += currentScore;

    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];
    // Check if player's score is >= 100
    if (score[activePlayer] >= 10) {
      // - Finish the game
      playing = false;
      diceElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player-active');
      // - Else switch to other player
    } else {
      switchPlayer();
    }
  }
});
