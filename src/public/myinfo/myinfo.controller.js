(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['currentUser'];
function MyInfoController(currentUser) {
  var $ctrl = this;
  $ctrl.user = currentUser;
  $ctrl.userLoggedIn = false;

  if ($ctrl.user != '') {
    $ctrl.userLoggedIn = true;
  }


}


})();
