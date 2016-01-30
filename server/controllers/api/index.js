var express = require('express');
var apiRouter = express.Router();
var auth = require('./auth.controller');
var user = require('./user.controller');

/* API Routes */

/* User Authentication Routes  */
apiRouter.post('/auth/create', auth.userCreate);
apiRouter.post('/auth/login', auth.userLogin);
apiRouter.post('/auth/logout', auth.userLogout);
apiRouter.get('/auth/isAuth', auth.isAuth);
// apiRouter.post('/auth/dropbox', auth.asdf);
// apiRouter.post('/auth/google', auth.asdf);
apiRouter.post('/auth/facebook', auth.userFacebookLogin);

/* User Interface Routes */ 
//?Should we name a user's image object a 'drop'?
apiRouter.get('/user/drops', user.getDrops);
apiRouter.post('/user/drop', user.createDrop);
//apiRouter.put('/user/drop/star', user.starImage)

module.exports = apiRouter;
