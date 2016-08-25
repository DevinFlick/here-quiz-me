(function() {
  angular.module('ngQuiz')
          .factory('QuestionService', QuestionService);

  QuestionService.$inject = ['$http'];

  function QuestionService($http){
    var baseUrl = 'baseurl/questions/';

    var service = {
      getQuestionsForAQuiz: getQuestionsForAQuiz,
      createQuestion: createQuestion,
      updateQuestion: updateQuestion,
      deleteQuestion: deleteQuestion,
    };
    return service;

    function getQuestionsForAQuiz(quizId){
      return $http.get(baseUrl + quizId);
    };
    function createQuestion(questionsObj){
      return $http.post(baseUrl, questionsObj);
    };
    function updateQuestion(questionId, questionObj){
      return $http.put(baseUrl + questionId, questionObj);
    };
    function deleteQuestion(questionId){
      return $http.delete(baseUrl + questionId);
    };
  }
}());
