'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var iconCtrlStub = {
  index: 'iconCtrl.index',
  show: 'iconCtrl.show',
  create: 'iconCtrl.create',
  update: 'iconCtrl.update',
  destroy: 'iconCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var iconIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './icon.controller': iconCtrlStub
});

describe('icon API Router:', function() {

  it('should return an express router instance', function() {
    expect(iconIndex).to.equal(routerStub);
  });

  describe('GET /api/icons', function() {

    it('should route to icon.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'iconCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/icons/:id', function() {

    it('should route to icon.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'iconCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/icons', function() {

    it('should route to icon.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'iconCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/icons/:id', function() {

    it('should route to icon.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'iconCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/icons/:id', function() {

    it('should route to icon.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'iconCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/icons/:id', function() {

    it('should route to icon.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'iconCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
