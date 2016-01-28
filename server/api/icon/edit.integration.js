'use strict';

var app = require('../..');
var request = require('supertest');

var newicon;

describe('icon API:', function() {

  describe('GET /api/icons', function() {
    var icons;

    beforeEach(function(done) {
      request(app)
        .get('/api/icons')
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          icons = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(icons).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/icons', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/icons')
        .send({
          name: 'New icon',
          info: 'This is the brand new icon!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          newicon = res.body;
          done();
        });
    });

    it('should respond with the newly created icon', function() {
      expect(newicon.name).to.equal('New icon');
      expect(newicon.info).to.equal('This is the brand new icon!!!');
    });

  });

  describe('GET /api/icons/:id', function() {
    var icon;

    beforeEach(function(done) {
      request(app)
        .get('/api/icons/' + newicon._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          icon = res.body;
          done();
        });
    });

    afterEach(function() {
      icon = {};
    });

    it('should respond with the requested icon', function() {
      expect(icon.name).to.equal('New icon');
      expect(icon.info).to.equal('This is the brand new icon!!!');
    });

  });

  describe('PUT /api/icons/:id', function() {
    var updatedicon

    beforeEach(function(done) {
      request(app)
        .put('/api/icons/' + newicon._id)
        .send({
          name: 'Updated icon',
          info: 'This is the updated icon!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedicon = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedicon = {};
    });

    it('should respond with the updated icon', function() {
      expect(updatedicon.name).to.equal('Updated icon');
      expect(updatedicon.info).to.equal('This is the updated icon!!!');
    });

  });

  describe('DELETE /api/icons/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/icons/' + newicon._id)
        .expect(204)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when icon does not exist', function(done) {
      request(app)
        .delete('/api/icons/' + newicon._id)
        .expect(404)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
