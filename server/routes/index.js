var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/data', function(req, res, next) {
  res.json({"title":"Hello World!!!"})
});

module.exports = router;
