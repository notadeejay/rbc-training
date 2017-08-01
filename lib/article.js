function urlForArticle(moduleDir, articleName) {
  return '/' + encodeURIComponent(moduleDir) + '/' + encodeURIComponent(articleName);
}

module.exports.urlForArticle = urlForArticle;