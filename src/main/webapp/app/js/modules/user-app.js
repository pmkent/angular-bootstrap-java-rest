'use strict';

//Create main AngularJS module, import services, directives, controllers modules
var app = angular.module('user', ['ngRoute',
	'user.services',
	'user.directives',
	'user.controllers'
]);

//Declare constants used in all the user AngularJS modules
app.constant('appConfig', {
	'serverUrl' : 'http://localhost:8080',
	'appContext' : '/',
    'dataUrl' : '/app/json/type-list-data.json', // JSON file containing all user drop-down lists
    'restUrl' : '/rest/user', //Java REST service Resource callback link
    'libsFolder' : '/app/libs' //All javascript, css 3rd party libraries used the the application
});

//Partial views navigation
app.config(['$routeProvider',
	function ($routeProvider) {
 
    $routeProvider.
    when('/user-list', {
        templateUrl: 'views/user-list.html', 
        controller: 'UserListCtrl'
    }).
    when('/user-detail/:id', {
        templateUrl: 'views/user-detail.html', 
        controller: 'UserDetailCtrl'
    }).
    when('/user-create', {
        templateUrl: 'views/user-detail.html',
        controller: 'UserCreationCtrl'
    }).
    otherwise({
        redirectTo: '/user-list'
    });
}]);