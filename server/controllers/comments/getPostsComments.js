const { getCommentsQuery } = require("../../database/quries")
const getPostsComments=(req,res,next)=>{
const {id}= req.params
getCommentsQuery(id)
.then(data=>res.json(data.rows))
.catch((err)=>next(err))
}
module.exports={getPostsComments}