const { getUserPost } = require("../database/quries");

const profileHandler=(req,res,next)=>{
  let userId= req.params.id;
  getUserPost(userId)
  .then((data)=>res.json(data.rows))
  .catch((err)=>next(err))


}
module.exports={profileHandler};