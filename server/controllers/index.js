const { signUp }=require('./signUp')
const {logIn}=require('./login')
const {AUTH}=require('./Auth')
const {main}=require('./main')
const {pageNotFound}=require('./404')
const  {severError}=require('./500')
module.exports={
    signUp,
    logIn,
    AUTH,
    main,
    pageNotFound,
    severError
}