const express = require('express');
const app = express();

app.get('/', (request, response)=>{response.send('Hello World!!!')})
app.get('/about', (request, response)=>{response.send('Hello from ABOUT')})
app.get('/hobbies', (request, response)=>{response.send('<ul><li>Art</li><li>Coffee</li><li>Coding</li></ul>')})
app.get("/friends", (req, res) => {
    res.json(["Sinem","Gizem","Enes","Ahmet","Bibi","Aysegul"]);
   });
   

app.listen(3000, ()=>console.log('Server running on port'))

  