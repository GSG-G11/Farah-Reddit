const severError=(err,req,res,next)=>{
    if(err.status){
        res.json(JSON.parse(err.message).msg,err.status)
    }else{
        res.json('SERVER ERROR')
    }
    }
module.exports={severError};