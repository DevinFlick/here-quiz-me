(function() {
  angular.module('ngQuiz')
          .factory('QuizService', QuizService);

  QuizService.$inject = ['$http'];

  function QuizService($http){
    var baseUrl = 'base/quizzes';

    var service = {
      getAllQuizzes: getAllQuizzes,
      getAQuiz: getAQuiz,
      getRandomNumberOfQuizzes: getRandomNumberOfQuizzes,
      getTheMostRecentNumberOfQuizzes: getTheMostRecentNumberOfQuizzes,
      createQuiz: createQuiz,
      updateQuiz: updateQuiz,
      deleteQuiz: deleteQuiz,
    };
    return service;

    function getAllQuizzes(){
      return $http.get(baseUrl);
    };
    function getAQuiz(quizId){
      return $http.get(baseUrl + quizId);
    };
    function getRandomNumberOfQuizzes(){};
    function getTheMostRecentNumberOfQuizzes(){};
    function createQuiz(quizObj){
      return $http.post(baseUrl, postObj);
    };
    function updateQuiz(quizId, updateQuizObj){
      return $http.put(baseUrl + postId, updateQuizObj);
    };
    function deleteQuiz(quizId){
      return $http.delete(baseUrl + postId);
    }

  }
}());
