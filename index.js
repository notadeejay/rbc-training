var path = require('path');
global.rootPath = path.resolve(__dirname);

var express = require('express');

var statusPageRouter   = require('./lib/handlers/status');
var uuidPagesRouter    = require('./lib/handlers/uuid');
var homepageRouter     = require('./lib/handlers/home');
var articlePagesRouter = require('./lib/handlers/article');

var app = express();

app.set('port', (process.env.PORT || 5001));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(statusPageRouter);
app.use(homepageRouter);
app.use(uuidPagesRouter);
app.use(articlePagesRouter);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
