const {connection}=require('../../config/connection')
const getUserNameQuery=(userId)=>connection.query('SELECT * FROM users WHERE id=$1',[userId])
module.exports={getUserNameQuery};