var thinky = require('../utils/thinky');
var type = thinky.type;

var User = thinky.createModel('User', {
  id: type.string(),
  folders: type.object().default(function(){ return {}; }),
  email: type.string(),
  password: type.string(),
  status: type.boolean().default(function(){ return false; }),
  tags: type.array()
});
var Picture = thinky.createModel('Picture', {
  id: type.string(),
  storageId: type.string(),
  thumbnail: type.string(),
  title: type.string(),
  userId: type.string(),
  originalUrl: type.string(),
  storedUrl: type.string(),
  storedSecureUrl: type.string(),
  note: type.string(),
  domain: type.string(),
  tags: type.array(),
  folder: type.string()
});
// var Folder = thinky.createModel('Folder', {
//   id: type.string(),
//   googleId: type.string(),
//   name: type.string(),
//   userId: type.string(),
// });

// User.hasMany(Folder, 'folders', 'id', 'userId');
User.hasMany(Picture, 'userPics', 'id', 'userId');
Picture.belongsTo(User, 'user', 'userId', 'id');
// Picture.belongsTo(Folder, 'folder', 'folderId', 'id');
// Folder.hasMany(Picture, 'pics', 'id', 'folderId')
// Folder.belongsTo(User, 'user', 'userId', 'id');

module.exports = {
  User: User,
  Picture: Picture,
  // Folder: Folder
};
