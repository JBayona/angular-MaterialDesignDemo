'use strict';

angular.module('angularMaterialDesignDemoApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/starter/starter.html',
        controller: 'StarterCtrl'
      });
  });
