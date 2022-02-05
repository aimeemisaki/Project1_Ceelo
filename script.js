const gameMessage = document.querySelector(".gs-msg")
const dices = document.querySelectorAll(".square")

function diceNum(min, max) {
    min = Math.ceil(1);
    max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(diceNum)


const buttonPlay = document.querySelector(".gs-roll-button")
buttonPlay.addEventListener('click', function(){
    dices.forEach(function(dice) {
        dice.innerText = diceNum();
    })  
    let playNumbers = []
    dices.forEach(function(dice) {
        playNumbers.push(parseInt(dice.innerText))
    })
    gameResult(playNumbers)
})
const winningCombos = [
    [1,1,6],
    [2, 2, 6],
    [3, 3, 6],
    [4, 4, 6],
    [5, 5, 6],
    [4, 5, 6],
    [6, 6, 6]
] 

const losingCombos = [
    [1, 1, 1],
    [2, 2, 1],
    [3, 3, 1],
    [4, 4, 1],
    [5, 5, 1],
    [6, 6, 1],
    [1, 2, 3]
]

const gameResult = (playNumbers) => {
    if (winningCombos.includes(playNumbers)) {
        gameMessage.innerText = "You won!"
        dices.innerText = ""
    } else if (losingCombos.includes(playNumbers)) {
        gameMessage.innerText = "You lost!"
        dices.innerText = ""
    } else {
        gameMessage.innerText = "Roll again!"
        dices.innerText =""
    }
}


