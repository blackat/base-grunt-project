'use strict';

// set up basic specification
describe('Ctrl', function () {

    var $controller, $rootScope;

    // load an angular module
    beforeEach(module('app'));

    beforeEach(inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    it('should ', function () {
        var $scope = $rootScope.$new();

        // instantiate a new instance of the controller providing $scope object
        $controller('Ctrl', {$scope: $scope});

        expect($scope.text).toEqual('just a text');
    });
});
