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
    $scope.testStatus = "pending";
    $scope.quizId = null;
    $scope.testTitle = "";
    $scope.activequiz = [];
    $scope.qTitle = "";
    var counter = 0;
    $scope.options = [];
    $scope.qLength = 0;
    $scope.answers = [];
    $scope.radioButtonID = [];
    $scope.userAns = {
        answer : ""
    };

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
        if(counter < $scope.qLength) {
            counter ++;
            $scope.qTitle = $scope.activequiz.questions[counter].questionTitle;
            $scope.options = $scope.activequiz.questions[counter].answer;
        }else if(counter >= $scope.qLength){
            //  kalla funktion som visar test översikt i slut
            $scope.endQuiz();
        }
    }

    $scope.prevQuestion = function () {
        if (counter > -1) {
            counter --;
            $scope.qTitle = $scope.activequiz.questions[counter].questionTitle;
            $scope.options = $scope.activequiz.questions[counter].answer;
        }else{
        }
    }
    
    $scope.sortQuestions = function () {
        for (var i = 0; i < $scope.qLength; i++){
          $scope.answers.push($scope.activequiz.questions[i].answer[0]);
        }
    }



    /*Add answer to answers array*/
    $scope.addAns = function () {
   
      $scope.answers[counter] = $scope.userAns.answer;
    };

    $scope.saveAnswers = function (answers) {

    };

    $scope.getResult = function () {

    }

    $scope.endQuiz = function () {
        $scope.testStatus = "inactive";
    }


}]);
