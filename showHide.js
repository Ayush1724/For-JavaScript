let status=false
function fun(){
    let h =document.querySelector('#head')
    let btn =document.querySelector('#bt1')
    status=!status
    if(status){
        h.innerHTML="Cybrom"
        btn.innerHTML="hide"
        }
        else{
            h.innerHTML=""
            btn.innerHTML="Show"
        }
}