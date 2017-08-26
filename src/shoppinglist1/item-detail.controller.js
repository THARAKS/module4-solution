(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['listItems'];
function ItemDetailController( listItems) {
  var itemDetail = this;

itemDetail.listOfItems=listItems.data.menu_items;
}
})();
