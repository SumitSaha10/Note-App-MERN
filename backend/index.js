const mongoose = require("mongoose");
const express = require('express')
const connectToMongo = require('./db')
var cors = require("cors")
const path = require("path")
connectToMongo()


const app = express()
const port = 6000


app.use(cors())
app.use(express.json())


app.use("/api/auth",require("./routes/auth"))
app.use("/api/notes",require("./routes/notes"))

//Static files
app.use(express.static(path.join(__dirname,'../build')))
app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,'../build/index.html'))
})

app.listen(port, () => {
  console.log(`iNotebook app backend listening on port http://localhost:${port}`)
})