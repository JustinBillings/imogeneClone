angular.module('imogeneClone')
.controller('checkoutCtrl', function($scope, mainService, $state) {
  $scope.myCart = mainService.getsMyCart();
  $scope.goToCorn = function(){
    if($scope.corn === 'corn' || $scope.corn === 'yes'){
      $state.go('our-home');
    }
  }
  console.log($scope.myCart);
})
