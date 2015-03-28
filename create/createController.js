(function () {

    var app = angular.module("crudViewer");

    

    var CreateController = function ($scope, $http) {
        console.log("hello");
        $scope.formContent = {};

        /*

        $http.defaults.headers.put = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
        };
        $http.defaults.useXDomain = true;*/



        /* $http.get("http://w11a.thunderchicken.ca/api/Categories")
             .success(function (response) {
                 console.log("In Response");
                 $scope.wtf = response;
             });*/

        $scope.submit = function () {
            //delete $http.defaults.headers.common['X-Requested-With'];

            var data = $scope.formContent;
            alert(data);
            $http.post("http://w11a.matthewbanman.com/api/Categories", data)
                .then(function (response) {
                    alert(JSON.stringify(response));
                },
                function (response) {
                    alert(JSON.stringify(response));
                });
        }

    }

    app.controller("CreateController", ["$scope", "$http", CreateController]);

}());