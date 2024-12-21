function val(){
    let a = parseInt(document.querySelector('#num').value)
    if (a>0) {
        console.log("+ve")
        alert("+ve")
    }
    else if (a<0) {
     console.log("-ve");
    }
    else{
        console.log("0")
    
    }
return false;
}