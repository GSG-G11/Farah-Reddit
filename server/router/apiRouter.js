const apiRouter=require('express').Router();
const { signUp ,logIn, AUTH,main,addPost, getPost, profileHandler, deletePost, getPostsComments,getSinglePost,addComments ,logOut} = require('../controllers');




apiRouter.post('/signup',signUp)
apiRouter.post('/login',logIn)
apiRouter.get('/posts',getPost)
apiRouter.get('/post/:id/comments',getPostsComments)
apiRouter.get('/post/:id',getSinglePost)

apiRouter.get('/profile/:id',profileHandler)
apiRouter.use(AUTH)
apiRouter.get('/user',main)
apiRouter.post('/comment',addComments)
apiRouter.post('/posts',addPost)
apiRouter.post('/deletepost',deletePost)
apiRouter.get('/logout',logOut)



module.exports= apiRouter;