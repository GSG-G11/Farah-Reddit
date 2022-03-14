

const CustomedError=(status ,msg)=>{
    const error = new Error(JSON.stringify({status,msg}))
    error.status=status;
    return error
}
module.exports={CustomedError}
