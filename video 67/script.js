//practiceset-7

//5
const box = document.querySelector('.box');
const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');

console.log(box.contains(a));
console.log(box.contains(c));
console.log(a.closest('.box'));   //only for nearest ancestor

e = document.getElementsByTagName('div');
console.log(e[7].matches("#red")); //id
console.log(e[7].matches(".con")); //class




//3
const child = document.querySelectorAll('.box > *');

child.forEach(e1 => {
    e1.style.backgroundColor = "red";
});



//4
const ul = document.querySelector('ul').style.listStyleType = "none"; 
const li = document.querySelectorAll('ul > li');
  
li.forEach(li => {
    li.style.backgroundColor="cyan"
   
});


//1
// const ul = document.querySelector('ul').firstElementChild.style.backgroundColor="blue"
  

