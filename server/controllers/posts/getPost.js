const { getPostsQuery } = require("../../database/quries")

const getPost=(req,res,next)=>{
    const token = req.cookies.token
getPostsQuery()
.then((data)=>{
    res.json(data.rows)})
.catch((err)=>{
    next(err)
})
}
module.exports={getPost}