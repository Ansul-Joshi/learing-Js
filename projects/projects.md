project 1
const color = document.querySelectorAll('.button');
color.forEach(function (color) {
  color.addEventListener('click', function () {
    if (color.id == 'grey') {
      document.body.style.backgroundColor = 'grey';
    } else if (color.id == 'white') {
      document.body.style.backgroundColor = 'white';
    } else if (color.id == 'blue') {
      document.body.style.backgroundColor = 'blue';
    } else if (color.id == 'yellow') {
      document.body.style.backgroundColor = 'yellow';
    }
  });
});

project 2

// function cal(e) {
//   e.preventDefault();
//   const height = parseInt(document.getElementById('height').value);
//   console.log(height);
//   const weight = parseInt(document.getElementById('weight').value);
//   let calculate = weight / (height / 100) ** 2;
//   document.getElementById('results').innerHTML = calculate.toFixed(2);
// }

const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  let calculate = weight / (height / 100) ** 2;
  document.getElementById('results').innerHTML = calculate.toFixed(2);
});

const clock = document.getElementById('clock');
setInterval(function () {
  let d = new Date();
  clock.innerHTML = d.toLocaleTimeString();
}, 1000);


project 4

const randomnumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworHi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

console.log(submit);
console.log(userinput);

const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('sahi number dalo bhai');
  } else if (guess < 1) {
    alert('number 1 se upder dalo bhai');
  } else if (guess > 100) {
    alert(' number 100 k niche dalo dalo bhai');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`game over . Number to guess was ${randomnumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess == randomnumber) {
    displayMessage('YOu gusses it right');
    endGame();
  } else if (guess < randomnumber) {
    displayMessage('number is too low');
  } else if (guess > randomnumber) {
    displayMessage('number it two high');
  }
}
function displayGuess(guess) {
  userinput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}
function displayMessage(message) {
  loworHi.innerHTML = `<h3>${message}</h3>`;
}
function endGame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');

  // Correctly create the button
  p.classList.add('button');
  p.innerHTML = `<button id="newGame">Start New Game</button>`;
  startover.appendChild(p);

  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  if (newGameButton) {
    newGameButton.addEventListener('click', function () {
      randomnumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userinput.removeAttribute('disabled');
      startover.removeChild(p);

      playGame = true;
    });
  }
}

