

const CustomedError=(status ,msg)=>{
    const error = new Error(JSON.stringify({status:400,msg:"INVALID INPUY"}))
    error.token=status;
    throw error
}
module.exports={CustomedError}
