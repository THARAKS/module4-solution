(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoryListController', MainCategoryListController);


MainCategoryListController.$inject = [ 'categoryLists'];
function MainCategoryListController(categoryLists) {
  var categoryList = this;
  categoryList.items = categoryLists.data;
}

})();
