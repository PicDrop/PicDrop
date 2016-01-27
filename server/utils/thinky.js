var options = {
  host: process.env.rethinkURI || 'localhost'
};

module.exports = require('thinky')(options);
