'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:QuizCtrl
 * @description
 * # QuizCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('QuizCtrl', function ($scope, $interval, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  	$scope.quiz = [];
  $scope.correctAnswerCount = 0;
  $scope.answerMethod = function (value, answer) {
  	if (answer === value) {
  		$scope.correctAnswerCount++;
  	};
  };
  $scope.addQuestion = function(question) {

	$http.post('http://localhost:3000', {'question': question}).success(
  	function(data, status, headers, config){
  		console.log(data, status, headers, config)
  	}
	).error(function(data, status, headers, config){
  		console.log(data, status, headers, config)
  	});
  };
  this.lengthCheck = function(value) {
  	value = value || "";
  	if (value.length > 9) {
  		return true;
  	}
  	return false
  };
 //  $scope.timer = {'seconds': 120};

 //  $scope.timerOn = true;

 //  $scope.timerStop = function(){
	// $interval.cancel(counter);
	// $scope.timerOn = false;
 //  };

 //  var counter = $interval(function() {
 //  	$scope.timer['seconds'] = $scope.timer['seconds'] - 1;
 //  	if ($scope.timer['seconds'] === 0) {
 //  		$interval.cancel(counter);
 //  		document.getElementById('app').innerHTML = '<p>you lose dude.</p>';
 //  	}
 //  }, 1000);

this.deleteQuestion = function(id) {
	$http.get('http://localhost:3000/delete/' + id);
};

$http.get('http://localhost:3000').success(
  	function(data){
  		$scope.quiz = data;
  	}
);

});
