var ideaSticksApp = angular.module('ideaSticksApp', [
  'ngRoute',
  'ideaSticksControllers'
]);
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