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
    // Create a blank object to hold our form information.
    // $scope will allow this to pass between controller and view.
    $scope.adminProv = {};



    $scope.changedValue = function(item) {
        console(item);
    }

});



// Variable and function applied in SkapaProv to increment the Fråga Nr.
var addFraga = (function () {
    var counter = 1;
    return function () {return counter += 1;}
})();

function addFragaNr(){
    document.getElementById("fragaCounter").innerHTML = addFraga();
}

function resetProv() {
    document.getElementById("mainFormProv").reset();
}

function addFragaNrReset(){
    addFragaNr();
    resetProv();
}

// Creating variables and functions to access the Admin's input in SkapaProv
var elProvtid = document.getElementById('inputProvtid');
var elFragaNr = document.getElementById('fragaCounter');
var elOppenFraga = document.getElementById('txt_OppenFraga');
var elFlerValsFraga = document.getElementById('txt_FlervalsFraga');


function checkRadio() {
    if (document.getElementById('svarEtt').checked) {
        return $('#svarEtt').val();
    } else if (document.getElementById('svarTva').checked) {
        return $('#svarTva').val();
    } else if (document.getElementById('svarTre').checked) {
        return $('#svarTre').val();
    } else if (document.getElementById('svarFyra').checked) {
        return $('#svarFyra').val();
    } else if (document.getElementById('svarFem').checked) {
        return $('#svarFem').val();
    }
}













