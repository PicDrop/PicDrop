var options = {
  host: process.env.rethinkURI || '127.0.0.1'
};

module.exports = require('thinky')({ host: options.host});
