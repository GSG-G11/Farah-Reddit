const {join}=require('path')
const profilePage=(req,res)=>{
    res.sendFile(join(__dirname,'..','..','..','view','html','profile.html'))
}
module.exports={profilePage}