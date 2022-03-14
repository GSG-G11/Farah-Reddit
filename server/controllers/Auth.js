const { jwtVerifyPromise, CustomedError } = require("../utils")


const AUTH=(req,res,next)=>{
const token = req.cookies.token
jwtVerifyPromise(token)
.then((decoded)=>{
req.userInfo=decoded

next()
})
.catch((err)=>{
   
       next(CustomedError(400,'not access'))
   
    
})

}
module.exports={AUTH}