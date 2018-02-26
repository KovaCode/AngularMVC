angular.module('myApp')
    .service('MakeService', ['$http', '$q', function ($http, $q) {

        this.getAllMake = function () {
            return $http.get('http://localhost/WebApi/api/make');
        };

    }]);