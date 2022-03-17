const { addCommentsQuery } = require("../../database/quries")

const addComments=(req,res,next)=>{
    const{content,postId}=req.body;
    const userId =req.userInfo.id
addCommentsQuery(content,userId,postId).then((data)=>{
    data.rows[0].username= req.userInfo.username
    res.json(data.rows[0])}).catch((err)=>next(err))
}
module.exports={addComments}