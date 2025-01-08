let student =[
    {
        Roll:1,
        name:"Ayush",
        age:24,
        city:"Bhopal"
    },
    {
        Roll:2,
        name:"Anuj",
        age:23,
        city:"Rajgarh"
    },
    {
        Roll:3,
        name:"Ram",
        age:22,
        city:"Guna"
    },
    {
        Roll:4,
        name:"Harsh",
        age:21,
        city:"Lucknow"
    }
]
let finaldata = student.map((e)=>`

<tr>
<td> ${e.Roll}</td>
<td> ${e.name}</td>
<td> ${e.age}</td>
<td> ${e.city}</td>
</tr>
`).join("")

document.querySelector("#displaydata").innerHTML=finaldata