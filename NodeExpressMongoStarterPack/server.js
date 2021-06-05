const express = require("express");
const app = express();
const port = 3000;
//const index = require("./index.html")
var bodyParser = require('body-parser');

app.set("view engine", "pug");

app.use(express.static('public'))
app.use(bodyParser.json());

const connectionString = "mongodb://127.0.0.1:27017"

const MongoClient = require('mongodb').MongoClient

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');
    const db = client.db('my-database');
    const quotesCollection = db.collection('my-collection')

    

    app.use(bodyParser.urlencoded({extended: true}));

    app.get("/", (req,res)=>{
        
        const cursor = db.collection('my-collection').find().toArray()
        .then(resDataBase=>{
            console.log(resDataBase);
            res.render("index", {quotes: resDataBase});
        })
        
    })

    app.post('/quotes', function(req, res) {
        // const { name, description } = req.body;
        // res.send(`Name ${name}, desc ${quotes}`);

        quotesCollection.insertOne(req.body)
        .then(result => {
            console.log(result);
            res.redirect('/');
        })
        .catch(error => console.error(error))
        
    });

    app.put('/quotes', (req, res) => {
        console.log(req.body);

        quotesCollection.findOneAndUpdate(
            { name: 'enes' },		// write it manually from your quotes
            {
              $set: {
                name: req.body.name,
                quote: req.body.quote
              }
            },
            {
              upsert: true
            }
          )
          .then(res => {
            res.json('Success')
           })
            .catch(error => console.error(error))
        
      })   
    

      app.listen(port, ((req,res)=>{
        console.log("The server is running on port ", port)
    }))

  })
  .catch(error => console.error(error))






// app.post("/quotes", (req, res)=>{
//     console.log(req)
// })

