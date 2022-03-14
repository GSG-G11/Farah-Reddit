const apiRouter=require('express').Router();
const { signUp ,logIn, AUTH,main,addPost} = require('../controllers');




apiRouter.post('/signup',signUp)
apiRouter.post('/login',logIn)
apiRouter.use(AUTH)
apiRouter.get('/home',AUTH,main)
apiRouter.post('/post',addPost)

module.exports= apiRouter;