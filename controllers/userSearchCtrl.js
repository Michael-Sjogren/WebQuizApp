
(function () {
    'use strict';

    angular
        .module('app')
        .controller('userSearchCtrl', Controller);

    userSearchCtrl.$inject = ['userSearchService', '$scope'];
    function userSearchCtrl(userSearchService, $scope) {
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