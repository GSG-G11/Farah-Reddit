
const Jwt=require('jsonwebtoken')
const jwtVerifyPromise=(token)=>{
    return new Promise((resolve ,reject)=>{
        Jwt.verify(token,process.env.SEKRET_KEY,(err,decoded)=>{
            if (err){
                reject(err)
            }
            else{
                resolve(decoded) 
            }
        })
    })
   

}
module.exports={jwtVerifyPromise}