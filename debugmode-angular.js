(function() {
  'use strict';

  var app = angular.module('app.debugmode', ['ngCookies'])
  .directive('setDebugMode', ['$cookies', function($cookies) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        angular.element(document).ready(function() {
          if ($cookies.get('debugmode') === 'active') {
            document.body.classList.add('debug-mode'); 
          }
          else {
            $cookies.put('debugmode', "");
          }
        });
      }
    };
  }])
  .directive('debugMode', ['$cookies', function($cookies) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.on('click', function() {
          document.body.classList.toggle('debug-mode');

          if ($cookies.get('debugmode') === "") {
            $cookies.put('debugmode', 'active');
          }
          else {
            $cookies.put('debugmode', '');
          }
        });
      }
    };
  }]) 
})();
