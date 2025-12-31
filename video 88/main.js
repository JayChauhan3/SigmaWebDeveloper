const express = require('express')
const app = express()
const port = 3001
app.use(express.static('public'))     //public the selected file

app.get('/', (req, res) => {
    res.send('Hello World23666ghjkl;m,./6666!')
})
app.get('/about', (req, res) => {
    res.send('about us')
})
app.get('/contact', (req, res) => {        //http://127.0.0.1:3001/contact
    res.send('contact me')
})
app.get('/blog', (req, res) => {
    res.send('hello blog')              //http://127.0.0.1:3001/blog
})
app.get('/blog/:slug', (req, res) => {

    console.log(req.params);
    console.log(req.query);
    res.send(`hello ${req.params.slug}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
