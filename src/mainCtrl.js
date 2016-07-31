(function(){
    'use strict';

    angular
        .module("app")
        .controller("mainCtrl", ["$scope", "$http", function($scope, $http) {
        $scope.name = "Test App";
        $scope.cf = {};
        $scope.cf.successMessage = false
        $scope.cf.failureMessage = false;
        
        $scope.submitForm = function() {
            if($scope.cf.name && $scope.cf.email && $scope.cf.email && $scope.cf.formBody) {
                $scope.cf.successMessage = true;
                $http.post('/contact', $scope.cf).then(function(){
                    $scope.cf = {};
                }, function() {
                    $scope.cf.failureMessage = true;
                    $scope.cf = {};
                });
            } else {
                //Add validation messages
            }
        }
        
    }]);
    
}());