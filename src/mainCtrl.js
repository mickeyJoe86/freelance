(function(){
    'use strict';

    angular
        .module("app")
        .controller("mainCtrl", ["$scope", function($scope) {
        $scope.name = "Test App"
    }]);
    
}());