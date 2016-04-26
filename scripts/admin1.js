/**
 * Created by Tsiewing on 24/04/2016.
 */

var appAdm1 = angular.module ('appAdm1', ['ngRoute']);


userApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'views/adm1.html',

    }).
    when('/skapaProv', {
        templateUrl: 'views/skapaProv.html',

    }).
    otherwise({
        redirectTo: 'views/adm1.html'
    });
}]);

