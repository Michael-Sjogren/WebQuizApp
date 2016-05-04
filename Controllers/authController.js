angular.module('app')
    .controller('loginCtrl', ['$scope', 'loginService', '$location',
        function ($scope, loginService, $location) {

            $scope.attemptLogin = function () {
                console.log('submit clicked passed');
                loginService.loginUser("student", "student");

                if (userService.getLoginStatus()) {
                    $location.path('/userMenu');

                }

            };

            $scope.hack = function(){
                $location.path('/userMenu');
            }
        }]);