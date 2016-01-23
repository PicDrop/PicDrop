import supertest from 'supertest';
// Import users models
import { expect } from 'chai';

const server = supertest('http://localhost:3000');
describe('"/user" routes', function() {
  
  describe('user/images', function(done) {
    it('should return return 200 on success', function(done){
      server
        .get('user/images')
        .expect(200, done);
    });
    it('should return an array of image objects on success', function(done){
      server
        .get('user/images')
        .expect(200)
        .end(function(err, res){
          if(err) return done(err);
          if(!res.body.images) return done(err);
          
          expect(Array.isArray(res.body.images)).to.be(true);
          
          if(res.body.images.length){
            expect(typeof res.body.images[0]).to.be('object');
          }

          done();
        })
    });

  });

  describe('user/images/:id', function(done) {

  });

  describe('user/images/:category', function(done) {

  });

  describe('user/imgaes/:tagname', function(done) {

  });
  it('should return 404 on unkown route', function(done) {
    server
      .get('/random')
      .expect(404, done)
  });

});

