const path = require('path');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/hello',function (req,res,next){
  console.log('first hello');
  //res.send('Hello from /hello router');
  next();
},function (req,res,next)
{
  console.log('another hello');
  next();
});
router.get('/download',function (req,res,next){
  res.download('./public/hello.txt');
});
router.get('/sendFile/:name',function (req,res,next){
  console.log('Send File route');
  const options = {
    root: path.join(__dirname,'../', '/public'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  const fileName = req.params.name
  console.log('Filename ',fileName);
  res.sendFile(fileName, options, (err) => {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
});
router.get('/secret',function (req,res,next){
  console.log('/secret');
  res.redirect('/login');
});
router.get('/unknown',function (req,res,next){
  let obj = {
    id:1,
    name : "Something"
  }
  //res.type('application/json');
  //res.status(400).send(JSON.stringify(obj));
  res.status(400).json(obj);
});
router.get('/login',function (req,res,next){
  console.log('/login');
  res.render('login', { title: 'Login' });
});
router.get('/hello',function (req,res,next){
  console.log('second hello');
  res.send('Hello 2 from /hello router');
});
router.get('/ab?cd', (req, res) => {
  res.send('ab?cd')
})
router.get('/api/:id',function (req,res,next){
  console.log('Params ',req.params);
  res.json({
    id:req.params.id
  })
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
