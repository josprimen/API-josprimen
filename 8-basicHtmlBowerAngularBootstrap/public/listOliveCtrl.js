angular
	.module('OliveApp')
	.controller('DataCtrl', ['$scope','$http',function($scope, $http) {
        console.log('Data controller initialized!!');
        var url = '/josprimenapi/v1/olive';

        function getData() {
            $http.get(url).then(function(response) {
                console.log('Getting ' + url);
                $scope.olivedata = response.data;
            });
        }
        getData();
    }
]);