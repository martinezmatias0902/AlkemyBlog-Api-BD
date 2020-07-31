const router = require('express').Router();

//Mandar todas las peticiones /blog al apiBlogRouter
const apiBlogsRouter = require('./api/blogs');

router.use('/blog', apiBlogsRouter)


module.exports = router;