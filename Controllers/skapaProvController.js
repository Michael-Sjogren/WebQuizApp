/**
 * Created by Tsiewing on 27/04/2016.
 */
// script.js



// Create the skapaProvcontroller and inject Angular's $scope
app.controller('skapaProvController',function($scope, $http,$mdDialog) {
    $scope.message1 = 'Ange namn på provet:';
    $scope.message2 = 'Välj typ av fråga:';
    $scope.message3 = 'Välj antal svarsalternativ:';
    $scope.message4 = 'Formulera din fråga:';
    $scope.adminProvArray = [];
    $scope.adminProv = {};
    $scope.adminProv1 = {};
    $scope.tilldelProv = {};
    $scope.tilldelProvArray = [];
    $scope.valjAntal = {};
    $scope.mydata = [];

    $scope.adminProv = {
       title: '',
       limitMinutes: '',
       assignedUsers: [],
       questions: [{qTitle:'', options: []}],
       course: ''
     };


    $scope.provNamnet = [
        {provNamn:'IT-säkerhetsteknik'},
        {provNamn:'Java SE'},
        {provNamn:'Java EE'},
        {provNamn:'Kravanalys 1'},
        {provNamn:'.Net'}];


    $scope.provTilldela =  [
        {provTilldel:'IT-säkerhetsteknik'},
        {provTilldel:'Java SE'},
        {provTilldel:'Java EE'},
        {provTilldel:'Kravanalys 1'},
        {provTilldel:'.Net'}];


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
        $scope.adminProvArray.push($scope.adminProv1,$scope.adminProv1,$scope.count);
        console.table($scope.adminProvArray);
        $scope.reset();
    };

    //When the user clicks the 'Tilldela' knappen.
    $scope.saveTilldela = function() {
        $scope.tilldelProvArray.push($scope.tilldelProv);
        console.table($scope.tilldelProvArray);
        $scope.resetTilldela();
    };


    $http.get('/adminMenu').then(function(response) {

        console.log("elever loaded");
        $scope.myData = response.data;
        console.table($scope.myData);
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

// Number of Radio buttons selected.
var getdropdownRadio = document.getElementById("dropdownRadio");
var setRadio1 = document.getElementById("varde1");
var txtRadio1 = document.getElementById("txtvarde1");
var setRadio2 = document.getElementById("varde2");
var txtRadio2 = document.getElementById("txtvarde2");
var setRadio3 = document.getElementById("varde3");
var txtRadio3 = document.getElementById("txtvarde3");
var setRadio4 = document.getElementById("varde4");
var txtRadio4 = document.getElementById("txtvarde4");
var setRadio5 = document.getElementById("varde5");
var txtRadio5 = document.getElementById("txtvarde5");

function setNrRadioBtn(getdropdownRadio) {
    if(getdropdownRadio === 1) {
        setRadio1
        txtRadio1
        
    }
    if(getdropdownRadio === 2){
        setRadio1
        txtRadio1
        setRadio2
        txtRadio2
    }
    if(getdropdownRadio === 3){
        setRadio1
        txtRadio1
        setRadio2
        txtRadio2
        setRadio3
        txtRadio3
        setRadio4
        txtRadio4
        setRadio5
        txtRadio5
    }
    if(getdropdownRadio === 4){
        setRadio1
        txtRadio1
        setRadio2
        txtRadio2
        setRadio3
        txtRadio3
        setRadio4
        txtRadio4
    }
    if(getdropdownRadio === 5){
        setRadio1
        txtRadio1
        setRadio2
        txtRadio2
        setRadio3
        txtRadio3
        setRadio4
        txtRadio4
        setRadio5
        txtRadio5
    }

    else if (getdropdownRadio === ""){
        setRadio1 = "";
        txtRadio1 = "";
        setRadio2 = "";
        txtRadio2 = "";
        setRadio3 = "";
        txtRadio3 = "";
        setRadio4 = "";
        txtRadio4 = "";
        setRadio5 = "";
        txtRadio5 = "";
    }
    console.log(setNrRadioBtn())


};


































