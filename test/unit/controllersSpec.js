'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('viewTagApp'));

  describe('viewTagCtrl', function(){
    var scope, ctrl, $httpBackend;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('viewTagCtrl', {$scope: scope});
    }));

    it('should set the default value of tag1', function() {
      expect(scope.tagFirst).toBe('cat');
    });
    it('should set the default value of tag1', function() {
      expect(scope.tagSecond).toBe('dog');
    });

    it('should set the false when change value of tag1', function() {
      scope.tagFirst = "cats";
      expect(scope.flagForReload).toBe(false);
    });
    it('should set the false when change value of tag2', function() {
      scope.tagSecond = "dogs";
      expect(scope.flagForReload).toBe(false);
    });
    it('should fill array by imgs', function() {
      var imgs = [{
        images: {
          low_resolution: {
            url: 'url1'
          }
        }
      },{
        images: {
          low_resolution: {
            url: 'url2'
          }
        }
      },{
        images: {
          low_resolution: {
            url: 'url3'
          }
        }
      },{
        images: {
          low_resolution: {
            url: 'url4'
          }
        }
      },{
        images: {
          low_resolution: {
            url: 'url5'
          }
        }
      },{
        images: {
          low_resolution: {
            url: 'url6'
          }
        }
      },{
        images: {
          low_resolution: {
            url: 'url7'
          }
        }
      }];
      var array = [];
      array = scope.fillArray(imgs,array,5);
      expect(array.length).toBe(5);
    });

  });

});
