const { getSinglePostQuery } = require("../../database/quries")

const getSinglePost=(req,res)=>{

    const{id}= req.params
    getSinglePostQuery(id).then(data=>res.json(data.rows)).catch((err)=>next(err))

}
module.exports={getSinglePost}