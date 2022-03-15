

const CustomedError=(status ,msg)=>{
    const error = new Error(msg)
    error.status=status;
    return error
}
module.exports={CustomedError}
