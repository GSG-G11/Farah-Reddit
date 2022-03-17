const { CustomedError,jwtVerifyPromise } = require("../utils")
const main=(req,res,next)=>res.json({id:req.userInfo.id,username:req.userInfo.username})  
module.exports={main}