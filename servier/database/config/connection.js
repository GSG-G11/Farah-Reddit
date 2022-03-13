require('env2')('.env')
const { Pool } = require('pg')
const { DEV_DB_URL, NODE_ENV, DATABASE_URL, TEST_DB_URL } = process.env
let db_url = "";
let ssl=false;
switch (NODE_ENV) {
    case "dev":
        db_url = DEV_DB_URL;
        break;
    case "test":
        db_url = TEST_DB_URL;
        break;
    default:
        db_url = DATABASE_URL;
        ssl = {
            rejectUnauthorized: false,
        };

}
if(db_url){
    throw new Error('data base does not exist')
}
const options={
    connectionString:db_url,
    ssl,
}
const connection = new Pool(options)
module.exports={connection};