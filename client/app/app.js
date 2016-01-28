'use strict';

angular.module('smIconHelperApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'webicon',
  'restangular'
])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  })
  .config(['$webiconProvider',function($webiconProvider){
    $webiconProvider
      .svgSet('smIcon', '/assets/showdme.svg');
  }]);;
