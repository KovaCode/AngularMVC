var app = angular.module('app', ['ngRoute', 'angularUtils.directives.dirPagination'])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/home', {
                templateUrl: 'pages/home.html',
                controller: 'HomeController'
            })
            .when('/make', {
                templateUrl: 'pages/make/index.html',
                controller: 'controllerMake'
            })
            .when('/makeCreate', {
                templateUrl: 'pages/make/create.html',
                controller: 'controllerMake'
            })
            .when('/details/:id', {
                templateUrl: 'pages/make/details.html',
                controller: 'controllerMake'
            })
            .when('/edit/:id', {
                templateUrl: 'pages/make/edit.html',
                controller: 'controllerMake'
            })
            .when('/model', {
                templateUrl: 'pages/model/index.html',
                controller: 'controllerMake'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });


app.controller('HomeController', function ($scope) {
    $scope.message = 'Home page content...';
});
