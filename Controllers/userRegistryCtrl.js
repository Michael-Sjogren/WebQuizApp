


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
    
    userRegistryCtrl.$inject = ['Service', '$rootScope'];
    function userRegistryCtrl(Service, $rootScope) {
        var gu = this;

        gu.user = null;
        gu.allUsers = [];

        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            Service.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    gu.user = user;
                });
        }

        function loadAllUsers() {
            Service.GetAll()
                .then(function (users) {
                    gu.allUsers = users;
                });
        }



    };
    
});


/* controller för att hämta data
app.controller('getUserCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('').success(function(data) {
        $scope.user = data.artists;
        $scope.userOrder = 'name';
    });
}]);
    */