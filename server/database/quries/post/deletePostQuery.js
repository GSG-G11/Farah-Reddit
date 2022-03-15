const {connection}=require('../../config/connection')
const deletePostQuery=(id,user_id)=> connection.query('DELETE FROM posts where id = $1 AND user_id=$2',[id,user_id])
module.exports={deletePostQuery};