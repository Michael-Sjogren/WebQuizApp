var app = angular.module('mainApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/partial/login.html'
        })
        .when('/', {
            resolve: {
                "check": function ($location, $rootScope) {
                    if(!$rootScope.loggedIn) {
                        $location.path('/');
                    } else {

                    }
                }
            },
            templateUrl: 'userIndex.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('loginCtrl', function ($scope, $location, $rootScope) {
    $scope.submit = function () {

        if($scope.username == 'student' && $scope.password == 'student') {
            $rootScope.loggedIn = true;
            $location.path('/userIndex');
        } else {
            alert('Wrong username or password');
        }
    };
});