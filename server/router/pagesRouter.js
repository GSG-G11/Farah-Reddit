const { profilePage , signUpPage ,addPostPage ,homePage ,loginPage} = require('../controllers');

const pagesRouter=require('express').Router();
pagesRouter.get('/profile/:id',profilePage)
pagesRouter.get('/signUp',signUpPage)
pagesRouter.get('/addPost',addPostPage)
pagesRouter.get('/home',homePage)
pagesRouter.get('/',loginPage)

module.exports=pagesRouter;