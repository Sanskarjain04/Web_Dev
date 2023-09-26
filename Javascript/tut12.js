const prompt = require("prompt-sync")({ sigint: true });
let marks={
    sanskar:80,
    shubham:70,
    shubh:74,
    samarth:78
}

for(let i=0;i<Object.keys(marks).length;i++){
    console.log("the marks of " + Object.keys(marks)[i]+" are "+marks[Object.keys(marks)[i]]);
}


for(let key in marks){
    console.log("the marks of " + key+" are "+marks[key]);
}

let cn= prompt();
cn=Number.parseInt(cn)
let i
while(i!=cn){
    console.log('try again');
    i=prompt('Enter the number')
}
console.log('you have entered the correct number');