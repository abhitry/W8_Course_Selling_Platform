const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const {ObjectId}=require("mongoose");
mongoose.connect("mongodb+srv://abhishekmasne2015:01092002%40Ai@cluster0.aj8wd.mongodb.net/course-app")

const userSchema=new Schema({
    email:{type:String,unique:true},
    password:String,
    FirstName:String,
    LastName:String
});
const adminSchema=new Schema({
    email:{type:String,unique:true},
    password:String,
    FirstName:String,
    LastName:String 
})
const courseSchema=new Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    createorId:ObjectId
})
const purchaseSchema=new Schema({
    userId:ObjectId,
    courseId:ObjectId
})

const userModel=mongoose.model("users",userSchema)
const courseModel=mongoose.model("courses",courseSchema)
const adminModel=mongoose.model("admins",adminSchema)
const purchaseModel=mongoose.model("purchases",purchaseSchema)

module.exports={userModel,courseModel,adminModel,purchaseModel}