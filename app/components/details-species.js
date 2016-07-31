'use strict';

app
  .directive('detailsSpecies', function () {
    return {
      restrict: 'E',
      templateUrl: '../templates/components/details-species.html',
      scope: {
        species: '<'
      }
    };
  });