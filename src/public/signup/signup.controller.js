(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController)
.service('UserService', UserService);

SignupController.$inject = ["menuItems", "shortNames", "UserService"];
function SignupController(menuItems, shortNames, UserService) {
  var $ctrl = this;
  $ctrl.menuItems = menuItems;
  $ctrl.favItemExists = false;

  $ctrl.submit = function() {
    console.log($ctrl.user);
    UserService.setUser($ctrl.user);
    $ctrl.completed = true;
  }

  $ctrl.validateFavItem = function() {

    if (shortNames.indexOf($ctrl.user.favoriteItem) > -1) {
      $ctrl.favItemExists = true;
    } else {
      $ctrl.favItemExists = false;
    }
  }

}

UserService.$inject =[];
function UserService() {
  var service = this;
  service.user = '';
  service.setUser = function(user){
    service.user = user;
  };
  service.getUser = function() {
    return service.user;
  }

}


})();
