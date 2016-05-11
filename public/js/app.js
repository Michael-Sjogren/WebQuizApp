var app = angular.module('app', ['ngRoute', 'testController','ngMaterial','ngMessages']);

//'ngMaterial','ngMessages',

<!-- vid användande av auto validate ska 'jcs-autoValidate' vara i module -->


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
            templateUrl: 'partials/adminMenu.html',
            controller: 'skapaProvController'
        })
        .when('/adminCreateTest', {
            templateUrl: 'partials/adminCreateTest.html'
        })
        .when('/userRegistration', {
            templateUrl: 'partials/userRegistration.html'
        })
        .when('/userChangeDetails', {
            templateUrl: 'partials/userChangeDetails.html'
        })
        
        
        
        
        .otherwise({
            redirectTo: 'partials/login.html'
        });

    
    /*
    app.run(function (defaultErrorMessageResolver) {
        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
            errorMessages['userName'] = 'Användarnamn kan bara innehålla nummer och bokstäver';
        }); 

    });
     */

}]);

