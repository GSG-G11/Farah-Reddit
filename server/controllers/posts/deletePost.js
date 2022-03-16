const { deletePostQuery } = require("../../database/quries")
const {  checkifOwners} = require("../../utils")

const deletePost=(req,res,next)=>{
    const {postId ,UserId}=req.body
    console.log({postId,UserId})

   checkifOwners(req.userInfo.id,UserId)
   .then(()=>deletePostQuery(postId,UserId))
   .then((data)=>res.json(data.rows))
    .catch(err=>{    
        next(err)
    })

}
module.exports={deletePost}