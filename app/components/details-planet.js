'use strict';

app
  .directive('detailsPlanet', function () {
    return {
      restrict: 'E',
      templateUrl: '../templates/components/details-planet.html',
      scope: {
        planet: '<'
      }
    };
  });