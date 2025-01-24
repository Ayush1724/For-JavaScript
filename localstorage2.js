const datasubmit = () => {
    let userdata = {
        name : document.querySelector("#uname").value,
        email : document.querySelector("#umail").value,
        password : document.querySelector("#uname").value,
    }
    localStorage.setItem("Userdata",JSON.stringify(userdata))
}