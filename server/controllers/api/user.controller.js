var DB = require('../../models/userModel');
var passport = require('../../middleware/passport');
var buildUserState = require('./helpers').buildUserState;

module.exports = {
  createDrop: function(req, res){

    DB.User.get(req.user.id).getJoin({userPics: true}).run().then(function(user){
      var newPic = DB.Picture({
        originalUrl: req.body.url,
        thumbnail: req.body.url,
        domain: req.body.domain,
        status: false,
        title: '',
        tags: req.body.tags,
        folder: req.body.folder,
        note: req.body.note
      });
      user.userPics.push(newPic);
      user.saveAll({userPics: true}).then(function(user){
        res.status(201).send('Picture saved');
      });
    });
  },
  getState: function(req, res){
    console.log(' in getSTate');
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
  updateFolder: function(req, res){
    DB.Picture.get(req.body.picId).run().then(function(pic){
      pic.folder = req.body.folder;
      pic.save();
      res.status(201).send('New folder saved');
    })
  },
  removeDrop: function(req, res){
    DB.Picture.get(req.body.picId).run().then(function(pic){
      pic.delete().then(function(result){
        res.status(200).send('Picture deleted');
      });
    });
  },
  deleteFolder: function(req, res){
    DB.Picture.filter({folder: req.body.folder}).run().then(function(pics){
      pics.forEach(function(pic){
        pic.delete();
      });
      res.status(200).send('Folder and pictures deleted');
    })
  },
  getCategory: function(req, res){},
  getTagname: function(req, res){},
}  
    // DB.User.get(req.user).getJoin({folders: true, userPics: true, tags: true}).run().then(function(user){
    //   var newTags = [], newFolder;
    //   var tags = req.body.tags, folder = req.body.folder;
    //   var newPic = new DB.Picture({url: req.body.url, domain: req.body.domain});
    //   for(var i = 0; i < tags.length; i++){
    //     DB.Tag.filter({name: tags[i]}).run().then(function(tag){
    //       if(tag.length){
    //         newTags.push(tag[0]);
    //       }else{
    //         newTags.push( new DB.Tag({name: tags[i]}) );
    //       }
    //     });
    //   }
    //   DB.Folder.filter({name: folder}).run().then(function(folder){
    //     if(folder.length){
    //       newFolder = folder[0];
    //     }else{
    //       newFolder = new DB.Folder({name: folder});
    //     }
    //   });
    //   newPic.addRelation('folder', newFolder);
    //   newFolder.addRelation('pictures', newPic);
    //   newFolder.addRelation('user', user);
    //   for(var j=0; j < newTags.length; j++){
    //     newPic.addRelation('tags', newTags[j]);
    //     user.addRelation('tags', newTags[j]);
    //     newTags[j].addRelation('pictures', newPic);
    //     newTags[j].addRelation('user', user);
    //   }
    //   user.addRelation('folders', newFolder);
    //   user.addRelation('userPics', newPic);
    //   user.saveAll({userPics: true, folders: true, tags: true}).then(function(user){
    //     res.status(201).send('Picture saved');
    //   });
    // });

/*  tag drop
*/
    // DB.User.get(req.user).getJoin({tags: true}).run().then(function(user){
    //   var newTag = null, pic;
    //   DB.Picture.get(req.body.picId).run().then(function(picture){
    //     pic = picture;
    //   });
    //   user.tags.forEach(function(tag){
    //     if(tag.name === req.body.tag){
    //       newTag = tag;
    //     }
    //   });
    //   if(newTag === null){
    //     newTag = new DB.tag
    //     user.addRelation('tags', newTag);
    //     newTag.addRelation('user', user);
    //   }
    //   newTag.addRelation('pictures', pic);
    //   pic.addRelation('tags', newTag);
    //   pic.save();
    //   user.saveAll({tags: true}).then(function(user){
    //     res.status(201).send("Added tag");
    //   });
    // })