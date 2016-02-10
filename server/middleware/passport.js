var DB = require('../models/userModel');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var LocalStrategy = require('passport-local').Strategy;
var jwtSuperSecretCode = 'super-secret-key';
var validateJwt = expressJwt({secret: jwtSuperSecretCode});
var bcrypt = require('bcrypt');

var googleID, googleSecret; 
if(process.env.PRODUCTION){
  googleID = process.env.GOOGLE_ID;
  googleSecret = process.env.GOOGLE_SECRET;
}else{
  var secrets = require('../config/secrets');
  googleID = secrets.google.clientID;
  googleSecret = secrets.google.secret;
}

passport.use(new GoogleStrategy({
  clientID: googleID,
  clientSecret: googleSecret,
  callbackURL: 'http://127.0.0.1:3000/api/auth/google/return',
  passReqToCallback: true
  },
  function(req, accessToken, refreshToken, profile, done){
    console.log('in google strategy');
    process.nextTick(function(){
      console.log(req.user);
      DB.User.get(req.user.id).run().then(function(user){
        user.google.id = profile.id;
        user.google.token = accessToken;
        user.google.refresh = refreshToken;
        user.save().then(function(user){
          done(null, user);
        });
      });
    });
  }
));

passport.use(new LocalStrategy(
  { usernameField: 'email' },
  function(email, password, done) {
    DB.User.filter({
      email: email
    }).then(function (data) {
      var user = data[0];
      if (user) {
        bcrypt.compare(password, user.password, function(err, res){
          if (res === true) {
            DB.User.get(user.id).getJoin({userPics: true, folders: true})
            .run().then(function(user){   
              return done(null, user);
            })
            .error(function(error){
              console.log(error);
            });
          } else {
            done(null, false, { message: 'Incorrect password' });
          }
        });
      } else {
        done(null, false, { message: 'No User Found' });
      }
    }).error(function(err) {
      // Todo Handle Error
    });
}));


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(username, done) {
  if (username === username) {
    done(null, username);
  } else {
    done('No user with username ' + username);
  }
});

module.exports = {
  passportInitialize: function(app) {
    app.use(passport.initialize());
  },
  isAuth: function (req, res, next) {
    console.log("isAuth?", req.user)
    res.send(req.user)
  },
  checkTonk: function(app) {
    app.use('/api', expressJwt({secret: jwtSuperSecretCode})
      .unless({path: ['/api/auth/login', '/api/auth/signup',]}));
  },
  passport: passport
};
