var _ = require("lodash");

var worker = function(data) {
  return _.filter(data, {active: true})
};


module.exports = worker
