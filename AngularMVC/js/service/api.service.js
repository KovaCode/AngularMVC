angular.module('app')
    .service('appService', ['$http', '$q', function ($http, $q) {

        this.getAllMakes = function () {
            return $http.get('http://localhost/WebApi/api/make');
        };




        this.getFilteredMakes = function (searchValue) {
            $http.get('http://localhost/WebApi/api/make/find?', {
                params: { searchValue: searchValue }
            });

        };

        this.getAllModels = function () {
            return $http.get('http://localhost/WebApi/api/model')
        }

    }]);