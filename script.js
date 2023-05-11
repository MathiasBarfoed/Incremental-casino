// Get elements
const coinflipBetButton = document.getElementById('coinflip-bet-button');
const coinflipResult = document.getElementById('coinflip-result');
const coinflipCoinsWon = document.getElementById('coinflip-coins-won');
const coinflipPlayAgainButton = document.getElementById('coinflip-play-again-button');
const coinflipBetAmount = document.getElementById('coinflip-bet-amount');
const coinsDisplay = document.getElementById('coins');

const begButton = document.getElementById('beg-button');
begButton.addEventListener('click', () => {
  coins += 1;
  coinsDisplay.textContent = coins;
  localStorage.setItem("coins", coins);
});


// Initialize variables
let coins = parseInt(localStorage.getItem("coins")) || 100;

function init() {
  let coinsSpan = document.getElementById("coins");
  coinsSpan.textContent = coins;
}

document.addEventListener("DOMContentLoaded", init);


// Set event listeners
coinflipBetButton.addEventListener('click', () => {
    const bet = parseInt(coinflipBetAmount.value);
    if (coins >= bet) {
      coins -= bet;
      coinsDisplay.textContent = coins;
      const result = Math.random();
      if (result < 0.6) {
        coinflipResult.textContent = 'Heads';
        coins += bet * 2;
        coinflipCoinsWon.textContent = bet * 2;
      } else {
        coinflipResult.textContent = 'Tails';
        coinflipCoinsWon.textContent = 0;
      }
      coinflipResult.style.display = 'block';
      coinflipCoinsWon.style.display = 'block';
      coinflipPlayAgainButton.style.display = 'block';
    } else {
      alert('Not enough coins to place that bet!');
    }
  });  

