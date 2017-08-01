var Article = require('./article');
var fs = require('fs');
var path = require('path');

var getModules = function(dataPath, requestPath, viewContext) {

  var getArticles = function(modulePath, moduleDir, requestPath, viewContext, module) {
    return fs.readdirSync(modulePath).reduce(function (articles, fileName) {
      var filePath = path.join(modulePath, fileName);
      if (fileName.indexOf('.') === 0 || !fs.lstatSync(filePath).isFile()) {
        return articles;
      }
      var fileNameParsed = path.parse(fileName);
      var fileNameParts = fileNameParsed.name.split('__');
      var article = {
        module: module,
        path: filePath,
        url:  Article.urlForArticle(moduleDir, fileNameParsed.name),
        title: decodeURIComponent(fileNameParts[1]),
        category:  decodeURIComponent(fileNameParts[2])
      };
      article.current = (article.url === requestPath)
      articles.push(article);

      if (!viewContext.currentArticle && (article.current || requestPath === '/')) {
        viewContext.currentArticle = article;
        article.current = true;
      } else if (!viewContext.nextArticle && viewContext.currentArticle) {
        viewContext.nextArticle = article;
      }
      if (article.current) {
        module.current = true;
      }
      return articles;
    }, []);
  }

  return fs.readdirSync(dataPath).reduce(function (modules, moduleDir) {
    var modulePath = path.join(dataPath, moduleDir);
    if (moduleDir.indexOf('.') === 0 || !fs.lstatSync(modulePath).isDirectory()) return modules;
    var module = {};
    modules.push(module);
    module.current = false;
    module.name = moduleDir;
    module.path = modulePath;
    module.articles = getArticles(modulePath, moduleDir, requestPath, viewContext, module);

    return modules;
  }, []);
}

module.exports.getModules = getModules;