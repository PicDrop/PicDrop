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
// apiRouter.post('/auth/dropbox', auth.asdf);
// apiRouter.post('/auth/google', auth.asdf);
apiRouter.post('/auth/facebook', auth.userFacebookLogin);

/* User Interface Routes */ 
//?Should we name a user's image object a 'drop'?
apiRouter.get('/user/drops', user.getDrops);
apiRouter.post('/user/drop', user.createDrop);
//apiRouter.put('/user/drop/star', user.starImage)

module.exports = apiRouter;
