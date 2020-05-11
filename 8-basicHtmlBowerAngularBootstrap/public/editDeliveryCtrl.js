angular.module('OliveApp').controller('EditCtrl', [
    '$scope',
    '$http',
    function($scope, $http) {
        console.log('Data controller initialized!!');

        $scope.notify = function() {
            $.notify("Hello World");
        };

      
    }
]);








