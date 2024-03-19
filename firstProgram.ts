#! /usr/bin/env node

let winningNumber : any = 120;
let userGuess :any = prompt("Guess a number");
if (userGuess == winningNumber) {
    console.log("Your guess is Right!!");
}
else {
    if (userGuess > winningNumber) {
        console.log(" too high!, Try a small number.");
    }
    else {
        console.log("too low!, Try a large number. ");
    }
}