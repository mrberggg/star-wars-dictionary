'use strict';

app
  .directive('layout', function () {
    return {
      transclude: true,
      restrict: 'E',
      templateUrl: '../templates/components/layout.html'
    };
  });