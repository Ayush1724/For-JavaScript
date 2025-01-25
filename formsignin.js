const sign = () =>{
    let abc ={
        name : document.querySelector("#name").value,
        email : document.querySelector("#email").value,
        password : document.querySelector("#pass").value
    }
    localStorage.setItem("userdata",JSON.stringify(abc))
    
}
let data=JSON.parse(localStorage.getItem("userdata"))
    