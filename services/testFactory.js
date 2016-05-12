/**
 * Created by Liz on 2016-05-03.
 */

angular.module('app')
    .factory('loadTestFactory', function ($http) {
    var quizData = [];

    function loadData() {
        $http.get('/api/test').then(function (response) {
            quizData  = response.data;
            console.log('quizdata loaded... displaying table:');
            console.table(quizData);
        });
    }

    return{
        getData: function () {
            return quizData;
        },
        getQuiz: function(quizIndex){
            return quizData[quizIndex];
        },
        loadData:loadData
    }
});
