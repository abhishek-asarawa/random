// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('Who are you?\n', name => {
//     console.log(`Hey there ${name}!`);
//     readline.close();
//   });
const prompt = require('prompt-sync')({sigint: true});
/* sigint: true will make sure that your user can exit the program by ctrl+c.
if you do not use this then it will take input null and will execute all the 
program, when used ctrl+c*/

let name = prompt("What is your name?  ");
console.log(`Hey! There ${name}.`);

// Dealing with numbers:
// All the inputs will be treated as string so, you have to convert it into number.

// let num = prompt("Enter a number: ");
// console.log("Your number + 4: ", Number(num) + 4);

// Number gusseing app
let ans = prompt(`Hey ${name}! wanna play a number guessing game. (Y/N): `)
if (ans == 'Y'){
    console.log("Here we go!!!!");
    let num = Math.floor(Math.random() * 10) + 1;
    let guessNumber = false;
    while (!guessNumber){ 
        let guess = prompt("Guess a number. ");
        if (Number(guess) == num){
            console.log("Correct!! Congratulation.")
            guessNumber = true;
        } else{
            console.log("Wrong!! guess again.");
        }
    }
} else{
    console.log("Ok buddy, I can see you are a busy bee.");
}