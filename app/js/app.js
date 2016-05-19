var ideaSticksApp = angular.module('ideaSticksApp', [
  'ngRoute',
  'ideaSticksControllers'
]);
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/app'));
app.listen(process.env.PORT || 3000);
ideaSticksApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/types', {
        templateUrl: 'partials/frontpage.html',
        controller: 'whatWeDoCtrl'
      }).
      when('/types/:typeId', {
        templateUrl: 'partials/type-detail.html',
        controller: 'detailCtrl'
      }).
      otherwise({
        redirectTo: '/types'
      });
  }
]);