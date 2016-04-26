'use strict';

var helperFactory = angular.module('helperFactory', []);

helperFactory.factory('Helper', [
    function() {

        return {
            'findInMas': function(el,mas) {
                for(var i = 0; i< mas.length; i++){
                    if(el==mas[i]){
                        return true;
                    }
                }
                return false;
            }
        };
    }
]);