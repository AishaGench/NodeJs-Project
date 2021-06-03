/*** Required External Modules */
const express = require("express");
const path = require("path")


/*** App Variables */
const app =express();
const port = 8000;



/***  App Configuration */

app.set("view engine",'pug')

app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join(__dirname, "public")));


/*** Routes Definitions */
  app.get('/',(req,res)=>{
      //res.send('WHATS-UP: Food For Devs')
      res.render("index.pug",{title:"Home"})
  })
  app.get("/user", (req, res) => {
    res.render("user", {title:"Profile", userProfile:{nickname:"Auth0"}});
 });
 app.get("/logout", (req, res) => {
    res.redirect("/");
 });
 


/*** Server Activation */
app.listen(port,()=>{
    console.log(`The server is running at port ${port}`)
})

