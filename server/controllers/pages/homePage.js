const {join}=require('path')
const homePage=(req,res)=>{
res.sendFile(join(__dirname,'..','..','..','view','html','home.html'))
}
module.exports={homePage}