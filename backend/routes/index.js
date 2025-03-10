var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/hello',function (req,res,next){
  res.send('Hello from /hello router');
});
router.post('/api',function(req,res) {
  //console.log('Req headers ',req.rawHeaders);
  res.json({
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  })
});
module.exports = router;
