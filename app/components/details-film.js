'use strict';

app
  .directive('detailsFilm', function () {
    return {
      restrict: 'E',
      templateUrl: '../templates/components/details-film.html',
      scope: {
        film: '<'
      }
    };
  });