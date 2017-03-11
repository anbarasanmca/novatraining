(function () {
    'use strict';

    angular
        .module('app')
        .run(setupFakeBackend);

    function setupFakeBackend($httpBackend) {
        var testUser = { username: 'training', password: 'training', firstName: 'Anbu', lastName: 'Sundaram' };
        $httpBackend.whenPOST('/api/authenticate').respond(function (method, url, data) {
            var params = angular.fromJson(data);

            if (params.username === testUser.username && params.password === testUser.password) {
                return [200, { token: 'Anbu-auth' }, {}];
            } else {
                return [200, {}, {}];
            }
        });
        $httpBackend.whenGET(/^\w+.*/).passThrough();

    }
})();