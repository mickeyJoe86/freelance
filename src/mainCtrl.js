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
                
                $http.post('/contact', $scope.cf).then(function(){
                    $scope.cf = {};
                    $scope.cf.successMessage = true;
                }, function() {
                    $scope.cf = {};
                    $scope.cf.failureMessage = true;
                });
            } else {
                //Add validation messages
            }
        }
        
    }]);
    
}());