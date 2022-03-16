const { profilePage } = require('../controllers');

const pagesRouter=require('express').Router();
pagesRouter.get('/profile/:id',profilePage)

module.exports=pagesRouter;