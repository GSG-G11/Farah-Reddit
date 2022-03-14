const apiRouter=require('express').Router();
const { signUp ,logIn, AUTH,main} = require('../controllers');



apiRouter.post('/signup',signUp)
apiRouter.post('/login',logIn)
apiRouter.use(AUTH)
apiRouter.get('/home',main)

module.exports= apiRouter;