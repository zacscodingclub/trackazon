function ProductRow() {
  return {
    scope: {
      name: '=',
      itemPrice: '=',
      sellPrice: '=',
      quantity: '=',
      quantitySold: '=',
      inStock: '=',
      profit: '=',
    },
    templateUrl: 'productRow.html',
    link: function (scope, element, attrs, ctrl) {
      var el = element[0];
      var input = el.querySelector('input');

      input.addEventListener('change', function(e) {
        debugger;
      });

    }
  }
}

angular
  .module('app')
  .directive('productRow', ProductRow);
