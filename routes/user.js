const express=require("express");
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { userModel } = require("./db.js");
const {z}=require("zod");
const Router=express.Router;
let userRouter=Router();
let { JWT_USER_SECRET }=require("./courses.js")
let {userMiddleware}=require("../middlewares/user.js")
userRouter.use(express.json())

userRouter.post("/signup",async function(req,res)
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
    await userModel.create({
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
userRouter.post("/signin",async function(req,res)
{
    const {email,password}=req.body;
    const user=await userModel.findOne({
        email:email,
    })
    try{
        const correctuser=await bcrypt.compare(password,user.password)
        if(user && correctuser)
        {
            const token=jwt.sign({
                id:user._id
            },JWT_USER_SECRET)
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
userRouter.get("/purchases",userMiddleware,function(req,res)
{   
    res.json({
        msg:"purchases endpoint"
    })

})


module.exports=({userRouter:userRouter})