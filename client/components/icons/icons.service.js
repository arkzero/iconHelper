'use strict';

angular.module('smIconHelperApp')
  .factory('Icons', function (Restangular) {
    var iconApi = Restangular.one('/api/icons');

    return {
      getAll: function () {
        return iconApi.get();
      }
    }
  })
