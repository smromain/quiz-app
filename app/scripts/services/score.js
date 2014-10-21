'use strict';

/**
 * @ngdoc service
 * @name quizApp.score
 * @description
 * # score
 * Factory in the quizApp.
 */
angular.module('quizApp')
  .factory('score', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
