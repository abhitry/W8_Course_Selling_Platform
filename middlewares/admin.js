const jwt = require('jsonwebtoken');
const { JWT_ADMIN_SECRET }=require("../config.js")

function adminMiddleware(req,res,next)
{
    const token=req.headers.token;
    const decodedinfo=jwt.verify(token,JWT_ADMIN_SECRET);
    if(decodedinfo)
    {
        req.adminId=decodedinfo.id;
        next();
    }
    else{
        res.status(403).json({
            msg:"You are not signed in"
        })

    }
}
modeule.exports={adminMiddleware:adminMiddleware}