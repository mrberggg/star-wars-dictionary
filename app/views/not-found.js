'use strict';

app
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/404', {
      templateUrl: '../templates/views/not-found.html',
      controller:  'ViewNotFoundCtrl'
    });
  }])

  .controller('ViewNotFoundCtrl', [function () {

  }]);