const { getPostsQuery } = require("../../database/quries")

const getPost=(req,res,next)=>{
getPostsQuery()
.then((data)=>{
    console.log(data.rows.user_id)
    res.json(data.rows)})
.catch((err)=>{
    console.log(err)
    next(err)
})
}
module.exports={getPost}