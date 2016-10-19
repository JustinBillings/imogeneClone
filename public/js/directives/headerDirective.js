angular.module('imogeneClone')
.directive('headerDirective', function() {
  return {
    replace: true,
    templateUrl: '../../views/headerDirective.html',

    controller: function($scope, $state, mainService, $timeout) {

      var myCart = mainService.getsMyCart(); // gets initial cart, prevents reset
      $scope.productsInCart = myCart;
      $scope.productsInCart = mainService.getsMyCart();




      $scope.add = function(product){
        $scope.showCart();
        for(var i = 0; i < myCart.length; i++){
          if(myCart[i].id === product.id){
            myCart[i].cartQty++
            $scope.productsInCart = myCart;
            product.item_total = product.cartQty * product.price;
            $scope.getSubTotal()
            return;
          }
        }
        product.cartQty = 1;
        product.item_total = product.cartQty * product.price;
        myCart.push(product);
        $scope.productsInCart = myCart;
        $scope.getSubTotal()
        mainService.add($scope.productsInCart);  //Pushes cart to service
        $scope.productsInCart = mainService.getsMyCart(); //Get cart
      }

      $scope.decrease = function(product){
        for(var i = 0; i < myCart.length; i++){
          if(myCart[i].id === product.id){
            myCart[i].cartQty--
            if(myCart[i].cartQty === 0){
              myCart.splice(i, 1)
              $scope.productsInCart = myCart;
              if(!$scope.productsInCart.length){
                $scope.mySubTotal.item_total = 0;
                return;
              }
              $scope.getSubTotal()
            }
            product.item_total = product.cartQty * product.price;
            $scope.productsInCart = myCart;
            $scope.getSubTotal()
          }
        }
      }

      $scope.increase = function(product){
        product.cartQty++
        product.item_total = product.cartQty * product.price;
        $scope.getSubTotal()
      }

      $scope.getSubTotal = function(){
        if(!$scope.productsInCart.length){
          $scope.mySubTotal = {};
          $scope.mySubTotal.item_total = 0;
          return;
        }
        $scope.mySubTotal = $scope.productsInCart.reduce(function(p, c){
              return {item_total: p.item_total + c.item_total};
            })
      }

          $scope.getSubTotal();












    if($state.current.name === 'shop' || $state.current.name === 'our-home' || $state.current.name === 'checkout'){
      $scope.navLinks2 = true;
    } else {
      $scope.navLinks2 = false;
    }

    mainService.getProducts().then(function(res){
      $scope.products = res.data
    });


    $scope.cartShowing = false;
    $scope.showCart = function() {

      $scope.cartShowing = true;
    }

    $scope.hideCart = function() {
      $scope.cartShowing = false;
    }


    $scope.removeItemFromCartList = function(product) {
      $scope.productsInCart.forEach(function(cart_item, i){
        if (myCart[i].id === product.id) {

          $scope.productsInCart.splice(i,1);
          if(!$scope.productsInCart.length){
            $scope.mySubTotal.item_total = 0;
            return;
          }
          $scope.getSubTotal()
        }
      })
    }

    },
    link: function(scope, element, attrs) {


    }

  }
})
