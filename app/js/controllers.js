'use strict';

/* Controllers */

var sticksControllers = angular.module('WhatWeDoCtrl', []);

sticksControllers.controller('WhatWeDoCtrl', ['$scope', 'Product',
  function($scope, Product) {
    $scope.products = Product.query();
    $scope.orderProp = 'title';
  }]);