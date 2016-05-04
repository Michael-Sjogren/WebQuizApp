var testControllers = angular.module('testController', []);

/*Filter for displaying time format  -- Liz*/
app.filter('formatTime', function () {
    return function (sec) {
        return new Date(1970, 0, 1).setSeconds(sec);
    }
});


testControllers.controller('testCtrl', ['$scope', '$interval', 'loadTestFactory', function ($scope, $interval, loadTestFactory) {
    $scope.testStatus = "pending";
    $scope.quizId = null;
    $scope.testTitle = "";
    $scope.activequiz = [];
    $scope.qTitle = "";
    var counter = 0;
    $scope.options = [];
    $scope.qLength = 0;
    $scope.userAns = {answer: 0};
    $scope.allQuesitons = [];
    $scope.timeFormat = 'HH:mm:ss';

    /*Timer * -- Liz*/
    var decrCountdown = function () {
        $scope.countdown -= 1;
        if ($scope.countdown < 1) {
            endQuiz(); // calling endquiz method if countdown ends
            console.log('calling endquiz from timer');
        }
    };
    /* timer */
    var startCountdown = function () {
        $interval(decrCountdown, 1000, $scope.countdown);
    };

    /*start quiz*/
    $scope.startQuiz = function () {
        $scope.testStatus = "inProgress";
        $scope.activequiz = loadTestFactory.getQuiz(0);
        $scope.testTitle = $scope.activequiz.title;
        $scope.questions = $scope.activequiz.questions;
        $scope.qTitle = $scope.activequiz.questions[ counter ].questionTitle;
        $scope.options = $scope.activequiz.questions[ counter ].options;
        $scope.corrAns = $scope.activequiz.questions[ counter ].correctAns;
        $scope.qLength = $scope.activequiz.questions.length;
        $scope.countdown = $scope.activequiz.limitMinutes * 60; // minutes into seconds
        for (var i = 0; i < $scope.qLength; i++){

        $scope.saveToObject($scope.questions[i].questionTitle, $scope.questions[i].options, $scope.questions[i].correctAns , $scope.userAns.answer);
        }
        console.log("filling test data");
        startCountdown();
    };

    $scope.nextQuestion = function (checkedValue) {
        console.log(counter);
        counter++;
        if (counter < $scope.qLength) {
            $scope.qTitle = $scope.activequiz.questions[ counter ].questionTitle;
            $scope.options = $scope.activequiz.questions[ counter ].options;
            $scope.corrAns = $scope.activequiz.questions[ counter ].correctAns;

        } else if (counter >= $scope.qLength) {
            counter = $scope.qLength;
            //  kalla funktion som visar test översikt i slut
            $scope.endQuiz();
            console.log('endquiz called from nextquestion function');
        }
    };

    $scope.prevQuestion = function () {
        counter--;
        if (counter >= 0) {
            $scope.qTitle = $scope.activequiz.questions[ counter ].questionTitle;
            $scope.options = $scope.activequiz.questions[ counter ].options;
            $scope.corrAns = $scope.activequiz.questions[ counter ].correctAns;
        }else{
            counter = 0;
        }
    };

    $scope.saveToObject = function (title, options, correctAns , answer) {
        var object = {
            questionTitle: title,
            options: options,
            correctAns: correctAns,
            userAns : answer
        }

        $scope.allQuesitons.push(object);
    }


    /*updates answers to object array allQuestions */
    $scope.addAns = function () {
        $scope.allQuesitons[counter].userAns = $scope.userAns.answer;
        console.table($scope.allQuesitons);
    };


    $scope.endQuiz = function () {
        $scope.testStatus = "inactive";
    };

}]);