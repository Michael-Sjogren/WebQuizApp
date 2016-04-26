var testControllers = angular.module('testControllers', []);

testControllers.controller('userCtrl',['$scope','$http' ,function ($scope , $http) {
    $http.get('../data/quizzes.json').success(function (response) {
        $scope.quizData  = response;
    });
}]);

testControllers.controller('testCtrl',['$scope','$http' ,function ($scope) {

}]);
