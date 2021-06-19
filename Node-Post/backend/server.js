const express = require('express')
const app = express()
const port = 3000
const bodyParser =require("body-parser")
const cors = require("cors")


app.use(bodyParser.urlencoded({extended:true}));

app.listen(port, () => console.log(`The server is running on port ${port}`))