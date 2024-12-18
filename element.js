let h = document.createElement('h1')
h.textContent="This is head from js"

let bd =document.body
bd.append(h)

let head1 = document.createElement('h2')
head1.textContent="Second element from js"
bd.append(head1)

h.setAttribute('align','center')
h.setAttribute('style','background-color: blue')
// h.setAttribute('style','color: white')

head1.setAttribute('align','center')

bd.setAttribute('bgcolor','yellow')

bd.removeAttribute('bgcolor')

let img = document.getElementById('img')
img.setAttribute('src','p1.jpg')