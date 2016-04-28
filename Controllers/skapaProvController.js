/**
 * Created by Tsiewing on 27/04/2016.
 */
// script.js


// create the controller and inject Angular's $scope
adminApp.controller('adminCtrl', function($scope) {

});

adminApp.controller('skapaProvController', function($scope) {
    $scope.message1 = 'Ange namn på provet:';
    $scope.message2 = 'Välj typ av fråga:';
    $scope.message3 = 'Välj antal svarsalternativ:';
    $scope.message4 = 'Skriv in din fråga:';
    $scope.fragaNr = '';
});



// Variable and function applied in SkapaProv to increment the Fråga Nr.
var addFraga = (function () {
    var counter = 1;
    return function () {return counter += 1;}
})();

function addFragaNr(){
    document.getElementById("fragaCounter").innerHTML = addFraga();
}

