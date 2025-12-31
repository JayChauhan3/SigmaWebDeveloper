const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const blog = require('./routes/blog')
// app.use(express.static("public"))


app.use('/blog', blog)


//middleware 1
app.use((req, res, next) => {
    console.log(req.headers);
    req.harry="i am jc"
    
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    //   res.send("Hacked by Middleware 1")
    next()
})
//middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.harry="i am harry"
    next()
})

app.get('/', (req, res) => {
    res.send('Home!')
})
app.get('/contact', (req, res) => {
    res.send('contact!' +  req.harry)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})