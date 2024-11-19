const express = require('express');
const app=express();

app.post("/user/signup",function(req,res)
{
    res.json({
        msg:"signup endpoint"
    })
})
app.post("/user/signin",function(req,res)
{
    res.json({
        msg:"signin endpoint"
    })
})
app.get("/user/purchases",function(req,res)
{   
    res.json({
        msg:"purchases endpoint"
    })

})
app.get("/course/purchase",function(req,res)
{
    //need to pay for purchaseing course
    res.json({
        msg:"purchase endpoint"
    })    

})
app.get("/courses",function(req,res)
{
    res.json({
        msg:"courses endpoint"
    })    

})

app.listen(3000);