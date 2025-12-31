const express = require('express')
const app = express()
const port = 3001
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let name ="jc"
    let work="gamer"
    let arr =[4,87,90]
  res.render('index',{name:name,work:work,arr})
});
app.get('/blog/:slug', (req, res) => {
    let blogname="Adidas"
    let blogContent="its a nice brand"
    
  res.render('blogspot',{blogname : blogname,blogContent : blogContent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 