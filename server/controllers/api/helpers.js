function buildUserState(user) {
  var newUser = {profile: {}, userPics: {}, folders: {}, tags: {} };
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
  if(user.folders && user.folders.length){
    user.folders.forEach(function(folder){
      if(!newUser.folders[folder.name]){
        newUser.folders[folder.name] = {};
      }
    });
  }
  newUser.profile.email = user.email;
  return newUser;
};

module.exports = {
  buildUserState: buildUserState
};