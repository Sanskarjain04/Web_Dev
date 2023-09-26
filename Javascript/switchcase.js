const prompt = require("prompt-sync")({ sigint: true });
let a = prompt("Enter the day of the week")
a = Number.parseInt(a)
console.log(a)
switch(a){
  case 1:
    console.log('Sunday');
    break;
  case 2:
    console.log('saturday');
    break;
  default:
    console.log('weekdays');
    break;
}