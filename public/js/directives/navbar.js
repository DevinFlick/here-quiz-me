angular.module('ngQuiz')
  .directive('navbar', function(){
  return{
    restrict: 'E',
    scope:{
      navbar: '='
    },
    templateUrl:'/html/navbar.html'
  };
});
