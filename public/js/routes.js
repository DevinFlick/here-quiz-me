(function() {
  angular.module('ngQuiz')
        .config(RouterConfig);

  RouterConfig.$inject = ['$routeProvider'];

  function RouterConfig($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl:'html/views/home.html',
      controller: 'HomeController',
    })
    .when('/login', {
      templateUrl:'html/views/login.html',
      controller: 'LoginController',
    })
    .when('/signup', {
      templateUrl:'html/views/signup.html',
      controller: 'SignupController',
    })
    .when('/allquizzes', {
      templateUrl:'html/views/allquizzes.html',
      controller: 'QuizController',
    })
    .when('/findquiz', {
      templateUrl:'html/views/findquiz.html',
      controller: 'QuizController',
    })
    .when('/quizadmin', {
      templateUrl:'html/views/quizadmin.html',
      controller: 'QuizController',
    })
    .when('/updatequiz', {
      templateUrl:'html/views/updatequiz.html',
      controller: 'QuizController',
    })
    .when('/takequiz', {
      templateUrl:'html/views/takequiz.html',
      controller: 'QuestionController',
    })
    .otherwise({
      redirectTo: '/'
    });
  }
}());
