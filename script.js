'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 17;
document.querySelector('.guess').value;

console.log(document.querySelector('.guess').value);
*/
let score = 20;
let secretNum;
let highscore = Number(document.querySelector('.highscore').textContent);
const check = document.querySelector('.check');
const again = document.querySelector('.again');

function genSecretNum() {
  secretNum = Math.trunc(Math.random() * 20) + 1;
}
genSecretNum();

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 0) {
    if (!guess) {
      document.querySelector('.message').textContent = '⛔ Not a number!';
    } else if (guess === secretNum) {
      document.querySelector('.message').textContent = '🎉 Correct number!';
      document.querySelector('body').style.backgroundColor = '#73d355';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNum;
      check.disabled = true;
      if (highscore < score) {
        document.querySelector('.highscore').textContent = score;
        highscore = score;
      } else {
        return;
      }
      document.querySelector('.highscore').textContent = score;
    } else if (guess > secretNum) {
      document.querySelector('.message').textContent = '📈 Number too high!';
      score--;
    } else {
      document.querySelector('.message').textContent = '📉 Number too low!';
      score--;
    }
    if (score == 0) {
      document.querySelector('.message').textContent = '😵 You lost. Score: 0!';
      document.querySelector('.score').textContent = 0;
    }
  }
  document.querySelector('.score').textContent = score;
});

again.addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  check.disabled = false;
  genSecretNum();
});
