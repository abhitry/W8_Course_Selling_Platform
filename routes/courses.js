const express=require("express");
const Router=express.Router;
let courseRouter=Router();
courseRouter.use(express.json())

courseRouter.get("/purchase",function(req,res)
{
    //need to pay for purchaseing course
    res.json({
        msg:"purchase endpoint"
    })    

})
courseRouter.get("/preview",function(req,res)
{
    res.json({
        msg:"preview endpoint"
    })    

})

module.exports=({courseRouter:courseRouter})