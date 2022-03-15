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
    deletePost
}