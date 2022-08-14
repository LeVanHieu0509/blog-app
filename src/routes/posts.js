const PostsController = require('../app/controllers/PostsController');

const router = require('express').Router();

//post
router.use('/', PostsController.index);

module.exports = router;
