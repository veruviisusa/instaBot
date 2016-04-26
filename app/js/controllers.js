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
        $scope.timeForReload = 10;
        $scope.timeToReload = 0;
        $scope.showImg = false;
        $scope.objShowImg = {};
        $scope.checkTimer = true;

        $scope.getTag = function(count,tag){
          return Instagram.get(count,tag);
        };
          $scope.fillArray = function(imgs,array,maxLength){
              return Instagram.fillArray(imgs,array,maxLength);
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
                if($scope.checkTimer && $scope.flagForReload && !$scope.showImg){
                    $scope.timeAfterReload+=$scope.stepForInterval;
                    if($scope.timeAfterReload>=$scope.timeForReload*1000){
                        $scope.reloadTag();
                    }
                }
                $scope.timeToReload = Math.floor(($scope.timeForReload*1000-$scope.timeAfterReload)/1000);
            }, $scope.stepForInterval);
        };

        $scope.openShow = function(img){
            $scope.showImg = true;
            $scope.objShowImg = img;
        };

        $scope.validTimeForReload = function(){
            if($scope.timeForReload<10){
                $scope.timeForReload = 10;
            }
        };

        $scope.reloadTag();
        $scope.startTimerForReload();
  }]);
