const { addPostQuery, getUserNameQuery } = require("../../database/quries");
const { CustomedError } = require("../../utils");
const {postValidation }= require("../../validation");



const addPost=(req,res,next)=>{

    const userId =req.userInfo.id
 
    const {title,content,img} =req.body
    console.log(title,content,img)
        let post;
    postValidation({title,content,userId,img})
    .then(()=>addPostQuery(title,content,userId,img))
    /////can get name from req.userInfo.username
    .then((data)=>{
      
        post=data.rows[0];  
        return getUserNameQuery(data.rows[0].user_id)})
    .then((userdata)=>{  
        post.username=userdata.rows[0].username
        res.json(post)
    })
      
    .catch((err)=>{
        if(err.details){
            next(CustomedError(400,'invalid input'))
        }
        next(err)
    })

}
module.exports={addPost};