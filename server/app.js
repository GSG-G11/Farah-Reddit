const { join }=require('path')
require('env2')('.env')
const express=require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser')
const {router}=require('./router');
const { pageNotFound ,severError} = require('./controllers');
const app =express();
app.set('port',process.env.port || 5000)
app.use(compression())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use(express.static(join(__dirname,'..','public')))
app.use(router)


    
app.use(pageNotFound)
app.use(severError)
module.exports=app;