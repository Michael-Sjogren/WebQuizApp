


app.controller('userRegistryCtrl', function($scope, $http) {

    $scope.userForm = {};
    
    $scope.userForm = {
        
        firstName : "",
        lastName : "",
        userName : "",
        password : "",
        sss : "",
        address  :"",
        postalCode : "",
        city : "",
        phone : "",
        email : "",
        class : "",
        registrerad : "",
        deregistered : "",
        userAttachment : "",
        userStatus : ""
    };


    $scope.onSubmit = function () {

        if ($scope.userForm.$valid) {
            console.log("I'm So klicked");
            console.log($scope.userForm);

                $http.get('../data/users.json').success(function (response) {
                    $scope.myData = response;
                });
                     success(function (data) {
                     console.log(":)")
                }).error(function (data) {
                     console.log(":(")
            });
        } else {
            console.log("Invalid Form!")
        }
    };

})

.controller("listCtrl", function ($scope, userSearchService)
{
    var promise = userSearchService.getusers();
    promise.then(function (data) {
        $scope.users = data.data;
        console.log($scope.users);
    })
});

(function () {
    'use strict';

    angular
        .module('app')
        .controller('listCtrl', listCtrl);

    listCtrl.$inject = ['userSearchService', '$scope'];
    function listCtrl(userSearchService, $scope) {
        var users = [];
        users = GetAll;
        console.log('usersLoaded');
        gu.user = null;
        gu.allUsers = [];
        gu.deleteUser = deleteUser;

        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            userSearchService.GetByUsername($scope.globals.currentUser.username)
                .then(function (user) {
                    gu.user = user;
                });
        }

        function loadAllUsers() {
            userSearchService.GetAll()
                .then(function (users) {
                    gu.allUsers = users;
                });
        }

        function deleteUser(id) {
            UserService.Delete(id)
                .then(function () {
                    loadAllUsers();
                });
        }
    }

})();


/* controller för att hämta data
app.controller('getUserCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('').success(function(data) {
        $scope.user = data.artists;
        $scope.userOrder = 'name';
    });
}]);
    */