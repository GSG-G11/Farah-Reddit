const {join}=require('path')
const signUpPage=(req,res)=>{
    res.sendFile(join(__dirname,'..','..','..','view','html','signUp.html'))

}
module.exports={signUpPage}