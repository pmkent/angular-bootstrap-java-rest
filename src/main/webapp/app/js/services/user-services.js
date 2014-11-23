
'use strict';

/* Angular REST Services */
var app = angular.module('user.services', ['ngResource']);

// Retrieve all dropdown lists' data from a JSON file.
// Declare the application version to be displayed at the bottom of the footer
app.factory('JSONDataFactory', function($resource, $http, appConfig) {
   return {
     getJSONListData: function() {
      return $http.get(appConfig.serverUrl+appConfig.dataUrl).then(function(result) {
           return result.data;
       });
     }  
   };
}).value('version', '0.1.0');

//Retrieves a list of all users, saves and updates
app.factory('UsersFactory', function ($resource,appConfig) {
    return $resource(appConfig.serverUrl+appConfig.restUrl, {}, {
        query: { method: 'GET', isArray: true },
        upsert : { method: 'POST' }
    })
});

//Retrieves and deletes a singer user
app.factory('UserFactory', function ($resource,appConfig) {
    return $resource(appConfig.serverUrl+appConfig.restUrl+'/:id', {}, {
        show: { method: 'GET' },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});