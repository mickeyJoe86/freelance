(function(){
    'use strict';
    angular
        .module('app')
        .directive('compilerDirective', [function() {
            return {
                templateUrl: 'partials/nav-directive.html',
                replace: true,
                controller: 'navCtrl'
            }
        }]);
}())