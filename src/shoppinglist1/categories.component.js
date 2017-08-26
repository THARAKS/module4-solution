(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/shoppinglist1/templates1/category-item-list.html',
  bindings: {
    items: '<'
  }
});

})();
