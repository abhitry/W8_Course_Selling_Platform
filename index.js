const express = require('express');
const mongoose = require('mongoose');


const app=express();

const {userRouter}=require("./routes/user")
const {courseRouter}=require("./routes/courses")
const {adminRouter}=require("./routes/admin")


app.use("/user",userRouter);
app.use("/courses",courseRouter);
app.use("/admin",adminRouter);

function main(){
    
    mongoose.connect("mongodb+srv://abhishekmasne2015:01092002%40Ai@cluster0.aj8wd.mongodb.net/course-app")
    app.listen(3000);
    console.log("listening on port 3000")
}
main();