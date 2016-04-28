var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/login.html'
        })
        .when('/userIndex', {
            resolve: {
                "check": function ($location, $rootScope) {
                    if(!$rootScope.loggedIn) {
                        $location.path('userIndex.html');
                    } else {

                    }
                }
            },
            templateUrl: 'partials/userMenu.html'
        })
        .otherwise({
            redirectTo: 'partial/login.html'
        });
});

app.controller('loginCtrl', function ($scope, $location, $rootScope) {
    $scope.submit = function () {

        if($scope.username == 'student' && $scope.password == 'student') {
            $rootScope.loggedIn = true;
            $location.path('userIndex');
        } else {
            alert('Wrong username or password');
        }
    };
});