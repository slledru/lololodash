// include the Lo-Dash library
var _ = require("lodash");

var worker = function(data) {
  if (data.length === 1) {
    return {
      average: data[0].income,
      underperform: data,
      overperform: []
    }
  } else {
    const total = _.reduce(data, (last, entry) => {
      last += entry.income
      return last
    }, 0)
    const average = total / data.length
    const result = {average: average}
    result.underperform = _.chain(data)
      .filter((entry) => entry.income <= average)
      .sortBy((entry) => entry['income'])
    result.overperform = _.chain(data)
      .filter((entry) => entry.income > average)
      .sortBy((entry) => entry['income'])
    return result
  }
};

// export the worker function as a nodejs module
module.exports = worker;
