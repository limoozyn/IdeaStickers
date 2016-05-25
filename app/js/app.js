var ideaSticksApp = angular.module('ideaSticksApp', [
  'ngRoute',
  'ideaSticksControllers'
]);
ideaSticksApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/frontpage.html',
        controller: 'whatWeDoCtrl'
      }).
      otherwise({
        redirectTo: '/types'
      });
  }
]);