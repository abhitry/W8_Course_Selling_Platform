const express=require("express");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Router=express.Router;
let adminRouter=Router();
const {z}=require("zod");
let {adminModel}=require("./db.js");
adminRouter.use(express.json())
let JWT_ADMIN_SECRET="zxcvbnm,12345678"
adminRouter.use(express.json())
//adminRouter.use(adminMiddleware);

adminRouter.post("/signup",async function(req,res)
{

    const email=req.body.email;
    const password=req.body.password;
    const FirstName=req.body.FirstName;
    const LastName=req.body.LastName;

    const requiredbody=z.object({
        email:z.string().min(5).max(100).email(),
        password:z.string().min(8).max(12),
        FirstName:z.string(),
        LastName:z.string()
    })
    const parsewithsuccess=requiredbody.safeParse(req.body);
    if(!parsewithsuccess.success){
        return res.json({
            msg:"invalid format",
            error:parsewithsuccess.error
        })
    }
    const hashedpassword=await bcrypt.hash(password,5);
    try{
    await adminModel.create({
        email:email,
        password:hashedpassword,
        FirstName:FirstName,
        LastName:LastName
    })}
    catch(e){
        return res.json({
            msg: "Failed to connect to the database",
            error: e.message,
        })
    }
    
    res.json({
        msg:"signup endpoint"
    })
})
adminRouter.post("/signin",async function(req,res)
{
    const {email,password}=req.body;
    const user=await adminModel.findOne({
        email:email,
    })
    try{
        const correctuser=await bcrypt.compare(password,user.password)
        if(user && correctuser)
        {
            const token=jwt.sign({
                id:user._id
            },JWT_ADMIN_SECRET)
            res.json({
                token:token
            })
        }
        else{
            res.status(4403).json({
                msg:"Incorrect Credentials for signin endpoint"
            })
        }
    }
    catch(e)
    {
        return res.status(500).json({
            msg: "Invalid password - passwrod not matched",
            error: e.message,
        });
    }
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