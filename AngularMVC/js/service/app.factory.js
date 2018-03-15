angular.module('app')
    .factory('dataFactory', ['$http', 'q', function ($http, $q) {
        var dataFactory = {};
        var host = "api.local";
        var path = "/WebApi/";


        dataFactory.getDataAll = function (controller, params) {
            var response = this.formCall(controller, "get", null, "GET", null, null, params);
            return response;
        };

        dataFactory.getData = function (controller, params) {
            return this.formCall(controller, "get", params)
        }

        dataFactory.getDataId = function (controller, id) {
            return this.formCall(controller, "get", id, "GET")
        }

        dataFactory.createData = function (controller, data) {
            var headers = { 'Content-Type': "application/json" }
            return this.formCall(controller, "create", null, "POST", headers, data)
        }

        dataFactory.updateData = function (controller, data) {
            var headers = { 'Content-Type': "application/json" }
            return this.formCall(controller, "update", null, "PUT", headers, data)
        }

        dataFactory.deleteData = function (controller, id) {
            return this.formCall(controller, "delete", id, "DELETE")
        }

        formCall = function (controller, action = "", id = null, method = "GET", headers = null, data = null, params = null) {
            var url = url = 'http://' + host + path + controller + '/' + action;

            if (id != null) {
                url = url + '/' + id;
            }
            console.log("ID:" + id)
            console.log("URL:" + url)
            console.log("method:" + method)
            console.log("params:" + params)
            console.log("data:" + data)

            return $http({
                url: url,
                params: params,
                method: method,
                headers: headers,
                data: data
            })
        }

        return dataFactory;
    }]);
