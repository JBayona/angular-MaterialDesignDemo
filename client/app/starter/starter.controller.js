'use strict';

angular.module('angularMaterialDesignDemoApp')
  .controller('StarterCtrl',['$scope','Users', '$mdSidenav', '$mdBottomSheet',function($scope, Users, $mdSidenav, $mdBottomSheet) {
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

    $scope.share = function(userSelected){
      $mdBottomSheet.show({
        controller: UserSheetController,
        controllerAs: 'vm',
        templateUrl: './bottomsheet.html',
        parent: angular.element(document.querySelector('#content'))
      });
    };

    $scope.toggleList = function(){
      $mdSidenav('left').toggle();
    }

    /*
      Bottom sheet controller for the Avatar Actions
    */
    function UserSheetController(){
       $scope.users.selectedUser = 'Jorge';
       $scope.items = [
        {name:'Phone', icon:'phone', icon_url:'communication:call'}
       ];
       this.performAction = function(action){
        $mdBottomSheet.hide();
       }
    }

    //init routines
    loadUsers();
  }]);
