const closeButton = document.querySelector(".close");
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".gs-modal-button");
const gameMessage = document.querySelector(".gs-msg");
const pointMessage = document.querySelector(".points-msg");
const dices = document.querySelectorAll(".square");
const resetButton = document.querySelector("#reset-button");
let player1 = "";
let player2 = "";
let currentPlayer = "Player 1";

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
    pointMessage.innerText = "2 points!";
    if (currentPlayer === "Player 1") {
      player1 = 2;
      currentPlayer = "Player 2"
    } else if (currentPlayer === "Player 2") {
      player2 = 2;
      npointResults()
    }
    gameMessage.innerText = "Next player's turn!";
    currentPlayer = "Player 2";
  } else if (threePoints.includes(playNumbers)) {
    pointMessage.innerText = "3 points!";
    if (currentPlayer === "Player 1") {
      player1 = 3;
      currentPlayer = "Player 2"
    } else if (currentPlayer === "Player 2") {
      player2 = 3;
      npointResults()
    }
    gameMessage.innerText = "Next player's turn!";
    currentPlayer = "Player 2";
  } else if (fourPoints.includes(playNumbers)) {
    pointMessage.innerText = "4 points!";
    if (currentPlayer === "Player 1") {
      player1 += 4;
      currentPlayer = "Player 2"
    } else if (currentPlayer === "Player 2") {
      player2 = 4;
      npointResults()
    }
    gameMessage.innerText = "Next player's turn!";
    currentPlayer = "Player 2";
  } else if (fivePoints.includes(playNumbers)) {
    pointMessage.innerText = "5 points!";
    if (currentPlayer === "Player 1") {
      player1 = 5;
      currentPlayer = "Player 2"
    } else if (currentPlayer === "Player 2") {
      player2 = 5;
      npointResults()
    }
    gameMessage.innerText = "Next player's turn!";
    currentPlayer = "Player 2";
  } else {
    gameMessage.innerText = "Roll again!";
    // pointMessage.style.display = "none";
  }
}

function npointResults() {
    if (player1 > player2) {
    pointMessage.innerText = "Player 1 wins!"
    gameMessage.innerText = "Game Over"
    buttonPlay.style.display = "none"
} else if (player2 > player1) {
    pointMessage.innerText = "Player 2 wins!"
    gameMessage.innerText = "Game Over"
    buttonPlay.style.display = "none"
} else if (player1 === player2) {
    pointMessage.innerText = "Tie!"
    gameMessage.innerText = "Both roll again!"
}
}

// create a conditional that compares player 1 and player 2 values
// condition where currentPlayer = 2 && player2 > 0
// --> display winner in the gameMessage
// --> hide Roll button

//Reset Button
resetButton.addEventListener("click", function () {
  dices.forEach(function (dice) {
    dice.style.backgroundImage = "none";
  });
  buttonPlay.style.display = "inline-block";
  gameMessage.innerText = "";
  pointMessage.innerText = ""
  //   buttonPlay.addEventListener("click", function () {
  //     dices.forEach(function (dice) {
  //       dice.innerText = diceNum();
  //     })
  // })
});
