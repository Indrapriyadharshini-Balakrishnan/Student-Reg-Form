var prompt = require("prompt-sync")()
function multiply(multiplynr) {


    for (cnt = 1; cnt <= 10; cnt++) {
        nr = cnt * multiplynr
        console.log(cnt + "x" + multiplynr + "=" + nr)
    }
}

var multiplynr = prompt("Enter a number to get a Multiplication table : ")
multiply(multiplynr)