const express=require("express");
const Router=express.Router;
let adminRouter=Router();

adminRouter.use(adminMiddleware);

adminRouter.post("/signup",function(req,res)
{
    res.json({
        msg:"signup endpoint"
    })
})
adminRouter.post("/signin",function(req,res)
{
    res.json({
        msg:"signin endpoint"
    })
})
adminRouter.post("/create",function(req,res)
{
    res.json({
        msg:"signin endpoint"
    })
})
adminRouter.put("/course",function(req,res)
{
    res.json({
        msg:"signin endpoint"
    })
})
adminRouter.get("/course/bulk",function(req,res)
{
    res.json({
        msg:"signin endpoint"
    })
})
module.exports=({adminRouter:adminRouter})