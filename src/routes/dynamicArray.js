const DynamicArrayController = require('../app/controllers/DynamicArrayController');
const router = require('express').Router();

//thuattoan
router.use('/', DynamicArrayController.index);

module.exports = router;
