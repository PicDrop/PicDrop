var express = require('express');
var bodyParser = require('body-parser');
//var apiRouter = require('./controllers/api/index');
var controllers = require('./controllers');
var app = express();

// application settings
app.set('port', process.env.PORT || 3000);



// static route
app.use('/', express.static(__dirname + '/../public'));




// load the router module
//app.use('/api', apiRouter);
controllers.connectToApi(app);




app.listen(app.get('port'), function(){
  console.log('Express listening on port 3000');
})


