angular.module('imogeneClone')
.service('mainService', function($http) {
  this.getProducts = function(){
    return $http({
      method: "GET",
      url: '/api/products'
    })
  }
var productsInCart = [];

this.getCartList = function() {
  return productsInCart;
}

// new stuff

var myCart = [];
this.getsMyCart = function()  {
  return myCart
}



this.add = function(product){
  myCart = product;
  
  console.log(product);
}

this.decrease = function(product){
  for(var i = 0; i < myCart.length; i++){
    if(myCart[i].id === product.id){
      myCart[i].cartQty--
      if(myCart[i].cartQty === 0){
        myCart.splice(i, 1)
        this.productsInCart = myCart;
        if(!productsInCart.length){
          mySubTotal.item_total = 0;
          return;
        }
        getSubTotal()
      }
      product.item_total = product.cartQty * product.price;
      $scope.productsInCart = myCart;
      $scope.getSubTotal()
    }
  }
}

  this.increase = function(product){
  product.cartQty++
  product.item_total = product.cartQty * product.price;
  getSubTotal()
}






















})
