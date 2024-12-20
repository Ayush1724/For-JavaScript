function vol() {
    let name = document.querySelector("#name").value 
    let cont = document.querySelector("#cont").value
    

    if (name=='') {
        alert("plz enter your name")
        document.querySelector("#name").focus()
        return false
    }
    else if (cont=='') {
        alert('plz entert the number')
        document.querySelector('#cont').focus()
        
     return false   
    }
}