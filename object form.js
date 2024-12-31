function val() {
    let ob = {
    Name : document.querySelector('#name').value,
    Age : parseInt(document.querySelector('#age').value),
    Stack : document.querySelector('#stack').value,
    Address : document.querySelector('#address').value,
    Contact : document.querySelector('#contact').value,
    
}
console.log(ob);
return false;
  

}
