//Selecting the Elements
let inputbox = document.getElementById("inputbox")
let result = document.getElementById("result")
let guesscount = document.getElementById("guesscount")
let noofguess=3

//Random Number Generator
let randomnumber = Math.floor(Math.random() * 5) + 1
//Event handler function
function checkthenumber() {
    if (inputbox.value == randomnumber) {
      result.textContent="You are Right!!! Congratulations!!!"
    }
    else{
        noofguess=noofguess-1
        if(noofguess==0)
        {
            alert("You Lost it! The genereated random number is : "+randomnumber)
        }
        guesscount.textContent="Available Guess :"+ noofguess
        result.textContent="You are Wrong!!!"
    }
}