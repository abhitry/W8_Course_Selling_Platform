const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();   

const app=express();

const {userRouter}=require("./routes/user")
const {courseRouter}=require("./routes/courses")
const {adminRouter}=require("./routes/admin")


app.use("/user",userRouter);
app.use("/courses",courseRouter);
app.use("/admin",adminRouter);

async function main(){
    await mongoose.connect(process.env.DB_CONNECTION_STRING)
    app.listen(3000);
    console.log("listening on port 3000")
}
main();