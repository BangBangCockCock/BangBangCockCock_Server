var express = require('express');
var router = express.Router();
const concertController = require('../controller/concert');
const likeController = require('../controller/like');

router.get('/banner', concertController.getBanner);
router.get('/like/:concertIdx', likeController.getLike);
module.exports = router;