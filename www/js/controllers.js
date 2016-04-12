angular.module('starter.controllers', [])

/* ChatsCtrl became ItemsCtrl and all Chats/chat changed to Items/item so 
MVC functionality of pre-existing controller remains but now valid to my 
project.
*/
.controller('ItemsCtrl', function($scope, Items) {
  
  /* Make items model available to this scope (see services.js)
  for implementation
    */
  $scope.items = Items.all();

  
  // Remove an item
  $scope.remove = function(item) {
    Items.remove(item);
  };

  /*Use this to capture total and to bind directives in html to model
  See the binding directive in the associated template file (tab-items.html)
  */
  $scope.total = 0;

  /* Make parseFloat available to the current scope. 

  According to the AngularJS docs: 
  "JavaScript expressions are evaluated against the global window. 
  In Angular, expressions are evaluated against a scope object."

  This means, essentially, that parseFloat (window) has to be made 
  available to the controller context (scope). 

  See the docs for more: 
    https://docs.angularjs.org/guide/expression
  */
  $scope.parseFloat = parseFloat;

  /* 
    Calculate the total cost for all items in the shopping cart
  */
  $scope.calculate = function(item){

    var itemTotal = 0;
   
    for(i=0; i<$scope.items.length; i++)
    {
      itemTotal += Items.get(i).qty * Items.get(i).price;
    }
    $scope.total = itemTotal;

  };

  // Increase the qty of the item by 1 in the items model
  $scope.increaseQty = function(item){
    item.qty++;
  };

  // Decrease the qty of the item by 1 in the items model provided qty > 0
  $scope.decreaseQty = function(item){
    // if(item.qty > 0)
    // {
    //   item.qty--;
    // }
    if(item.qty === 0)
    {
      alert("No "+ item.name + " in shopping basket");
    }
    else
    {
      item.qty--;
    }
    // Since quantity has been changed, recalculate total
    $scope.calculate(item);
  };

  /* Raise a prompt to allow the user to change the price
  and validate the input 
  */
  $scope.changePrice = function(item){

    // declare a working variable 'price'
    var price;

    do{
        // Get the user input
        price = prompt("Please enter a valid price...");
        /* If the user presses cancel, price is equal to null. In that 
        case, finish the function here so that no change occurs. Otherwise, 
        parse the user input price as a float, and save it to the working 
        variable 'price.'
        */
        if(price === null)
          {
            return; // break out of the changePrice function
          }
          else 
          {
            /* Convert the price string to a float. Note that if the user enters 
            something like 1.07h, the parseFloat function will not complain. 
            Instead, it will save 1.07. This is a good compromise because in most 
            cases the user will likely input something like this inadvertently. 
            However, in a production app, more validation would be needed to secure 
            the app against malicious code. 
            */
            price = parseFloat(price); 
          }
          
      }
    while(!angular.isNumber(price) || isNaN(price)) // while price not a number or is NaN
      item.price = price;
      // Since price has been changed, recalculate the total
      $scope.calculate(item);
  };
})

.controller('ShoppingCtrl', function($scope, Items) {
 
  $scope.items = Items.all();

  
});
