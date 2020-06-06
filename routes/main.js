var express = require('express');
var router = express.Router();
const concertController = require('../controller/concert');

router.get('/banner', concertController.getBanner);

module.exports = router;