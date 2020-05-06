angular
	.module('OliveApp')
	.controller('DataCtrl', ['$scope','$http',function($scope, $http) {
        console.log('Data controller initialized!!');
        var url = '/josprimenapi/v1/olive';

        function getData() {
            $http.get(url).then(function(res) {
                console.log('Getting ' + url);
                $scope.olivedata = res.data;
				//$scope.success_status = res.status;
            });
        }
        getData();
		
		$scope.newolivedata = function(){
			$http.post(url, $scope.newolive).then(function(req, res){
				console.log("Posting to " + url);
				getData();
				$scope.success_status = res.status;
			});
		};
		
		$scope.deleteticket = function(day, month, year, ticket){
			
			$http.delete(url + "/" + year + "/" + month + "/" + day + "/" + ticket).then(function(req,res){
				console.log("Deleting delivery note with number: " + ticket);
				//$scope.success_status = res.status + " delivery note number " + ticket + " deleted";
				getData();
			});
			
		};
		
    }
]);