var app = angular.module('app', ['ngRoute', 'testController']);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/login.html',
            resolve: {

                load: function (loadTestFactory) {
                    return loadTestFactory.loadData();
                }

            }
        })
        .when('/test', {
            templateUrl: 'partials/test.html'
        })
        .when('/userMenu', {
            templateUrl: 'partials/userMenu.html',
            resolve: {

                load: function (loadTestFactory) {
                    return loadTestFactory.loadData();
                }

            }
        })
        .otherwise({
            redirectTo: 'partials/login.html'
        });
}]);

