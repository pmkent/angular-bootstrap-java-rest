'use strict';

var app = angular.module('user.controllers', ['ui.bootstrap','smart-table']);

// Regular Javascript function for functions shared by AngularJS contollers
function UserController ($scope,JSONDataFactory,UsersFactory,$location) {
    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };

    JSONDataFactory.getJSONListData().then(function(data) {
        $scope.genderListOptions = data.gender;
        $scope.stateListOptions = data.states;
    });

    $scope.saveUser = function () {
        UsersFactory.upsert($scope.user);
        $location.path('/user-list');
    };
};

// AngularJS user list controller
app.controller('UserListCtrl', ['$scope', 'UsersFactory', 'UserFactory', '$location',
    function ($scope, UsersFactory, UserFactory, $location) {

        $scope.editUser = function (user) {
            $location.path('/user-detail/' + user.id);
        };

        $scope.deleteUser = function (user) {
            //console.log('delete entered' );
            UserFactory.delete({ id: user.id });
        };

        $scope.createNewUser = function () {
            $location.path('/user-creation');
        };

        $scope.users = UsersFactory.query();

        //copy the references (you could clone ie angular.copy but then have to go through a dirty checking for the matches)
        $scope.userCollection = [].concat($scope.users);
        $scope.itemsByPage = 2;
    }
]);

//AngularJS single user detail controller
app.controller('UserDetailCtrl', ['$scope', '$routeParams', 'UserFactory', 'JSONDataFactory', '$location', 'UsersFactory',
    function ($scope, $routeParams, UserFactory, JSONDataFactory, $location,UsersFactory) {

        $scope.userEditForm = true;

        $scope.cancel = function () {
            $location.path('/user-list');
        };

        $scope.deleteUser = function() {
            //alert('Im going to delete this one user '+$scope.user.id);
            UserFactory.delete({ id : $scope.user.id });
            $location.path('/user-list');
        };      

        UserController.call(this,$scope,JSONDataFactory,UsersFactory,$location);

        $scope.user = UserFactory.show({id: $routeParams.id});
    }

]);

//AngularJS create new user controller
app.controller('UserCreationCtrl', ['$scope', 'UsersFactory', 'JSONDataFactory', '$location',
    function ($scope, UsersFactory, JSONDataFactory, $location) {

        $scope.message = 'Profile create screen';

        $scope.userEditForm = false;

        $scope.cancel = function () {
            $location.path('/user-list');
        };

        UserController.call(this,$scope,JSONDataFactory,UsersFactory,$location);

        $scope.user = {};
    }
]);