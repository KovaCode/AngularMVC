angular.module('app')
    .service('appService', ['$http', '$q', function ($http, $q) {

        var id;

        this.getAllMakes = function () {
            return $http.get('http://localhost/WebApi/api/make');
        };

        this.getMake = function (id) {
            return $http.get('http://localhost/WebApi/api/make/' + id)
        }

        this.createMake = function (data) {
            return $http({
                method: "POST",
                url: "http://localhost/WebApi/api/make/",
                data: data, 
                headers: { 'Content-Type': "application/json" }
            })
        }


        this.deleteMake = function (id) {
            return $http({
                method: "DELETE",
                url: "http://localhost/WebApi/api/make/" + id
            })
        }




        this.getAllModels = function () {
            return $http.get('http://localhost/WebApi/api/model')
        }

    }]);