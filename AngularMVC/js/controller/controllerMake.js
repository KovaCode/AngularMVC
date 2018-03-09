'use strict';

angular.module('app')
    .controller('controllerMake', ['$scope', '$routeParams', 'appService', function ($scope, $routeParams, appService) {

        $scope.id = $routeParams.id;

        $scope.data = {
            Id: null,
            Name: null,
            Abrv: null
        };

        $scope.dataAll = [{
            Id: null,
            Name: null,
            Abrv: null
        }];

        $scope.paramsFilter = {
            searchValue: $routeParams.searchValue || null,
            resultsPerPage: $routeParams.resultsPerPage || 10,
            sortOrder: $routeParams.sortOrder || null,
            currentFilter: $routeParams.sortOrder || null,
            page: 1
        };


        $scope.getMake = function (id, params) {
            appService.getData('make', id, params)
                .then(function (response) {
                    $scope.data = response.data;
                    $scope.error = null;
                }, function (error) {
                    $makeData = null;
                    $scope.error = "can not get data";
                });
        };

        $scope.getMakes = async function () {
            appService.getDataAll('make', $scope.paramsFilter)
                .then(function successCallback(response) {
                    $scope.dataAll = response.data;
                    $scope.error = null;
                }, function errorCallback(response) {
                    $scope.dataAll = null;
                    $scope.error = "can not get data";

                });
        };

        $scope.getMakes = async function () {
            appService.getDataAll('make')
                .then(function successCallback(response) {
                    $scope.dataAll = response.data;
                    $scope.error = null;
                }, function errorCallback(response) {
                    $scope.dataAll = null;
                    $scope.error = "can not get data";

                });
        };


        $scope.createMake = function (data) {
            appService.createData('make', data)
                .then(onSuccess, onError);
        };

        $scope.updateMake = function (data) {
            appService.updateData('make', data)
                .then(onSuccess, onError);
        };

        $scope.deleteMake = function (id) {
            appService.deleteData('make', id)
                .then(onSuccess, onError);
        };

        $scope.sort = function (keyname) {
            $scope.sortBy = keyname;
            $scope.reverse = !$scope.reverse;
        };



        function refreshMakeData() {
            appService.getDataAll('make')
                .then(function successCallback(response) {
                    $scope.dataAll = response.data;
                }, function errorCallback(response) {
                    console.log(response.statusText);
                });
        }

        function onSuccess(response) {
            refreshMakeData();
        }

        function onError(response) {
            console.log(response.statusText);
        }

    }]);