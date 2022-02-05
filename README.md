# Project 1
___
## Cee-Lo 四五六: The Good Ol' Game of Dice
___
Feeling _**lucky**_, but instead you're stuck at a boring house party, your parents' house or a coworkers' get-together? Wish you had your set of dice on you, but forget them at home? *Look no further!* The timeless game of **Cee-lo** is right at your fingertips. Roll away! 


## Tech Stack
___
* HTML/CSS 
* Javascript - _**DOM**_
* *Using DOM manipulation, I will...*
* create a function that includes an event listener for when the buttons are clicked so that...


→ 'game start' button on the start screen makes the start screen dissappear and opens the game screen

→ 'reset' button on the game screen clears the text on the dice


→'roll dice' button on the game screen starts the random number generator and displays those numbers on the dice
* use array method to define winning combinations, losing combinations, and roll-again combinations
* for loops with if/else if/else combinations to determine what happens when player wins, loses or has to roll again


→ use innerText to display message (i.e. "You won!", "You lose!", "Roll again!")


→ automatically clear text (aka invoke reset function) when player must roll again


**Button will make random integers (1~6) appear on the 3 dices:
```javascript 
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
```

List of conditions determining wins/losses/roll-agains and the resulting message that shows up:
```javascript
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
```

## Wireframes
___
* Start Screen / Instructions 

![Start Screen](./Wireframe_Draft_StartScreen.jpg)

* Playing Screen

![Game Screen](./Wireframe_Draft_GameScreen.jpg)

## MVP Goals
___
* Render start screen that displays instructions that disasapears after clicking button to go to game screen
* Render game screen with 3 dices
* Render 3 random number generators (text inserted) for the dices that are being rolled
* Create conditional combinations for automatic win, automatic loss and roll again
* Automatically reset game when player must roll again
* Functional buttons to start and reset game
* Message that pops up declaring player has won, lost or must roll again

## Stretch Goals 
___
* Add animation for dice roll
* Make it a 2-person game
* Store points for Player 1 and Player 2