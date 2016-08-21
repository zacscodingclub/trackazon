function InventoryController($scope, inventory) {
  var ctrl = this;
  ctrl.products = inventory.data;
}

angular
  .module('app')
  .controller('InventoryController', InventoryController)
