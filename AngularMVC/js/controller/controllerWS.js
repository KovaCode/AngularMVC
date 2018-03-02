angular.module('app')
    .controller('controllerWS', ['$scope', 'appService', function ($scope, appService) {

        $scope.data = [];

        $scope.searchData = {
            resultsPerPage: 10
        }

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

        $scope.sort = function (keyname) {
            $scope.sortBy = keyname;   //set the sortBy to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }


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


        //$scope.getFilteredMakes = function (searchValue) {
        //    appService.getFilteredMakes(searchValue).success(function () {
        //        // call the service, handle success/failure from within your controller
        //        $scope.makes = response.data;
        //        $scope.error = null;
        //    }).error(function () {
        //        $scope.makes = null;
        //        $scope.error = 'something went wrong!!!';
        //        alert('something went wrong!!!');
        //    });
        //}


        //// call the service, handle success/failure from within your controller
        //recipeService.saveRecipe(recipe).success(function () {
        //    alert('saved successfully!!!');
        //}).error(function () {
        //    alert('something went wrong!!!');
        //});

        //}
        //.then(function (response) {
        //    $scope.makes = response.data;
        //    $scope.error = null;
        //}, function (error) {
        //    console.log(error, 'can not get data.');
        //    $scope.makes = null;
        //    $scope.error = "can not get data";

        //});
        //};



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
    }]);