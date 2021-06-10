const User = require("../models/user.model")

exports.create = (req,res) => {
    const user = new User({
        email:req.body.email,
        name:req.body.name,
        password:req.body.password,
        age:req.body.age,
        gender:req.body.gender,
        isActive:req.body.isActive,
        userType:req.body.userType,
    })
​
    user.save()
    .then((data)=>{res.send(data)})
    .catch((err)=>{res.send(err)})
​
}