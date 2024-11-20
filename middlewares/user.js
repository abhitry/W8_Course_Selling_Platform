const jwt = require('jsonwebtoken');
const { JWT_USER_SECRET }=require("../config.js")

function userMiddleware(req,res,next)
{
    const token=req.headers.token;
    const decodedinfo=jwt.verify(token,JWT_USER_SECRET);
    if(decodedinfo)
    {
        req.userId=decodedinfo.id;
        next();
    }
    else{
        res.status(403).json({
            msg:"You are not signed in"
        })

    }
}
modeule.exports={userMiddleware:userMiddleware}