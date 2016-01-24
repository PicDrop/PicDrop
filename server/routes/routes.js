var express = require('express');
var apiRouter = express.Router();
var auth = require('../controllers/api/auth.controller');
var user = require('../controllers/api/user.controller');



/* API Routes */

/* User Authentication Routes  */
apiRouter.post('/api/auth/create', auth.userCreate);
apiRouter.post('/api/auth/login', auth.userLogin);
apiRouter.post('/api/auth/logout:user', auth.userLogout);
// apiRouter.post('api/auth/dropbox', auth.asdf);
// apiRouter.post('api/auth/google', auth.asdf);
apiRouter.post('api/auth/facebook', auth.userFacebookLogin);



/* User Interface Routes */ 
//?Should we name a user's image object a 'drop'?
apiRouter.get('/api/user/drops', user.getDrops)
apiRouter.post('/api/user/drop', user.createDrop)
apiRouter.put('/api/user/drop/star', user.starImage)
module.exports = apiRouter;