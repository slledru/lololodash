var _ = require("lodash");

var worker = function(data) {
  const result = _.sortBy(data, (value) => {
    return value.quantity;
  })
  return result.reverse()
};


module.exports = worker
