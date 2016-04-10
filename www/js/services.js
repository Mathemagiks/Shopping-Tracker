angular.module('starter.services', [])
//Originally .factory('Chats')- replaced 'chats' with 'items' and appropriated data.
.factory('Items', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var items = [{
    id: 0,
    name: 'Milk 1L',
    price: '€0.85',
    pic: 'img/milk_1l.png',
    qty: 0
  }, {
    id: 1,
    name: 'Milk 2L',
    price: '€1.45',
    pic: 'img/milk2l.png',
    qty: 0
  }, {
    id: 2,
    name: 'Sliced Bread White',
    price: '€0.70',
    pic: 'img/white.png',
    qty: 0
  }, {
    id: 3,
    name: 'Sliced Bread Brown',
    price: '€0.80',
    pic: 'img/brownb.png',
    qty: 0
  }, {
    id: 4,
    name: 'Sliced Bread Granary',
    price: '€1.40',
    pic: 'img/granary.png',
    qty: 0
  },{
    id: 5,
    name: 'Barry\'s Teabags',
    price: '€2.05',
    pic: 'img/teabags.png',
    qty: 0
  }];
// Changed references to chats to items.
  return {
    all: function() {
      return items;
    },
    remove: function(item) {
      items.splice(items.indexOf(item), 1);
    },
    get: function(itemId) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].id === parseInt(itemId)) {
          return items[i];
        }
      }
      return null;
    }
  };
});
