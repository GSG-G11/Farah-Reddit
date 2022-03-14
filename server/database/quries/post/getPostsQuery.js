const {connection}=require('../../config/connection')
const getPostsQuery=()=>connection.query('SELECT username,user_id,posts.id,title,content,img FROM posts inner join users on posts.user_id =users.id')
module.exports={getPostsQuery};