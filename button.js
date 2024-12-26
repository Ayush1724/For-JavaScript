let bt1= document.querySelector('#bt1')
bt1.addEventListener('click',onclick)
let bt2= document.querySelector('#bt2')
bt2.addEventListener('click',hide)
function onclick(){
    let head=document.querySelector('#head')
    head.innerHTML="Cybrom"
}
function hide(){
    let head=document.querySelector('#head')
    head.innerHTML=""
}