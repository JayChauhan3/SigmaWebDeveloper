
const box = document.querySelector(".box");
box.innerHTML='hey hurreyyyyy';

box.style.backgroundColor = 'red';
//console.log(box.setAttribute("style", "background-color: blue;"));

const a = document.getElementsByClassName("a") [0]
//a.hidden= true;

console.log(a.hasAttribute("hidden"));
console.log(a.hasAttribute("id"));
console.log(a.hasAttribute("style"));
console.log(a.getAttribute("style"));
//console.log(a.setAttribute("style", "background-color: yellow;"));


//console.log(a.removeAttribute("style"));

console.log(a.attributes);



const c = document.createElement('div')
c.className="c"
c.innerHTML="<b>I am C-class</b>"
document.body.append(c)
console.log(c.innerHTML);
//c.remove()



document.querySelector('.a').classList.add('black','maroon')
document.querySelector('.a').classList.remove('maroon')

//document.querySelector('.a').classList.toggle('black') //doing oppsite action
//document.querySelector('.a').classList.toggle('black')


