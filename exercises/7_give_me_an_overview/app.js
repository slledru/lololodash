var _ = require("lodash");

var worker = function(data) {
  const result = _.chain(data)
    .groupBy((entry) => entry.article)
    .map((group, key) => {
      const total = _.reduce(group, (acc, sale) => acc + sale.quantity, 0)
      const newEntry = { article: +key, total_orders: total}
      console.log(newEntry)
      return newEntry
    })
    .sortBy((entry) => -entry['total_orders'])
  return result
};

// export the worker function as a nodejs module
module.exports = worker;
