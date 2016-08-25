(function() {
  angular.module('ngQuiz')
          .controller('navbarController', navbarController);

  navbarController.$inject = ['$scope'];

  function navbarController($scope){
    $scope.message = 'Hey! Angular Works!';
  }
}());
