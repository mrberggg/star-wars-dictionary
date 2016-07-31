'use strict';

app
  .directive('detailsStarship', function () {
    return {
      restrict: 'E',
      templateUrl: '../templates/components/details-starship.html',
      scope: {
        starship: '<'
      }
    };
  });