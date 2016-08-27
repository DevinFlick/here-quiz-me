(function() {
  angular.module('ngQuiz')
          .factory('QuestionService', QuestionService);

  QuestionService.$inject = ['$http'];

  function QuestionService($http){
    var baseUrl = 'https://quiz-base.herokuapp.com/questions/';

    var service = {
      getQuestionsForAQuiz: getQuestionsForAQuiz,
      getAllQuestions: getAllQuestions,
      createQuestion: createQuestion,
      updateQuestion: updateQuestion,
      deleteQuestion: deleteQuestion,
    };
    return service;

    function getQuestionsForAQuiz(quizName){
      return $http.get(baseUrl + quizName);
    }
    function getAllQuestions(){
      return $http.get(baseUrl);
    }
    function createQuestion(questionsObj){
      return $http.post(baseUrl, questionsObj);
    }
    function updateQuestion(questionId, questionObj){
      return $http.put(baseUrl + questionId, questionObj);
    }
    function deleteQuestion(questionId){
      return $http.delete(baseUrl + questionId);
    }
  }
}());
