'use strict';

/**
 * @ngdoc service
 * @name quizApp.score
 * @description
 * # score
 * Factory in the quizApp.
 */
angular.module('quizApp')
  .factory('quizService', function (storage, $http, $q) {

    // storage.clearAll();
    function Quiz(){

      this.addQuestion = function(question) {
        var questions = storage.get('questions') || []; 
        questions.push(question)
        storage.set('questions', questions); 
      };

      this.post = function(question){
        //obtain a new deferred obj, a task that finishes in the future
        var deferred = $q.defer(); 
        $http.post('http://localhost:3000', {
          'question': question
        }).success(function(data){
          deferred.resolve(data); 
        }).error(function(){
          deferred.reject('There was an error')
        })
        return deferred.promise
      };


      this.getQuestions = function(){
        return storage.get('questions') || [];
      };   

      this.retrieveDatabase = function(callback){
        $http.get('http://localhost:3000').success(callback)  
      }

      this.deleteQuestion = function(id){
        var url = 'http://localhost:3000/delete/' + id;        
        $http.get(url);
      }
  }

    return new Quiz(); 
});


