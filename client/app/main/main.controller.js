'use strict';
(function() {

function MainController($scope) {

}

angular.module('smIconHelperApp')
  .controller('MainController', [
    '$scope', 'Icons',
    function ($scope, Icons) {
      Icons.getAll().then(function (result) {
        console.log(result);
      })
    }
  ]);

})();
