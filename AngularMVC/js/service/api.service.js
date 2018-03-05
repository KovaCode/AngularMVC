angular.module('app')
    .service('appService', ['$http', '$q', function ($http, $q) {

        var id;

        this.getAllMakes = function () {
            return $http.get('http://localhost/WebApi/api/make');
        };

        this.getMake = function (id) {
            return $http.get('http://localhost/WebApi/api/make/' + id)
        }


        //this.getMake = function (id) {
        //    return $http.get('http://localhost/WebApi/api/make/', { params: { id: id }}
        //    )
        //};


        this.getFilteredMakes = function (searchValue) {
            $http.get('http://localhost/WebApi/api/make/find?searchValue=' + searchValue);
        };

        this.getAllModels = function () {
            return $http.get('http://localhost/WebApi/api/model')
        }

        this.createMake = function (data) {
            return $http.get('http://localhost/WebApi/api/create')
        }


    }]);