function UserController($scope, user, UserService) {
  var ctrl = this;
  ctrl.user = user.data;
  console.log(ctrl.user);
}

angular
  .module('app')
  .controller('UserController', UserController);
