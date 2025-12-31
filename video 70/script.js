
//----HEX
// const boxes = document.querySelectorAll('.box');

// boxes.forEach(box => {
//   box.style.backgroundColor = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
// });


//---------------------------------------------------------------------------------------------------------------

//----RGB (Red, Green, Blue)
// •	rgb(255, 0, 0) = red
// •	rgb(0, 255, 0) = green
// •	rgb(0, 0, 255) = blue
// •	rgb(255, 255, 255) = white
// •	rgb(0, 0, 0) = black
const boxes = document.querySelectorAll('.box');
                  
boxes.forEach(box => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  // box.style.color = `rgb( ${b}, ${r}, ${g})`
});

boxes.forEach(box => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  box.style.color = `rgb( ${b}, ${r}, ${g})`
});

//---------------------------------------------------------------------------------------------------------------

//----HSL (Hue, Saturation, Lightness)
// const boxes = document.querySelectorAll('.box');

// boxes.forEach(box => {
//   const h = Math.floor(Math.random() * 360);     // Hue: 0–359
//   const s = Math.floor(Math.random() * 100);     // Saturation: 0–100%
//   const l = Math.floor(Math.random() * 100);     // Lightness: 0–100%
//   box.style.backgroundColor = `hsl(${h}, ${s}%, ${l}%)`;
// });             

//---------------------------------------------------------------------------------------------------------------

//----HEX
// const boxes = document.querySelectorAll('.box');

// boxes.forEach(box => {
//   box.style.backgroundColor = '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
// });


//---------------------------------------------------------------------------------------------------------------



//harrybhai ka code                                                         
// console.log("Script.js initializing")
// // let boxes = document.getElementsByClassName("box")
// let boxes = document.querySelector(".container").children 


// function getRandomColor(){
//     let val1 = Math.ceil(0 + Math.random()* 255);
//     let val2 = Math.ceil(0 + Math.random()* 255);
//     let val3 = Math.ceil(0 + Math.random()* 255);
//     return `rgb(${val1}, ${val2}, ${val3})`
// }
// Array.from(boxes).forEach(e=>{
//     e.style.backgroundColor = getRandomColor()
//     e.style.color = getRandomColor()
// })