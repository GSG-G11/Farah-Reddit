const {join}=require('path')
const {readFileSync}=require('fs')
const {connection}=require('./connection')
function build(){
    const sql =readFileSync(join(__dirname,'data.sql')).toString()
    return connection.query(sql)
}
module.exports={build}