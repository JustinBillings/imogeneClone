angular.module('imogeneClone')
.controller('shopCtrl', function($scope, mainService) {
  $scope.getProducts = function(){
    mainService.getProducts().then(function(res){
      $scope.products = res.data
    })
  }
  $scope.getProducts()



  
});
