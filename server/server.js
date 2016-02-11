var express = require('express');
var bodyParser = require('body-parser');
var controllers = require('./controllers');
var auth = require('./middleware/passport');
var https = require('https');
var fs = require('fs');
var cors = require('cors')

var app = express();

// Body Parser
app.use(bodyParser.json());

// application settings
app.set('port', process.env.PORT || 3000);

// static route
app.use('/', express.static(__dirname + '/../public/client'));

// Passport
console.log('initialize');
auth.passportInitialize(app);

// Authinicating Tokens for all routes /api/*
auth.checkTonk(app);

// Error Handling for Invalid Tokens
app.use(function(err, req, res, next){
  if (err.constructor.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized');
  }
});
// Handle favicon request
app.get('/favicon.ico', function(req, res){
  fs.readFile(__dirname + '/../public/client/assets/pd_logo.png', function(err, data){
    if(err) console.log(err);
    res.status(200).send(data);
  });
})
// CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "*");
  
  next();
});

app.options('*', cors());

// load the router module
//app.use('/api', apiRouter);
controllers.connectToApi(app);


app.listen(app.get('port'), function(){
  console.log('Express listening on port 3000');
})

// HTTPS Server
// https.createServer({
//   key: fs.readFileSync(__dirname + '/key.pem'),
//   cert: fs.readFileSync(__dirname + '/cert.pem')
// }, app).listen(4000, function () {
//   console.log("listening on 4000")
// });

module.exports = app;

