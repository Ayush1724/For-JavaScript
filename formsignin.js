const sign = () =>{
    let abc ={
        name : document.querySelector("#name").value,
        email : document.querySelector("#email").value,
        password : document.querySelector("#pass").value
    }
    localStorage.setItem("userdata",JSON.stringify(abc))
    
}
let data=JSON.parse(localStorage.getItem("userdata"))
    
const up =()=>{
    let obj ={
        smail :document.querySelector("#mail").value,
        pword :document.querySelector("#pword").value,
    }
    console.log(data.name)
    if(data.email !=obj.smail)
    {
        alert("Wrong Email")
    }
    else if (data.password!=obj.pword){
        alert("Wrong Password")
    }

    
}