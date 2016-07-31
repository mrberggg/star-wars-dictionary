'use strict';

app
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/:type/:id', {
      templateUrl: '../templates/views/details.html',
      controller:  'DetailsCtrl'
    });
  }])

  .controller('DetailsCtrl', ['$routeParams', '$scope', 'dataTypes', 'fetchData',
    function ($routeParams, $scope, dataTypes, fetchData) {
      $scope.error           = false;
      $scope.item            = {};
      $scope.isValidDateType = true;

      var type          = $routeParams.type;
      var id            = $routeParams.id;
      var validDataType = dataTypes.isValidDataType(type);
      if (validDataType && id) {
        var methodName = 'get' + type;
        try {
          fetchData[methodName](id)
            .then(function (data) {
              console.log(data);
              $scope.item = data;
              $scope.$apply();
            })
            .catch(function () {
              console.log('error 2');
              $scope.error = true;
              $scope.$apply();
            });
        } catch (e){
          console.log('error');
          $scope.error = true;
          $scope.$apply();
        }
      } else {
        $scope.isValidDateType = false;
      }
    }]);