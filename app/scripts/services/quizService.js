'use strict';

/**
 * @ngdoc service
 * @name quizApp.score
 * @description
 * # score
 * Factory in the quizApp.
 */
angular.module('quizApp')
  .factory('quizService', function (storage, $http) {
    // Service logic
    // ...
// 
    // storage.clearAll();
    function Quiz(){

      this.addQuestion = function(question) {
        var questions = storage.get('questions') || []; 
        questions.push(question)
        storage.set('questions', questions); 
      };

      this.post = function(question, callback){
        $http.post('http://localhost:3000', {'question': question}).success(callback);
          //   function(data, status, headers, config){
          //     // console.log(data, status, headers, config)
          //   }
          // ).error(function(data, status, headers, config){
          //     // console.log(data, status, headers, config)
          //   });
      };

      this.getQuestions = function(){
        // console.log(storage.get('questions'))
        return storage.get('questions') || [];
      };   


      this.retrieveDatabase = function(callback){
        $http.get('http://localhost:3000').success(callback);  
      }

      this.deleteQuestion = function(id){
        var url = 'http://localhost:3000/delete/' + id;        
        $http.get(url);
      }
  }

    return new Quiz(); 
});


