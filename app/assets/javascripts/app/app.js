angular
    .module('app', ['ui.router', 'templates'])
    .config(function($stateProvider, $urlRouterProvider) {


      $urlRouterProvider.otherwise('/');
    });
