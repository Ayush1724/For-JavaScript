let employee = [
    {
        emp_id : 1,
        emp_name : "Ayush",
        emp_designation : "FSD"
    },
    {
        emp_id : 2,
        emp_name : "Anuj",
        emp_designation : "FSD"
    }
]
let ob1={emp_id : 3,
emp_name : "Ram",
emp_designation : "DA"}

// console.log(employee);

// employee.push(ob1)
// console.log(employee);

// employee.pop()
// console.log(employee);

let a =employee.slice(1,2)
console.log(a);

employee.splice(0,1,ob1)
console.log(employee);











