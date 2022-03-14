const main=(req,res)=>{
    res.json(req.userInfo.username)

}
module.exports={main}