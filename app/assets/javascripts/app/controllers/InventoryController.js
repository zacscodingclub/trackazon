function InventoryController($scope, inventory, ProductService) {
  var ctrl = this;
  ctrl.products = inventory.data;
  ctrl.product = {};

  $scope.rowClass = function(product) {
    return product.inStock === 0 ? "table-active" : "";
  }
  
  ctrl.addNewProduct = function() {
    ProductService.postProduct($scope.product)
      .then(function(response) {
        ctrl.products.push(response.data);
        $scope.product = {};
        $scope.newProductForm.$setPristine();
      },function(error) {
        console.log("Error occurred: " + error);
      });
  }
}

angular
  .module('app')
  .controller('InventoryController', InventoryController)
