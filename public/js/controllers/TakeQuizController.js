(function() {
  angular.module('ngQuiz')
          .controller('TakeQuizController', TakeQuizController);

  TakeQuizController.$inject = ['$scope', 'QuestionService', 'AuthService', '$routeParams', 'QuizService'];

  function TakeQuizController($scope, QuestionService, AuthService, $routeParams, QuizService){
    $scope.questions = [];
    $scope.quiz = [];
    console.log($routeParams.quizName);
    getQuestionsForAQuiz($routeParams.quizName);


    function getQuestionsForAQuiz(quizName){
      QuestionService.getQuestionsForAQuiz(quizName)
              .then(function(response){
                $scope.questions = response.data.questions;
                angular.forEach($scope.questions, function(question){
                  question.answers = question.answers[0].replace('[', '') //replace the left bracket the string with nothing - removes the left bracket
                                                        .replace(']', '') // replace the right bracket in the string with nothing - removes the right bracket
                                                        .split(', '); // splits on comma-space combo to provide an array
                  console.log(question);
                });
              })
              .catch(function(err){
                console.log(err);
              });
    }
  }
}());
