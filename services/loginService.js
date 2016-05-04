/**
 * Created by Liz on 5/1/2016.
 *
 * Description: Service that handles user log in and log out.
 */

angular.module('app')
    /*Authentication filter*/
    /*TODO: Make work -- Liz*/
    .filter('authFilter', function () {
        console.log('calling authFilter..');
        return function (users, name, password) {
            var user;
            for (var i = 0; i <= users.length; i++) {
                if (users[i].username == name && users[i].password == password) {
                    console.log('found matching name..' + name);
                    user = users[i];
                    return user;
                }
            }
            console.log('didnt find anything boo');
            return user;
            /*            angular.forEach(users, function (value, key, user) {
             if (key === 'username' && value === name) {
             console.log('found matching name..' + value);
             angular.forEach(users, function (value, key) {
             if (key === 'password' && value === password) {
             return user;
             }
             })

             }
             });
             return '';*/
        }
    })
    /*user login service*/
    .factory('loginService', function ($http, $q, $filter) {
            var user;
            var users = [];
            var isLoggedIn = false;


            /*var loadUsers = function () {
                $http.get('../data/users.json')
                    .then(function (response) {
                        users = response.data;
                        return users;
                    })

            };*/

        function loadUsers() {
            $http.get('../data/users.json')
                .success(function (response) {
                    users = response;
                    console.log('users logged...');
                })
        };

            var login = function (userName, userPassword) {

                /*users = loadUsers(); */

                user = $filter('authFilter')(users, userName, userPassword);

                if (user == undefined || user == '') {
                    isLoggedIn = false;
                    console.log('login failed... username:' + userName + '... password: ' + userPassword);
                }
                else {
                    isLoggedIn = true;
                    console.log('Logged in user: ' + user.name + ', with ID: ' + user.id);
                }

/*                $http.get('../data/users.json')
                    .then(function (response) {
                        deffered.resolve(response);
                        /!*users = deffered.promise;*!/
                        users.push($q.when(response));
                        console.table(users);

                        console.log(users.length);
                        /!* console.log('fetched user login data..' + users[0].username);*!/
                        user = $filter('authFilter')(users, userName, userPassword);
                        if (user == undefined || user == '') {
                            isLoggedIn = false;
                            console.log('login failed... username:' + userName + '... password: ' + userPassword);
                        }
                        else {
                            isLoggedIn = true;
                            console.log('Logged in user: ' + user.name + ', with ID: ' + user.id);
                        }

                    })
                    .catch(function (response) {
                        console.error('Error fetching data', response.status, response.data);
                    })*/
            };
            var logout = function () {
                isLoggedIn = false;
            };

            var getLoginStatus = function () {
                return isLoggedIn;
            };
            var getUser = function () {
                if (user == undefined) {
                    console.log('error getting user...');
                }
                return user;
            };

            return {
                loginUser: login,
                logoutUser: logout,
                getLoginStatus: getLoginStatus,
                getUser: getUser,
                loadUsers: loadUsers
            };

        }
    );

