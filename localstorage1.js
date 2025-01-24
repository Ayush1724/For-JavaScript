let person_ob = {
    name : "Ayush Shrivastava",
    contact : 8770644508,
    email : "ayush@gmail.com",
    password : "12345vh"
}
console.log(person_ob)
localStorage.setItem("userdata",JSON.stringify(person_ob))
let us = localStorage.getItem("userdata")
console.log(us);
let data = JSON.parse(localStorage.getItem("userdata"))
console.log(data);


