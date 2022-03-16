const {join}=require('path')
const addPostPage=(req,res)=>{
res.sendFile(join(__dirname,'..','..','..','view','html','addPost.html'))
}

module.exports={addPostPage}