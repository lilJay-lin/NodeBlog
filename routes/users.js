var express = require('express');
var router = express.Router();

/* 作者详情页 */
router.get('/:username', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
