function InventoryController($scope, inventory, ProductService) {
  var ctrl = this;
  ctrl.products = inventory.data;
  ctrl.newProduct = {};

  ctrl.products.forEach(addInStockAndProfit);

  function addInStockAndProfit(product) {
    product.inStock = product.quantity - product.quantity_sold;
    product.profit = ( product.sell_price - product.item_price) * product.quantity_sold;
  }

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
