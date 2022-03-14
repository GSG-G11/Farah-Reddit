const {connection}=require('../../config/connection')
const getPostsQuery=()=>connection.query('SELECT * FROM posts')
module.exports=getPostsQuery;