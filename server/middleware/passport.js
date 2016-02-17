var DB = require('../models/userModel');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var jwtSuperSecretCode = 'super-secret-key';
var validateJwt = expressJwt({secret: jwtSuperSecretCode});
var bcrypt = require('bcrypt');

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
      .unless({path: ['/api/auth/login', '/api/auth/signup', '/api/auth/google', '/api/auth/google/return']}));
  },
  passport: passport
};
