const bcrypt =require('bcrypt')
const hashingPassword=(password)=>{
    return bcrypt.hash(password,10);
}
module.exports={hashingPassword};