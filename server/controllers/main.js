const main=(req,res)=>{
 
    res.json({id:req.userInfo.id,username:req.userInfo.username})
}
module.exports={main}