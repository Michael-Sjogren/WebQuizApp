var app = angular.module('userApp', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    //main display
        .when('/', {
            templateUrl: 'index.html',
            controller: 'mainController'
        })
        //login display
        .when('/partials', {
            templateUrl: 'login.html',
            controller: 'authController'
        })
});



app.controller('authController', function($scope){
    $scope.user = {username: '', password: ''};
    $scope.error_message = '';

    $scope.login = function(){
        $scope.error_message = 'login request for ' + $scope.user.username;
    };

    $scope.register = function(){
        $scope.error_message = 'registeration request for ' + $scope.user.username;
    };
});

