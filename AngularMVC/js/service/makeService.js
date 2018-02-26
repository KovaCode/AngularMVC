angular.module('myApp')
    .service('makeService', ['$http', '$q', function ($http, $q) {

        this.getAllMake = function () {
            return $http.get('http://localhost/WebApi/api/make');
        };

    }]);