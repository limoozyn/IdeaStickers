var ideaSticksControllers = angular.module('ideaSticksControllers', []);

ideaSticksControllers.controller('whatWeDoCtrl',['$scope', '$http',
    function ($scope, $http) {
      $http.get('types/types.json').success(function(data){
        $scope.types = data;
      })
    }
  ]);

ideaSticksControllers.controller('detailCtrl',['$scope', '$routeParams',
    function ($scope, $routeParams) {
      $scope.typeId = $routeParams.typeId;
    }
  ]);