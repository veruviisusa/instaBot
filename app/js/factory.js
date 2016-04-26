'use strict';

var viewTagFactory = angular.module('viewTagFactory', []);

viewTagFactory.factory('Instagram', ['$http', 'Helper',
    function($http, Helper) {
        var base = "https://api.instagram.com/v1";
        var accessToken = '488650556.1677ed0.24168c818b81426eb3d1017e6d041d20';
        return {
            'reloadTag': function(scope) {
                //scope.imgMasFirst = [];
                //scope.imgMasSecond = [];
                scope.getTag(scope.count, scope.tagFirst).success(function(response) {
                    for(var x in response.data){
                        if(!Helper.findInMas(response.data[x].images.low_resolution.url,scope.imgMasFirst)){
                            scope.imgMasFirst.unshift(response.data[x].images.low_resolution.url);
                        }
                        while(scope.imgMasFirst.length>scope.count){
                            scope.imgMasFirst.splice(scope.imgMasFirst.length-1,1);
                        }
                    }
                    scope = scope.reloadThirdMass();
                }).error(function(response){
                    console.log(response);
                });
                scope.getTag(scope.count, scope.tagSecond).success(function(response) {
                    for(var x in response.data){
                        if(!Helper.findInMas(response.data[x].images.low_resolution.url,scope.imgMasSecond)){
                            scope.imgMasSecond.unshift(response.data[x].images.low_resolution.url);
                        }
                        while(scope.imgMasSecond.length>scope.count){
                            scope.imgMasSecond.splice(scope.imgMasSecond.length-1,1);
                        }
                    }
                    scope = scope.reloadThirdMass();
                }).error(function(response){
                    console.log(response);
                });
                return scope;
            },
            'get': function(count, hashtag) {
                var request = '/tags/' + hashtag + '/media/recent';
                var url = base + request;
                var config = {
                    'params': {
                        'count': count,
                        'callback': 'JSON_CALLBACK',
                        'access_token': accessToken
                    }
                };
                return $http.jsonp(url, config);
            },
            'reloadThirdMas': function(scope) {
                for(var i = 0; i< scope.imgMasFirst.length; i++){
                    for(var j = 0; j< scope.imgMasSecond.length; j++){
                        if(scope.imgMasFirst[i]==scope.imgMasSecond[j] && !Helper.findInMas(scope.imgMasFirst[i],scope.imgMasFirstWithSecond)){
                            scope.imgMasFirstWithSecond.unshift(scope.imgMasFirst[i]);
                            break;
                        }
                    }
                }
                return scope;
            }
        };
    }
]);