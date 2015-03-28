// app.js
(function () {
    var app = angular.module("crudViewer", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
          .when("/main", {
              templateUrl: "./main/main.html",
              controller: "MainController"
          })
          .when("/Create", {
              templateUrl: "./create/createView.html",
              controller: "CreateController"
          })
        .when("/Read", {
            templateUrl: "./read/readView.html",
            controller: "ReadController"
        })
        .when("/Update", {
            templateUrl: "./update/updateView.html",
            controller: "UpdateController"
        })
        .when("/Delete", {
            templateUrl: "./delete/deleteView.html",
            controller: "DeleteController"
        })
        .otherwise({
              redirectTo: "/main"
          });
    });
}());