const { CustomedError } = require("./CustomedError")


const checkifOwners=(UserIdFromCookies,UserId)=>{
    return new Promise((reslove,reject)=>{
        if(UserIdFromCookies == UserId){
            reslove(true)
        }else{
           reject(CustomedError(400,'not allow'))
        }    
    })
}
module.exports={checkifOwners}