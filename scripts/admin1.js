/**
 * Created by Tsiewing on 24/04/2016.
 */

var appAdm1 = angular.module ('appAdm1', [
    'ngRoute',
    'elevControllers'
]);

appAdm1.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'ViewHTML/skapaProv.html',
        controller: 'ListController'
    }).
    when('/details/:itemId', {
        templateUrl: 'partials/details.html',
        controller: 'DetailsController'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);

var appAdm1 = angular.module('appAdm1', []);
app.controller('ctrlAdm1', function($scope) {
    $scope.showSkapaProv = false;
    $scope.myFunc = function() {
        $scope.showSkapaProv = !$scope.showSkapaProv;
    }
});
