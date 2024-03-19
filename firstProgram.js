#! /usr/bin/env node
"use strict";
let winningNumber = 120;
let userGuess = prompt("Guess a number");
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
