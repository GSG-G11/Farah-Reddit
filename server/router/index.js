const router =require('express').Router();
const apiRouter=require('./apiRouter')
const pagesRouter=require('./pagesRouter')
router.use('/api/v1',apiRouter)
router.use(pagesRouter)


module.exports={router,apiRouter,pagesRouter
};