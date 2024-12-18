function fun(){
    alert("This is onclick function and double click fuction")
}

let a = parseInt(prompt("Enter the first number"))
let b = parseInt(prompt("Enter the Second number"))
function add(){
document.querySelector("#head").innerHTML =a+b
}
function sub(){
    document.querySelector("#head").innerHTML =a-b
    }
function mul(){
        document.querySelector("#head").innerHTML =a*b
        }
function div(){
            document.querySelector("#head").innerHTML =a/b
            }


function red(){
    let a = document.body
    a.style.backgroundColor="red"
}            
function yellow(){
    let a = document.body
    a.style.backgroundColor="yellow"
}
function blue(){
    let a = document.body
    a.style.backgroundColor="blue"
}
function brown(){
    let a = document.body
    a.style.backgroundColor="brown"
}
function purple(){
    let a = document.body
    a.style.backgroundColor="purple"
}