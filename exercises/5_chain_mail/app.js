// include the Lo-Dash library
var _ = require("lodash");

var worker = function(data) {
  const result = _.chain(data)
    .map((word) => `${word}chained`)
    .map((word) => word.toUpperCase())
    .sortBy()
  return result
};

// export the worker function as a nodejs module
module.exports = worker;
