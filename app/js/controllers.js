'use strict';

/* Controllers */

var viewTagControllers = angular.module('viewTagControllers', []);

viewTagControllers.controller('viewTagCtrl', ['$scope', '$http', 'Instagram', '$interval',
  function($scope, $http, Instagram, $interval) {

        $scope.count = 30;

        $scope.tagFirst = 'cat';
        $scope.tagSecond = 'dog';
        $scope.imgMasFirst = [];
        $scope.imgMasSecond = [];
        $scope.imgMasFirstWithSecond = [];
        $scope.flagForReload = true;
        $scope.timeAfterReload = 0;
        $scope.stepForInterval = 100;
        $scope.timeForReload = 10000;

        $scope.getTag = function(count,tag){
          return Instagram.get(count,tag);
        };
        $scope.reloadThirdMass = function(){
            $scope.flagForReload = true;
            $scope.timeAfterReload = 0;
            return Instagram.reloadThirdMas($scope);
        };
        $scope.reloadTag = function(){
          if($scope.flagForReload){
              $scope.flagForReload = false;
              $scope = Instagram.reloadTag($scope);
          }
        };

        $scope.startTimerForReload = function(){
            var timer = $interval(function() {
                if($scope.flagForReload){
                    $scope.timeAfterReload+=$scope.stepForInterval;
                    if($scope.timeAfterReload>=$scope.timeForReload){
                        $scope.reloadTag();
                    }
                }
            }, $scope.stepForInterval);
        };

        $scope.reloadTag();
        $scope.startTimerForReload();
  }]);
