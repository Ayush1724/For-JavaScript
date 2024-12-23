function val(){
    let name = document.querySelector('#name').value
    let age = document.querySelector('#age').value
    let contact = document.querySelector('#contact').value
    let email = document.querySelector('#email').value

    if(name ==''){
        alert("Plz enter your name")
        document.querySelector('#name').focus()
        return false
    }
    else if (age ==''){
        alert("Plz enter the age")
        document.querySelector('#age').focus()
        return false
    }
    else if(isNaN(age)){
        alert("age should be in number")
        document.querySelector("#age").focus()
        return false
    }
    else if(contact==''){
        alert("Plz enter the contact")
        document.querySelector('#contact').focus()
        return false
    }
    else if(isNaN(contact)){
        alert("contact should be in number")
        document.querySelector('#contact').focus()
        return false
    }
    else if(contact.length>10 || contact.length<10){
        alert("contact should be of 10 digit ")
        document.querySelector('#contact').focus()
        return false
    }
    else if(email==''){
        alert("Plz enter the email")
        document.querySelector('#email').focus()
        return false
    }
    else if(!(email.includes('@'))){
        alert("Plz enter correct email")
        document.querySelector('#email').focus()
        return false
    }
}