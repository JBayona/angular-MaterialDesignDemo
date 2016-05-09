'use strict';

describe('Controller: StarterCtrl', function () {

  // load the controller's module
  beforeEach(module('angularMaterialDesignDemoApp'));

  var StarterCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StarterCtrl = $controller('StarterCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
