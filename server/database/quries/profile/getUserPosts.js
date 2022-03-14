const {connection}=require('../../config/connection')
const getUserPost=(userId)=> connection.query('SELECT * FROM posts WHERE user_id = $1',[userId])
module.exports={getUserPost};