const express = require('express')

const uuid = require("uuid");

const users = require("../../node-express-CRUD/UsersData")

const router=express.Router();

router.get("/",(req,res)=>{res.json(users)})

router.get("/:id",(req,res)=>{
    const variable = users.some((user) => user.id === parseInt(req.params.id));

    if(variable){
        res.json(users.filter(item=>{
            item.id === parseInt(req.params.id)
        }))
    } else {
        res.sendStatus(404)
    }
})
router.post("/",(req,res)=>{
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
    };
    users.push(newUser);
    res.json(users);
    if(!newUser.name || !newUser.email){
        res.sendStatus(404)
    }

})

router.put('/:id',(req,res)=>{
    foundUser.name = req.body.name ? req.body.name : foundUser.name;
    foundUser.email = req.body.email ? req.body.email : foundUser.email;
    res.json({ msg: "User updated", user });
})
router.delete("/:id", (req,res)=>{
    users = users.filter((user) => user.id !== parseInt(req.params.id));
    
    res.json({msg: "User deleted",  users });

})

module.exports = router;
