angular.module('imogeneClone', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('our-home', {
      url:'/our-home',
      templateUrl: "../views/our-home.html"
    })
    .state('shop', {
      url:'/shop',
      templateUrl: "../views/shop.html",
      controller: 'shopCtrl'
    })
    .state('the-jeans', {
      url:'/the-jeans',
      templateUrl: "../views/the-jeans.html"
    })
    .state('home', {
      url: '/',
      templateUrl: "../views/landing.html"
    })
    .state('checkout', {
      url: '/checkout',
      templateUrl: "../views/checkout.html",
      controller: 'checkoutCtrl'
    })
    .state('corn', {
      url: '/corn',
      templateUrl: "../views/corn.html"
    })
})
