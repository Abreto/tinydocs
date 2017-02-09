var express = require('express');
var router = express.Router();
var pages = require('../include/pages')();
var marked = require('marked');

/* GET home page. */
router.get('/', function(req, res, next) {
  var pl = pages.get_page_list();
  var ct = marked(pages.get_page_content('home'));
  res.render('index', { title:'home' , pages: pl , content: ct });
});

router.get('/:title', function(req, res, next) {
  var pl = pages.get_page_list();
  var ct = marked(pages.get_page_content(req.params.title));
  res.render('index', { title: req.params.title , pages: pl , content: ct });
});

router.get('/:title/edit', function (req, res, next) {
  var ct = pages.get_page_content(req.params.title);
  res.render('edit', { title: req.params.title , content: ct });
});

router.post('/:title/edit', function (req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  pages.put_page_content(req.params.title, req.body.content);
  res.end('Submitted.');
});

module.exports = router;
