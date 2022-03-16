const { addCommentsQuery } = require("../../database/quries")

const addComments=(req,res,next)=>{
    const{content,userId,postId}=req.body;

addCommentsQuery(content,userId,postId).then((data)=>{
    data.rows[0].username= req.userInfo.username
    res.json(data.rows[0])}).catch((err)=>console.log(err))
}
module.exports={addComments}