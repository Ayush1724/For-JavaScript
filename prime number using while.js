let a = parseInt(prompt("Enter the number"))
let b = 1
var cod = 0
while(b<=a){
    if(a%b==0){
      cod =  cod + 1 
    }b++
}
if(cod==2){
    alert("Prime number")
}
else{
    alert("Not a prime number")
}