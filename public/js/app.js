var app = angular.module('app', ['ngRoute', 'testController']);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/login.html'
        })
        .when('/test', {
            templateUrl: 'partials/test.html'
        })
        .when('/userMenu', {
            templateUrl: 'partials/userMenu.html'
        })
        .otherwise({
            redirectTo: 'partials/login.html'
        });
}]);

