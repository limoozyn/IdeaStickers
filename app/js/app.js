'use strict';

/* App Module */

var stickerApp = angular.module('stickerApp', [
  'ngRoute',
  /*'phonecatAnimations',
*/
  'sticksControllers'
/*  'phonecatFilters',
  'phonecatServices'*/
]);

stickerApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'index.html',
        controller: 'WhatWeDoCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
