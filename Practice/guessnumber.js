var prompt = require("prompt-sync")()
function guess(guessedNumber) {
    randomnumber = Math.floor(Math.random() * 5) + 1
    if (guessedNumber > 5) {
        console.log("Number is greater than 5")
    }
    else if (randomnumber == guessedNumber) {
        console.log("Guess is right")
    }
    else {
        console.log("Wrong Guess")
    }

}

var guessedNumber = prompt("Welcome to number guess game! Please enter a number between 1 to 5: Let me guess your number-")
guess(guessedNumber)