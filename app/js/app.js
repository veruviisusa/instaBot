'use strict';

/* App Module */

var viewTagApp = angular.module('viewTagApp', [
  'ngRoute',

  'viewTagControllers',
  'viewTagFactory',
  'helperFactory'
])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/app', {
          templateUrl: 'templates/viewTag.html',
          controller: 'viewTagCtrl'}).
        otherwise({
          redirectTo: '/app'
        });
  }]);