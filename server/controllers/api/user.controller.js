var DB = require('../../models/userModel');
var passport = require('../../middleware/passport');
var buildUserState = require('./helpers').buildUserState;
var bcrypt = require('bcrypt');
var cloudinary = require('../../utils/cloudinary');

module.exports = {
  createDrop: function(req, res){
    DB.User.get(req.user.id).getJoin({userPics: true, folders: true}).run().then(function(user){

      cloudinary.uploader.upload(req.body.url, function(result){
        var newPic = DB.Picture({
          originalUrl: req.body.url,
          storedUrl: result.url,
          storedSecureUrl: result.secure_url,
          thumbnail: req.body.url,
          domain: req.body.domain,
          status: false,
          title: req.body.title,
          tags: req.body.tags,
          note: req.body.note
        });
        if(req.body.folder){
          var found = false;

          user.folders.forEach(function(folder){
            if(folder.name === req.body.folder) {
              found = true;
              // newPic.folder = folder;
              DB.Folder.get(folder.id).getJoin({pics: true}).run().then(function(folder){
                folder.pics.push(newPic);
                newPic.folder = folder;
              });
            }
          });

          if(!found){
            var newFolder = DB.Folder({name: req.body.folder, pics: []});
            newFolder.pics.push(newPic);
            user.folders.push(newFolder);
            newPic.folder = newFolder;
          }
        }
        console.log(newPic);
        user.userPics.push(newPic);
        user.saveAll({userPics: true, folders: true}).then(function(user){
          res.status(201).send({picId: newPic.id});
        }); 
      });
    });
  },
  createFolder: function(req, res){
    DB.User.get(req.user.id).run().then(function(user){
      var newFolder = req.body.folderName;
      if(!user.folders[newFolder]){
        user.folders[newFolder] = {};
      }
      user.save().then(function(user){
        res.status(201).send();
      });
    });
  },
  getState: function(req, res){
    DB.User.get(req.user.id).getJoin({ userPics: true }).run().then(function(user){
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
  changeDropsFolder: function(req, res){
    DB.User.get(req.user.id).run().then(function(user){
      var oldFolder = req.body.oldFolder, newFolder = req.body.newFolder;
      var picId = req.body.picId;
      delete user.folders[oldFolder][picId];
      if(!user.folders[newFolder]){
        user.folders[newFolder] = {};
      }
      user.folders[newFolder][picId] = true;
      DB.Picture.get(req.body.picId).getJoin({folder: true}).run().then(function(pic){
        pic.folder = newFolder;
        pic.save().then(function(pic){
          user.save().then(function(user){
            res.status(201).send('New folder saved');
          });
        });
      });
    });
  },
  removeDrop: function(req, res){
    DB.Picture.get(req.body.picId).run().then(function(pic){
      var folder = pic.folder;
      pic.delete().then(function(result){
        DB.User.get(req.body.id).run().then(function(user){
          delete user.folder[folder][req.body.picId];
          user.save().then(function(user){
            res.status(200).send('Picture deleted');
          });
        });
      });
    });
  },
  deleteFolder: function(req, res){
    DB.User.get(req.user.id).getJoin({folders: true}).run().then(function(user){
      var folder = req.body.folder;
      var pics = Object.keys(user.folder[folder]);
      pics.forEach(function(pic){
        DB.get(pic.id).run().delete();
      });
      res.status(200).send('Folder and contents deleted');
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
