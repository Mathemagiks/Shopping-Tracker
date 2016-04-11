angular.module('starter.controllers', [])

//ChatsCtrl became ItemsCtrl and all Chats/chat changed to Items/item so MVC functionality of pre-existing controller remains but now valid to my project.
.controller('ItemsCtrl', function($scope, Items) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.items = Items.all();
  
  $scope.remove = function(item) {
    Items.remove(item);
  };
  $scope.total = 0;
  $scope.parseFloat = parseFloat;
   /*$scope.calculateTotal = function(price)
    { 
      $scope.calcTotal += $scope.parseFloat(price.substring(1, price.length));
    };*/
    $scope.calculate = function(item){
      $scope.total += item.price;
    };

    $scope.increaseQty = function(item){
    item.qty++;
  };

    $scope.deductFromTotal = function(item){
      $scope.total -= item.price;
    };

   $scope.decreaseQty = function(item){
      item.qty--;
      
    };

    // Raise a prompt to allow the user to change the price
    $scope.changePrice = function(item){
      // declare a working variable 'price'
      var price;

      do{
          // Get the user input
          price = prompt("Please enter a valid price...");
          /* If the user presses cancel, price is equal to 
             null. In that case, finish the function here
             so that no change occurs.

             Otherwise, parse the user input price as a float, 
             andn save it to the working variable 'price.''
          */
          if(price === null)
          {
            return; // break out of the changePrice function
          }
          else 
          {
            /* Convert the price string to a float. Note that if
            the user enters something like 1.07h, the parseFloat
            function will not complain. Instead, it will save
            1.07. This is a good compromise because in most 
            cases the user will likely input something like this
            inadvertently. However, in a production app, 
            more validation would be needed to secure the 
            app against malicious code.*/
            price = parseFloat(price); 
          }
        
      }
        while(!angular.isNumber(price) || isNaN(price))
          item.price = price;
        
      
    };
})



/*.controller('ItemDetailCtrl', function($scope, $stateParams, Items) {
  $scope.item = Items.get($stateParams.itemId);
})
//*/
.controller('ShoppingCtrl', function($scope, Items) {
 
  $scope.items = Items.all();
  //console.log(item);
  
});
