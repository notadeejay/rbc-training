var fs = require('fs');
var path = require('path');
var express = require('express');
var Article = require('../article');

var dataPath = path.join(__dirname, '../../data');

var todoTextRegExp = /^.{0,2}TODO ?([^:]*): (.*)/;

var router = express.Router();

router.get("/status", function (request, response) {
  var viewContext = {};
  viewContext.todos = [];
  fs.readdirSync(dataPath).forEach(function (moduleDir) {
    var modulePath = path.join(dataPath, moduleDir);
    if (moduleDir.indexOf('.') === 0 || !fs.lstatSync(modulePath).isDirectory()) return;
    fs.readdirSync(modulePath).forEach(function (fileName) {
      var filePath = path.join(modulePath, fileName);
      if (fileName.indexOf('.') === 0 || !fs.lstatSync(filePath).isFile()) return;
      fs.readFileSync(filePath, 'utf8').split('\n').forEach(function (line) {
        var matches = todoTextRegExp.exec(line);
        var fileNameParsed = path.parse(fileName);
        var fileNameParts = fileNameParsed.name.split('__');
        if (matches) {
          viewContext.todos.push({
            module: moduleDir,
            assignment: matches[1],
            description: matches[2],
            articleTitle: decodeURIComponent(fileNameParts[1]),
            url: Article.urlForArticle(moduleDir, fileNameParsed.name)
          });
        }
      });
    });
  });
  response.render('status', viewContext);
});

module.exports = router;
