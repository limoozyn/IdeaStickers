var ideaSticksApp = angular.module('ideaSticksApp', []);

ideaSticksApp.controller('whatWeDoCtrl',['$scope', '$http',
    function ($scope, $http) {
      $http.get('types/types.json').success(function(data){
        $scope.types = data;
      })
    }
  ]);