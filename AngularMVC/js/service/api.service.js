angular.module('app')
    .service('appService', ['$http', '$q', function ($http, $q) {

        //return ({
        //    getDataAll: getDataAll,
        //    getData: getData,
        //    createData: createData,
        //    updateData: updateData,
        //    deleteData: deleteData,
        //});


        var host = "api.local";
        var path = "/WebApi/api/";

        // make calls //
        this.getDataAll = function (controller) {
            return this.formCall(controller, "")
        };

        this.getDataAll = function (controller, params) {
            return this.formCall(controller, "get", null, null, null, null, params)
        };


        this.getData = function (controller, id, params) {
            return this.formCall(controller, "get", id, params)
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
            var url = null;

            if (id == null) {
                url = 'http://' + host + path + controller + '/' + action;
            } else {
                url = 'http://' + host + path + controller + '/' + action + '/' + id;
            }

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