'use strict';

/**
 * @ngdoc service
 * @name quizApp.scoreKeeperFactory
 * @description
 * # scoreKeeperFactory
 * Factory in the quizApp.
 */
angular.module('quizApp')
  .factory('scoreKeeperFactory', function () {
    // Service logic
    // ...

    var object = {score: 0};

    // Public API here
    return {
      addScore: function () {
        console.log('score added to')
        object.score++; 
      }, 

      getScore: function(){
        return object;
      }
    };

  });
