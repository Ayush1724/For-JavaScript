let head1=document.querySelector('#head1')
let head2=document.querySelector('#head2')
let head3=document.querySelector('#head3')

function fun1(){
    let a =Math.trunc(Math.random()*100+1)
    head1.innerHTML=a;
}
function fun2(){
    let b =Math.trunc(Math.random()*100+1)
    head2.innerHTML=b;
}
function fun3(){
    let c =Math.trunc(Math.random()*100+1)
    head3.innerHTML=c;
}