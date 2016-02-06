function buildUserState(user) {
  var newUser = {userPics: {}, folders: {}, tags: {}, viewing:{ currentViewing:[]} };
  user.userPics.forEach(function(pic){
    var id = pic.id;
    newUser.userPics[id] = pic;
    if(newUser.folder[pic.folder]) {
      newUser.folder[pic.folder][id] = true;
    } else {
      newUser.folder[pic.folder] = { id: true };
    }
    user.tags.forEach(function(tag){
      if(newUser.tags[tag]){
        newUser.tags[tag][id] = true;
      } else {
        newUser.tags[tag] = { id: true };
      }
    });
    newUser.viewing.currentViewing.push(id);
  });
  return newUser;
};

module.exports = {
  buildUserState: buildUserState
};