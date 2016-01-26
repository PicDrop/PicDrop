var express = require('express');
var bodyParser = require('body-parser');
//var apiRouter = require('./controllers/api/index');
var controllers = require('./controllers');
var auth = require('./controllers/api/auth.controller');
var app = express();



// Body Parser
app.use(bodyParser.json());

// application settings
app.set('port', process.env.PORT || 3000);



// static route
app.use('/', express.static(__dirname + '/../public'));


// Passport
auth.passportInitialize(app);

// Authinicating Tokens for all routes /api/*
auth.checkTonk(app);

// Error Handling for Invalid Tokens
app.use(function(err, req, res, next){
  if (err.constructor.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized');
  }
});


// load the router module
//app.use('/api', apiRouter);
controllers.connectToApi(app);




app.listen(app.get('port'), function(){
  console.log('Express listening on port 3000');
})


