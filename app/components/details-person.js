'use strict';

app
  .directive('detailsPerson', function () {
    return {
      restrict: 'E',
      templateUrl: '../templates/components/details-person.html',
      scope: {
        person: '<'
      }
    };
  });