var express = require('express');
var router = express.Router();
var pages = require('../include/pages')();
var marked = require('marked');

/* GET home page. */
router.get('/', function(req, res, next) {
  var pl = pages.get_page_list();
  var ct = marked(pages.get_page_content('home'));
  res.render('index', { pages: pl , content: ct });
});

router.get('/:title', function(req, res, next) {
  var pl = pages.get_page_list();
  var ct = marked(pages.get_page_content(req.params.title));
  res.render('index', { pages: pl , content: ct });
});

router.get('/:title/edit', function (req, res, next) {
  ;
});

module.exports = router;
