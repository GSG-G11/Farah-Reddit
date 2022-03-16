const {join}=require('path')
const postDetail=(req,res)=>{
    console.log(req.params.id)
res.sendFile(join(__dirname,'..','..','..','view','html','postDetails.html'))
}
module.exports= { postDetail}