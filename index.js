const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();   

const app=express();

const {userRouter}=require("./routes/user")
const {courseRouter}=require("./routes/courses")
const {adminRouter}=require("./routes/admin")


app.use("/user",userRouter);
app.use("/courses",courseRouter);
app.use("/admin",adminRouter);

function main(){
    
    const dbConnectionString = process.env.DB_CONNECTION_STRING;
    mongoose.connect(dbConnectionString)
    app.listen(3000);
    console.log("listening on port 3000")
}
main();