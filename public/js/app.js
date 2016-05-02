var userApp = angular.module('userApp', ['ngRoute', 'testController']);



userApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        resolve: {
            load: function (userService) {
                return userService.loginUser("student", "student"); // login test
            },
            load:function (loadTestFactory) {
                return loadTestFactory.loadData(); // loads and saves data in global factory
            }
        },
        templateUrl: 'partials/userMenu.html'
    }).
    when('/test', {
        templateUrl: 'partials/test.html'
    }).when( '/userMenu' ,{
        templateUrl : 'partials/userMenu.html'
    }).
    otherwise({
        redirectTo: 'partials/userMenu.html'
    });
}]);

