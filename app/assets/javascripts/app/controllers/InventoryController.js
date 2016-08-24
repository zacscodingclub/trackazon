function InventoryController($scope, inventory, ProductService) {
  var ctrl = this;
  ctrl.products = inventory.data;
  ctrl.newProduct = {};

  ctrl.addNewProduct = function() {
    ProductService.postProduct(ctrl.newProduct)
      .then(function(response) {
        ctrl.products.push(response.data);
        ctrl.newProduct = {}
        $scope.form.$setPristine();
      },function(error) {
        console.log("Error occurred: " + error);
      });
  }
}

angular
  .module('app')
  .controller('InventoryController', InventoryController)
