'use strict';

angular.module('app')
    .controller('controllerMake', ['$scope', '$routeParams', 'appService', function ($scope, $routeParams, appService) {

        var makeCtrl = this;

        $scope.id = $routeParams.id;
        $scope.url = null;

        $scope.paramsFilter = {
            searchValue: "",
            results: 10,
            sortOrder: "desc",
            sortBy: "Name",
            page: 1
        };


        this.data = {
            Id: null,
            Name: null,
            Abrv: null
        };

        $scope.dataAll = [{
            Id: null,
            Name: null,
            Abrv: null
        }];


        this.getDataMakeId = function (id) {
            appService.getDataId('make', id)
                .then(function (response) {
                    makeCtrl.data = response.data;
                    $scope.error = null;
                }, function (error) {
                    makeCtrl = null;
                    $scope.error = "can not get data";
                });
        };


        this.getDataMake = function (id, params) {
            appService.getData('make', id, params)
                .then(function (response) {
                    makeCtrl.data = response.data;
                    $scope.error = null;
                }, function (error) {
                    makeCtrl = null;
                    $scope.error = "can not get data";
                });
        };

        this.getDataMakeAll = function () {
            appService.getDataAll('make', 'all')
                .then(function successCallback(response) {
                    $scope.dataAll = response.data;
                    $scope.error = null;
                }, function errorCallback(response) {
                    $scope.dataAll = null;
                    $scope.error = "can not get data";

                });
        };


        this.getDataMakeAllFilter = function (params) {
            appService.getDataAll('make', params)
                .then(function successCallback(response) {
                    $scope.dataAll = response.data;
                    $scope.error = null;
                }, function errorCallback(response) {
                    $scope.dataAll = null;
                    $scope.error = "can not get data";

                });
        };


        this.createDataMake = function (data) {
            appService.createData('make', data)
                .then(onSuccess, onError);
        };

        this.updateDataMake = function (data) {
            appService.updateData('make', data)
                .then(onSuccess, onError);
        };

        this.deleteDataMake = function (id) {
            appService.deleteData('make', id)
                .then(onSuccess, onError);
        };

        $scope.sort = function (keyname) {
            $scope.sortBy = keyname; 
            $scope.reverse = !$scope.reverse;

            this.paramsFilter.sortBy = keyname;
            this.paramsFilter.sortOrder = $scope.reverse;
            
        };



        void function refreshDataMake() {
            appService.getDataAll('make', $scope.paramsFilter)
                .then(function successCallback(response) {
                    $scope.dataAll = response.data;
                }, function errorCallback(response) {
                    console.log(response.statusText);
                });
        }

        function onSuccess(response) {
            refreshDataMake();
        }

        function onError(response) {
            console.log(response.statusText);
        }

    }]);