const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

mongoose.connect('mongodb://localhost:27017/contac')
.then(console.log("Login to mongoDB successful"))
  .catch(console.error);

const app =express();
app.get("/",(req,res)=>{
    res.send("okay");
})
app.use("/api/v1", userRoutes);

app.listen(5001, ()=>{
    console.log("server running at port number 5001");
})