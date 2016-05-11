var app=angular.module("app", []);

app.service("userSearchService", function ($http, $q) {
    var deferred = $q.defer();
    $http.get('data/users.json').then(function (data) {
        deferred.resolve(data);
    })
    
    this.getusers = function () {
        return deferred.promise;
    }
});
