const{connection}=require('../config/connection')
const hasUserExist=(username)=>{
    return connection.query('SELECT * FROM users WHERE username =$1',[username])

}
module.exports={hasUserExist}