let secretNumber = Math.floor(Math.random() * 100) + 1;
let score = 20;
let highscore = 0;

const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitGuess');
const message = document.getElementById('startGuess');
const body = document.body;
const highscoreEl = document.getElementById('highscore');
const scoreEl = document.getElementById('score');

submitBtn.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    message.textContent = 'No number!';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct Number!';
    message.style.color = 'green';
    body.style.backgroundColor = 'green';
    guessInput.disabled = true;
    submitBtn.disabled = true;

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = 'Highscore: ' + highscore;
    }
  } else {
    if (score > 1) {
      message.textContent = guess > secretNumber ? 'Too High!' : 'Too Low!';
      message.style.color = '#0a0a0a';
      score -= 1;
      scoreEl.textContent = 'Score: ' + score;
    } else {
      message.textContent = 'You lost the game!';
      message.style.color = 'red';
      scoreEl.textContent = 'Score: 0';
      body.style.backgroundColor = 'red';
      guessInput.disabled = true;
      submitBtn.disabled = true;
      guessInput.style.display = 'none';
    }
  }
});

document.getElementById('againBtn').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 100) + 1;

  scoreEl.textContent = 'Score: 20';
  guessInput.value = '';
  guessInput.disabled = false;
  guessInput.style.display = 'inline-block';
  submitBtn.disabled = false;
  message.textContent = 'Start Guessing...';
  message.style.color = '#0a0a0a';
  body.style.backgroundColor = 'grey';
});
