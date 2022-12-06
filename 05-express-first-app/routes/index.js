var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/dilber/deneme', function(req, res, next) {
  res.send('dilber deneme');
});
router.get('/dilber/deneme/detay', function(req, res, next) {
  res.send('dilber deneme detay');
});

module.exports = router;
