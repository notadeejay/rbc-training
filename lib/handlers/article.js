var fs = require('fs');
var path = require('path');
var express = require('express');
var yamlFront = require('yaml-front-matter');
var marked = require('marked');

var Module = require('../module');

var router = express.Router();

var todosRegExp = /<p>(.{0,2}TODO)/g;
var todosRegExpReplacement = '<p class="todo">$1';

var qaRegExp = /^(<[^>]+>)([QAIC]): ?(.*)/;
var qaTagClasses = {
  Q: 'question',
  A: 'option',
  I: 'answer',
  C: 'answer correct'
};

var highlightTodos = function(markup) {
  return markup.replace(todosRegExp, todosRegExpReplacement);
}

var markQuestionsAndAnswers = function(markup) {
  var tag;
  var option;
  markup = markup.split('\n').map(function (line) {
    var matches = qaRegExp.exec(line);
    if (!matches) {
      return line;
    }
    var newTag = matches[2];
    var closingTag = '';
    var openingTag = '';
    var labelTag = '';
    if (tag) {
      closingTag = '</div>';
    }
    if (tag !== newTag) {
      openingTag = '<div class="' + qaTagClasses[matches[2]] + '">';
    }
    if (newTag === 'Q') {
      option = null;
      labelTag = '<b class="paragraph-label">Q:</b> ';
    } else if (newTag === 'A') {
      if (option) {
        option++;
      } else {
        option = 97;
      }
      labelTag = '<b class="paragraph-label">' + String.fromCharCode(option) + '.</b> '
    } else if (newTag === 'I') {
      labelTag = '<b class="paragraph-label">&#10008;</b> ';
    } else if (newTag === 'C') {
      labelTag = '<b class="paragraph-label">&#10004;</b> ';
    }
    tag = newTag;
    return closingTag + openingTag + matches[1] + labelTag + matches[3];
  }).join('\n');
  if (tag) {
    markup += '</div>';
  }
  return markup;
}


router.use(function(request, response) {
  var viewContext = {};

  var dataPath = path.join(global.rootPath, 'data');
  viewContext.modules = Module.getModules(dataPath, request.path, viewContext);

  if (viewContext.currentArticle) {
    yaml = yamlFront.loadFront(fs.readFileSync(viewContext.currentArticle.path, 'utf8'));
    viewContext.currentArticle.content = highlightTodos(markQuestionsAndAnswers(marked(yaml.__content)));
    viewContext.currentArticle.data = yaml;
    viewContext.marked = marked;
  } else {
    viewContext.currentArticle = {
      title: 'Not Found',
      content: '<p>The file you requested could not be found.</p>'
    };
    response.statusCode = 404;
  }
  viewContext.nextArticle = viewContext.nextArticle || false;
  response.render('article', viewContext);
});

module.exports = router;
