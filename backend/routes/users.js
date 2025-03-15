var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('User ',req.user);
  let obj = {
    id:1,
    name:"Hello"
  }
  res.json(obj);
});

module.exports = router;
