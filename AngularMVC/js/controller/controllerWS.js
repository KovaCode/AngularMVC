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

            //console.log("Results per page: " + searchData.resultsPerPage);

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
            $http({
                method: "POST",
                url: "http://localhost:8080/HocvuiWebservices/rest/user/login",
                data: encodeString,
                headers: { 'Accept': ' text/plain', 'Content-Type': "application/x-www-form-urlencoded" }
            }).success(function (data, status, headers, config) {
                console.log(data);
            }).error(function (data, status, headers, config) {
                console.log(data);
                console.log(status);
                console.log(headers);
                console.log(config);
                console.log("Error submit form");
            });
        };


                //$scope.login = function () {
        //    var encodeString = "email=" + this.email + "&pass=" + this.pass;
        //    $http({
        //        method: "POST",
        //        url: "http://localhost:8080/HocvuiWebservices/rest/user/login",
        //        data: encodeString,
        //        headers: { 'Accept': ' text/plain', 'Content-Type': "application/x-www-form-urlencoded" }
        //    }).success(function (data, status, headers, config) {
        //        console.log(data);
        //    }).error(function (data, status, headers, config) {
        //        console.log(data);
        //        console.log(status);
        //        console.log(headers);
        //        console.log(config);
        //        console.log("Error submit form");
        //    });
        //}




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


        $scope.sort = function (keyname) {
            $scope.sortBy = keyname;   //set the sortBy to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }


    }]);