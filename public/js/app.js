var userApp = angular.module('userApp', ['ngRoute']);

userApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'partials/userMenu.html'
    }).
    when('/testInfo', {
        templateUrl: 'partials/testInfo.html'
    }).when( '/userMenu ' ,{
        templateUrl : 'partials/userMenu.html'
    }).
    otherwise({
        redirectTo: 'partials/userMenu.html'
    });
}]);


userApp.controller('userCtrl',['$scope','$http' ,function ($scope , $http) {
    /* hanterar json data  */
    $http.get('data/quizzes.json').success(function (response) {
        $scope.quizData  = response;
    });

    function  generateTestCtrl($scope) {
        
    }
    
}]);

