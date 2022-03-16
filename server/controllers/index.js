const { signUp } = require('./signUp')
const { logIn } = require('./login')
const { AUTH } = require('./Auth')
const { main } = require('./main')
const { pageNotFound } = require('./error/404')
const { severError } = require('./error/500')
const { addPost } = require('./posts/addPost')
const { getPost } = require('./posts/getPost')
const { profileHandler } = require('./profile')
const {deletePost}=require('./posts/deletePost')
const{profilePage}=require('./pages/profilePage')
const { signUpPage } = require('./pages/signUpPage')
const {homePage}=require('./pages/homePage')
const {addPostPage}=require('./pages/addPost')
const {loginPage}=require('./pages/loginPage')

module.exports = {
    signUp,
    logIn,
    AUTH,
    main,
    pageNotFound,
    severError,
    addPost,
    getPost,
    profileHandler,
    deletePost,
    signUpPage,
    profilePage,
    homePage,
    addPostPage,
    loginPage
  
}