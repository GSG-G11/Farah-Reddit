const {join}=require('path')
const loginPage=(req,res)=>{
res.sendFile(join(__dirname,'..','..','..','view','index.html'))
}
module.exports={loginPage}