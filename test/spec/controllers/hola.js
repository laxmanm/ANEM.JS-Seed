'use strict';

describe('Controller: HolaCtrl', function() {

  // load the controller's module
  beforeEach(module('provaApp'));

  var HolaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    HolaCtrl = $controller('HolaCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
