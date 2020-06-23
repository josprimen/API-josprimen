angular.module('OliveApp').controller('InfoCtrl', [
    '$scope',
    '$http',

    function($scope, $http) {
        console.log('Info controller initialized!!');

        $scope.popovercardhide = function() {
            $('[data-toggle=popover]').popover('hide');
            //$('#floatingbutton').popover('hide');
        };

        $(document).ready(function() {
            $('#igoogle').click(function(event) {
                window.location = 'mailto:joseenriqueprietomenacho@gmail.com';
            });
        });
    }
]);