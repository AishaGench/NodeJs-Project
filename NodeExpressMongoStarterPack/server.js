const express = require('express')
var bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient

const app =express();
const port = 3000;

app.get("/", (req,res)=>{
    // res.send("Hello world!");
    res.sendFile(__dirname + "/index.html")

}) 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.post('/quotes', function(req, res) {
  const { name, description } = req.body;
  res.send(`Name ${name}, desc ${description}`);
});


// app.post("/quotes",((req,res)=>{
//     console.log(req.body.name)
//     console.log(req.body.quote)
// }))



app.listen(port,((req,res)=>{
    console.log(`The server is working on ${port} port`)
}))