'use strict';

var helperFactory = angular.module('helperFactory', []);

helperFactory.factory('Helper', [
    function() {

        return {
            'findInMas': function(el,mas) {
                for(var i = 0; i< mas.length; i++){
                    if(el.images.low_resolution.url==mas[i].images.low_resolution.url){
                        return true;
                    }
                }
                return false;
            }
        };
    }
]);