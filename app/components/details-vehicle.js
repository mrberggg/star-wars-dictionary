'use strict';

app
  .directive('detailsVehicle', function () {
    return {
      restrict: 'E',
      templateUrl: '../templates/components/details-vehicle.html',
      scope: {
        vehicle: '<'
      }
    };
  });