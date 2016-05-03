var testControllers = angular.module('testController', []);

/*Factory that loads data from json file*/
userApp.factory('loadTestFactory', function ($http) {
    var quizData = [];

    function loadData() {
        $http.get('../data/quizzes.json').success(function (response) {
            quizData  = response;
            console.log('quizdata loaded...');
        });
    }
    return{
        getData: function () {
            return quizData;
        },
        getQuiz: function(quizIndex){
            return quizData.quizzes[quizIndex];
        },
        loadData :loadData
    }
});

/*Filter for displaying time format  -- Liz*/
userApp.filter('formatTime', function () {
    return function (sec) {
        return new Date(1970, 0, 1).setSeconds(sec);
    }
});


testControllers.controller('testCtrl',['$scope', '$interval','loadTestFactory' ,function ($scope, $interval, loadTestFactory) {
    $scope.testStatus = "pending";
    $scope.quizId = null;
    $scope.testTitle = "";
    $scope.activequiz = [];
    $scope.qTitle = "";
    var counter = 0;
    $scope.options = [];
    $scope.qLength = 0;
   // $scope.answers = [];
    $scope.radioButtonID = [];
    $scope.userAns = {
        answer : 0
    };

    $scope.allQuesitons = [];
    $scope.timeFormat = 'HH:mm:ss';

    /*Timer * -- Liz*/
    var decrCountdown = function () {
        $scope.countdown -= 1;
        if($scope.countdown < 1){
            endQuiz(); // calling endquiz method if countdown ends
            console.log('calling endquiz from timer');
        }
    };

    var startCountdown = function () {
        $interval(decrCountdown, 1000, $scope.countdown);
    };

    /*start quiz*/
    $scope.startQuiz = function () {
        $scope.testStatus = "inProgress";
        $scope.activequiz = loadTestFactory.getQuiz(0);
        $scope.testTitle = $scope.activequiz.title;
        $scope.qTitle = $scope.activequiz.questions[0].questionTitle;
        $scope.options = $scope.activequiz.questions[0].options;
        $scope.corrAns = $scope.activequiz.questions[0].correctAns;
        $scope.qLength = $scope.activequiz.questions.length;
        $scope.countdown = $scope.activequiz.limitMinutes * 60; // minutes into seconds
        console.table($scope.options);

        startCountdown();
    };

    $scope.nextQuestion = function (checkedValue) {
        if(counter < $scope.qLength) {
           
            $scope.qTitle = $scope.activequiz.questions[counter].questionTitle;
            $scope.options = $scope.activequiz.questions[counter].options;
            $scope.corrAns = $scope.activequiz.questions[counter].correctAns;
            $scope.saveToObject($scope.qTitle , $scope.options , $scope.corrAns , $scope.userAns.answer);
            counter ++;
        }else if(counter >= $scope.qLength){
            //  kalla funktion som visar test översikt i slut
            $scope.endQuiz();
            console.log('endquiz called from nextquestion function');
        }
    };

    $scope.prevQuestion = function () {
        if (counter > 0) {
            $scope.qTitle = $scope.activequiz.questions[counter].questionTitle;
            $scope.options = $scope.activequiz.questions[counter].options;
            counter --;
        }else{  
        }
    };

    $scope.saveToObject = function (title,options , correctAns , userAns) {
        var object = {
            questionTitle: title,
            options: options,
            correctAns: correctAns,
            userAnswer : userAns
        }

        $scope.allQuesitons.push(object);
        console.table($scope.allQuesitons);
        console.table($scope.allQuesitons.options)
    }


    /*Add answer to answers array*/
    $scope.addAns = function () {

    //  $scope.answers[counter] = $scope.userAns;
        console.log($scope.userAns.answer);

    };

    $scope.saveAnswers = function (answers) {

    };

    $scope.getResult = function () {

    };

    $scope.endQuiz = function () {
     
        
        $scope.testStatus = "inactive";
    };


}]);
