angular.module('OliveApp').controller('DataCtrl', [
    '$scope',
    '$http',
    function($scope, $http) {
        console.log('Data controller initialized!!');
        var url = '/josprimenapi/v1/olive';
		
/*#GE------------------------------VARIABLES---------------------------*/

		$scope.offset = 0;
		$scope.limit = 15;
        $scope.page1 = 1;
		$scope.page2 = 2;
		$scope.page3 = 3;
		var paramdeleteday = "";
		var paramdeletemonth = "";
		var paramdeleteyear = "";
		var paramdeleteticket = "";


/*#GE------------------------------GETTERS---------------------------*/
		
        function getData() {
            $http.get(url + "?limit=" + $scope.limit +"&offset=" + $scope.offset).then(
                function successCallback(res) {
                    console.log('Getting ' + url);
                    $scope.olivedata = res.data;
                    var notify = $.notify(
                        {
                            title: '<strong>¡Ok!</strong>',
                            message: 'Datos obtenidos correctamente'
                        },
                        {
                            type: 'success',
                            offset: 60,
                            animate: {
                                enter: 'animated fadeInRight',
                                exit: 'animated fadeOutRight'
                            }
                        }
                    );
                    //notify.close();
                },
                function errorCallBack(res) {
                    switch (res.status) {
                        case 404:
                            var notify = $.notify(
                                {
                                    title: '<strong>¡Ups!</strong>',
                                    message: 'La tabla está vacía, rellénela e inténtelo de nuevo'
                                },
                                {
                                    type: 'danger',
                                    offset: 60,
                                    animate: {
                                        enter: 'animated fadeInRight',
                                        exit: 'animated fadeOutRight'
                                    }
                                }
                            );
                            //notify.close();
                            $scope.olivedata = '';
                            break;
                        default:
                            var notify = $.notify(
                                {
                                    title: '<strong>¡Ups!</strong>',
                                    message: 'Algo ha ido mal, inténtalo más tarde.'
                                },
                                {
                                    type: 'danger',
                                    offset: 60,
                                    animate: {
                                        enter: 'animated fadeInRight',
                                        exit: 'animated fadeOutRight'
                                    }
                                }
                            );
                        //notify.close();
                    }
                }
            );
        }
		
		
		getData();


        function getDataAux() {
            $http.get(url + "?limit=" + $scope.limit +"&offset=" + $scope.offset).then(
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
                            var notify = $.notify(
                                {
                                    title: '<strong>¡Ups!</strong>',
                                    message: 'Algo ha ido mal, inténtalo más tarde.'
                                },
                                {
                                    type: 'danger',
                                    offset: 60,
                                    animate: {
                                        enter: 'animated fadeInRight',
                                        exit: 'animated fadeOutRight'
                                    }
                                }
                            );
                        //notify.close();
                    }
                }
            );
        }


/*#GE------------------------------POST---------------------------*/

        $scope.newolivedata = function() {
            $http.post(url, $scope.newolive).then(
                function successCallback(req, res) {
                    console.log('Posting to ' + url);
                    getDataAux();
                    var notify = $.notify(
                        { title: '<strong>¡Genial!</strong>', message: 'Albarán creado.' },
                        {
                            type: 'success',
                            offset: 60,
                            animate: {
                                enter: 'animated fadeInRight',
                                exit: 'animated fadeOutRight'
                            }
                        }
                    );
                    //notify.close();
                },
                function errorCallBack(res) {
                    console.log(res.status);
                    //$scope.status = res.status;
                    switch (res.status) {
                        case 500:
                            var notify = $.notify(
                                {
                                    title: '<strong>¡Ups!</strong>',
                                    message: '¡Error accediendo a la base de datos!'
                                },
                                {
                                    type: 'danger',
                                    offset: 60,
                                    animate: {
                                        enter: 'animated fadeInRight',
                                        exit: 'animated fadeOutRight'
                                    }
                                }
                            );
                        //notify.close();
                        case 409:
                            //$.notify('Ya existe un albarán con ese número.');
                            var notify = $.notify(
                                {
                                    title: '<strong>¡Error!</strong>',
                                    message: 'Ya existe un albarán con ese número.'
                                },
                                {
                                    type: 'danger',
                                    offset: 60,
                                    animate: {
                                        enter: 'animated fadeInRight',
                                        exit: 'animated fadeOutRight'
                                    }
                                }
                            );
                        //notify.close();
                        case 400:
                            var notify = $.notify(
                                {
                                    title: '<strong>¡Atención!</strong>',
                                    message: '¡Rellene todos los campos!'
                                },
                                {
                                    type: 'warning',
                                    offset: 60,
                                    animate: {
                                        enter: 'animated fadeInRight',
                                        exit: 'animated fadeOutRight'
                                    }
                                }
                            );
                        //notify.close();
                    }
                }
            );
        };


/*#GE------------------------------DELETES---------------------------*/
		$scope.ticketdeleteparams = function(day, month, year, ticket){
			paramdeleteday = Number(day);
			paramdeletemonth = Number(month);
			paramdeleteyear = Number(year);
			paramdeleteticket = Number(ticket);
		};
        $scope.deleteticket = function() {
            $http.delete(url + '/' + paramdeleteyear + '/' + paramdeletemonth + '/' + paramdeleteday + '/' + paramdeleteticket).then(
                function successCallback(req, res) {
                    console.log('Deleting delivery note with number: ' + paramdeleteticket);

                    getDataAux();
                    var notify = $.notify(
                        {
                            title: '<strong>¡Ok!</strong>',
                            message:
                                'El albarán número <strong>' +
                                paramdeleteticket +
                                '</strong> se ha eliminado correctamente.'
                        },
                        {
                            type: 'success',
                            offset: 60,
                            animate: {
                                enter: 'animated fadeInRight',
                                exit: 'animated fadeOutRight'
                            }
                        }
                    );
                    //notify.close();
                },
                function errorCallBack(req, res) {
                    var notify = $.notify(
                        {
                            title: '<strong>¡Ups!</strong>',
                            message: 'Hubo un error al borrar el albarán.'
                        },
                        {
                            type: 'danger',
                            offset: 60,
                            animate: {
                                enter: 'animated fadeInRight',
                                exit: 'animated fadeOutRight'
                            }
                        }
                    );
                    //notify.close();
                }
            );
        };

        $scope.deleteall = function() {
            $http.delete(url).then(
                function successCallback(res) {
                    console.log('Deleting all data');
                    getDataAux();
                    var notify = $.notify(
                        {
                            title: '<strong>¡Ok!</strong>',
                            message: 'Se han eliminado todos los datos correctamente.'
                        },
                        {
                            type: 'warning',
                            offset: 60,
                            animate: {
                                enter: 'animated fadeInRight',
                                exit: 'animated fadeOutRight'
                            }
                        }
                    );
                    //notify.close();
                },
                function errorCallBack(res) {
                    var notify = $.notify(
                        {
                            title: '<strong>¡Ups!</strong>',
                            message: 'Algo ha ido mal, inténtalo más tarde.'
                        },
                        {
                            type: 'danger',
                            offset: 60,
                            animate: {
                                enter: 'animated fadeInRight',
                                exit: 'animated fadeOutRight'
                            }
                        }
                    );
                    //notify.close();
                }
            );
        };


/*#GE------------------------------LOAD INITIAL DATA---------------------------*/

        $scope.initialdata = function(res) {
            $http.get(url + '/loadInitialData').then(
                function successCallback(res) {
                    console.log('Getting initial data');
                    getDataAux();
                    var notify = $.notify(
                        {
                            title: '<strong>¡Ok!</strong>',
                            message: 'Datos por defecto añadidos correctamente'
                        },
                        {
                            type: 'success',
                            offset: 60,
                            animate: {
                                enter: 'animated fadeInRight',
                                exit: 'animated fadeOutRight'
                            }
                        }
                    );
                    //notify.close();
                },
                function errorCallBack(res) {
                    var notify = $.notify(
                        {
                            title: '<strong>¡Ups!</strong>',
                            message: 'Algo ha ido mal, inténtalo más tarde.'
                        },
                        {
                            type: 'danger',
                            offset: 60,
                            animate: {
                                enter: 'animated fadeInRight',
                                exit: 'animated fadeOutRight'
                            }
                        }
                    );
                    //notify.close();
                }
            );
        };


/*#GE------------------------------POPOVER FUNCTION AND PUT (JQUERY)---------------------------*/
		/*--Complex Bootstrap objects needs functionality and it do it with jquery. Bootstrap.ui works with angular js, but not the normal Bootstrap library--*/

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
            //console.log("LA ID: " + this.id);
            if (this.id == 'cancel') {
                $(this)
                    .parents('.popover')
                    .popover('hide');
            }
            if (this.id == 'updateolivedata') {
                var updatedday = Number($('#dayupdate').val());
                var updatedmonth = Number($('#monthupdate').val());
                var updatedyear = Number($('#yearupdate').val());
                var updatedticket = Number($('#ticketupdate').val());
                var updatedhumidity = Number($('#humidityupdate').val());
                var updatedacidity = Number($('#acidityupdate').val());
                var updatedkgs = Number($('#kgsupdate').val());
                var updatedrdto = Number($('#rdtoupdate').val());
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
                $(this)
                    .parents('.popover')
                    .popover('hide');
                $http
                    .put(
                        url +
                            '/' +
                            updatedyear +
                            '/' +
                            updatedmonth +
                            '/' +
                            updatedday +
                            '/' +
                            updatedticket,
                        updateddeliverydata
                    )
                    .then(
                        function successCallback(req, res) {
                            console.log(
                                'Putting to ' +
                                    url +
                                    '/' +
                                    updatedyear +
                                    '/' +
                                    updatedmonth +
                                    '/' +
                                    updatedday +
                                    '/' +
                                    updatedticket
                            );
                            getDataAux();
                            var notify = $.notify(
                                {
                                    title: '<strong>¡Genial!</strong>',
                                    message:
                                        'Albarán número ' + updatedticket + ' ha sido actualizado.'
                                },
                                {
                                    type: 'success',
                                    offset: 60,
                                    animate: {
                                        enter: 'animated fadeInRight',
                                        exit: 'animated fadeOutRight'
                                    }
                                }
                            );
                            //notify.close();
                        },
                        function errorCallBack(res) {
                            console.log(res.status);
                            switch (res.status) {
                                default:
                                    var notify = $.notify(
                                        {
                                            title: '<strong>¡Ups!</strong>',
                                            message: 'Algo ha ido mal, inténtalo más tarde.'
                                        },
                                        {
                                            type: 'danger',
                                            offset: 60,
                                            animate: {
                                                enter: 'animated fadeInRight',
                                                exit: 'animated fadeOutRight'
                                            }
                                        }
                                    );
                                //notify.close();
                            }
                        }
                    );
            }
        });



		/*------------------------------PAGINATION---------------------------*/

		$scope.previouspage = function(){
			if($scope.page1>1){
				$scope.page1--;
				$scope.page2--;
				$scope.page3--;
				$scope.offset -= $scope.limit;
				getDataAux();
			}
		};
		
		$scope.nextpage = function() {
			var objectsnumber = 0;
			var maxpage = null;
			$http.get(url).then(function(res) {
				if (res.data.length != 0) {
					objectsnumber = res.data.length;
				}
				if (objectsnumber != 0) {
					if (objectsnumber % $scope.limit == 0) {
						maxpage = parseInt(objectsnumber / $scope.limit);
					} else {
						maxpage = parseInt(objectsnumber / $scope.limit) + 1;
					}
				}
				if (!($scope.page1 + 1 > maxpage)) {
					$scope.page1++;
					$scope.page2++;
					$scope.page3++;
					$scope.offset += $scope.limit;
					getDataAux();
				}else{
					var notify = $.notify(
						{
							title: '<strong>¡Ups!</strong>',
							message: 'Ya no existen más datos.'
						},
						{
							type: 'warning',
							offset: 60,
							animate: {
								enter: 'animated fadeInRight',
								exit: 'animated fadeOutRight'
							}
						}
					);
				}
			});
		};
		
		//$('#floatingbutton').popover('show');
		//$('#floatingbutton').click();

    }
]);