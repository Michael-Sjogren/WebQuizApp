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
    $scope.provNamnet = [
        {provetsNamn: 'IT-säkerhetsteknik'},
        {provetsNamn: 'Java SE'},
        {provetsNamn: 'Java EE'},
        {provetsNamn: 'Kravanalys 1'},
        {provetsNamn: '.Net'}
    ];

    $scope.count = 1;
    $scope.counterFraga = function () {
        $scope.count++;
    }



    // Create a blank object to hold our form information.
    // $scope will allow this to pass between controller and view.
    $scope.adminProv = {};

    // reset() and save functions.
    $scope.master = {};

    $scope.update = function(adminProv) {
        $scope.master = angular.copy(adminProv);
        alert("Provet är sparat");
    };

    $scope.reset = function() {
        $scope.adminProv = angular.copy($scope.master);

    };
    $scope.reset();



    // This function is supposed to save the input in the database server.
    $scope.saveAdminProv = function() {
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






















