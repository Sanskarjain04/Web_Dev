const prompt = require("prompt-sync")({ sigint: true });
let a = prompt("Enter a number");
a = Number.parseInt(a);
let i = 0;
//while loop
/*
  while (i < a) {
    console.log(i);
    i++;
  }
*/

//do-while loop
 do{
    console.log(i);
    i++;
  }while (i < a)