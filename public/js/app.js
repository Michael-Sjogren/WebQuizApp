var userApp = angular.module('userApp', ['ngRoute']);

userApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/adm1', {
        templateUrl: 'public/views/adm1.html',

    }).
    when('/skapaProv', {
        templateUrl: 'public/views/skapaProv.html',
    }).
    otherwise({
        redirectTo: 'public/views/adm1.html'
    });
}]);


userApp.controller('userCtrl',['$scope','$http' ,function ($scope , $http) {
    $scope.quizzes = {};
    $http.get('data/quizzes.json').success(function (response) {

        $scope.quizData = response;
    });
}]);

