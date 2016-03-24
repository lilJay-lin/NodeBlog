/**
 * Created by liljay on 2016/3/24.
 */
var express = require('express');
var router = express.Router();

/* 后台首页 */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
