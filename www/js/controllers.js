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
  $scope.calcTotal = 0;
   /*$scope.calculateTotal = function(price)
    { 
      $scope.calcTotal += $scope.parseFloat(price.substring(1, price.length));
    };*/
})

/*.controller('ItemDetailCtrl', function($scope, $stateParams, Items) {
  $scope.item = Items.get($stateParams.itemId);
})
//*/
.controller('ShoppingCtrl', function($scope, Items) {
 
  $scope.items = Items.all();
});
