/*** Required External Modules */
const express = require("express");
const path = require("path")


/*** App Variables */
const app =express();
const port = 8000;



/***  App Configuration */




/*** Routes Definitions */
  app.get('/',(req,res)=>{
      res.send('WHATS-UP: Food For Devs')
  })


/*** Server Activation */
app.listen(port,()=>{
    console.log(`The server is running at port ${port}`)
})

