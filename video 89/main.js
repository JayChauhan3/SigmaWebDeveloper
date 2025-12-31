const express = require('express')
const blog = require('./routes/blog');

const app = express()
const port = 3000
app.use(express.static('public'))
app.use('/blog', blog)

app.get('/', (req, res) => {
    console.log('get request');  
  res.send('Hello World!')
}).post('/', (req, res) => {
  console.log('hey post request');
  res.send('Hello World post!')
}).put('/', (req, res) => {
  console.log('hey put request');
  res.send('Hello World put!')
}).delete('/', (req, res) => {
  console.log('hey delete request');
  res.send('Hello World delete!')
})

app.get('/index', (req, res) => {
  console.log('hey index html');
  res.sendFile('templates/index.html',{root:__dirname})
})
app.get('/api', (req, res) => {
  res.json({a:1,b:2,c:3,d:4})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
