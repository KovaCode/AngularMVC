var app = angular.module('app', ['ngRoute', 'angularUtils.directives.dirPagination'])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/home', {
                templateUrl: 'pages/home.html',
                controller: 'HomeController'
            })
            .when('/make', {
                templateUrl: 'pages/make/index.html',
                controller: 'controllerWS'
            })
            .when('/makeCreate', {
                templateUrl: 'pages/make/create.html',
                controller: 'controllerWS'
            })
            .when('/make/details/:id', {
                templateUrl: 'pages/make/details.html',
                controller: 'controllerWS'
            })
            .when('/model', {
                templateUrl: 'pages/model/index.html',
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
