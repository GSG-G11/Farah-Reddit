const {connection} =require('../config/connection')
const EmailhasToken=(email,username)=>connection.query('SELECT * FROM users WHERE email=$1 OR username=$2', [email,username])


module.exports={EmailhasToken}