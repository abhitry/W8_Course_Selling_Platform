const express=require("express");
const Router=express.Router;
let courseRouter=Router();
let {userMiddleware}=require("../middlewares/user.js")
courseRouter.use(express.json())
const { purchaseModel, courseModel } =require("./db.js")


courseRouter.get("/purchase",userMiddleware,async function(req,res)
{
    const userId=req.userId;
    const courseId=req.body.courseId;
    //need to pay for purchaseing course
    await purchaseModel.create({
        userId:userId,
        courseId:courseId
    })
    res.json({
        msg:"you have succesfully purchassed the course "
    })    

})
courseRouter.get("/preview",async function(req,res)
{
    const courses=await courseModel.find({});
    res.json({
        courses 
    })    

})

module.exports=({courseRouter:courseRouter})