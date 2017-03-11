(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', Controller);

    function Controller($scope, $http, $state) {
        var vm = this;
        AutoGetData()
        function AutoGetData(){
        $http.get("https://jsonplaceholder.typicode.com/users")
        .then(function(response) {
            $scope.userDataList = response.data;
        });
       } 
       $scope.TodoListView = function(val){
        $scope.ids = val.id;
        alert($scope.ids);
        $state.go('viewTodo');
       }  
    }

})();