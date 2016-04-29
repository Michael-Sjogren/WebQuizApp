var testControllers = angular.module('testControllers', []);

/*Factory that loads data from json file*/
userApp.factory('loadTestFactory', function ($http) {
    var quizData = [];

    function loadData() {
        $http.get('../data/quizzes.json').success(function (response) {
            quizData  = response;
        });
    }
    return{
        getData: function () {
            return quizData;
        },
        getQuiz: function (quizIndex) {
            return quizData.quizzes[quizIndex];
        },
        loadData :loadData
    }
});

testControllers.controller('userCtrl',['$scope','loadTestFactory' ,function ($scope , loadTestFactory) {
            $scope.quizData  = loadTestFactory.getData();
}]);

testControllers.controller('testCtrl',['$scope','loadTestFactory' ,function ($scope, loadTestFactory) {
    $scope.answers= [];
    $scope.testStatus = "pending";
    $scope.quizId = null;
    $scope.testTitle = "";
    $scope.activequiz = [];
    $scope.qTitle = "";
    $scope.counter = 0;
    $scope.options = [];
    $scope.qLength = 0;
    $scope.allQuestions = [];
    $scope.radioButtonID = [];


    $scope.quizData2  = loadTestFactory.getData();
    
    /*start quiz*/
    $scope.startQuiz = function () {
        $scope.testStatus = "inProgress";
        $scope.activequiz = loadTestFactory.getQuiz(0);
        $scope.testTitle = $scope.activequiz.title;
        $scope.qTitle = $scope.activequiz.questions[0].questionTitle;
        $scope.options = $scope.activequiz.questions[0].answer;
        $scope.qLength = $scope.activequiz.questions.length;

    };

    $scope.nextQuestion = function (checkedValue) {
        if($scope.counter < $scope.qLength) {
            $scope.counter ++;
            $scope.qTitle = $scope.activequiz.questions[$scope.counter].questionTitle;
            $scope.options = $scope.activequiz.questions[$scope.counter].answer;
        }else{
            $scope.endQuiz();
           //  kalla funktion som visar test översikt i slut
        }
    }

    $scope.prevQuestion = function () {
        if ($scope.counter >= 0) {
            $scope.counter --;
            $scope.qTitle = $scope.activequiz.questions[$scope.counter].questionTitle;
            $scope.options = $scope.activequiz.questions[$scope.counter].answer;
        }else{

        }
    }



    $scope.sortQuestions = function () {
    /* merges the first array elements from the answer arrays that is in json file into one array */
        for (var i = 0; i < $scope.qLength; i++){
            /*puts in all the first answer elements for the active quiz in a array changes every time the user clicks on another radio button
            * the questions get updated with the help of the page index (counter variable)
            * */
          $scope.allQuestions.push($scope.activequiz.questions[i].answer[0]);
        }
          console.table($scope.allQuestions);
    }



    /*Add answer to answers array*/
    $scope.addAns = function (answer, questionIndex) {
    };

    $scope.saveAnswers = function (answers) {
    };

    $scope.getResult = function () {
    }

    $scope.endQuiz = function () {
        $scope.testStatus = "inactive";
    }


}]);
