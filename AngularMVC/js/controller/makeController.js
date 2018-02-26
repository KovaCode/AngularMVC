angular.module('myApp')

    .controller('MakeController', ['$scope', 'makeService', function ($scope, makeService) {
        $scope.getAllMake = function () {
            makeService.getAllMake()
            .then(function (response) {
                $scope.makes = response.data;
                $scope.error = null;
            }, function (error) {
                console.log(error, 'can not get data.');
                $scope.makes = null;
                $scope.error = "can not get data";
                
            });

                //.success(function (response) {
                //    $scope.makes = response.records;
                //    $scope.error = null;
                //}).error(function () {
                //    $scope.makes = null;
                //    $scope.error = 'Server communication error';
                //});
        };
    }]);