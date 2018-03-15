'use strict';

angular.module('app')
    .controller('controllerMake', ['$scope', '$routeParams', 'appService', function ($scope, $routeParams, appService) {

        var makeCtrl = this;
        $scope.dataAll = [];

        $scope.id = $routeParams.id;
        $scope.url = null;

        $scope.paramsFilter = {
            searchValue: "",
            resultsPerPage: 5,
            page: 1
        };



        $scope.pagingInfo = {
            page: 1,
            resultsPerPage: 10,
            sortBy: 'name',
            sortOrder: true,
            searchValue: '',
            totalItems: 0
        };

        $scope.search = function () {
            $scope.pagingInfo.page = 1;
            loadData();
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

        $scope.selectPage = function (page) {
            $scope.pagingInfo.page = page;
            loadData();
        };



        //$scope.count = function (data) {
        //    return appService.count(data);
        //}

        //$scope.currentPage = 1;


        //$scope.noOfPages = function (data) {
        //    var numPages = appService.numOfPages(data, $scope.paramsFilter.resultsPerPage)

        //    console.log("Number of pages: " + numPages);

        //    return numPages;
        //}

        //$scope.setPage = function () {
        //    var data = $scope.dataAll;
        //    $scope.data = data.get(($scope.currentPage - 1) * $scope.paramsFilter.resultsPerPage, $scope.paramsFilter.resultsPerPage);
        //};
        //$scope.$watch('currentPage', $scope.dataAll);


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
            appService.getDataAll('make', $scope.paramsFilter)
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

        //$scope.sort = function (keyname) {
        //    $scope.sortBy = keyname;
        //    $scope.reverse = !$scope.reverse;
        //};



        //void function refreshDataMake() {
        //    appService.getDataAll('make', $scope.paramsFilter)
        //        .then(function successCallback(response) {
        //            $scope.dataAll = response.data;
        //        }, function errorCallback(response) {
        //            console.log(response.statusText);
        //        });
        //}

        function onSuccess(response) {
            loadData();
        }

        function onError(response) {
            console.log(response.statusText);
        }


        function loadData() {
            $scope.dataAll = null;
            appService.getDATAconcept('make', $scope.pagingInfo)
                .then(function successCallback(response) {
                    $scope.dataAll = response.data;
                    $scope.pagingInfo.totalItems = $scope.dataAll.length;;

                    console.log("COUNT: " + $scope.pagingInfo.totalItems)

                }, function errorCallback(response) {
                    console.log(response.statusText);
                });
        }

        // initial table load
        loadData();


    }]);