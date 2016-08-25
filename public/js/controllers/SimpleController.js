(function() {
  angular.module('ngQuiz')
          .controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope'];

  function SimpleController($scope){
    $scope.message = 'Hey! Angular Works!';
  }
}());
