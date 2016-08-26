function UserService($http) {
  this.getUser = function() {
    return $http.get('/users.json');
  }
}

angular
  .module('app')
  .service('UserService', UserService);
