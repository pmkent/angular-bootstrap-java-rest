'use strict';

var app = angular.module('app-filters',[]);

// Display application version on the footer.
app.filter('interpolate',['version',function(version){
	return function(text) {
		return String(text).replace(/\%VERSION\%/mg,version);
	}
}]);