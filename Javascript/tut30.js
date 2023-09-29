const prompt = require("prompt-sync")({ sigint: true });
let score=0;
let opponent=0;
function getRandomCharacter(characters) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }
  
  const characterSet = ['W','S','G'];
  for(let i=0;i<10;i++){
  const b = getRandomCharacter(characterSet);
  //console.log(randomChar); // This will print a random character from the array 'characterSet'.
  let a=prompt("Play your hand:")
    if(a.charCodeAt(0)==b.charCodeAt(0)){
        console.log('Draw');
    }
    else if(a.charCodeAt(0)-b.charCodeAt(0)==-4){
        console.log("You won this round")
        score++;
    }
    else if(a.charCodeAt(0)-b.charCodeAt(0)==16){
        console.log("You won this round")
        score++;
    }
    else if(a.charCodeAt(0)-b.charCodeAt(0)==-12){
        console.log("You won this round")
        score++;
    }
    else{
        console.log("You lose this round")
        opponent++;
    }
}
console.log("your score is:",score);
console.log("your opponent's score is:",opponent);
