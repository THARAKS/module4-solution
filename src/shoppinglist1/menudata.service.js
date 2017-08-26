(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService )
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$q', '$http','ApiBasePath']
function MenuDataService ($q, $http,ApiBasePath) {
  var service = this;

  // List of shopping items

  // Pre-populate a no cookie list


  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getAllCategories  = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")

    });
    return response;
  };
  service.getItemsForCategory  = function (categoryShortName) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    //  headers: { 'Cache-Control' : 'no-cache' },
      params:{
        category:categoryShortName
      }
    });
    return response;
  };
}

})();
