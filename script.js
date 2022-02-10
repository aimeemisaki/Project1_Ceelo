const closeButton = document.querySelector(".close");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".gs-modal-button");
const gameMessage = document.querySelector(".gs-msg");
const pointMessage = document.querySelector(".points-msg");
const playersTurnMessage = document.querySelector(".playersturn-msg");
const dices = document.querySelectorAll(".square");
const resetButton = document.querySelector("#reset-button");

const images = [
  "./dice1img.jpg",
  "./dice2img.jpg",
  "./dice3img.jpg",
  "./dice4img.jpg",
  "./dice5img.jpg",
  "./dice6img.jpg",
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
    console.log("this is player1Numbers", playNumbers);
  } else if (currentPlayer === "Player 2") {
    player2Score(playNumbers);
    console.log("this is player2Numbers", playNumbers);
  }
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
    pointMessage.innerText = currentPlayer + " won!";
    gameMessage.innerText = "Game Over!";
    buttonPlay.style.display = "none";
  } else if (autoLosingCombos.includes(playNumbers)) {
    pointMessage.innerText = currentPlayer + " lost!";
    gameMessage.innerText = "Game Over!";
    buttonPlay.style.display = "none";
  } else if (twoPoints.includes(playNumbers)) {
      playersTurn();
    npointResults();
    pointMessage.innerText = "2 points!";
  } else if (twoPoints.includes(playNumbers)) {
      playersTurn();
    npointResults();
    pointMessage.innerText = "2 points!";
  } else if (threePoints.includes(playNumbers)) {
      playersTurn();
    npointResults();
    pointMessage.innerText = "3 points!";
  } else if (fourPoints.includes(playNumbers)) {
      playersTurn();
    npointResults();
    pointMessage.innerText = "4 points!";
  } else if (fivePoints.includes(playNumbers)) {
      playersTurn();
    npointResults();
    pointMessage.innerText = "5 points!";
  } else {
    gameMessage.innerText = "Roll again!";
    pointMessage.style.visibility = "hidden";
  }
  if (pointMessage.style.visibility == "hidden") {
    pointMessage.style.visibility = "visible";
  }
}

let player1 = 0;
let player2 = 0;

// Based on conditionals, add points to properties in gamestate :

// when player 1 gets n-points
function player1Score(player1Numbers) {
  console.log("this is player1 numbers", player1Numbers);
  console.log(typeof player1Numbers);
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
  }
  console.log(player1);
}

// when player 2 gets n-points
function player2Score(player2Numbers) {
  console.log("this is player2 numbers", player2Numbers);
  if (twoPoints.includes(parseInt(player2Numbers))) {
    player2 += 2;
  } else if (threePoints.includes(parseInt(player2Numbers))) {
    player2 += 3;
  } else if (fourPoints.includes(parseInt(player2Numbers))) {
    player2 += 4;
  } else if (fivePoints.includes(parseInt(player2Numbers))) {
    player2 += 5;
  }
  console.log(player2);
}

// From Player 1 to Player 2
let currentPlayer = "Player 1";
function playersTurn() {
  if (player1 >= 2) {
    currentPlayer = "Player 2";
    playersTurnMessage.innerText = "Next player's turn!";
  } else {
    currentPlayer = "Player 1";
  }
}
console.log(currentPlayer);
//Player 1 rolls a few turns and gets their points from each roll
//then, player2 gets to be currentPlayer and rolls until their turn ends

function npointResults() {
  if (player1 > player2 && currentPlayer === "Player 2") {
    // pointMessage.innerText = "Player 1 wins!";
    gameMessage.innerText = "Player 1 wins!";
    buttonPlay.style.display = "none";
  } else if (player2 > player1 && currentPlayer === "Player 2") {
    // pointMessage.innerText = "Player 2 wins!";
    gameMessage.innerText = "Player 2 wins!";
    buttonPlay.style.display = "none";
  } else if (player1 === player2 && player1 > 0 && player2 > 0) {
    gameMessage.innerText = "Tie!";
    playersTurnMessage.innerText = "Both roll again!";
  }
  console.log(npointResults);
}

//Reset Button
resetButton.addEventListener("click", function () {
  dices.forEach(function (dice) {
    dice.style.backgroundImage = "none";
  });
  buttonPlay.style.display = "inline-block";
  gameMessage.innerText = "";
  pointMessage.innerText = "";
//   let player1Score = 0
//   let player2Score = 0


  //   buttonPlay.addEventListener("click", function () {
  //     dices.forEach(function (dice) {
  //       dice.innerText = diceNum();
  //     })
  // })
});

// const music = document.querySelector(".music")
// music.play();
// music.autoplay = true;
// music.load();
// music.loop =true;
