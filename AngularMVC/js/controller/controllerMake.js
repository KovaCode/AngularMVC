'use strict';

angular.module('app')
    .controller('controllerMake', ['$scope', '$routeParams', 'appService', function ($scope, $routeParams, appService) {

        var makeCtrl = this;

        $scope.id = $routeParams.id;

        $scope.dataAll = [];

        

        $scope.pagingInfo = {
            page: 1,
            resultsPerPage: 5,
            sortBy: 'Name',
            sortOrder: true,
            currentFilter: '',
            totalItems: 0
        };



        $scope.pageChanged = function () {
            console.log("*****page changed****")
            $scope.loadData();
        };

        $scope.search = function () {
            $scope.pagingInfo.page = 1;
            $scope.loadData();
        };

        $scope.sort = function (sortBy) {
            if (sortBy === $scope.pagingInfo.sortBy) {
                $scope.pagingInfo.sortOrder = !$scope.pagingInfo.sortOrder;
            } else {
                $scope.pagingInfo.sortBy = sortBy;
                $scope.pagingInfo.sortOrder = false;
            }
            $scope.pagingInfo.page = 1;
            loadData();
        };


        $scope.loadData = function () {
            console.log($scope.pagingInfo)
            $scope.dataAll = null;
            appService.getDATAconcept('make', $scope.pagingInfo)
                .then(function successCallback(response) {

                    $scope.dataAll = response.data.Data;
                    var paginatonData = response.data.Paging;
                    $scope.pagingInfo.totalItems = paginatonData.TotalRecordCount;

                }, function errorCallback(response) {
                    console.log(response.statusText);
                });
        }

        // CRUD //

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

        function onSuccess(response) {
            $scope.loadData();
        }

        function onError(response) {
            console.log(response.statusText);
        }
    }]);