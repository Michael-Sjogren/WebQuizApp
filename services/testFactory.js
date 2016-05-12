/**
 * Created by Liz on 2016-05-03.
 */

angular.module('app')
    .factory('loadTestFactory', function ($http) {
    var quizData = [];

    function loadData() {
        $http.get('../data/quizzes.json').success(function (response) {
            quizData  = response;
            console.log('quizdata loaded...');
            console.table(quizData);
        });
    }

    return{
        getData: function () {
            return quizData;
        },
        getQuiz: function(quizIndex){
            return quizData.quizzes[quizIndex];
        },
        loadData:loadData
    }
});
