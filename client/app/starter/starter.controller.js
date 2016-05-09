'use strict';

angular.module('angularMaterialDesignDemoApp')
  .controller('StarterCtrl',['$scope','Users',function($scope, Users) {
    $scope.message = 'Hello';
    $scope.users = {};

    var loadUsers = function(){
     Users.returnUsers().then(function(response){
       $scope.users.info = response.users;
     });
    };

    $scope.selectedUser = function(user){
      $scope.users.selectedUser = user;

    };

    //init routines
    loadUsers();
  }]);
