const { addPostQuery } = require("../database/quries");
const { CustomedError } = require("../utils");
const {postValidation }= require("../validation");


const addPost=(req,res,next)=>{
    const {title,content,userId,img} =req.body
 
    postValidation({title,content,userId,img})
    .then(()=>addPostQuery(title,content,userId,img))
    .then((data)=>res.json(data.rows[0]))
    .catch((err)=>{
        if(err.details){
            next(CustomedError(400,'invalid input'))
        }
        console.log(err)
        next(err)
    })

}
module.exports={addPost};