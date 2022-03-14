const apiRouter=require('express').Router();
const { signUp ,logIn, AUTH,main,addPost, getPost, profileHandler} = require('../controllers');




apiRouter.post('/signup',signUp)
apiRouter.post('/login',logIn)
apiRouter.use(AUTH)
apiRouter.get('/home',AUTH,main)
apiRouter.post('/post',addPost)
apiRouter.get('/posts',getPost)
apiRouter.get('/profile/:id',profileHandler)

module.exports= apiRouter;