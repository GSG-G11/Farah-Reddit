const { profilePage , signUpPage ,addPostPage ,homePage ,loginPage} = require('../controllers');

const pagesRouter=require('express').Router();
pagesRouter.get('/profile/:id',profilePage)
pagesRouter.get('/signUp',signUpPage)
pagesRouter.get('/logIn',loginPage)
pagesRouter.get('/addPost',addPostPage)
pagesRouter.get('/home',homePage)

module.exports=pagesRouter;