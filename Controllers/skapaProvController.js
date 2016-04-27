/**
 * Created by Tsiewing on 27/04/2016.
 */
// script.js

//TSIEWING TESTAR. KODEN NEDAN FÖR TESTNING INGET ANNAT!

var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $http.get('data/data.json').success(function(data) {
        $scope.artists = data.artists;
        $scope.artistOrder = 'name';
    });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
    $http.get('data/data.json').success(function(data) {
        $scope.artists = data.artists;
        $scope.whichItem = $routeParams.itemId;

        if ($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId)-1;
        } else {
            $scope.prevItem = $scope.artists.length-1;
        }

        if ($routeParams.itemId < $scope.artists.length-1) {
            $scope.nextItem = Number($routeParams.itemId)+1;
        } else {
            $scope.nextItem = 0;
        }

    });
}]);
