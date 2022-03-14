const { jwtVerifyPromise, CustomedError } = require("../utils")


const AUTH=(req,res,next)=>{
const token = req.cookies.token
jwtVerifyPromise(token)
.then((decoded)=>{
req.userInfo=decoded

next()
})
.catch(()=>{
    try{
        CustomedError(400,'not allow to access')
    }
    catch(e){
        res.json(JSON.parse(e.message).msg)
    }
    
})

}
module.exports={AUTH}