var app = angular.module('app', ['ngRoute', 'testController']);

<!-- vid användande av auto validate ska jcs-autoValidate vara i module -->

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

        .when('/adminMenu', {
            templateUrl: 'partials/adminMenu.html'
        })
        .when('/adminCreateTest', {
            templateUrl: 'partials/adminCreateTest.html'
        })
        .when('/userRegistration', {
            templateUrl: 'partials/userRegistration.html'
        })
        
        
        
        
        
        .otherwise({
            redirectTo: 'partials/login.html'
        });
}]);

