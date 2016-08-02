(function(){
    'use strict';

    angular
        .module("app")
        .controller("mainCtrl", ["$scope", "$http", function($scope, $http) {
        $scope.name = "Test App";
        $scope.cf = {};
        $scope.validation = {
            successMessage: false,
            failureMessage: false
        };
        
        $scope.submitForm = function() {
            if($scope.cf.name && $scope.cf.email && $scope.cf.email && $scope.cf.formBody) {
                $http.post('/contact', $scope.cf).then(function(){
                    $scope.cf = {};
                    $scope.validation.successMessage = true;
                }, function() {
                    $scope.cf = {};
                    $scope.validation.failureMessage = true;
                });
            } else {
                //Add validation messages
            }
        }
        
    }]);
    
}());