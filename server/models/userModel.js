var thinky = require('../utils/thinky');
var type = thinky.type;

var User = thinky.createModel('User', {
  id: type.string(),
  username: type.string(),
  password: type.string(),
  firstName: type.string(),
  lastName: type.string()
});
var Picture = thinky.createModel('Picture', {
  id: type.string(),
  thumb: type.string(),
  userId: type.string()
});

User.hasMany(Picture, 'pictures', 'id', 'userId');
Picture.belongsTo(User, 'user', 'userId', 'id');

module.exports = {
  User: User,
  Picture: Picture
};
