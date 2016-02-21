var cloudinary = require('cloudinary');

var configVars;
if(process.env.PRODUCTION){
  configVars = {
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_KEY,
    api_secret: process.env.CLOUD_SECRET
  }
}else{
  configVars = require('../config/secrets').cloudinary;
}
cloudinary.config(configVars);

module.exports = cloudinary;
