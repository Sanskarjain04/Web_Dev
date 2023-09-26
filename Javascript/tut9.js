const prompt = require("prompt-sync")({ sigint: true });
let sum=0
let n=prompt("Enter the value of n")
n=Number.parseInt(n)
for(let i=1;i<=n;i++){
 sum=sum+i;
}
console.log(sum)