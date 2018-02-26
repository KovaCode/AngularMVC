angular.module('myApp')
    .controller('MakeController', ['$scope', 'MakeService', function ($scope, makeService) {
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
        };
    }]);