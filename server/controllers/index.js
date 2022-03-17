const { signUp } = require('./Auth/signUp')
const { logIn } = require('./Auth/login')
const { AUTH } = require('./Auth/Auth')
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
const {getPostsComments}=require('./comments/getPostsComments')
const {getSinglePost}=require('./posts/getSinglePost')
const { addComments } = require('./comments/addComments')
const { postDetail }=require('./pages/postDetails')
const {logOut} =require('./Auth/logOut')

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
    loginPage,
    getPostsComments,
    getSinglePost,
    addComments,
    postDetail,
    logOut
    
  
}