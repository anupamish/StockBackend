
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
let cors = require('cors');

var index = require('./routes/index');
var api = require('./routes/api');
var news = require('./routes/news');
var graphs = require('./routes/graphs');
var recentgraphs = require('./routes/recentgraphs');
var ticker = require('./routes/ticker');
var auto=require('./routes/auto');
var fbURL = require('./routes/fbURL');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', index);
app.use('/api', api);
app.use('/news',news);
app.use('/graphs',graphs);
app.use('/recentgraphs',recentgraphs);
app.use('/ticker',ticker);
app.use('/auto',auto);
app.use('/fbURL',fbURL);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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


var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Server running at http://127.0.0.1:' + port + '/');
});
