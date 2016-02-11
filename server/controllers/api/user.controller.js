var DB = require('../../models/userModel');
var passport = require('../../middleware/passport');
var buildUserState = require('./helpers').buildUserState;
var bcrypt = require('bcrypt');

module.exports = {
  createDrop: function(req, res){

    DB.User.get(req.user.id).getJoin({userPics: true, folders: true}).run().then(function(user){
      console.log(req.body);
      var newPic = DB.Picture({
        originalUrl: req.body.url,
        thumbnail: req.body.url,
        domain: req.body.domain,
        status: false,
        title: req.body.title,
        tags: req.body.tags,
        note: req.body.note
      });
      if(req.body.folder){
        console.log(user.folders, ' ALL FOLDERS');
        var found = false;
        user.folders.forEach(function(folder){
          if(folder.name === req.body.folder) {
            folder.pics.push(newPic);
            newPic.folder = folder;
            found = true;
          }
        });
        if(!found){
          var newFolder = DB.Folder({name: req.body.folder, pics: []});
          newFolder.pics.push(newPic);
          user.folders.push(newFolder);
          newPic.folder = newFolder;
        }
      }
      // if(req.body.tags.length){    
      //   req.body.tags.forEach(function(tag){
      //     if(user.tags.indexOf(tag) === -1) user.tags.push(tag);  
      //   });
      // }
      console.log(newPic);
      user.userPics.push(newPic);
      user.saveAll({userPics: true, folders: true}).then(function(user){
        res.status(201).send({picId: newPic.id});
      });
    });
  },
  createFolder: function(req, res){
    DB.User.get(req.user.id).getJoin({folders: true}).run().then(function(user){
      var newFolder = DB.Folder({name: req.body.folderName});
      user.folders.push(newFolder);
      user.saveAll({folders: true}).then(function(user){
        res.status(201).send({folderId: newFolder.id});
      });
    });
  },
  getState: function(req, res){
    DB.User.get(req.user.id).getJoin({ userPics: true, folders: true }).run().then(function(user){
      var userState = buildUserState(user);
      res.status(200).send(userState);
    });
  },
  getDrops: function(req, res){},
  getDrop: function(req, res){},
  starDrop: function(req, res){},
  tagDrop: function(req, res){
    DB.Picture.get(req.body.picId).run().then(function(pic){
      pic.tags.push(req.body.tag);
      pic.save();
      res.status(201).send('Picture tagged');
    });
  },
  untagDrop: function(req, res){
    DB.Picture.get(req.body.picId).run().then(function(pic){
      pic.tags = pic.tags.reduce(function(tags, tag){
        if(tag !== req.body.tag) tags.push(tag);
        return tags;
      }, []);
      pic.save();
      res.status(200
        ).send('Tag removed');
    })
  },
  updateFolder: function(req, res){
    DB.User.get(req.user.id).getJoin({folders: true}).run().then(function(user){
      var updatedFolder = null;
      if(user.folders.length){
        user.folders.forEach(function(folder){
          if(folder.name === req.body.folder){
            updatedFolder = folder;
          }
        });
      }
      if(updatedFolder === null){
        updatedFolder = DB.Folder({name: req.body.folder});
        user.folders.push(updatedFolder);
      }
      DB.Picture.get(req.body.picId).getJoin({folder: true}).run().then(function(pic){
        pic.folder = updatedFolder;
        updatedFolder.pics.push(pic);
        pic.saveAll({folder: true}).then(function(pic){
          user.saveAll({folders: true}).then(function(user){
            res.status(201).send('New folder saved');
          });
        });
      });
    });
  },
  removeDrop: function(req, res){
    DB.Picture.get(req.body.picId).run().then(function(pic){
      pic.delete().then(function(result){
        res.status(200).send('Picture deleted');
      });
    });
  },
  deleteFolder: function(req, res){
    DB.User.get(req.user.id).getJoin({folders: true}).run().then(function(user){
      var targetFolder;
      user.folders.forEach(function(folder){
        if(folder.name === req.body.folder) targetFolder = folder;
      });
      targetFolder.deleteAll({pics: true}).then(function(result){
        res.status(200).send('Folder and pics deleted');
      })
    });
  },
  updatePassword: function(req, res){
    DB.User.get(req.user.id).run().then(function(user){
      bcrypt.compare(req.body.oldPassword, user.password, function(err, isEqual){
        if(isEqual){
          bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(req.body.newPassword, salt, function(err, hash){
              user.password = hash;
              user.save().then(function(user){
                res.status(201).send('Password update successfull');
              });
            });
          });   
        }else{
          res.status(401).send('Invalid old password');
        }
      });
    });
  }
}  
