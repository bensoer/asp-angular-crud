(function () {

    var app = angular.module("crudViewer");

    var DeleteController = function ($scope, $http) {
        console.log("hello");

        /* $http.get("http://w11a.thunderchicken.ca/api/Categories")
             .success(function (response) {
                 console.log("In Response");
                 $scope.wtf = response;
             });*/

        $scope.submit = function () {
            var id = $scope.deleteId;
            alert(id);
            $http.delete("http://w11a.matthewbanman.com/api/Categories/" + id)
                .success(function (response) {
                    alert(JSON.stringify(response))
                })
        }

    }

    app.controller("DeleteController", ["$scope", "$http", DeleteController]);

}());