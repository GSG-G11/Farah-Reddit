const apiRouter=require('express').Router();
const { signUp ,logIn, AUTH,main,addPost, getPost, profileHandler, deletePost, getPostsComments,getSinglePost,addComments} = require('../controllers');




apiRouter.post('/signup',signUp)
apiRouter.post('/login',logIn)
apiRouter.get('/posts',getPost)
apiRouter.get('/post/:id/comments',getPostsComments)
apiRouter.get('/post/:id',getSinglePost)
apiRouter.get('/user',main)
apiRouter.get('/profile/:id',profileHandler)
apiRouter.use(AUTH)
apiRouter.post('/comment',addComments)
apiRouter.post('/post',addPost)
apiRouter.post('/deletepost',deletePost)



module.exports= apiRouter;