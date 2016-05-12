


app.controller('userRegistryCtrl', function($scope, $http) {

    $scope.goBack = function(){
        window.history.back();
    }

    $scope.reset =function () {
        $scope.userForm = {};
    }
    
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

    /*
.controller("userSearchCtrl", function ($scope, userSearchService)
{
    var promise = userSearchService.getusers();
    promise.then(function (data) {
        $scope.users = data.data;
        console.log($scope.users);
    })
}); */




/* controller för att hämta data
app.controller('getUserCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('').success(function(data) {
        $scope.user = data.artists;
        $scope.userOrder = 'name';
    });
}]);
    */