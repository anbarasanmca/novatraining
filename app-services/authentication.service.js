(function () {
    'use strict';

    angular
        .module('app')
        .factory('AuthenticationService', Service);

    function Service($http, $localStorage) {
        var service = {};

        service.Login = Login;
        service.Logout = Logout;

        return service;

        function Login(username, password, callback) {
            $http.post('/api/authenticate', { username: username, password: password })
                .success(function (response) {
                    if (response.token) {
                        $localStorage.currentUser = { username: username, token: response.token };
                        $http.defaults.headers.common.Authorization = 'AngularTest ' + response.token;
                        callback(true);
                    } else {
                        callback(false);
                    }
                });
        }

        function Logout() {
            delete $localStorage.currentUser;
            $http.defaults.headers.common.Authorization = '';
        }
    }
})();