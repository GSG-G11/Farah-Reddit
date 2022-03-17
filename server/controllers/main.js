const { CustomedError,jwtVerifyPromise } = require("../utils")


const main=(req,res,next)=>{
   
    if(!req.cookies.token){
   throw CustomedError(401,"Unauthrizeddd")
        
    }
    else{
       
        const token = req.cookies.token
  
        jwtVerifyPromise(token)     
        .then((decoded) => {
          
            req.userInfo = decoded    
         
            res.json(req.userInfo)
        })
        .catch((err) =>next(CustomedError(401, "Unauthrizeddd")))
       /// res.json({id:req.userInfo.id,username:req.userInfo.username})
    }
 
    
}
module.exports={main}