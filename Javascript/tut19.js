let num = [5,7,3,8,6];

// for(let i=0;i<num.length;i++){
//     console.log(num[i])
// }

num.forEach((elememt)=>{
    console.log(elememt*elememt)
})

let name = "sanskar";
let arr= Array.from(name);
console.log(arr);

//for..of
for(let item of num){
    console.log(item)
}
//for..in
for(let i in num){
    console.log(i)
}
