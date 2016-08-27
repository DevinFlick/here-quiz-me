(function() {
  angular.module('ngQuiz')
        .controller('QuizController', QuizController);

  QuizController.$inject = ['$scope',
                            'QuizService',
                            'AuthService',
                            '$location',
                            '$routeParams',
                            'UserService'
                            ];

  function QuizController($scope, QuizService, AuthService, $location, $routeParams, UserService){
    $scope.createQuiz = createQuiz;
    $scope.updateQuiz = updateQuiz;
    $scope.getAQuiz = getAQuiz;
    $scope.quizzes = [];

    getAQuiz($routeParams.quizId);
    getQuizzes();

    function getAQuiz(quizId){
      QuizService.getAQuiz(quizId)
                  .then(function(response){
                    $scope.quiz = response.data.quiz;
                  })
                  .catch(function(err){
                    console.log(err);
                  });
    }
    function getQuizzes(){
      QuizService.getAllQuizzes()
                  .then(function(response){
                    $scope.quizzes = response.data.quizzes;
                  })
                  .catch(function(err){
                    console.log(err);
                  });
    }
    function createQuiz(quiz){
      QuizService.createQuiz(quiz)
                  .then(function(response){
                    $location.path('/takequiz/');//ask justin
                  })
                  .catch(function(err){
                    console.log(err);
                  });
    }
    function updateQuiz(quiz){
      QuizService.updateQuiz(quiz._id, quiz)
                  .then(function(response){
                    $location.path('/takequiz/');
                  })
                  .catch(function(err){
                    console.log(err);
                  });
    }

  }

}());
