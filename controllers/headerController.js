/**
 * Created by Liz on 2016-05-03.
 */
/*Header navigation controller*/

angular.module('app')
    .controller('headerCtrl',['$scope', function ($scope) {

        var adminNav = [];
        var userNav = [];

        $scope.setNavigationLinks = function () {



        };

        $scope.getLinks = function () {
            return links;
        }

    }]);