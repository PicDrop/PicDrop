var thinky = require('../utils/thinky');
var type = thinky.type;

var User = thinky.createModel('User', {
  id: type.string(),
  google: {
    id: type.string(),
    token: type.string(),
    refresh: type.string()
  },
  email: type.string(),
  password: type.string(),
  folders: type.object(),
  status: type.boolean(),
  tags: type.object()
});
var Picture = thinky.createModel('Picture', {
  id: type.string(),
  storageId: type.string(),
  thumbnail: type.string(),
  title: type.string(),
  userId: type.string(),
  originalUrl: type.string(),
  folder: type.string(),
  note: type.string(),
  domain: type.string(),
  tags: type.array()
});
var Folder = thinky.createModel('Folder', {
  id: type.string(),
  googleId: type.string(),
  name: type.string(),
  userId: type.string(),
})

User.hasMany(Folder, 'folders', 'id', 'userId');
User.hasMany(Picture, 'userPics', 'id', 'userId');
Picture.belongsTo(User, 'user', 'userId', 'id');
Picture.belongsTo(Folder, 'folder', 'folderId', 'id');
Folder.hasMany(Picture, 'pics', 'id', 'folderId')
Folder.belongsTo(User, 'user', 'userId', 'id');

module.exports = {
  User: User,
  Picture: Picture
};
// var User = thinky.createModel('User', {
//   id: type.string(),
//   email: type.string(),
//   password: type.string(),
// });
// var Picture = thinky.createModel('Picture', {
//   id: type.string(),
//   thumb: type.string(),
//   url: type.string(),
//   userId: type.string(),
//   domain: type.string()
// });
// var Folder = thinky.createModel('Folder', {
//   id: type.string(),
//   name: type.string(),
// });
// var Tag = thinky.createModel('Tag', {
//   id: type.string(),
//   name: type.string()
// });

// User.hasMany(Picture, 'userPics', 'id', 'userId');
// User.hasMany(Folder, 'folders', 'id', 'userId');
// User.hasMany(Tag, 'tags', 'id', 'userId');
// Picture.belongsTo(User, 'user', 'userId', 'id');
// Picture.hasAndBelongsToMany(Tag, 'tags', 'id', 'id');
// Picture.belongsTo(Folder, 'folder', 'folderId', 'id');
// Folder.hasMany(Picture, 'pictures', 'id', 'picId');
// Folder.belongsTo(User, 'user', 'userId', 'id');
// Tag.belongsTo(User, 'user', 'userId', 'id');


// module.exports = {
//   User: User,
//   Picture: Picture,
//   Folder: Folder,
//   Tag: Tag
// };
