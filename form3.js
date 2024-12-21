function con(){
    let cont = parseInt(document.querySelector('#cont').value)
    let a = cont
    let cod=0
    while(a>0){
        cod=cod+1
        a=parseInt(a/10)
        console.log(a)
    }


    if( cod==10){
        alert("Enter the right number")
    }
    else{
        alert("Enter the wrong number")
    }
    return false
}