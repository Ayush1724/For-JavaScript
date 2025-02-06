async function data() {
    let data = await fetch ("http://localhost:3000/student")
    let final_data = await data.json()
    let tdata = final_data.map((e)=>`
    <tr>
    <td> ${e.name}</td>
    <td>${e.age}</td>
    <td>${e.contact}</td>
    <td>${e.city}</td>
    <td>${e.id}</td>
    <td> <button onclick="mydelete('${e.id}')">DELETE</button> </td>
    </tr>
    `).join("")
    document.querySelector('#displaydata').innerHTML=tdata
}
data()
function mydelete(id){
    fetch(`http://localhost:3000/student/${id}`,{
        method:"DELETE"
    })
    .then(res=>alert("Deleted"))
    
}

function savedata(){
    let frmdata = {
        name:document.querySelector("#name").value,
        age:document.querySelector("#age").value,
        contact:document.querySelector("#contact").value,
        city:document.querySelector("#city").value
    }
    fetch('http://localhost:3000/student',{
        method:"POST",
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify(frmdata)
    })
    .then(r=>alert("Data inserted successfully...!!!"))
}