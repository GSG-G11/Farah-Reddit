const {connection}=require('../../config/connection')
const getSinglePostQuery=(id)=>connection.query('SELECT username,posts.id,user_id,title,content,img FROM posts inner join users on posts.user_id=users.id WHERE posts.id =$1',[id])

module.exports={getSinglePostQuery}