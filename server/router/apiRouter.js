const apiRouter=require('express').Router();
const { signUp ,logIn, AUTH,main,addPost, getPost, profileHandler, deletePost, getPostsComments,getSinglePost,addComments} = require('../controllers');




apiRouter.post('/signup',signUp)
apiRouter.post('/login',logIn)
apiRouter.use(AUTH)
apiRouter.get('/user',main)
apiRouter.post('/post',addPost)
apiRouter.get('/posts',getPost)
apiRouter.get('/profile/:id',profileHandler)
apiRouter.post('/deletepost',deletePost)
apiRouter.get('/post/:id/comments',getPostsComments)
apiRouter.get('/post/:id',getSinglePost)
apiRouter.post('/comment',addComments)


module.exports= apiRouter;