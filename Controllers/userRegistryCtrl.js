


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

});