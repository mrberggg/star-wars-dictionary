'use strict';

app
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/:type/:id', {
      templateUrl: '../templates/views/details.html',
      controller:  'DetailsCtrl'
    });
  }])

  .controller('DetailsCtrl', ['$routeParams', '$scope', 'dataTypes', 'fetchData', function ($routeParams, $scope, dataTypes, fetchData) {
    var type = $routeParams.type;
    var id   = $routeParams.id;
    var validDataType = dataTypes.isValidDataType(type);
    if(validDataType && id){
      var methodName = 'get' + type;
      fetchData[methodName](id)
        .then(function(data){
          console.log(data);
        });
    }

    $scope.isValidDateType = validDataType;
    $scope.type                                                                = type;
    $scope.id                                                                  = id;
    console.log(type, id, 'is valid: ' + validDataType);
  }]);