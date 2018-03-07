angular.module('app')
    .service('appService', ['$http', '$q', function ($http, $q) {
        var host = "api.local";
        var path = "/WebApi/api/";

        // make calls //
        this.getAllMakes = function () {
            return this.formCall('make')
        };

        this.getMake = function (id) {
            return this.formCall('make', id)
        }

        this.createMake = function (data) {
            var headers = { 'Content-Type': "application/json" }
            return this.formCall("make", "POST", headers, data)
        }

        this.deleteMake = function (id) {
            return this.formCall("make", id, "DELETE")
        }

        // models calls //
        this.getAllModels = function () {
            return this.formCall("model")
        }


        // utils //
        this.formCall = function (controller, id = null, method = "GET", headers = null, data = null) {
            var url = null;

            if (id == null) {
                url = 'http://' + host + path + controller;
            } else {
                url = 'http://' + host + path + controller + '/' + id;
            }

            return $http({
                method: method,
                headers: headers,
                data: data,
                url: url
            })
        }

    }]);