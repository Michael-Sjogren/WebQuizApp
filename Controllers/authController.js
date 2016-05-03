angular.module('app')
    .controller('loginCtrl', ['$scope', 'loginService', '$location',
        function ($scope, userService, $location) {

            $scope.attemptLogin = function () {
                console.log('submit clicked');
                
                userService.loginUser("student", "student");

                if (userService.getLoginStatus()) {
                    $location.path('/userMenu');
                }

            };
        }]);