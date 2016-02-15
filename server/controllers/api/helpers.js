var DB = require('../../models/userModel');

function buildUserState(user) {
  console.log(user);
  var newUser = {profile: {}, userPics: {}, tags: {} };
  user.userPics.forEach(function(pic){
    var id = pic.id;
    newUser.userPics[id] = pic;
    if(pic.tags !== undefined){
      pic.tags.forEach(function(tag){
        if(!newUser.tags[tag]){
          newUser.tags[tag] = {};
        }
        newUser.tags[tag][id] = true;
      });
    }
  });
  newUser.folders = user.folders;
  newUser.profile.email = user.email;
  console.log(newUser);
  return newUser;
};

module.exports = {
  buildUserState: buildUserState
};