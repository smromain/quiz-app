'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuizCtrl', function ($scope, $interval, $http, quizService, scoreKeeperFactory, storage) {
    
  // storage.clearAll()
  var self = this;
  $scope.correctAnswerCount = scoreKeeperFactory.getScore();
  $scope.timer = {'seconds': 120};

  if (quizService.getQuestions().length === 0){
    alert('loading data')
    quizService.retrieveDatabase(function(data){
      for (var i = 0; i < data.length; i++){
        quizService.addQuestion(data[i])
      } 
    });
  }

  this.addQuestion = function(question) {
    quizService.post(question).then(function(data){
      quizService.addQuestion(data)
    })
  }

  this.deleteQuestion = function(id){
    var  questions = []
    console.log('in delete')
    quizService.deleteQuestion(id)
    storage.set('questions', questions)
    quizService.retrieveDatabase(function(data){
      for (var i = 0; i < data.length; i++){
        quizService.addQuestion(data[i])
      } 
    });
    this.getQuestions(); 
  }

  this.getQuestions = function(){
    $scope.quiz = quizService.getQuestions();
  }


  this.answerMethod = function(value, answer) {
    if (answer === value) {
      alert('you did it!')
      scoreKeeperFactory.addScore(); 
    };
  };

  this.lengthCheck = function(value) {
    value = value || "";
    if (value.length > 9) {
      return true;
    }
    return false
  };

 //  $scope.timerOn = true;

 //  $scope.timerStop = function(){
  // $interval.cancel(counter);
  // $scope.timerOn = false;
 //  };

  var counter = $interval(function() {
   $scope.timer['seconds'] = $scope.timer['seconds'] - 1;
   if ($scope.timer['seconds'] === 0) {
     $interval.cancel(counter);
     document.getElementById('app').innerHTML = '<p>you lose dude.</p>';
   }
  }, 1000);


    this.getQuestions();
})
