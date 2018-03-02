var app = angular.module('app', ['ngRoute', 'angularUtils.directives.dirPagination'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'pages/home.html',
                controller: 'HomeController'
            })
            .when('/make', {
                templateUrl: 'pages/make.html',
                controller: 'controllerWS'
            })
            .when('/model', {
                templateUrl: 'pages/model.html',
                controller: 'controllerWS'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });



app.controller('HomeController', function ($scope) {
    $scope.message = 'Home page content...';
});

//app.controller('controllerWS', function ($scope) {
//    $scope.message = 'Model page content...';
//});

//app.controller('controllerWS', function ($scope) {
//    $scope.message = 'Contact us page content...';
//});
