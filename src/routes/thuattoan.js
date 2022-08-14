const ThuatToanController = require('../app/controllers/ThuatToanController');
const router = require('express').Router();

//thuattoan
router.use('/getPosts', ThuatToanController.getPosts);
router.use('/bubbleSort', ThuatToanController.bubbleSort);
router.use('/', ThuatToanController.index);

module.exports = router;
