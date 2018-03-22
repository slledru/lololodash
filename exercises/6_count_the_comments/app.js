// include the Lo-Dash library
var _ = require("lodash");

var worker = function(data) {
  const groups = _.groupBy(data, (entry) => entry.username)
  const result = []
  _.forEach(groups, (group) => {
    const username = group[0].username
    const count = _.size(group)
    result.push({ username: username, comment_count: count})
  })
  return _.sortBy(result, (entry) => -entry.comment_count)
};

// export the worker function as a nodejs module
module.exports = worker;
