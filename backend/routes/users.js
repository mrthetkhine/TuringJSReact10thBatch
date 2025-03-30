var express = require('express');
var router = express.Router();
var users = require('../controller/UserController');
/* GET users listing. */
/*
router.get('/', function(req, res, next) {
  console.log('User ',req.user);
  let obj = {
    id:1,
    name:"Hello"
  }
  res.json(obj);
});
*/
router.post('/register',users.register);
router.post('/login',users.login);

module.exports = router;
