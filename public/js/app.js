var userApp = angular.module('userApp', ['ngRoute']);

userApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'partials/userMenu.html',
        controller: 'controller'
    }).
    when('/testInfo', {
        templateUrl: 'partials/testInfo.html',
        controller:  'controller'
    }).when('/userMenu', {
        templateUrl: 'partials/userMenu.html',
        controller:  'controller'
    }).
    otherwise({
        redirectTo: 'partials/userMenu.html'
    });
}]);
