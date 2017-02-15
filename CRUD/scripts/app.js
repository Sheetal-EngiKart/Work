var app=angular.module('ngdemo', ['ngRoute','ngdemo.filters', 'ngdemo.services', 'ngdemo.directives', 'ngdemo.controllers']);
    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when("/object-list", {templateUrl: "views/object-creation.html", controller: :"ObjectListCtrl"'});
        $routeProvider.when('/object-detail/:id', {templateUrl: 'view/object-detail.html', controller: 'ObjectDetailCtrl'});
        $routeProvider.when('/object-creation', {templateUrl: 'views/object-creation.html', controller: 'ObjectCreationCtrl'});
    }]);