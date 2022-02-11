const closeButton = document.querySelector(".close");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".gs-modal-button");
const gameMessage = document.querySelector("#game-msg");
const pointMessage = document.querySelector("#points-msg");
const playersTurnMessage = document.querySelector("#playersturn-msg");
const winnerMessage = document.querySelector("#winner-msg");
const dices = document.querySelectorAll(".square");
const resetButton = document.querySelector("#reset-button");

const images = [
  "./images/dice1img.jpg",
  "./images/dice2img.jpg",
  "./images/dice3img.jpg",
  "./images/dice4img.jpg",
  "./images/dice5img.jpg",
  "./images/dice6img.jpg",
];

// Start Screen/Modal Close Button
closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});
// Return to Start Screen/Modal Button
modalButton.onclick = function () {
  modal.style.display = "block";
};

// Random Integer Generator
function diceNum(min, max) {
  min = Math.ceil(1);
  max = Math.floor(6);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Play Button
const buttonPlay = document.querySelector(".gs-roll-button");
buttonPlay.addEventListener("click", function () {
  dices.forEach(function (dice) {
    dice.innerText = diceNum();
  });
  gameMessage.innerText = "";
  let playNumbers = "";
  dices.forEach(function (dice) {
    playNumbers += dice.innerText;
  });
  gameResult(parseInt(playNumbers));
  displayImage();
  if (currentPlayer === "Player 1") {
    player1Score(playNumbers);
  } else if (currentPlayer === "Player 2") {
    player2Score(playNumbers);
  }
  if (player2 > 1) {
      setpointResults()
  }
playersTurn()
});

// Number to Image Conversion
function displayImage() {
  dices.forEach((dice) => {
    if (dice.innerText === "1") {
      dice.style.backgroundImage = "url(" + images[0] + ")";
      dice.innerText = "";
    } else if (dice.innerText === "2") {
      dice.style.backgroundImage = "url(" + images[1] + ")";
      dice.innerText = "";
    } else if (dice.innerText === "3") {
      dice.style.backgroundImage = "url(" + images[2] + ")";
      dice.innerText = "";
    } else if (dice.innerText === "4") {
      dice.style.backgroundImage = "url(" + images[3] + ")";
      dice.innerText = "";
    } else if (dice.innerText === "5") {
      dice.style.backgroundImage = "url(" + images[4] + ")";
      dice.innerText = "";
    } else if (dice.innerText === "6") {
      dice.style.backgroundImage = "url(" + images[5] + ")";
      dice.innerText = "";
    }
  });
}

// Wins + Losses Combinations
const autoWinningCombos = [
  116, 161, 611, 226, 262, 622, 336, 363, 633, 446, 464, 644, 556, 565, 655,
  456, 654, 546, 645, 564, 465, 666,
];

const autoLosingCombos = [
  111, 221, 212, 122, 331, 313, 133, 441, 414, 144, 551, 515, 155, 661, 616,
  166, 123, 231, 321, 312, 213, 132,
];

const twoPoints = [
  112, 121, 211, 222, 332, 323, 233, 442, 424, 244, 552, 525, 255, 662, 626,
  266,
];
const threePoints = [
  113, 131, 311, 223, 232, 322, 333, 443, 434, 344, 553, 535, 355, 663, 636,
  366,
];
const fourPoints = [
  114, 411, 141, 224, 242, 422, 334, 343, 433, 444, 554, 545, 455, 664, 646,
  466,
];

const fivePoints = [
  115, 511, 151, 225, 252, 522, 335, 353, 533, 445, 454, 544, 555, 665, 656,
  566,
];

// Automatic win, automic lose, n-points or roll again
function gameResult(playNumbers) {
  if (autoWinningCombos.includes(playNumbers)) {
    winnerMessage.innerText = currentPlayer + " won!";
    gameMessage.innerText = "Game Over!";
    buttonPlay.style.display = "none";
    pointMessage.innerText = ""
    playersTurnMessage.innerText = ""
    return
  } else if (autoLosingCombos.includes(playNumbers)) {
    winnerMessage.innerText = currentPlayer + " lost!";
    gameMessage.innerText = "Game Over!";
    buttonPlay.style.display = "none";
    pointMessage.innerText = ""
    playersTurnMessage.innerText = ""
    return
  } else if (twoPoints.includes(playNumbers)) {
    pointMessage.innerText = "2 points!";
  } else if (twoPoints.includes(playNumbers)) {
    pointMessage.innerText = "2 points!";
  } else if (threePoints.includes(playNumbers)) {
    pointMessage.innerText = "3 points!";
  } else if (fourPoints.includes(playNumbers)) {
    pointMessage.innerText = "4 points!";
  } else if (fivePoints.includes(playNumbers)) {
    pointMessage.innerText = "5 points!";
  } else {
    gameMessage.innerText = "Roll again!";
    pointMessage.innerText = ""
  }
  if (pointMessage.style.visibility == "hidden") {
    pointMessage.style.visibility = "visible";
  }
}

let player1 = 0;
let player2 = 0;

// when player 1 gets set-points
function player1Score(player1Numbers) {
  if (twoPoints.includes(parseInt(player1Numbers))) {
    console.log("does this work");
    player1 += 2;
  } else if (threePoints.includes(parseInt(player1Numbers))) {
    console.log("does this work");
    player1 += 3;
  } else if (fourPoints.includes(parseInt(player1Numbers))) {
    console.log("does this work");
    player1 += 4;
  } else if (fivePoints.includes(parseInt(player1Numbers))) {
    console.log("does this work");
    player1 += 5;
  } console.log("this is player1", player1)
}

function player2Score(player2Numbers) {
  if (twoPoints.includes(parseInt(player2Numbers))) {
    player2 += 2;
  } else if (threePoints.includes(parseInt(player2Numbers))) {
    player2 += 3;
  } else if (fourPoints.includes(parseInt(player2Numbers))) {
    player2 += 4;
  } else if (fivePoints.includes(parseInt(player2Numbers))) {
    player2 += 5;
  } console.log("this is player2", player2)
}

// From Player 1 to Player 2
let currentPlayer = "Player 1";
function playersTurn() {
  if (player1 > 1) {
    currentPlayer = "Player 2";
    console.log(currentPlayer)
    playersTurnMessage.innerText = "Player 2's turn!";
  } else {
    currentPlayer = "Player 1";
  }
}
console.log(currentPlayer);

function setpointResults() {
  if (player1 === player2 && player1 > 0 && player2 > 0) {
    winnerMessage.innerText = "Tie!";
    playersTurnMessage.innerText = "Play again!";
  } else if (player2 > player1) {
    winnerMessage.innerText = "Player 2 wins!";
    gameMessage.innerText = "Game Over";
    buttonPlay.style.display = "none";
    playersTurnMessage.style.display = "none"
  } else if (player1 > player2) {
    winnerMessage.innerText = "Player 1 wins!";
    gameMessage.innerText = "Game Over";
    buttonPlay.style.display = "none";
    playersTurnMessage.style.display = "none";
  }
}

//Reset Button
resetButton.addEventListener("click", function () {
  dices.forEach(function (dice) {
    dice.style.backgroundImage = "none";
  });
  buttonPlay.style.display = "inline-block";
  gameMessage.innerText = "";
  pointMessage.innerText = "";
  winnerMessage.innerText = "";
  playersTurnMessage.innerText = "";
  player1 = 0
  player2 = 0
  currentPlayer = "Player 1"
  
});
