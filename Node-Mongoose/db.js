const mongoose = require("mongoose");
const connectionURL = "mongodb://127.0.0.1:27017"


mongoose.connect(connectionURL, {useNewUrlParser: true}, 
	(err) => {
	if (!err) {
		console.log("connection succesful!!")
	} else {
		console.log("connection failed!")
	} 
});

module.exports =mongoose;
