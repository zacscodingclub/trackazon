function InventoryController($scope, inventory, ProductService) {
  var ctrl = this;
  ctrl.products = inventory.data;

  $scope.product = {};

  $scope.addNewProduct = function() {
    ProductService.postProduct($scope.product)
      .then(function(response) {
        ctrl.products.push(response.data);
        $scope.product = {}
        $scope.form.$setPristine();
      },function(error) {
        console.log("Error occurred: " + error);
      });
  }
}

angular
  .module('app')
  .controller('InventoryController', InventoryController)
