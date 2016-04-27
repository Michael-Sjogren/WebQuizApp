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

    $scope.quizData2  = loadTestFactory.getData();
    
    /*start quiz*/
    $scope.startQuiz = function () {
        $scope.testStatus = "inProgress";
        $scope.activequiz = loadTestFactory.getQuiz(0);
        $scope.testTitle = $scope.activequiz.title;
        $scope.qTitle = $scope.activequiz.questions[0].questionTitle;
        $scope.options = $scope.activequiz.questions[0].answer;
    };

    $scope.nextQuestion = function () {
        $scope.counter ++;
        $scope.qTitle = $scope.activequiz.questions[$scope.counter].questionTitle;
        $scope.options = $scope.activequiz.questions[$scope.counter].answer;
        console.log("nästa fråga" +  $scope.counter);

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
