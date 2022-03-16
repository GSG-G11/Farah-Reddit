const {connection}=require('../../config/connection')
const getCommentsQuery=(id)=>connection.query('SELECT username,content, comments.id,post_id,user_id FROM comments inner join users on comments.user_id =users.id WHERE post_id=$1',[id])
module.exports={getCommentsQuery}