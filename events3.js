let c=0
function add(){
    c=c+1
    document.querySelector("#head").innerHTML=c
}
function sub(){
    if(c>0){
        c=c-1
        document.querySelector("#head").innerHTML=c
    }
}