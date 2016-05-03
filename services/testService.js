/**
 * Created by Liz on 2016-05-03.
 */

var testService = angular.module('testServices', []);

testService
    .factory('testService', '$http', 'loadTestFactory', function ($http, loadTestFactory) {


        var activeTest = null;

        var loadUserTests = function () {
    

        };


        var setActiveTest = function (i) {
            
        };

        var getActiveTest = function () {
            return activeTest;
        };

        return {
            getActiveTest: getActiveTest,
            setActiveTest: setActiveTest
        }


    });


