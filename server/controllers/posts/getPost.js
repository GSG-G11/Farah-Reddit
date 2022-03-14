const { getPostsQuery } = require("../../database/quries")

const getPost=(req,res,next)=>{
getPostsQuery()
.then((data)=>res.json(data.rows))
.catch((err)=>{
    console.log(err)
    next(err)
})
}
module.exports={getPost}