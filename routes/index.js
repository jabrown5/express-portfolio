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

router.get('/good-cat', function(req, res, next) {
    res.render('good-cat-game', { });
});

router.get('/nfl-arrests', function(req, res, next) {
    res.render('nfl-arrests', { });
});

router.get('/potty-check', function(req, res, next) {
    res.render('potty-check', { });
});

router.get('/question-game', function(req, res, next) {
    res.render('question-game', { });
});



module.exports = router;
