(function(){
    'use strict';

    angular
        .module("app")
        .controller("mainCtrl", ["$scope", "$http", function($scope, $http) {
        $scope.name = "Test App";
        $scope.cf = {};
        
        $scope.submitForm = function() {
            $http.post('/contact', $scope.cf).then(function(){
                $scope.cf = {};
            });
        }
        
    }]);
    
}());