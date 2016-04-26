/**
 * Created by Tsiewing on 25/04/2016.
 */

var personalControllers = angular.module('personalControllers', []);

personalControllers.controller('ListController', [''$scope','$http', function($scope, $http) {
 $http.get('data/admData.json').success(function(data) {
 $scope.personal = data.personal;
 $scope.personalOrder = 'namn'
 }
}


var elevControllers = angular.module('elevControllers', []);

elevControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $http.get('data/admData.json').success(function(data) {
    $scope.elev = data.elev;
    $scope.elevOrder = 'namn';
  });
}]);



