/**
 * Created by Liz on 4/28/2016.
 * Handling menu and overall user controls. Serves as parent controller in userIndex.
 */


angular.module('userApp')
    .controller('userCtrl', ['$scope', 'userService', 'loadTestFactory',
        function ($scope, userService, loadTestFactory) {
            $scope.activeuser;
            $scope.logString = "userCtrl loaded...";
            $scope.quizData = loadTestFactory.getData();
            console.log($scope.logString);
            var menuItems = [];
            
            

            $scope.getMenuItems = function () {
                return menuItems;
            };

            $scope.checkLoginStatus = function () {

            };

/*            $scope.$watch(userService.isLoggedIn, function (isLoggedIn) {
             $scope.isLoggedIn = isLoggedIn;
             $scope.activeuser = userService.getUser();
             })*/

        }]);

