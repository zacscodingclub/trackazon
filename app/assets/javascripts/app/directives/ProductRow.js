angular
  .module('app')
  .directive('productRow', ['ProductService', function(ProductService) {
    return {
      scope: {
        itemId:'=',
        name: '=',
        itemPrice: '=',
        sellPrice: '=',
        quantity: '=',
        quantitySold: '=',
        inStock: '=',
        profit: '=',
      },
      templateUrl: 'productRow.html',
      controller: function($scope) {
        var qs = $scope.quantitySold;
        $scope.initMin = qs;
        $scope.inStock = setInStock($scope);
        $scope.profit = setProfit($scope);
      },
      link: function(scope, element, attrs, ctrl) {
        scope.$watch(function() {
          return scope.quantitySold;
        }, function(newValue, oldValue) {
          var data = {
            'id': scope.itemId,
            'value': newValue
          }

          ProductService.updateQuantitySold(data)
            .then(function(response) {
              scope.inStock = setInStock(scope);
              scope.profit = setProfit(scope);
            }, function(error) {
              console.log("Error occurred: " + error);
            });
        })
      }
    }
  }]);


var setInStock = function(scope) {
  return scope.quantity - scope.quantitySold;
}

var setProfit = function(scope) {
  return (scope.sellPrice - scope.itemPrice) * scope.quantitySold;
}
