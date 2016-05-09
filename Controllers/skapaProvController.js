/**
 * Created by Tsiewing on 27/04/2016.
 */
// script.js


// create the adminCtrl controller and inject Angular's $scope
adminApp.controller('adminCtrl', function($scope) {
});

// Create the skapaProvcontroller and inject Angular's $scope
adminApp.controller('skapaProvController',function($scope, $http, $mdDialog) {


    $scope.message1 = 'Ange namn på provet:';
    $scope.message2 = 'Välj typ av fråga:';
    $scope.message3 = 'Välj antal svarsalternativ:';
    $scope.message4 = 'Formulera din fråga:';
    $scope.adminProvArray = [];
    $scope.adminProv = {};
    $scope.adminProv1 = {};
    $scope.tilldelProv = {};
    $scope.tilldelProvArray = [];



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
    };

    // reset() and save functions.
    $scope.update = function () {
        alert("Provet är sparat och avslutat.");
    };


    $scope.reset = function () {
        $scope.adminProv = {};
    };

    $scope.resetTilldela = function() {
        $scope.tilldelProv = {};
    };

    // When the user clicks the 'Nästa' or 'Avsluta' knappen.
    $scope.saveAdminProv = function() {
        $scope.adminProvArray.push($scope.adminProv,$scope.adminProv1);
        console.table($scope.adminProvArray);
        $scope.reset();
    };

    //When the user clicks the 'Tilldela' knappen.
    $scope.saveTilldela = function() {
        $scope.tilldelProvArray.push($scope.tilldelProv);
        console.table($scope.tilldelProvArray);
        $scope.resetTilldela();
    };

    $http.get("elever.json").then(function(response) {
        $scope.myData = response.data.elever;
    });

    


    $scope.myDate = new Date();
    $scope.minDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() - 2,
        $scope.myDate.getDate());
    $scope.maxDate = new Date(
        $scope.myDate.getFullYear(),
        $scope.myDate.getMonth() + 2,
        $scope.myDate.getDate());
    $scope.onlyWeekendsPredicate = function(date) {
        var day = date.getDay();
        return day === 0 || day === 6;
    }
    




        });







   
    






















