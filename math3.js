let head1 =document.querySelector('#h1')
let head2 =document.querySelector('#h2')
let head3 =document.querySelector('#h3')
function fun(){
    let a = Math.trunc(Math.random()*100+1)
    let b = Math.trunc(Math.random()*100+1)
    let c = Math.trunc(Math.random()*100+1)
    head1.innerHTML=a
    head2.innerHTML=b
    head3.innerHTML=c
}