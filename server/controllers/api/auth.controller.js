var thinky = require('../../utils/thinky');
var DB = require('../../models/userModel');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var passport = require('../../middleware/passport');
var jwtSuperSecretCode = 'super-secret-key';
var validateJwt = expressJwt({secret: jwtSuperSecretCode});
var buildUserState = require('./helpers').buildUserState;
var bcrypt = require('bcrypt');


module.exports = {
  userCreate: function(req, res){
    console.log(req.body.email, req.body.password);
    thinky.r.table('User').filter({ email: req.body.email }).run()
      .then(function(user){
        if(user.length){
          res.status(401);
          res.send('Email is already registered');
        }else{
          bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(req.body.password, salt, function(err, hash){
              DB.User.save({
                email: req.body.email,
                password: hash
              })
              .then(function(data){
                var token = jwt.sign({id: data.id}, jwtSuperSecretCode);
                res.status(201);
                res.send({token: token});
              })
              .error(function (err) {
                res.status(501);
                res.send("error in creating user");
                console.log("err ", err)
                // todo handle error
              });
            });
          });
        }
      })
      .error(function(err){
        console.log(err);
      });
  },
  userLogin: function(req, res, next){
    passport.passport.authenticate('local', function(err, user, info) {
      console.log('in authenticate');
      console.log(user);
      if (err) return next(err);
      if (!user) return res.status(401).send(info);

      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        var token = jwt.sign({id: user.id}, jwtSuperSecretCode);
        user = buildUserState(user);
        user.token = token;
        return res.status(200).send(user);
      });
    })(req, res, next);
  },
  googleSuccess: function(req, res){
    console.log(' in google success');
    console.log(req.user);
    var user = buildUserState(req.user);
    user.token = jwt.sign({id: user.id}, jwtSuperSecretCode);
    console.log('in google final', user);
    res.status(200).send(user);
  },
  userLogout: function(req, res){
    req.logout();
    res.status(200).send({ success: true });
  },
  userFacebookLogin: function(req, res){},
};
