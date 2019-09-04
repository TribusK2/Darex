var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.html",
        controller : "mainCtrl"
        }
    )
    .when("/references", {
        templateUrl : "references.html",
        controller : "referencesCtrl"
        }
    )
    .when("/contact", {
        templateUrl : "contact.html",
        // controller : "appCtrl"
        }
    )
    .otherwise({
        redirectTo: '/'
    });
}]);

myApp.controller('headerCtrl', ['$scope', '$location', function($scope, $location){
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
    $scope.scrollTop = function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
}]);

myApp.controller('mainCtrl', ['$scope', function($scope){
    $scope.scrollSection2 = function() {
        let anchor = document.getElementById('section2');
        if (anchor) {
            window.scrollTo({
                top: anchor.offsetTop,
                behavior: 'smooth',
            });
        }
    };
    
}]);

myApp.controller('referencesCtrl', ['$scope', function($scope){
    $scope.toggle = function(){
        $scope.checked = !$scope.checked;
    };
}]);