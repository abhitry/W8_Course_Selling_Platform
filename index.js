const express = require('express');
const app=express();

const {userRouter}=require("./routes/user")
const {courseRouter}=require("./routes/courses")

app.use("/user",userRouter);
app.use("/courses",courseRouter);

app.listen(3000);