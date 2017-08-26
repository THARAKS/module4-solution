(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist1/templates1/home.template.html'
  })

  // Premade list page
  .state('categoryList', {
    url: '/categoryList',
    templateUrl: 'src/shoppinglist1/templates1/main-categorieslist.template.html',
    controller: 'MainCategoryListController as categoryList',
    resolve: {
      categoryLists: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('itemDetail',
    // url: '/item-detail/{itemId}',
    {
    url: '/item-detail/{category}',
    templateUrl: 'src/shoppinglist1/templates1/main-itemlist.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      listItems: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.category)
                .then(function (items) {
                  return items;
                });
            }]
    }
  });

}

})();
