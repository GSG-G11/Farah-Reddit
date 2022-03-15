const severError=(err,req,res,next)=>{
    if(err.status){
        res.json(err.message)
    }else{
        res.json('SERVER ERROR')
    }
    }
module.exports={severError};