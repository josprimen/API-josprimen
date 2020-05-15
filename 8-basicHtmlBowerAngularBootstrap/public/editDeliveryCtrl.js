angular.module('OliveApp').controller('EditCtrl', [
    '$scope',
    '$http',

    function($scope, $http) {
        console.log('Data controller initialized!!');

        var url = '/josprimenapi/v1/olive';

        function getData() {
            $http.get(url).then(function successCallback(res) {
                console.log('Getting ' + url);
                $scope.olivedata = res.data;
            });
        }

        getData();

        $(function() {
            $('[data-toggle="popover"]').popover({
                html: true,
                sanitize: false
            });
        });

        $(document).on('click', '.popover .btn', function() {
			console.log("LA ID: " + this.id);
			if (this.id == "cancel"){
				console.log("Que me han dao porculo");
				$(this)
                .parents('.popover')
                .popover('hide');
			}
        });
    }
]);