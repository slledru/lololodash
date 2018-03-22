// include the Lo-Dash library
var _ = require("lodash");

var worker = function(data) {
  const newList = _.forEach(data, (element, key, list) => {
    if (element.population > 1.0) {
      element.size = 'big'
    } else if (element.population > 0.5) {
      element.size = 'med'
    } else {
      element.size = 'small'
    }
    const city = list[key]
    return { '`${key}`': element }
  })
  return newList
};

// export the worker function as a nodejs module
module.exports = worker;
