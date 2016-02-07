function buildUserState(user) {
  var newUser = {userPics: {}, folders: {}, tags: {} };
  user.userPics.forEach(function(pic){
    var id = pic.id;
    newUser.userPics[id] = pic;
    if(newUser.folders[pic.folder]) {
      newUser.folders[pic.folder][id] = true;
    } else {
      newUser.folders[pic.folder] = {}
      newUser.folders[pic.folder][id] = true;
    }
    if(user.tags !== undefined){
      user.tags.forEach(function(tag){
        if(newUser.tags[tag]){
          newUser.tags[tag][id] = true;
        } else {
          newUser.tags[tag] = {};
          newUser.tags[tag][id] = true;
        }
      });
    }
  });
  return newUser;
};

module.exports = {
  buildUserState: buildUserState
};