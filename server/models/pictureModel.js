var thinky = require('../utils/thinky');
var User = require('./userModel');
var type = thinky.type;

var Picture = thinky.createModel('Picture', {
  id: type.string(),
  thumb: type.string(),
  userId: type.string()
});

module.exports = Picture;

Picture.belongsTo(User, 'user', 'userId', 'id');
