const {connection}=require('../config/connection')
const addPostQuery=(title,content,userId,img)=>connection.query('INSERT INTO posts (title , content ,user_id ,img)VALUES ($1,$2,$3,$4) RETURNING *',[title,content,userId,img])

module.exports={addPostQuery};