angular
    .module('app', ['ui.router', 'templates'])
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        // .state('inventory', {
        //   url: '/inventory',
        //   templateUrl: 'inventory.html',
        //   controller: 'InventoryController as ctrl'
        // })
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
