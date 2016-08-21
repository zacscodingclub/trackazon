angular
    .module('app', ['ui.router', 'templates'])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('inventory', {
          url: '/',
          templateUrl: 'inventory.html',
          controller: 'InventoryController as inventory',
          resolve: {
            inventory: function(ProductService) {
              return ProductService.getProducts();
            }
          }
        })
        .state('about', {
          url: '/about',
          templateUrl: 'about.html'
        })
        .state('contact', {
          url:'/contact',
          templateUrl: 'contact.html'
        })

      $urlRouterProvider.otherwise('/');
    });
