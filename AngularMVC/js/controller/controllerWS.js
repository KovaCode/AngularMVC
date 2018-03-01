angular.module('app')
    .controller('controllerWS', ['$scope', 'appService', function ($scope, appService) {

        $scope.searchValue = ''
        $scope.page = 1
        $scope.resultsPerPage = 10;
        $scope.message = "test"

        $scope.getAllMakes = function () {
            appService.getAllMakes()
                .then(function (response) {
                    $scope.makes = response.data;
                    $scope.error = null;
                }, function (error) {
                    console.log(error, 'can not get data.');
                    $scope.makes = null;
                    $scope.error = "can not get data";

                });
        };

        $scope.getFilteredMakes = function ($q) {
            appService.getFilteredMakes($q)
                .then(function (response) {
                    $scope.makes = response.data;
                    $scope.error = null;
                }, function (error) {
                    console.log(error, 'can not get data.');
                    $scope.makes = null;
                    $scope.error = "can not get data";

                });
        };



        $scope.getAllModels = function () {
            appService.getAllModels()
                .then(function (response) {
                    $scope.models = response.data;
                    $scope.error = null;
                }, function (error) {
                    console.log(error, 'can not get data.');
                    $scope.models = null;
                    $scope.error = "can not get data";
                });

        };
    }]);