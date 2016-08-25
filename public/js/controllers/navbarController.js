(function() {
  angular.module('ngQuiz')
          .controller('navbarController', navbarController);
navbarController.$inject = ['$scope', '$location', 'AuthService'];

function navbarController($scope, $location, AuthService){
  $scope.isActive = function (viewLocation){
    return viewLocation === $location.path();
  };
  $scope.isLoggedIn = AuthService.isLoggedIn;
  $scope.logout = logout;
  $scope.user = AuthService.currentUser();

  function logout(){
    AuthService.logout();
  }; //done for future functionality
};
}());
