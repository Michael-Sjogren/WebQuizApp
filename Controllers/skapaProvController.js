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
    $scope.adminProv = {};


    // reset() and save functions.
    $scope.master = {};

    $scope.update = function(adminProv) {
        $scope.master = angular.copy(adminProv);
        alert("Provet är sparat");
    };

    $scope.reset = function() {
        $scope.adminProv = "";

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

    function InstantSearchController ($scope){

        // The data model. These items would normally be requested via AJAX,
        // but are hardcoded here for simplicity. See the next example for
        // tips on using AJAX.

        $scope.items = [
            {
                url: 'http://www.tutorialspoint.com/android/',
                title: 'Android tutorials',
                image: 'http://www.tutorialspoint.com/android/images/android-mini-logo.jpg'
            },
            {
                url: 'http://www.tutorialspoint.com/angularjs/',
                title: 'AngularJs Tutorials ',
                image: 'http://www.tutorialspoint.com/angularjs/images/angularjs-mini-logo.jpg'
            },
            {
                url: 'http://www.tutorialspoint.com/html5/',
                title: 'HTML5 Tutorials',
                image: 'http://www.tutorialspoint.com/html5/images/html5-mini-logo.jpg'
            },
            {
                url: 'http://www.tutorialspoint.com/css/',
                title: 'CSS Tutorials',
                image: 'http://www.tutorialspoint.com/css/images/css-mini-logo.jpg'
            },
            {
                url: 'http://www.tutorialspoint.com/java/',
                title: 'Java Tutorials',
                image: 'http://www.tutorialspoint.com/java/images/java-mini-logo.jpg'
            },
            {
                url: 'http://www.tutorialspoint.com/joomla/',
                title: 'Joomla Tutorials',
                image: 'http://www.tutorialspoint.com/joomla/images/joomla-mini-logo.jpg'
            },
            {
                url: 'http://www.tutorialspoint.com/html/',
                title: 'HTML Tutorials ',
                image: 'http://www.tutorialspoint.com/html/images/html-mini-logo.jpg'
            }
        ];


    }

    });






















