const express = require('express')
const app =express();
const port = 3000;

app.get('/', (req,res)=>{
    res.setEncoding("Hello world!")
}) 

app.listen(port,(req,res=>{
    console.log(`The server is working on ${port} port`)
}))