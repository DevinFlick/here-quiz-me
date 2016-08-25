(function() {
  angular.module('ngQuiz')
          .controller('navbarController', navbarController);
navbarController.$inject = ['$scope', '$location'];

function navbarController($scope, $location){
  $scope.isActive = function (viewLocation){
    return viewLocation === $location.path();
  };
};
}());
