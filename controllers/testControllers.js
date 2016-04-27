var testControllers = angular.module('testControllers', []);

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
