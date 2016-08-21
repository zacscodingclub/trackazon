function ProductService($http) {
  this.getProducts = function() {
    return $http.get('/inventory.json')
  }

  this.getProduct = function(id) {
    return $http.get('/products/' + id + '.json')
  }
}

angular
  .module('app')
  .service('ProductService', ProductService)
