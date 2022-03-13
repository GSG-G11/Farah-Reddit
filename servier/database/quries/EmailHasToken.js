const {connection} =require('../config/connection')
const EmailhasToken=(email)=>connection.query('SELECT * FROM users WHERE email=$1', [email])


module.exports={EmailhasToken}