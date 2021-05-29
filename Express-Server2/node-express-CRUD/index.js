const express = require('express')
const app = express()

app.use(express.json());
app.use("/api/users", require("./routes/api/users"));

app.listen(3000, () => console.log(`Server is running on port!`))