angular.module('app')
    .service('appService', ['$http', '$q', function ($http, $q ) {

        var host = "api.local";
        var path = "/WebApi/";

               // make calls //
        //this.getDataAll = function (controller) {
        //    return this.formCall(controller, "all")
        //};

        this.getDataAll = function (controller, params) {
            return this.formCall(controller, "get", null, "GET", null, null, params)
        };

        this.getData = function (controller, params) {
            return this.formCall(controller, "get", params)
        }


        this.getDataId = function (controller, id) {
            return this.formCall(controller, "get", id, "GET")
        }


        this.createData = function (controller, data) {
            var headers = { 'Content-Type': "application/json" }
            return this.formCall(controller, "create", null, "POST", headers, data)
        }

        this.updateData = function (controller, data) {
            var headers = { 'Content-Type': "application/json" }
            return this.formCall(controller, "update", null, "PUT", headers, data)
        }

        this.deleteData = function (controller, id) {
            return this.formCall(controller, "delete", id, "DELETE")
        }



        // utils //
        this.formCall = function (controller, action = "", id = null, method = "GET", headers = null, data = null, params = null) {
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

    }]);