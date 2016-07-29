'use strict';

app
  .directive('loading', function () {
    return {
      restrict: 'E',
      template: '<div class="spinner"/>'
    };
  });