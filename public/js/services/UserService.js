(function() {
  angular.module('ngQuiz')
          .factory('UserService', UserService);

  UserService.$inject = ['$http'];

  function UserService($http){
    var baseUrl = 'https://quiz-base.herokuapp.com/users/';
    var service = {
      getAllUsers: getAllUsers,
      createUser: createUser,
      getOneUser: getOneUser,
      updateUser: updateUser,
      deleteUser: deleteUser,
    };
    return service;

    function getAllUsers(){
      return $http.get(baseUrl);
    };
    function createUser(userObj){
      return $http.post(baseUrl, userObj);
    };
    function getOneUser(userId){
      return $http.get(baseUrl + userId);
    };
    function updateUser(userId, updateInfo){
      return $http.update(baseUrl, updateInfo);
    };
    function deleteUser(userId){
      return $http.delete(baseUrl + userId)
    };
  }
}());
