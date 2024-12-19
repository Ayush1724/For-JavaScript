function add(){
    let num1 = parseInt(document.querySelector('#num1').value)
    let num2 = parseInt(document.querySelector('#num2').value)
    let n =num1+num2
    document.querySelector("#head").innerHTML=n
    // document.querySelector("#num3").setAttribute('value',n)
    return false;
}


