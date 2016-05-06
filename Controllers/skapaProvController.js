/**
 * Created by Tsiewing on 27/04/2016.
 */
// script.js


// create the adminCtrl controller and inject Angular's $scope
adminApp.controller('adminCtrl', function($scope) {
});


// Create the skapaProvcontroller and inject Angular's $scope
adminApp.controller('skapaProvController', function($scope, $http) {
    $scope.message1 = 'Ange namn på provet:';
    $scope.message2 = 'Välj typ av fråga:';
    $scope.message3 = 'Välj antal svarsalternativ:';
    $scope.message4 = 'Formulera din fråga:';
    $scope.adminProvArray = [];
    $scope.adminProv = {};
    $scope.master = {};

    $scope.provNamnet = [
        {provetsNamn: 'IT-säkerhetsteknik'},
        {provetsNamn: 'Java SE'},
        {provetsNamn: 'Java EE'},
        {provetsNamn: 'Kravanalys 1'},
        {provetsNamn: '.Net'}
    ];
    $scope.provTilldela = [
        {provTilldel: 'IT-säkerhetsteknik'},
        {provTilldel: 'Java SE'},
        {provTilldel: 'Java EE'},
        {provTilldel: 'Kravanalys 1'},
        {provTilldel: '.Net'}
    ];

    $scope.count = 1;
    $scope.counterFraga = function () {
        $scope.count++;
    }

    
    // Create a blank object to hold our form information.
    // $scope will allow this to pass between controller and view.



    // reset() and save functions.
    $scope.update = function() {
          alert("Provet är sparat och avslutat.");
    };

    $scope.reset = function() {
        $scope.adminProv = {};
    };


    // This function is supposed to save the input in the database server.
    $scope.saveAdminProv = function() {
        $scope.adminProvArray.push($scope.adminProv);
        console.table($scope.adminProvArray);
        $scope.reset();
        

        $http({
            method: 'POST',
            url: 'Projektets.nodejs.url',
            data: $.param($scope.adminProv), // pass in data as strings
            headers: {'Content-type': 'application/x-www-form-urlencoded'} // set the headers so angular passing info as form data, not request payload.
        })
            .success(function (data) {
                    console.log(data);
                }
            )
    }
    });


var allUserControllers = angular.module('allUserControllers', []);

allUserControllers.controller('skapaProvController', ['$scope', '$http', function($scope, $http) {
    $http.get('data/users.json').success(function(data) {
        $scope.users = data.users;
        $scope.userOrder = 'fName';
    });
}]);

allUserControllers.controller('skapaProvController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
    $http.get('data/users.json').success(function(data) {
        $scope.users = data.users;
        $scope.whichItem = $routeParams.itemId;

        if ($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId)-1;
        } else {
            $scope.prevItem = $scope.users.length-1;
        }

        if ($routeParams.itemId < $scope.users.length-1) {
            $scope.nextItem = Number($routeParams.itemId)+1;
        } else {
            $scope.nextItem = 0;
        }

    });
}]);
   
    






















