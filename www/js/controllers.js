angular.module('starter.controllers', [])

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
})

.controller('ItemDetailCtrl', function($scope, $stateParams, Items) {
  $scope.item = Items.get($stateParams.itemId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
