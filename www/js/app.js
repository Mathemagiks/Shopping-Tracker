// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }{

    if (window.StatusBar)       // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:
  //changed nav history of tab.chats to tabs.items. Renamed controller.
  .state('tab.items', {
      url: '/items',
      views: {
        'tab-items': {
          templateUrl: 'templates/tab-items.html',
          controller: 'ItemsCtrl'
        }
      }
    })
    /*.state('tab.item-detail', {
      url: '/items/:itemId',
      views: {
        'tab-items': {
          templateUrl: 'templates/item-detail.html',
          controller: 'ItemDetailCtrl'
        }
      }
    })*/

  .state('tab.shopping', {
    url: '/shopping',
    views: {
      'tab-shopping': {
        templateUrl: 'templates/tab-shopping.html',
        controller: 'ShoppingCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback

  $urlRouterProvider.otherwise('/tab/items');

});
