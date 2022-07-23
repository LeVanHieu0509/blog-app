const router = require('express').Router();
const ApiController = require('../app/controllers/ApiController');

//Regiter
router.post('/register', ApiController.register);

module.exports = router;
