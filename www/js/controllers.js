angular.module('starter.controllers', [])
.controller('ItemsCtrl', function($scope, Items) {
  $scope.items = Items.all();
  $scope.remove = function(item) {
    Items.remove(item);
  };
  $scope.parseFloat = parseFloat;
  $scope.calculate = function(){
    var itemTotal = 0;
    for(i=0; i<$scope.items.length; i++)
    {
      itemTotal += Items.get(i).qty * Items.get(i).price;
    }
    return itemTotal;
  };
  $scope.increaseQty = function(item){
    item.qty++;
  };
  $scope.decreaseQty = function(item){
    if(item.qty === 0)
    {
      alert("No "+ item.name + " in shopping basket");
    }
    else
    {
      item.qty--;
    }
  };
  $scope.changePrice = function(item){
    var price;
    do{
        price = prompt("Please enter a valid price...");
        if(price === null)
          {
            return; 
          }
          else 
          {
            price = parseFloat(price); 
          } 
      }
    while(!angular.isNumber(price) || isNaN(price))
      item.price = price;
  };
})
.controller('ShoppingCtrl', function($scope, Items) {
  $scope.items = Items.all(); 
});
