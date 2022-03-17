const { profilePage , signUpPage ,addPostPage ,homePage ,loginPage, postDetail, AUTH} = require('../controllers');

const pagesRouter=require('express').Router();


pagesRouter.get('/',loginPage)
pagesRouter.get('/signUp',signUpPage)
pagesRouter.get('/post/:id/show',postDetail)
pagesRouter.get('/home',homePage)
pagesRouter.get('/profile/:id',profilePage)
pagesRouter.use(AUTH)
pagesRouter.get('/addPost',addPostPage)



module.exports=pagesRouter;