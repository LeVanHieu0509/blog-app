const LinkListController = require('../app/controllers/LinkListController');

const router = require('express').Router();

//post
router.use('/', LinkListController.index);

module.exports = router;
