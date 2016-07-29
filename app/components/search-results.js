'use strict';

app
  .directive('searchResults', function () {
    console.log('search results');
    return {
      restrict: 'E',
      templateUrl: '../templates/components/search-results.html',
      scope: {
        items: '<'
      }
    };
  });
