localStorage.setItem("Name","Ayush Shrivastava")
let a = 8770644508
localStorage.setItem("Contact",a)
localStorage.setItem("Email","AyushShrivastava@123Gmail.com")
localStorage.setItem("Address","Ashoka garden")
let b=localStorage.getItem("Contact")
document.write(b)
localStorage.removeItem("Email")
localStorage.clear()
