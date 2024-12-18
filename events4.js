function fun1(){
    document.querySelector('#chimg').src="p1.jpg"
}
function fun2(){
    document.querySelector('#chimg').src="p2.jpg"
}

function demofun(){
    let a = document.querySelector('#head')
    a.classList.add('hel1')
}
// function demofun1(){
//     let b = document.querySelector('#head')
//     b.classList.add('hel2')
// }
// function rem1(){
//     let a= document.querySelector('#head')
//     a.classList.remove('hel1')
// }
function rem2(){
    let a= document.querySelector('#head')
    a.classList.remove('hel1')
}
function tgl(){
    let a = document.getElementById('head')
    a.classList.toggle('hel1')
}
function theme(){
    let a=document.body
    a.classList.toggle('theme')
}