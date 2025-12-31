let button = document.getElementById("btn");
button.addEventListener("mouseout",() =>{
    document.querySelector('.box').innerHTML="Yayy I was <b>clicked</b>"
})


button.addEventListener("contextmenu",() =>{
    alert("hello")
}) 

