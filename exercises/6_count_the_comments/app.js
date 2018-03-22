// include the Lo-Dash library
var _ = require("lodash");

var worker = function(data) {
  return _.chain(data)
  .groupBy((entry) => entry.username)
  .map((item, name) => ({username: name, comment_count: _.size(item)}))
  .sortBy((counted) => -counted["comment_count"])
};

// export the worker function as a nodejs module
module.exports = worker;
