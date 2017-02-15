var app = angular.module('ngdemo.controllers', []);

app.controller('ObjectListCtrl', ['$scope', '$location',
    function ($scope, $location) {
		
        // callback for ng-click 'editUser':
       
        $scope.objects = [{"name":"b", "details":"d"}, {"name":"a", "details":"c"}];
		alert('came');
		// callback for ng-click 'editObject':
        $scope.editObject = function () {
            $location.path('/object-list' );
        };

        // callback for ng-click 'deleteObject':
        $scope.deleteObject = function (objectId) {
            $scope.objects.splice( objectId , 1 );
        };

        // callback for ng-click 'createUser':
        $scope.createNewObject = function () {
            $location.path('/object-creation');
        };
    }]);


/*
app.controller('UserListCtrl', ['$scope', 'UsersFactory', 'UserFactory', '$location',
    function ($scope, UsersFactory, UserFactory, $location) {
		alert('in objectListcrtrl');
        // callback for ng-click 'editObject':
        $scope.editObject = function (objectId) {
            $location.path('/object-detail/' + objectId);
        };

        // callback for ng-click 'deleteObject':
        $scope.deleteObject = function (objectId) {
            UserFactory.delete({ id: objectId });
            $scope.objects = UsersFactory.query();
        };

        // callback for ng-click 'createObject':
        $scope.createNewObject = function () {
            $location.path('/object-creation');
        };

        $scope.objects = UsersFactory.query();
    }]);
*/	

app.controller('ObjectDetailCtrl', ['$scope', '$routeParams', 'UserFactory', '$location',
    function ($scope, $routeParams, UserFactory, $location) {

        // callback for ng-click 'updateObject':
        $scope.updateObject = function () {
            UserFactory.update($scope.object);
            $location.path('/object-list');
        };

        // callback for ng-click 'cancel':
        $scope.cancel = function () {
            $location.path('/object-list');
        };

        $scope.object = UserFactory.show({id: $routeParams.id});
    }]);

app.controller('ObjectCreationCtrl', ['$scope', 'UsersFactory', '$location',
    function ($scope, UsersFactory, $location) {

        // callback for ng-click 'createNewObject':
        $scope.createNewObject = function () {
            UsersFactory.create($scope.object);
            $location.path('/object-list');
        }
    }]);