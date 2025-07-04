var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const ourLogger = require('./middleware/logger');
const auth = require('./middleware/auth');
var cors = require('cors')

const mongoose = require('mongoose');
const { db } = require('./config/database');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var todosRouter = require('./routes/todos');
const movieRouter = require('./routes/movies');
const reviewRouter = require('./routes/reviews');
var tokenVerifier = require('./routes/token_verifier');
var app = express();
app.use(cors());
mongoose.connect(db).then(() => console.log('MongoDB connected!'))
    .catch(err => console.log(err));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.use(logger('dev'));
app.use(ourLogger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/verify',auth.verifyUserToken,tokenVerifier);
app.use('/api/movies',auth.verifyUserToken,movieRouter);
app.use('/api/reviews',auth.verifyUserToken,reviewRouter);
app.use('/api/todos', todosRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
