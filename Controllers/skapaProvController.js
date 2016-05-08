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


    var elever = [
        {fName:"Matilda", lName:"Danielsson", class: "Java"},
        {fName:"Olof", lName:"Svensson", class: "Java"},
        {fName:"Soraya", lName:"Re", class: ".Net"},
    ];

    $scope.elever = elever;


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





   
    






















