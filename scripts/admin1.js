/**
 * Created by Tsiewing on 24/04/2016.
 */

var appAdm1 = angular.module ('appAdm1', ['ngRoute']);


appAdm1.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: '../public/views/adm1.html',
        controller: 'adminCtrl'

    }).
    when('/skapaProv', {
        //console.log('testingtesting');
        templateUrl: 'skapaProv.html',
        controller:'skapaProvController'


    }).
    otherwise({
        redirectTo: 'adm1.html'
    });
}]);



// create the controller and inject Angular's $scope
appAdm1.controller('adminCtrl', function($scope) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

appAdm1.controller('skapaProvController', function($scope) {
    $scope.message1 = 'Ange namn på provet:';
    $scope.message2 = 'Välj typ av fråga:'
    $scope.message3 = 'Välj antal svarsalternativ:'
    $scope.message4 = 'Skriv in din fråga:'
    $scope.fragaNr = '';
});

appAdm1.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});


