'use strict';

//---------- Selecting elements ----------
const diceElement = document.querySelector('.dice');
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//---------- Selecting elements ----------
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

let currentScore = 0;
// Rolling functionality for dice
btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  // Display dices
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;

  // Check for rolled: if is true
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    current0Element.textContent = currentScore;
  }
  // Else switch to other player
  else {
  }
});
