// include the Lo-Dash library
var _ = require("lodash");

var worker = function(data) {
  const template = 'Hello <%= name %> (logins: <%= login.length %>)'
  return _.template(template)(data);
};

// export the worker function as a nodejs module
module.exports = worker;
