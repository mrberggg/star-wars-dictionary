'use strict';

app
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '../templates/views/home.html',
      controller:  'HomeCtrl'
    });
  }])

  .controller('HomeCtrl', ['$scope', 'fetchData', function ($scope, fetchData) {
    var allItems   = [];
    $scope.loading = true;
    $scope.search  = {
      selected: '',
      text:     '',
      items:    [],
      run:      runSearch
    };

    fetchData.getAll()
      .then(function (items) {
        allItems = items;
        $scope.loading = false;
        $scope.$apply();
      });

    function runSearch() {
      var searchText = $scope.search.text.toLowerCase();
      if (!searchText) {
        // Empty list if no search text
        $scope.search.items = [];
      } else {
        // set items
        $scope.search.items = allItems.filter(function (item) {
          return item.searchText.toLowerCase().indexOf(searchText) > -1;
        });
      }
    }
  }]);