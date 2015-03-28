(function () {

    var app = angular.module("crudViewer");

    var ReadController = function ($scope, $http) {
        console.log("hello");
        
       /* $http.get("http://w11a.thunderchicken.ca/api/Categories")
            .success(function (response) {
                console.log("In Response");
                $scope.wtf = response;
            });*/

        $scope.submit = function () {
            var id = $scope.search;
            alert(id);
            $http.get("http://w11a.matthewbanman.com/api/Categories/" + id)
                .success(function (response) {
                    console.log("In Response");
                    $scope.results = response;
                    $scope.categoryName = response.CategoryName;
                    $scope.categoryID = response.CategoryID;
                    $scope.categoryDescription = response.Description;
                })
        }

    }

    app.controller("ReadController", ["$scope", "$http", ReadController]);

}());