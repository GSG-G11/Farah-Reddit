const { addCommentsQuery } = require("../../database/quries")

const addComments=(req,res,next)=>{
    const{content,userId,postId}=req.body;
    console.log(content,userId,postId)
addCommentsQuery(content,userId,postId).then((data)=>res.json(data.rows)).catch((err)=>console.log(err))
}
module.exports={addComments}