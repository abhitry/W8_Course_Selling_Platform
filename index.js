const express = require('express');
const app=express();

const {userRouter}=require("./routes/user")
const {courseRouter}=require("./routes/courses")
const {adminRouter}=require("./routes/admin")


app.use("/user",userRouter);
app.use("/courses",courseRouter);
app.use("/admin",adminRouter);

app.listen(3000);