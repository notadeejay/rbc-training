var fs        = require('fs');
var path      = require('path');
var yamlFront = require('yaml-front-matter');
var jsYaml    = require('js-yaml');
var uuid      = require('uuid');
var article   = require('./article');

exports.activityLoader = {

  activities: {},

  load: function(config) {
    console.log('Loading activities and generating UUIDs as necessary');

    var _this = this;

    var dataPath  = path.join(global.rootPath, 'data');

    fs.readdir(dataPath, function (err, dirs) {
      dirs.forEach(function(moduleDir) {

        var modulePath = path.join(dataPath, moduleDir);
        if (moduleDir.indexOf('.') === 0 || !fs.lstatSync(modulePath).isDirectory()) return;

        fs.readdir(modulePath, function (err, files) {
          files.forEach(function(fileName) {
            var filePath = path.join(modulePath, fileName);
            if (fileName.indexOf('.') === 0 || !fs.lstatSync(filePath).isFile()) return;

            var parsedFileName = path.parse(fileName);

            // markdown files only, yo
            if (parsedFileName.ext != '.md') return;

            fs.readFile(filePath, 'utf8', function(err, fileContent) {
              var yaml = yamlFront.loadFront(fileContent);
              var id;

              if (typeof(yaml) == 'string') {
                throw new Error('ERROR: file', filePath, 'has invalid YAML frontmatter. Please fix and restart server');
              }

              if (yaml.uuid) {
                id = yaml.uuid
                if (_this.activities[id]) {
                  throw new Error('Duplicate uuid ' + yaml.uuid + ' found! Cannot proceed as this can be v dangerous, yo!');
                }
              } else {
                // throw new Error('whoa!');
                var id = uuid.v4();
                console.log('HEADS UP! I\'m adding YAML frontmatter to file ' + filePath + ' with uuid: ' + id + ' (it did not have one!)');


                var markdown = yaml.__content
                delete yaml['__content'];
                yaml.uuid = id;

                var content = '---\n' + jsYaml.safeDump(yaml) + '---\n';
                content += markdown;

                fs.writeFile(filePath, content, 'utf8', function(err) {
                  if (err) {
                    throw new Erorr('Unexpected file write error. Stopping everything to be safe');
                  }
                });
              }
              _this.activities[id] = {
                filePath: path.join(moduleDir, fileName),
                uri: article.urlForArticle(moduleDir, parsedFileName.name)
              }
            });
          });
        });
      });
    });
  }
}


if (require.main === module) {
  exports.activityLoader.load();
}