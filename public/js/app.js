var userApp = angular.module('userApp', ['ngRoute', 'testControllers']);

userApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'partials/userMenu.html',
        controller: 'userCtrl'
    }).
    when('/testInfo', {
        templateUrl: 'partials/testInfo.html',
        controller: 'userCtrl'
    }).
    when('/test', {
        templateUrl: 'partials/test.html',
        controller: 'testCtrl'
    }).when( '/userMenu ' ,{
        templateUrl : 'partials/userMenu.html',
        controller: 'userCtrl'
    }).
    otherwise({
        redirectTo: 'partials/userMenu.html'
    });
}]);

