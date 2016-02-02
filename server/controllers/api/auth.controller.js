var thinky = require('../../utils/thinky');
var DB = require('../../models/userModel');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var passport = require('../../middleware/passport');
var jwtSuperSecretCode = 'super-secret-key';
var validateJwt = expressJwt({secret: jwtSuperSecretCode});


module.exports = {
  userCreate: function(req, res){
    console.log(req.body.email, req.body.password);
    thinky.r.table('User').filter({ email: req.body.email }).run()
      .then(function(user){
        if(user.length){
          res.status(401);
          res.send('Email is already registered');
        }else{
          DB.User.save({
            email: req.body.email,
            password: req.body.password
          })
          .then(function(data){
            var token = jwt.sign({id: data.id}, jwtSuperSecretCode);
            res.status(200);
            res.send({token: token});
          })
          .error(function (err) {
            res.status(501);
            res.send("error in creating user");
            console.log("err ", err)
            // todo handle error
          });
        }
      })
      .error(function(err){
        console.log(err);
      });

  },
  userLogin: function(req, res, next){
    passport.passport.authenticate('local', function(err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.status(404).send(info);
      }

      req.logIn(user, function(err) {
        if (err) {
          return next(err);
        }
        var token = jwt.sign({id: user.id}, jwtSuperSecretCode);
        user.token = token;
        console.log(user);
        // return res.status(200).send({ token: token });

      });
    })(req, res, next);
  },
  
  userLogout: function(req, res){
    req.logout();
    res.status(200).send({ success: true });
  },
  userFacebookLogin: function(req, res){},
};
