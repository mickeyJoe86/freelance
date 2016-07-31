(function(){
    'use strict';

    angular
        .module("app")
        .controller("mainCtrl", ["$scope", "$http", function($scope, $http) {
        $scope.name = "Test App";
        $scope.cf = {};
        
        $scope.submitForm = function() {
            if($scope.cf.name && $scope.cf.email && $scope.cf.email && $scope.cf.formBody) {
                $http.post('/contact', $scope.cf).then(function(){
                    $scope.cf.successMessage = true;
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