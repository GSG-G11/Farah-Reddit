

const CustomedError=(status ,msg)=>{
    const error = new Error(JSON.stringify({status,msg}))
    error.token=status;
    throw error
}
module.exports={CustomedError}
