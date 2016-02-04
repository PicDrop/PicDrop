var DB = require('../models/userModel');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var jwtSuperSecretCode = 'super-secret-key';
var validateJwt = expressJwt({secret: jwtSuperSecretCode});

function arrToObj(oldArr, key){
  var newObj = {};
  oldArr.forEach(function(item){
    newObj[item[key]] = item
  });
  return newObj;
}

passport.use(new LocalStrategy(
  { usernameField: 'email' },
  function(email, password, done) {
    DB.User.filter({
      email: email
    }).then(function (data) {
      var user = data[0];
      if (user) {
        if (password === user.password) {
          DB.User.get(user.id).getJoin({userPics: true})
          .run().then(function(user){
            delete user.password;
            delete user.email;
            user.folders = arrToObj(user.folders, 'name');
            user.tags = arrToObj(user.tags, 'name');
            user.userPics = arrToObj(user.userPics, 'id');
            return done(null, user);
          });
        } else {
          done(null, false, { message: 'Incorrect password' });
        }
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
    app.use('/api', expressJwt({secret: jwtSuperSecretCode}).unless({path: ['/api/auth/login', '/api/auth/signup']}));
  },
  passport: passport
};
