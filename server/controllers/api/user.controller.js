var DB = require('../../models/userModel');
var passport = require('../../middleware/passport');

module.exports = {
  createDrop: function(req, res){
    DB.User.get(req.user).getJoin({folders: true, userPics: true, tags: true}).run().then(function(user){
      var newTags = [], var newFolder;
      var tags = req.body.tags, folder = req.body.folder;
      var newPic = new DB.Picture({url: req.body.url, domain: req.body.domain});
      for(var i = 0; i < tags.length; i++){
        DB.Tag.filter({name: tags[i]}).run().then(function(tag){
          if(tag.length){
            newTags.push(tag[0]);
          }else{
            newTags.push( new DB.Tag({name: tags[i]}) );
          }
        });
      }
      DB.Folder.filter({name: folder}).run().then(function(folder){
        if(folder.length){
          newFolder = folder[0];
        }else{
          newFolder = new DB.Folder({name: folder});
        }
      });
      newPic.addRelation('folder', newFolder);
      newFolder.addRelation('pictures', newPic);
      newFolder.addRelation('user', user);
      for(var j=0; j < newTags.length; j++){
        newPic.addRelation('tags', newTags[j]);
        user.addRelation('tags', newTags[j]);
        newTags[j].addRelation('pictures', newPic);
        newTags[j].addRelation('user', user);
      }
      user.addRelation('folders', newFolder);
      user.addRelation('userPics', newPic);
      user.saveAll({userPics: true, folders: true, tags: true}).then(function(user){
        res.status(201).send('Picture saved');
      });
    });
  },
  getDrops: function(req, res){},
  getDrop: function(req, res){},
  starDrop: function(req, res){},
  tagDrop: function(req, res){
    DB.User.get(req.user).getJoin({tags: true}).run().then(function(user){
      var newTag = null, pic;
      DB.Picture.get(req.body.picId).run().then(function(picture){
        pic = picture;
      });
      user.tags.forEach(function(tag){
        if(tag.name === req.body.tag){
          newTag = tag;
        }
      });
      if(newTag === null){
        newTag = new DB.tag
        user.addRelation('tags', newTag);
        newTag.addRelation('user', user);
      }
      newTag.addRelation('pictures', pic);
      pic.addRelation('tags', newTag);
      pic.save();
      user.saveAll({tags: true}).then(fucntion(user){
        res.status(201).send("Added tag");
      });
    })
  },
  getCategory: function(req, res){},
  getTagname: function(req, res){},
}  