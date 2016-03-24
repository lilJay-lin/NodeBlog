/**
 * Created by liljay on 2016/3/24.
 */
var express = require('express');
var router = express.Router();

/* 后台文章管理首页 */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/create', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/delete/:id', function(req, res, next) {
    res.send('respond with a resource');
});

router.get('/edit/:id', function(req, res, next) {
    res.send('respond with a resource');
});
/*文章置顶*/
router.get('/up/:id', function(req, res, next) {
    res.send('respond with a resource');
});

/*文章推荐*/
router.get('/recommend/:id', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
