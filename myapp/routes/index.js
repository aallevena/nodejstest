var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Life's a box of chocolates", name: 'Forrest Gump' });
});

/*GET FORREST PAGE*/
router.get('/gump', function(req, res) {
  var name = req.param('name','Forrest Gump');
  res.render('gump', {name:name});
});
module.exports = router;
