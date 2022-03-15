const { deletePostQuery } = require("../../database/quries")
const {  checkifOwners} = require("../../utils")

const deletePost=(req,res,next)=>{
    const {postId ,UserId}=req.body

   checkifOwners(req.userInfo.id,UserId)
   .then(()=>deletePostQuery(postId,UserId))
   .then(()=>res.json('successful deleted'))
    .catch(err=>{    
        next(err)
    })

}
module.exports={deletePost}