var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
    res.render('about', { });
});

router.get('/contact', function(req, res, next) {
    res.render('contact', { });
});

router.get('/data', function(req, res, next) {
    res.render('data', { });
});

router.get('/coding', function(req, res, next) {
    res.render('coding', { });
});

router.get('/blog', function(req, res, next) {
    res.render('blog', { });
});

module.exports = router;
