'use strict';

angular.module('angularMaterialDesignDemoApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/test', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
  });