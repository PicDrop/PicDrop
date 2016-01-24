var thinky = require('../utils/thinky');
var Picture = require('./pictureModel');
var type = thinky.type;

var User = thinky.createModel('User', {
  id: type.string(),
  username: type.string(),
  password: type.string(),
  firstName: type.string(),
  lastName: type.string()
});

module.exports = User;

User.hasMany(Picture, 'pictures', 'id', 'userId');