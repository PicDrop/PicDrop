import supertest from 'supertest';
// Import users models
import { expect } from 'chai';


const server = supertest('http://localhost:3000');
// Set { username: 'captainhipster', password: 'beenheresincealpha' } user


describe('"/auth" routes', function() {
  
  describe('auth/create', function() {
    beforeEach( function() {
      //clear created users
    });

    it('should accept a json object', function(done) {
      server
        .post('/api/auth/create', { username: 'joesomebody', password: 'donthackmebro' } )
        .expect(201, done);
    });
    it('should return a user authentication token', function(done) {
      server
        .post('/api/auth/create', { username: 'joesomebody', password: 'donthackmebro' } )
        .expect(201)
        .end( (err, res) => {
          if(err) return done(err);
          if(!res.authToken) return done('no authToken returned on login');
          done();
        });
    });
    it('should return a 409 if the username already exists', function(done) {
      server
        .post('/api/auth/create', { username: 'captainhipster', password: 'beenheresincealpha' } )
        .expect(409, done);
    });
    it('should return a 403 to a "GET" request', function(done) {
      server
        .get('/api/auth/create')
        .expect(403, done);
    });
  });
  
  describe('auth/login', () => {

    it('should return 200 on successfull login', function(done) {
      server
        .post('api/auth/login', { username: 'captainhipster', password: 'beenheresincealpha' } )
        .expect(200, done);
    });
    it('should return a user authentication token', function(done) {
      server
        .get('/api/auth/login', { username: 'captainhipster', password: 'beenheresincealpha' } )
        .expect(200)
        .end( (err, res) => {
          if(err) return done(err);
          if(!res.authToken) return done('no authToken returned on login');
          done();
        });
    });
    it('should return a 40 if the username doesn\'t exist', function(done) {
      server
        .post('/api/auth/login', { username: 'joesomebody', password: 'donthackmebro' } )
        .expect(406, done);
    });
    
  });
  
  // describe('auth/logout/:user', function(done) {
  //   it('should return 200 on ')

  // });
  
  describe('auth/dropbox', function(done) {
    
  });

  describe('auth/google', function(done) {

  });

  describe('auth/facebook', function(done) {

  });

  it('should return 404 on unkown route', function(done) {
    server
      .get('/random')
      .expect(404, done)
  });
  
});

  