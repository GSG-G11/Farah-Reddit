const apiRouter=require('express').Router();
const { signUp ,logIn, AUTH,main,addPost, getPost, profileHandler, deletePost} = require('../controllers');




apiRouter.post('/signup',signUp)
apiRouter.post('/login',logIn)
apiRouter.use(AUTH)
apiRouter.get('/user',main)
apiRouter.post('/post',addPost)
apiRouter.get('/posts',getPost)
apiRouter.get('/profile/:id',profileHandler)
apiRouter.delete('/post',deletePost)

module.exports= apiRouter;