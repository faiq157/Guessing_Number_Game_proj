let RandomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#subtn");
const userInput = document.querySelector("#guessField");
const guessesSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".LastResult");
const lower_high = document.querySelector(".lowOrhi");
const startOver = document.querySelector(".resultPara");

const p = document.createElement("p");

let prevGuess = [];
let NumGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const Guess = parseInt(userInput.value);
    console.log(Guess);
    validateGuess(Guess);
  });
}
function validateGuess(Guess) {
  if (isNaN(Guess)) {
    alert("Please Enter a Valid Number");
  } else if (Guess < 1) {
    alert("Please Enter a number more than 1");
  } else if (Guess > 100) {
    alert("Please Enter a Number less than 100");
  } else {
    prevGuess.push(Guess);
    if (NumGuess === 11) {
      DisplayGuess(Guess);
      DisplayMessage(`Game Over. Random Number was ${RandomNumber}`);
      endGame();
    } else {
      DisplayGuess(Guess);
      checkGuess(Guess);
    }
  }
}

function checkGuess(Guess) {
  if (Guess === RandomNumber) {
    DisplayMessage(`You Guessed it Right`);
    endGame();
  } else if (Guess < RandomNumber) {
    DisplayMessage(`Number is Too Low`);
  } else if (Guess > RandomNumber) {
    DisplayMessage(`Number is Too High`);
  }
}

function DisplayGuess(Guess) {
  userInput.value = "";
  guessesSlot.innerHTML += `${Guess},`;
  NumGuess++;
  remaining.innerHTML = `${11 - NumGuess}`;
}

function DisplayMessage(message) {
  lower_high.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button id='newGame'>Start new Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newgameButton = document.querySelector("#newGame");
  newgameButton.addEventListener("click", function (e) {
    RandomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    NumGuess = 1;
    guessesSlot.innerHTML = "";
    lower_high.innerHTML = "";
    remaining.innerHTML = `${11 - NumGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
