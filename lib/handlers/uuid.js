var express = require('express');
var router = express.Router();

var activityLoader = require('../activity_loader').activityLoader;

// asynchronously load activities into object to be used as lookup hash
// we use this hash to find by uuid (an alternative way to load activities)
//   - KV
activityLoader.load();

// uuidRegex from here: http://stackoverflow.com/questions/19989481/how-to-determine-if-a-string-is-a-valid-v4-uuid
var uuidRegex = /[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}/
var uuidRouteRegex = new RegExp("^\/(" + uuidRegex.source + ")$", "i");

router.get(uuidRouteRegex, function(request, response) {
  var uuid = request.path.match(uuidRouteRegex)[1];
  console.log("UUID:", uuid);
  var details = activityLoader.activities[uuid];

  if (details) {
    console.log('UUID', uuid, 'maps to', details.uri);
    response.redirect(details.uri);
  } else {
    response.status(404).send("file not found");
  }
});

module.exports = router;
