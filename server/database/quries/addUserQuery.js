const {connection}=require('../config/connection')
const addUserQuery=(hashPassword,username,email)=>{
    connection.query('INSERT INTO users (password,username,email) VALUES ($1,$2,$3)',[hashPassword,username,email])
}
module.exports={addUserQuery}