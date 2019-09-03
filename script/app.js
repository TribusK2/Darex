var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html",
        // controller : "appCtrl"
        }
    )
    .when("/references", {
        templateUrl : "references.html",
        // controller : "appCtrl"
        }
    )
    .when("/contact", {
        templateUrl : "contact.html",
        // controller : "appCtrl"
        }
    )
}]);

myApp.controller('headerCtrl', ['$scope', '$location', function($scope, $location){
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}]);