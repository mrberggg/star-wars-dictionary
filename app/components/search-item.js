app
  .directive('searchItem', function () {
    return {
      restrict: 'E',
      templateUrl: '../templates/components/search-item.html',
      scope: {
        item: '<'
      }
    };
  });