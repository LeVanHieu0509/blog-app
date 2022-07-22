const router = require('express').Router();
const User = require('../models/User');
const ApiController = require('../src/app/controllers/ApiController');

//Regiter
router.post('/register', ApiController.register);

module.exports = router;
