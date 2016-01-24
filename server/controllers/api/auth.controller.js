// require database user model
var User = require('../../models/userModel');

module.exports = {

userCreate: function(req, res){
  console.log('auth userCreate called');
  res.send('User Created - Test Only');
},
userLogin: function(req, res){},
userLogout: function(req, res){},
userFacebookLogin: function(req, res){},

}