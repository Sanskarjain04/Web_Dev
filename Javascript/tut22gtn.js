const prompt = require("prompt-sync")({ sigint: true });
let Winning_Number = 54;
let i;
let count = 0;
do {
  i = prompt("Enter the Number");
  i = Number.parseInt(i);
  if (i < Winning_Number) {
    console.log("The winning number is greater than this number");
    count++;
  } else if (i > Winning_Number) {
    console.log("The winning number is less than this number");
    count++;
  } else {
    console.log("Congratulations you have entered the winning number");
    count++;
    break;
  }
} while (i < 100);
let score = 100 - count;
console.log("Your Score is:");
console.log(score);
