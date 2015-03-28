(function () {

    var app = angular.module("crudViewer");

    var UpdateController = function ($scope, $http) {
        console.log("hello");
        $scope.updateData = { CategoryName: "", CategoryID: "", Description: ""};

        /* $http.get("http://w11a.thunderchicken.ca/api/Categories")
             .success(function (response) {
                 console.log("In Response");
                 $scope.wtf = response;
             });*/

        $scope.search = function () {
            var id = $scope.searchData;
            alert(id);
            $http.get("http://w11a.matthewbanman.com/api/Categories/" + id)
                .success(function (response) {
                    console.log("In Response");
                    $scope.results = response;
                    $scope.updateData.CategoryName = response.CategoryName;
                    $scope.updateData.CategoryID = response.CategoryID;
                    $scope.updateData.Description = response.Description;
                });
        }

        $scope.submit = function () {
            var data = $scope.updateData;
            alert(data);
            $http.put("http://w11a.matthewbanman.com/api/Categories/" + data.CategoryID, data)
                .then(function (response) {
                    alert(JSON.stringify(response));
                }, function (response) {
                    alert(JSON.stringify(response));
                });
        }

    }

    app.controller("UpdateController", ["$scope", "$http", UpdateController]);

}());