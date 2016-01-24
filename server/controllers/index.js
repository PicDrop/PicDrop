var apiRouter = require('./api');

exports.connectToApi = function(app) {
  app.use('/api', apiRouter);
}