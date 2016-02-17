var express = require('express');
var apiRouter = express.Router();
var passport = require('../../middleware/passport');
var auth = require('./auth.controller');
var user = require('./user.controller');

/* API Routes */

/* User Authentication Routes  */
apiRouter.post('/auth/signup', auth.userCreate);
apiRouter.post('/auth/login', auth.userLogin);
apiRouter.post('/auth/logout', auth.userLogout);
apiRouter.get('/auth/isAuth', passport.isAuth);

/* User Interface Routes */ 
//?Should we name a user's image object a 'drop'?
apiRouter.get('/user/getState', user.getState);
apiRouter.post('/user/createDrop', user.createDrop);
apiRouter.post('/user/createFolder', user.createFolder);
apiRouter.post('/user/tagDrop', user.tagDrop);
apiRouter.post('/user/untagDrop', user.untagDrop);
apiRouter.post('/user/updateFolder', user.changeDropsFolder);
apiRouter.post('/user/removeDrop', user.removeDrop);
apiRouter.post('/user/deleteFolder', user.deleteFolder);
apiRouter.put('/user/updatePassword', user.updatePassword);
//apiRouter.put('/user/drop/star', user.starImage)

module.exports = apiRouter;
