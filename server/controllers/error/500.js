const severError=(err,req,res,next)=>{
    if(err.status){
        res.status(err.status).json(err.message)
       
    }else{
        res.json('SERVER ERROR')
    }
    }
module.exports={severError};