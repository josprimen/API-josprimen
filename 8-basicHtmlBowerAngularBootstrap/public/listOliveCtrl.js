angular.module('OliveApp').controller('DataCtrl', [
    '$scope',
    '$http',
    function($scope, $http) {
        console.log('Data controller initialized!!');
        var url = '/josprimenapi/v1/olive';

        /*function getData() {
            $http.get(url).then(function(res) {
                console.log('Getting ' + url);
                $scope.olivedata = res.data;
				//$scope.success_status = res.status;
            });
        }*/

        function getData() {
            $http.get(url).then(
                function successCallback(res) {
                    console.log('Getting ' + url);
                    $scope.olivedata = res.data;
                    $.notify(
                        {
                            title: '<strong>¡Ok!</strong>',
                            message: 'Datos obtenidos correctamente'
                        },
                        { type: 'success' }
                    );
                    notify.close();
                },
                function errorCallBack(res) {
                    switch (res.status) {
                        case 404:
                            $.notify(
                                {
                                    title: '<strong>¡Ups!</strong>',
                                    message: 'La tabla está vacía, rellénela e inténtelo de nuevo'
                                },
                                { type: 'danger' }
                            );
                            notify.close();
                            $scope.olivedata = '';
                            break;
                        default:
                            $.notify(
                                {
                                    title: '<strong>¡Ups!</strong>',
                                    message: 'Algo ha ido mal, inténtalo más tarde.'
                                },
                                { type: 'danger' }
                            );
                            notify.close();
                    }
                }
            );
        }

        getData();

        function getDataAux() {
            $http.get(url).then(
                function successCallback(res) {
                    console.log('Getting ' + url);
                    $scope.olivedata = res.data;
                },
                function errorCallBack(res) {
                    switch (res.status) {
                        case 404:
                            $scope.olivedata = '';
                            break;
                        default:
                            $.notify(
                                {
                                    title: '<strong>¡Ups!</strong>',
                                    message: 'Algo ha ido mal, inténtalo más tarde.'
                                },
                                { type: 'danger' }
                            );
                            notify.close();
                    }
                }
            );
        }

        $scope.newolivedata = function() {
            $http.post(url, $scope.newolive).then(
                function successCallback(req, res) {
                    console.log('Posting to ' + url);
                    getDataAux();
                    $.notify(
                        { title: '<strong>¡Genial!</strong>', message: 'Albarán creado.' },
                        { type: 'success' }
                    );
                    notify.close();
                },
                function errorCallBack(res) {
                    console.log(res.status);
                    //$scope.status = res.status;
                    switch (res.status) {
                        case 500:
                            $.notify(
                                {
                                    title: '<strong>¡Ups!</strong>',
                                    message: '¡Error accediendo a la base de datos!'
                                },
                                { type: 'danger' }
                            );
                            notify.close();
                        case 409:
                            //$.notify('Ya existe un albarán con ese número.');
                            $.notify(
                                {
                                    title: '<strong>¡Error!</strong>',
                                    message: 'Ya existe un albarán con ese número.'
                                },
                                { type: 'danger' }
                            );
                            notify.close();
                        case 400:
                            $.notify(
                                {
                                    title: '<strong>¡Atención!</strong>',
                                    message: '¡Rellene todos los campos!'
                                },
                                { type: 'warning' }
                            );
                            notify.close();
                    }
                }
            );
        };

        $scope.deleteticket = function(day, month, year, ticket) {
            $http.delete(url + '/' + year + '/' + month + '/' + day + '/' + ticket).then(
                function successCallback(req, res) {
                    console.log('Deleting delivery note with number: ' + ticket);

                    getDataAux();
                    $.notify(
                        {
                            title: '<strong>¡Ok!</strong>',
                            message:
                                'El albarán número <strong>' +
                                ticket +
                                '</strong> se ha eliminado correctamente.'
                        },
                        { type: 'success' }
                    );
                    notify.close();
                },
                function errorCallBack(req, res) {
                    $.notify(
                        {
                            title: '<strong>¡Ups!</strong>',
                            message: 'Hubo un error al borrar el albarán.'
                        },
                        { type: 'danger' }
                    );
                    notify.close();
                }
            );
        };

        $scope.deleteall = function() {
            $http.delete(url).then(
                function successCallback(res) {
                    console.log('Deleting all data');
                    getDataAux();
                    $.notify(
                        {
                            title: '<strong>¡Ok!</strong>',
                            message: 'Se han eliminado todos los datos correctamente.'
                        },
                        { type: 'warning' }
                    );
                    notify.close();
                },
                function errorCallBack(res) {
                    $.notify(
                        {
                            title: '<strong>¡Ups!</strong>',
                            message: 'Algo ha ido mal, inténtalo más tarde.'
                        },
                        { type: 'danger' }
                    );
                    notify.close();
                }
            );
        };

        $scope.initialdata = function(res) {
            $http.get(url + '/loadInitialData').then(
                function successCallback(res) {
                    console.log('Getting initial data');
                    getDataAux();
                    $.notify(
                        {
                            title: '<strong>¡Ok!</strong>',
                            message: 'Datos por defecto añadidos correctamente'
                        },
                        { type: 'success' }
                    );
                    notify.close();
                },
                function errorCallBack(res) {
                    $.notify(
                        {
                            title: '<strong>¡Ups!</strong>',
                            message: 'Algo ha ido mal, inténtalo más tarde.'
                        },
                        { type: 'danger' }
                    );
                    notify.close();
                }
            );
        };

        $scope.popoverfunction = function() {
            //Popover function code
            $(function() {
                $('[data-toggle="popover"]').popover({
                    html: true,
                    sanitize: false
                });
            });
        };
		

		$(document).on('click', '.popover .btn', function() {
			console.log("LA ID: " + this.id);
			if (this.id == "cancel"){
				console.log("Que me han dao porculo");
				$(this)
                .parents('.popover')
                .popover('hide');
			}if(this.id=="updateolivedata"){
				var updatedday=Number($('#dayupdate').val());
				var updatedmonth=Number($('#monthupdate').val());
				var updatedyear=Number($('#yearupdate').val());
				var updatedticket=Number($('#ticketupdate').val());
				var updatedhumidity=Number($('#humidityupdate').val());
				var updatedacidity=Number($('#acidityupdate').val());
				var updatedkgs=Number($('#kgsupdate').val());
				var updatedrdto=Number($('#rdtoupdate').val());
				var updateddeliverydata = {
				DIA: updatedday,
				MES: updatedmonth,
				ANYO: updatedyear,
				KGSACEITUNA: updatedkgs,
				RDTO: updatedrdto,
				HUMEDAD: updatedhumidity,
				ACIDEZ: updatedacidity,
				TICKET: updatedticket
				};
				console.log("Estoy viejo y desorientado" + JSON.stringify(updateddeliverydata));
				$(this)
                .parents('.popover')
                .popover('hide');
				$http.put(url + '/' + updatedyear + '/' + updatedmonth + '/' + updatedday + '/' + updatedticket, updateddeliverydata).then(
                function successCallback(req, res) {
                    console.log('Putting to ' + url);
                    getDataAux();
                    $.notify(
                        {
                            title: '<strong>¡Genial!</strong>',
                            message:
                                'Albarán número ' + updateolive.TICKET + ' ha sido actualizado.'
                        },
                        { type: 'success' }
                    );
                    notify.close();
                },
                function errorCallBack(res) {
                    console.log(res.status);
                    //$scope.status = res.status;
                    switch (res.status) {
                        case 409:
                            //$.notify('Ya existe un albarán con ese número.');
                            $.notify(
                                {
                                    title: '<strong>¡Error!</strong>',
                                    message: 'Revisa el número de albarán.'
                                },
                                { type: 'warning' }
                            );
                            notify.close();
                        default:
                            $.notify(
                                {
                                    title: '<strong>¡Ups!</strong>',
                                    message: 'Algo ha ido mal, inténtalo más tarde.'
                                },
                                { type: 'danger' }
                            );
                            notify.close();
                    }
                }
            );
				
			}
        });
		

        $scope.updateolivedata = function() {
            
        };
    }
]);