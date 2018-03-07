angular.module('app')
    .controller('controllerWS', ['$scope', '$routeParams', 'appService', function ($scope, $routeParams, appService) {

        $scope.id = $routeParams.id;

        $scope.makeData = {
            id: null,
            name: null,
            abrv: null
        };


        $scope.searchData = {
            searchValue: $routeParams.searchValue || null,
            resultsPerPage: $routeParams.resultsPerPage || 10,
            sortOrder: $routeParams.sortOrder || null,
            currentFilter: $routeParams.sortOrder || null
        };

        $scope.getMake = function (id) {
            console.log("ID from function: " + id)
            appService.getMake(id)
                .then(function (response) {
                    $scope.data = response.data;

                    console.log(response.data)

                    $scope.error = null;
                }, function (error) {
                    $scope.data = null;
                    $scope.error = "can not get data";

                });
        };

        $scope.getAllMakes = function () {
            appService.getAllMakes()
                .then(function (response) {
                    $scope.data = response.data;
                    $scope.error = null;
                }, function (error) {
                    $scope.data = null;
                    $scope.error = "can not get data";

                });
        };

        $scope.getFilteredMakes = function (searchValue) {
            appService.getFilteredMakes(searchValue)
                .then(function (response) {
                    $scope.data = response.data;
                    $scope.error = null;
                }, function (error) {
                    console.log(error, 'can not get data.');
                    $scope.data = null;
                    $scope.error = "can not get data";
                });
        };




        $scope.createMake = function (data) {
            console.log("Create!")
            appService.createMake(data)
                .then(function (status, headers, config) {
                    console.log(status);
                }).error(function (status, headers, config) {
                    console.log(status);
                    console.log(headers);
                    console.log(config);
                    console.log("Error submit form");
                });
        };


        $scope.deleteMake = function (id) {
            console.log("Delete ID: " + id)
            appService.deleteMake(id)
                .then(function (status) {
                    console.log(status);
                }).error(function (data, status, headers, config) {
                    console.log(data);
                    console.log(status);
                    console.log(headers);
                    console.log(config);
                    console.log("Error submit form");
                });
        };


        // models 

        $scope.getAllModels = function () {
            appService.getAllModels()
                .then(function (response) {
                    $scope.data = response.data;
                    $scope.error = null;
                }, function (error) {
                    console.log(error, 'can not get data.');
                    $scope.data = null;
                    $scope.error = "can not get data";
                });

        };


        $scope.sort = function (keyname) {
            $scope.sortBy = keyname;   //set the sortBy to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }


    }]);