/* The app module was adapted from the starter template. Routes were modified to match the
changes in the templates and controllers. 
*/ 
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

  // This defines the route for the prices/items tab
  .state('tab.items', {
      url: '/items',
      views: {
        'tab-items': {
          templateUrl: 'templates/tab-items.html',
          controller: 'ItemsCtrl'
        }
      }
    })

  // This defines the route for the shopping/calculator tab
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
