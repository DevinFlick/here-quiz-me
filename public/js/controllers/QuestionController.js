(function() {
  angular.module('ngQuiz')
        .controller('QuestionController', QuestionController);

  QuestionController.$inject = ['$scope',
                                '$location',
                                '$routeParams',
                                'QuestionService',
                                'QuizService',
                                'AuthService',
                                ];

  function QuestionController($scope, $location, $routeParams, QuestionService, QuizService, AuthService){
    $scope.questions = [];

    getQuestions();

    function getQuestions(){
      QuestionService.getAllQuestions()
                      .then(function(response){
                        $scope.questions = response.data.questions;
                      })
                      .catch(function(err){
                        console.log(err);
                      });
    }
  }

}());
