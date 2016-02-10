import request from 'supertest';
import { expect } from 'chai';
import DB from '../../server/models/userModel';
import bcrypt from 'bcrypt';
import app from '../../server/server';


// Set { email: 'captainhipster', password: 'beenheresincealpha' } user
bcrypt.genSaltSync(10, function(err, salt){
  bcrypt.hashSync('beenheresincealpha', salt, function(err, hash){
    DB.User({ email: 'captainhipster', password: hash }).save();
  });
});

describe('"/auth" routes', function() {

  describe('auth/signup', function() {
    afterEach(function(){
      DB.User.filter({email: 'joesomebody'}).run().then(function(users){
        if(users.length){
          users[0].delete();
        }
      });
    });

    it('should return a user authentication token', function(done) {
      request(app)
        .post('/api/auth/signup', { email: 'joesomebody', password: 'donthackmebro' } )
        .expect(201)
        .end( (err, res) => {
          if(err) return done(err);
          if(!res.body.token) return done('no authToken returned on login');
          done();
        });
    });
    it('should return a 401 if the email already exists', function(done) {
      request(app)
        .post('/api/auth/signup', { email: 'captainhipster', password: 'beenheresincealpha' } )
        .expect(401, done);
    });
  });
  
  describe('auth/login', function() {

    it('should return 200 on successfull login', function(done) {
      request(app)
        .post('/api/auth/login', { email: 'captainhipster', password: 'beenheresincealpha' } )
        .expect(200, done);
    });
    it('should return a user authentication token', function(done) {
      request(app)
        .get('/api/auth/login', { email: 'captainhipster', password: 'beenheresincealpha' } )
        .expect(200)
        .end( (err, res) => {
          if(err) return done(err);
          if(!res.user.token) return done('no authToken returned on login');
          done();
        });
    });
    it('should return a users state object', function(done) {
      request(app)
        .get('/api/auth/login', { email: 'captainhipster', password: 'beenheresincealpha' } )
        .expect(200)
        .expect(function(res){
          if(!res.body.userPics) return 'missing userPics';
          if(!res.body.folders) return 'missing folders';
          if(!res.body.tags) return 'missing tags';
          if(!res.body.profile) return 'missing profile info';
        })
        .end( (err, res) => {
          if(err) return done(err);
          
          done();
        });
    });
    it('should return a 401 if the email doesn\'t exist', function(done) {
      request(app)
        .post('/api/auth/login', { email: 'joesomebody', password: 'donthackmebro' } )
        .expect(401, done);
    });
    
  });
  

  it('should return 404 on unkown route', function(done) {
    request(app)
      .get('/random')
      .expect(404, done)
  });
  
});

  