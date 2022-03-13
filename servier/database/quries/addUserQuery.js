const {connection}=require('../config/connection')
const addUserQuery=(hashPassword,email,username)=>{
    connection.query('INSERT INTO users (password,email,username) VALUES ($1,$2,$3)',[hashPassword,email,username])
}
module.exports={addUserQuery}