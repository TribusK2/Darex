var myApp = angular.module('myApp', ['ngRoute', 'ngAnimate']);

myApp.config(['$routeProvider', function($routeProvider){
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
        controller : "contactCtrl"
        }
    )
    .otherwise({
        redirectTo: '/'
    });
}]);

myApp.controller('headerCtrl', ['$scope', '$location', function($scope, $location){
    
    // top scroll function on nemu items
    $scope.isActive = function (viewLocation){
        return viewLocation === $location.path();
    };
    $scope.scrollTop = function(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

}]);

myApp.controller('mainCtrl', ['$scope', function($scope){
    
    // scroll function on arrow button
    $scope.scrollSection2 = function(){
        let anchor = document.getElementById('section2');
        if (anchor) {
            window.scrollTo({
                top: anchor.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    // collapse button animation
    $scope.turnBtn = function(element){
        let div = element.currentTarget;
        let btn = div.querySelector('button');
        let back = div.querySelector('div');
        if(div.classList.contains('collapsed')){
            btn.style.transform = 'rotateX(180deg)';
            back.style.top = '0px';
        }else{
            btn.style.transform = 'rotateX(0deg)';
            back.style.top = '-8px';
        }
    }
    
}]);

myApp.controller('referencesCtrl', ['$scope','$http', function($scope, $http){
    
    // get data of realizations
    $http.get('./data/realizations.json').then(function(response){
        $scope.realizations = response.data;
    });

    // toggle gallery
    $scope.toggle = function(){
        $scope.checked = !$scope.checked;
        let anchor = document.getElementById('galleryAnchor');
        if (anchor) {
            window.scrollTo({
                top: anchor.offsetTop -50,
                behavior: 'smooth',
            });
        }
    };
    
    // define hight of gallery
    let parentBoxHeight = $('.refContentBox').css('height');
    $('.gallery').css('height', parentBoxHeight);
    $(window).resize(function(){
        let parentBoxHeight = $('.refContentBox').css('height');
        $('.gallery').css('height', parentBoxHeight);
    });
    
    // open modal
    $scope.showModal = function(){
        $scope.title = this.pic.title;
        $scope.file_name = this.pic.file_name;
        $scope.alt = this.pic.alt;
        $scope.description = this.pic.description;
    };
}]);

myApp.controller('contactCtrl', ['$scope', function($scope){
    
    // scroll function on arrow button
    $scope.scrolliIcon = function(){
        let anchor = document.getElementById('iIcon');
        if (anchor) {
            window.scrollTo({
                top: anchor.offsetTop -50,
                behavior: 'smooth',
            });
        }
    };
    // collapse button animation
    $scope.toggleMap = function(element){
        let btn = element.currentTarget;
        let mapWraper = $('#mapWraper');
        let map = $('#map');
        if(btn.classList.contains('smallMap')){
            btn.classList.remove('smallMap');
            mapWraper.css('width', '80vw');
            mapWraper.css('height', '80vh');
            mapWraper.css('z-index', '2');
            map.css('opacity', '1');
        }else{
            btn.classList.add('smallMap');
            mapWraper.css('width', '30vw');
            mapWraper.css('height', '30vh');
            mapWraper.css('z-index', '1');
            map.css('opacity', '0.7');
        }
    }

}]);