const {join}=require('path')
const {readFileSync}=require('fs')
const { connection } = require('./connection')
const build=()=>{
    const sqlFile=readFileSync(join(__dirname,'data-test.sql')).toString()
    return connection.query(sqlFile)
}
module.exports={build}