
let ayush = []
let a=10
for(let a=0;a<10;a++){
    ayush[a]=parseInt(prompt("Enter the number"))
}
let sum = 0
for(let v of ayush){
    if(v%2!=0){
        sum=sum+v
    }
}
console.log(sum)