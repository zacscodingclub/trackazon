angular
    .module('app', ['ui.router', 'templates', 'ngMessages'])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('inventory', {
          url: '/',
          templateUrl: 'products/index.html',
          controller: 'InventoryController as inventory',
          resolve: {
            inventory: function(ProductService) {
              return ProductService.getProducts();
            }
          }
        })
        .state('new', {
          url: '/new',
          templateUrl: 'products/new.html',
        })
        .state('about', {
          url: '/about',
          templateUrl: 'about.html'
        })
        .state('contact', {
          url:'/contact',
          templateUrl: 'contact.html'
        })
        .state('user', {
          url:'/user',
          templateUrl: 'users/show.html',
          controller: 'UserController as ctrl',
          resolve: {
            user: function(UserService) {
              return UserService.getUser();
            }
          }
        })

      $urlRouterProvider.otherwise('/');
    });
