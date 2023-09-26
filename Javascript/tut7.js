const prompt = require("prompt-sync")({ sigint: true });
let a = prompt("Hey whats your age?");
a = Number.parseInt(a); //converting the string to a number
if (a < 0) {
  console.log("this is a invalid age");
} else if (a < 9 && a > 0) {
  console.log("you are a kid you cannot even think of driving");
} else if (a < 9 && a > 0) {
  console.log("you are a kid you can think of driving after 18");
} else {
  console.log("You can now drive you are above 18");
}
console.log("you can", a < 18 ? "not drive" : "drive");
