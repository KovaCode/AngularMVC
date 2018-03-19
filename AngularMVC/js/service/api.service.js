angular.module('app')
    .service('appService', ['$http', '$q', function ($http, $q) {

        var host = "api.local";
        var path = "/WebApi/";


        this.count = function (data) {
            return data.length;
        };

        this.numOfPages = function (data, resultsPerPage) {
            var data = [];
            console.log("data:" + data)
            var count = data.length;

            console.log("count:" + count)
            console.log("resultsPerPage:" + resultsPerPage)

            return Math.ceil(count / resultsPerPage);
        }




        this.getDATAconcept = function (controller, pagingInfo) {
            return this.formCall(controller, "get", null, "GET", null, null, pagingInfo);
        };



        this.getDataAll = function (controller, params) {
            //var defered = $q.defer();
            var response = this.formCall(controller, "get", null, "GET", null, null, params);
            //return defered.promise;

            var data = response.data;

            console.log(response)

            return response;
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
            //console.log("ID:" + id)
            //console.log("URL:" + url)
            //console.log("method:" + method)
            //console.log("params:" + params)
            //console.log("data:" + data)

            return $http({
                url: url,
                params: params,
                method: method,
                headers: headers,
                data: data
            })
        }

    }]);