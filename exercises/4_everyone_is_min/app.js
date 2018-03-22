// include the Lo-Dash library
var _ = require("lodash");

var worker = function(data) {
  const hotTown = []
  const warmTown = []
  _.forEach(data, (town, key) => {
    if (_.every(town, (temp) => temp > 19)) {
      hotTown.push(key)
    } else if (_.some(town, (temp) => temp > 19)){
      warmTown.push(key)
    }
  })
  return { hot: hotTown,
           warm: warmTown }
};

// export the worker function as a nodejs module
module.exports = worker;
