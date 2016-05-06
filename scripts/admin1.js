/**
 * Created by Tsiewing on 24/04/2016.
 */

var adminApp = angular.module ('appAdm1', ['ngRoute']);


adminApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: '../public/views/adm1.html',
        controller: 'adminCtrl'
    }).
    when('/skapaProv', {
        //console.log('testingtesting');
        templateUrl: 'skapaProv.html',
        controller:'skapaProvController'
    }).
    otherwise({
        redirectTo: 'adm1.html'
    });
}]);

// CREATE THE INSTANT SEARCH FILE.
adminApp.filter('searchFor', function() {
    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchFor:searchString)

    return function (arr, searchString) {
        if(!searchString) {
            return arr;
        }
        var result = [];

        searchString = searchString.toLowerCase();

// Using the forEach helper method to loop through the array
        angular.forEach(arr, function(item){

            if(item.title.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }

        });

        return result;
    };

});












