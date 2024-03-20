#! /usr/bin/env node
export{};
import inquirer from "inquirer";
let winningNumber : any = 120;
let userGuess :any = await inquirer.prompt([{
message:"Guess a number",
type: "number",
name:"num"
}]);
if (userGuess.num == winningNumber) {
    console.log("Your guess is Right!!");
}
else {
    if (userGuess.num > winningNumber) {
        console.log(" too high!, Try a small number.");
    }
    else {
        console.log("too low!, Try a large number. ");
    }
}