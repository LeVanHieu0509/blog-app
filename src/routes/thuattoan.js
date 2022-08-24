const ThuatToanController = require('../app/controllers/ThuatToanController');
const router = require('express').Router();

//thuattoan
router.use('/getPosts', ThuatToanController.getPosts);
router.use('/bubbleSort', ThuatToanController.bubbleSort);
router.use('/insertionSort', ThuatToanController.insertionSort);
router.use('/quickSort', ThuatToanController.quickSort);
router.use('/mergeSort', ThuatToanController.mergeSort);
router.use('/heapSort', ThuatToanController.heapSort);

router.use('/', ThuatToanController.index);

module.exports = router;
