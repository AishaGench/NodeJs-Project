const bodyParser = require("body-parser");
const express = require("express");
const port = 3000;
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => res.send('Welcome to Students Database!'))






app.listen(port, ()=>{
    console.log("the server is running at 3000!")
})