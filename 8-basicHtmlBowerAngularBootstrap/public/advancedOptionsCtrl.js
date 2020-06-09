angular.module('OliveApp').controller('OptionsCtrl', [
    '$scope',
    '$http',

    function($scope, $http) {
        console.log('Options controller initialized!!');

        var url = '/josprimenapi/v1/olive';

        /*#GE------------------------------VARIABLES---------------------------*/

        $scope.offset = 0;
        $scope.limit = 15;
        $scope.page1 = 1;
        $scope.page2 = 2;
        $scope.page3 = 3;
        var paramdeleteday = '';
        var paramdeletemonth = '';
        var paramdeleteyear = '';
        var paramdeleteticket = '';

        /*#GE------------------------------GETTERS---------------------------*/

        function getData() {
            $http.get(url + '?limit=' + $scope.limit + '&offset=' + $scope.offset).then(
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
            $http.get(url + '?limit=' + $scope.limit + '&offset=' + $scope.offset).then(
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
        $scope.ticketdeleteparams = function(day, month, year, ticket) {
            paramdeleteday = Number(day);
            paramdeletemonth = Number(month);
            paramdeleteyear = Number(year);
            paramdeleteticket = Number(ticket);
        };
        $scope.deleteticket = function() {
            $http
                .delete(
                    url +
                        '/' +
                        paramdeleteyear +
                        '/' +
                        paramdeletemonth +
                        '/' +
                        paramdeleteday +
                        '/' +
                        paramdeleteticket
                )
                .then(
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
            console.log('ee' + $scope.selected + $scope.from);
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

        $scope.previouspage = function() {
            if ($scope.page1 > 1) {
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
                } else {
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

        $scope.showalldata = function() {
            $scope.limit = 0;
            $scope.offset = 0;
            var notify = $.notify('<strong>Espere</strong> Cargando datos...', {
                offset: 60,
                animate: {
                    enter: 'animated fadeInRight',
                    exit: 'animated fadeOutRight'
                },
                allow_dismiss: false,
                showProgressbar: true
            });
            getData();
        };

        /*------------------------------SEARCH---------------------------*/

        $scope.intervalsearch = function() {
            $http
                .get(url + '?' + $scope.selected + '=true&from=' + $scope.from + '&to=' + $scope.to)
                .then(
                    function successCallback(res) {
                        console.log(
                            'Url búsqueda intervalo: ' +
                                url +
                                '?' +
                                $scope.selected +
                                '=true&from=' +
                                $scope.from +
                                '&to=' +
                                $scope.to
                        );
                        $scope.olivedata = res.data;
                        var notify = $.notify(
                            {
                                title: '<strong>¡Ok!</strong>',
                                message: 'Datos de la búsqueda obtenidos correctamente'
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
                                        message: 'Parecen no existir datos con esas características'
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
        };

        $scope.normalsearch = function() {
            $http.get(url + '/' + $scope.searchurl).then(
                function successCallback(res) {
                    console.log('Url búsqueda: ' + $scope.searchurl);
                    $scope.olivedata = res.data;
                    var notify = $.notify(
                        {
                            title: '<strong>¡Ok!</strong>',
                            message: 'Datos de la búsqueda obtenidos correctamente'
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
                                    message: 'Parecen no existir datos con esas características'
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
        };

        $scope.navbarsearch = function() {
            $http.get(url + '/' + $scope.searchurl).then(
                function successCallback(res) {
                    console.log('Url búsqueda: ' + $scope.searchurl);
                    $scope.olivedata = res.data;
                    var notify = $.notify(
                        {
                            title: '<strong>¡Ok!</strong>',
                            message: 'Datos de la búsqueda obtenidos correctamente'
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
                                    message: 'Parecen no existir datos con esas características'
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
        };

        /*------------------------------Back to TOP and BOTTOM buttons---------------------------*/

        $(document).ready(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 50) {
                    $('#back-to-top').fadeIn();
                } else {
                    $('#back-to-top').fadeOut();
                }
            });
            // scroll body to 0px on click
            $('#back-to-top').click(function() {
                $('body,html').animate(
                    {
                        scrollTop: 0
                    },
                    400
                );
                return false;
            });
        });

        $(document).ready(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 50) {
                    $('#back-to-bottom').fadeIn();
                } else {
                    $('#back-to-bottom').fadeOut();
                }
            });
            // scroll body to 0px on click
            $('#back-to-bottom').click(function() {
                $('html, body').animate({ scrollTop: $(document).height() }, 'slow');
                return false;
            });
        });

        /*------------------------------Export data to Excel---------------------------*/

        // JSON to CSV Converter
        function ConvertToCSV(objArray) {
            var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
            var str = 'DIA; MES;ANYO;KGSACEITUNA;RDTO;HUMEDAD;ACIDEZ;TICKET\r\n';

            for (var i = 0; i < array.length; i++) {
                var line = '';
                for (var index in array[i]) {
                    if (line != '') line += ';';

                    line += array[i][index];
                }
                str += line + '\r\n';
            }

            return str;
        }

        $scope.excel = function() {
            var datatoexport;
            $http.get(url).then(
                function successCallback(res) {
                    console.log('Getting ' + url);
                    datatoexport = res.data;
                    var exceldone ='data:text/csv;charset=utf-8,' + ConvertToCSV(JSON.stringify(datatoexport));
                    var encodedUri = encodeURI(exceldone);
                    var link = document.createElement('a');
                    link.setAttribute('href', encodedUri);
                    link.setAttribute('download', 'olive_data.csv');
                    document.body.appendChild(link); // Required for FF

                    link.click();
                    var notify = $.notify('<strong>Espere</strong> Descargando archivo Excel...', {
                        offset: 60,
                        animate: {
                            enter: 'animated fadeInRight',
                            exit: 'animated fadeOutRight'
                        },
                        allow_dismiss: false,
                        showProgressbar: true
                    });
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
        };
    }
]);