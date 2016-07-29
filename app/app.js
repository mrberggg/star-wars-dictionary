'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('swDictionary', [
  'ngRoute',
  'ngMaterial',
  'ngAria',
  'ngMessages'
]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/404'});
}]);