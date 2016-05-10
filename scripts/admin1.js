/**
 * Created by Tsiewing on 24/04/2016.
 */

var adminApp = angular.module ('appAdm1', ['ngRoute','ngMaterial','ngMessages',]);


adminApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: '../public/views/adm1.html'

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






















