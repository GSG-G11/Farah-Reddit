const apiRouter=require('express').Router();
const { signUp } = require('../controllers');
const {logIn} =require('../controllers')


apiRouter.post('/signup',signUp)
apiRouter.post('/login',logIn)


module.exports= apiRouter;