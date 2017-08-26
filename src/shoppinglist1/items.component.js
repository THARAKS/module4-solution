(function () {
'use strict';

angular.module('MenuApp')
.component('itemList', {
  templateUrl: 'src/shoppinglist1/templates1/item-list.html',
  bindings: {
    items: '<'
  }
});

})();
