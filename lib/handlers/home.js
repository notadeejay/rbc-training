var express = require('express');
var router = express.Router();
var path = require('path');
var marked = require('marked');
var fs = require('fs');
var Module = require('../module');


router.get('/', function(request, response) {
  console.log('home page!');
  var viewContext = {
    nextArticle: false,
    currentArticle: {
      module: null,
      path: null,
      url:  '/',
      title: 'README',
      category:  'Welcome Doc'
    }
  };

  var dataPath = path.join(global.rootPath, 'data');
  modules = Module.getModules(dataPath, request.path, viewContext);

  var filePath = path.join(global.rootPath, 'README.md');

  viewContext.currentArticle.content = marked(fs.readFileSync(filePath, 'utf8'));
  response.render('article', viewContext);
});

module.exports = router;
