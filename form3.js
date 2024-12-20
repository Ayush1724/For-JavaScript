function con(){
    let cont = parseInt(document.querySelector('#cont').value)
    let a =cont
    let cod=0
    if(a>0){
        cod = cod+1
        a=a/10
        console.log(a)
    }
    a=cont
    console.log(cod)
    if( cod==10){
        alert("Enter the number")
    }
    else{
        alert("Enter the rigth number")
    }
    return false
}