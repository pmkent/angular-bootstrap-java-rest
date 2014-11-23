'use strict';

var app = angular.module('user.directives', []);

/* Application version */
app.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);

// Delete confirm popup directive
app.directive('ngReallyClick', ['$modal',
  function($modal) {

    var ModalInstanceCtrl = function($scope,$modalInstance) {
      $scope.ok = function() {
        $modalInstance.close();
      };
      $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
      };
    };

    return {
      restrict : 'A',
        scope : {
          ngReallyClick : "&",
          item : "="
        },
      link : function(scope,element,attrs) {
        element.bind('click',
          function(){
            var message = attrs.ngReallyMessage || "Are you sure?";
            var modalHtml = '<div class="modal-body">' + message + '</div>';
            modalHtml += '<div class="modal-footer">';
            modalHtml += '  <button class="btn btn-primary" ng-click="ok()">';
            modalHtml += '    Sure, why not?';
            modalHtml += '  </button>';
            modalHtml += '  <button class="btn btn-warning" ng-click="cancel()">';
            modalHtml += '    No, please dont!';
            modalHtml += '  </button>';
            modalHtml += '</div>';
            var modalInstance = $modal.open({
              template : modalHtml,
              controller : ModalInstanceCtrl
            });
            modalInstance.result.then(
              function(){
                scope.ngReallyClick({
                  item:scope.item
                });
              },
              function() {}
            );
          }
        );
      }
    }
  }
]);