var express = require('express');
var router = express.Router();
const concertController = require('../controller/concert');
const likeController = require('../controller/like');

router.get('/banner', concertController.getBanner);
router.get('/like/:concertIdx', likeController.getLike);
router.put('/like', likeController.updateLike);
router.get('/:concertIdx', concertController.readOneConcert);
router.get('/',concertController.readeAllConcert);
router.get('/filter/:category', concertController.getCategory);
router.get('/likeData',concertController.readMostLike);

module.exports = router;