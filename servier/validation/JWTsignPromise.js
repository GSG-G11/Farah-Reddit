require('env2')('.env')
const jwt=require('jsonwebtoken')
const JWTsignPromise=(obj)=>{
    return new Promise((resolve,reject)=>{
        jwt.sign(obj,process.env.SEKRET_KEY,(err,token)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(token)
            }

        })
    })
  

}
module.exports={
    JWTsignPromise
}