function ProductRow() {
  return {
    scope: {
      name: '=',
      itemPrice: '=',
      sellPrice: '=',
      quantity: '=',
      quantitySold: '='
    },
    templateUrl: 'product.html'
  }
}

angular
  .module('app')
  .directive('productRow', ProductRow);
