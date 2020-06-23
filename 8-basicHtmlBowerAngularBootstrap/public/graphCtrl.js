angular.module('OliveApp').controller('GraphCtrl', [
    '$scope',
    '$http',

    function($scope, $http) {
        console.log('Graph controller initialized!!');
        var url = '/josprimenapi/v1/olive';

        /*#GE------------------------------Charging notify---------------------------*/

        var notify = $.notify('<strong>Espere un momento: </strong> Procesando la gráficas...', {
            offset: 60,
            animate: {
                enter: 'animated fadeInRight',
                exit: 'animated fadeOutRight'
            },
            allow_dismiss: false,
            showProgressbar: true,
            delay: 15000
        });

        /*#GE------------------------------Performance Function---------------------------*/

        function weightedTimeSerie(data) {
            var dataset = data;
            let average_data = [];
            let datedata = [];
            var years = [
                2014,
                2015,
                2016,
                2017,
                2018,
                2019,
                2020,
                2021,
                2022,
                2023,
                2024,
                2025,
                2026,
                2027,
                2028,
                2029,
                2030
            ];
            var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            var days = [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31
            ];
            for (index_year in years) {
                for (index_month in months) {
                    for (index_day in days) {
                        let average_day = 0;
                        let delivery_note_number = 0;
                        var tt = dataset.filter(
                            n =>
                                years[index_year] == n.ANYO &&
                                months[index_month] == n.MES &&
                                days[index_day] == n.DIA
                        );
                        //console.log('TT: ' + JSON.stringify(tt));
                        if (tt.length != 0) {
                            var ttt = tt.reduce((ac, n) => {
                                return ac + Number(n.RDTO);
                            }, 0);
                            //console.log('TTT: ' + ttt);
                            //console.log("Número de objetos: " + tt.length);
                            //console.log("Media: " + (ttt/tt.length).toFixed(2));
                            average_data.unshift(Number((ttt / tt.length).toFixed(2))); //toFixed for limit decimal returns a string
                            datedata.unshift(tt[0].DIA + '/' + tt[0].MES + '/' + tt[0].ANYO);
                        }
                    }
                }
            }
            //console.log('DATOS: ' + average_data);
            //console.log("Fechas: " + datedata);
            return [average_data, datedata];
        }

        /*#GE------------------------------Performance Graph---------------------------*/

        $http.get(url).then(
            function successCallback(res) {
                var data = weightedTimeSerie(res.data)[0];
                var datadate = weightedTimeSerie(res.data)[1];
                //var data = res.data.map(function(d){return d.RDTO});
                Highcharts.chart('graph1', {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [[0, '#2a2a2b'], [1, '#3e3e40']]
                        },
                        style: {
                            fontFamily: "'Unica One', sans-serif"
                        },
                        plotBorderColor: '#606063',
                        zoomType: 'x'
                    },
                    title: {
                        style: {
                            color: '#E0E0E3',
                            textTransform: 'uppercase',
                            fontSize: '20px'
                        },
                        text: 'Rendimiento de los albaranes a lo largo del tiempo'
                    },
                    subtitle: {
                        style: {
                            color: '#E0E0E3',
                            textTransform: 'uppercase'
                        },
                        text:
                            document.ontouchstart === undefined
                                ? 'Haga clic y arrastre en el área de trazado para acercar'
                                : 'Pellizca el gráfico para acercar'
                    },
                    xAxis: {
                        gridLineColor: '#707073',
                        labels: {
                            style: {
                                color: '#E0E0E3'
                            }
                        },
                        lineColor: '#707073',
                        minorGridLineColor: '#505053',
                        tickColor: '#707073',
                        title: {
                            style: {
                                color: '#A0A0A3'
                            }
                        },
                        type: 'datetime',
                        categories: datadate
                    },
                    yAxis: {
                        gridLineColor: '#707073',
                        labels: {
                            style: {
                                color: '#E0E0E3'
                            }
                        },
                        lineColor: '#707073',
                        minorGridLineColor: '#505053',
                        tickColor: '#707073',
                        tickWidth: 1,
                        title: {
                            style: {
                                color: '#A0A0A3'
                            },
                            text: 'Rendimiento %'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                        style: {
                            color: '#F0F0F0'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        area: {
                            series: {
                                dataLabels: {
                                    color: '#F0F0F3',
                                    style: {
                                        fontSize: '13px'
                                    }
                                },
                                marker: {
                                    lineColor: '#333'
                                }
                            },
                            boxplot: {
                                fillColor: '#505053'
                            },
                            candlestick: {
                                lineColor: 'white'
                            },
                            errorbar: {
                                color: 'white'
                            },

                            lineWidth: 2,
                            states: {
                                hover: {
                                    lineWidth: 1
                                }
                            },
                            threshold: null
                        }
                    },

                    legend: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        itemStyle: {
                            color: '#E0E0E3'
                        },
                        itemHoverStyle: {
                            color: '#FFF'
                        },
                        itemHiddenStyle: {
                            color: '#606063'
                        },
                        title: {
                            style: {
                                color: '#C0C0C0'
                            }
                        }
                    },
                    credits: {
                        style: {
                            color: '#666'
                        }
                    },
                    labels: {
                        style: {
                            color: '#707073'
                        }
                    },
                    drilldown: {
                        activeAxisLabelStyle: {
                            color: '#F0F0F3'
                        },
                        activeDataLabelStyle: {
                            color: '#F0F0F3'
                        }
                    },
                    navigation: {
                        buttonOptions: {
                            symbolStroke: '#DDDDDD',
                            theme: {
                                fill: '#505053'
                            }
                        }
                    },
                    // scroll charts
                    rangeSelector: {
                        buttonTheme: {
                            fill: '#505053',
                            stroke: '#000000',
                            style: {
                                color: '#CCC'
                            },
                            states: {
                                hover: {
                                    fill: '#707073',
                                    stroke: '#000000',
                                    style: {
                                        color: 'white'
                                    }
                                },
                                select: {
                                    fill: '#000003',
                                    stroke: '#000000',
                                    style: {
                                        color: 'white'
                                    }
                                }
                            }
                        },
                        inputBoxBorderColor: '#505053',
                        inputStyle: {
                            backgroundColor: '#333',
                            color: 'silver'
                        },
                        labelStyle: {
                            color: 'silver'
                        }
                    },
                    navigator: {
                        handles: {
                            backgroundColor: '#666',
                            borderColor: '#AAA'
                        },
                        outlineColor: '#CCC',
                        maskFill: 'rgba(255,255,255,0.1)',
                        series: {
                            color: '#7798BF',
                            lineColor: '#A6C7ED'
                        },
                        xAxis: {
                            gridLineColor: '#505053'
                        }
                    },
                    scrollbar: {
                        barBackgroundColor: '#808083',
                        barBorderColor: '#808083',
                        buttonArrowColor: '#CCC',
                        buttonBackgroundColor: '#606063',
                        buttonBorderColor: '#606063',
                        rifleColor: '#FFF',
                        trackBackgroundColor: '#404043',
                        trackBorderColor: '#404043'
                    },

                    series: [
                        {
                            type: 'area',
                            name: 'Media Ponderada Rendimiento%',
                            data: data
                        }
                    ]
                });
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

        /*#GE------------------------------Acidity Function---------------------------*/

        function weightedTimeSerieAcidity(data) {
            var dataset = data;
            let average_data = [];
            let datedata = [];
            var years = [
                2014,
                2015,
                2016,
                2017,
                2018,
                2019,
                2020,
                2021,
                2022,
                2023,
                2024,
                2025,
                2026,
                2027,
                2028,
                2029,
                2030
            ];
            var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            var days = [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31
            ];
            for (index_year in years) {
                for (index_month in months) {
                    for (index_day in days) {
                        let average_day = 0;
                        let delivery_note_number = 0;
                        var tt = dataset.filter(
                            n =>
                                years[index_year] == n.ANYO &&
                                months[index_month] == n.MES &&
                                days[index_day] == n.DIA
                        );
                        //console.log('TT: ' + JSON.stringify(tt));
                        if (tt.length != 0) {
                            var ttt = tt.reduce((ac, n) => {
                                return ac + Number(n.ACIDEZ);
                            }, 0);
                            //console.log('TTT: ' + ttt);
                            //console.log("Número de objetos: " + tt.length);
                            //console.log("Media: " + (ttt/tt.length).toFixed(2));
                            average_data.unshift(Number((ttt / tt.length).toFixed(2))); //toFixed for limit decimal returns a string
                            datedata.unshift(tt[0].DIA + '/' + tt[0].MES + '/' + tt[0].ANYO);
                        }
                    }
                }
            }
            //console.log('DATOS: ' + average_data);
            //console.log("Fechas: " + datedata);
            return [average_data, datedata];
        }

        /*#GE------------------------------Acidity Graph---------------------------*/

        $http.get(url).then(
            function successCallback(res) {
                var data = weightedTimeSerieAcidity(res.data)[0];
                var datadate = weightedTimeSerieAcidity(res.data)[1];
                Highcharts.chart('graph2', {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [[0, '#2a2a2b'], [1, '#3e3e40']]
                        },
                        style: {
                            fontFamily: "'Unica One', sans-serif"
                        },
                        plotBorderColor: '#606063',
                        zoomType: 'x'
                    },
                    title: {
                        style: {
                            color: '#E0E0E3',
                            textTransform: 'uppercase',
                            fontSize: '20px'
                        },
                        text: 'Acidez de los albaranes a lo largo del tiempo'
                    },
                    subtitle: {
                        style: {
                            color: '#E0E0E3',
                            textTransform: 'uppercase'
                        },
                        text:
                            document.ontouchstart === undefined
                                ? 'Haga clic y arrastre en el área de trazado para acercar'
                                : 'Pellizca el gráfico para acercar'
                    },
                    xAxis: {
                        gridLineColor: '#707073',
                        labels: {
                            style: {
                                color: '#E0E0E3'
                            }
                        },
                        lineColor: '#707073',
                        minorGridLineColor: '#505053',
                        tickColor: '#707073',
                        title: {
                            style: {
                                color: '#A0A0A3'
                            }
                        },
                        type: 'datetime',
                        categories: datadate
                    },
                    yAxis: {
                        gridLineColor: '#707073',
                        labels: {
                            style: {
                                color: '#E0E0E3'
                            }
                        },
                        lineColor: '#707073',
                        minorGridLineColor: '#505053',
                        tickColor: '#707073',
                        tickWidth: 1,
                        title: {
                            style: {
                                color: '#A0A0A3'
                            },
                            text: 'Acidez %'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                        style: {
                            color: '#F0F0F0'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        area: {
                            series: {
                                dataLabels: {
                                    color: '#F0F0F3',
                                    style: {
                                        fontSize: '13px'
                                    }
                                },
                                marker: {
                                    lineColor: '#333'
                                }
                            },
                            boxplot: {
                                fillColor: '#505053'
                            },
                            candlestick: {
                                lineColor: 'white'
                            },
                            errorbar: {
                                color: 'white'
                            },

                            lineWidth: 2,
                            states: {
                                hover: {
                                    lineWidth: 1
                                }
                            },
                            threshold: null
                        }
                    },

                    legend: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        itemStyle: {
                            color: '#E0E0E3'
                        },
                        itemHoverStyle: {
                            color: '#FFF'
                        },
                        itemHiddenStyle: {
                            color: '#606063'
                        },
                        title: {
                            style: {
                                color: '#C0C0C0'
                            }
                        }
                    },
                    credits: {
                        style: {
                            color: '#666'
                        }
                    },
                    labels: {
                        style: {
                            color: '#707073'
                        }
                    },
                    drilldown: {
                        activeAxisLabelStyle: {
                            color: '#F0F0F3'
                        },
                        activeDataLabelStyle: {
                            color: '#F0F0F3'
                        }
                    },
                    navigation: {
                        buttonOptions: {
                            symbolStroke: '#DDDDDD',
                            theme: {
                                fill: '#505053'
                            }
                        }
                    },
                    // scroll charts
                    rangeSelector: {
                        buttonTheme: {
                            fill: '#505053',
                            stroke: '#000000',
                            style: {
                                color: '#CCC'
                            },
                            states: {
                                hover: {
                                    fill: '#707073',
                                    stroke: '#000000',
                                    style: {
                                        color: 'white'
                                    }
                                },
                                select: {
                                    fill: '#000003',
                                    stroke: '#000000',
                                    style: {
                                        color: 'white'
                                    }
                                }
                            }
                        },
                        inputBoxBorderColor: '#505053',
                        inputStyle: {
                            backgroundColor: '#333',
                            color: 'silver'
                        },
                        labelStyle: {
                            color: 'silver'
                        }
                    },
                    navigator: {
                        handles: {
                            backgroundColor: '#666',
                            borderColor: '#AAA'
                        },
                        outlineColor: '#CCC',
                        maskFill: 'rgba(255,255,255,0.1)',
                        series: {
                            color: '#7798BF',
                            lineColor: '#A6C7ED'
                        },
                        xAxis: {
                            gridLineColor: '#505053'
                        }
                    },
                    scrollbar: {
                        barBackgroundColor: '#808083',
                        barBorderColor: '#808083',
                        buttonArrowColor: '#CCC',
                        buttonBackgroundColor: '#606063',
                        buttonBorderColor: '#606063',
                        rifleColor: '#FFF',
                        trackBackgroundColor: '#404043',
                        trackBorderColor: '#404043'
                    },

                    series: [
                        {
                            type: 'area',
                            name: 'Media Ponderada Acidez%',
                            data: data
                        }
                    ]
                });
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

        /*#GE------------------------------Humidity Function---------------------------*/

        function weightedTimeSerieHumidity(data) {
            var dataset = data;
            let average_data = [];
            let datedata = [];
            var years = [
                2014,
                2015,
                2016,
                2017,
                2018,
                2019,
                2020,
                2021,
                2022,
                2023,
                2024,
                2025,
                2026,
                2027,
                2028,
                2029,
                2030
            ];
            var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            var days = [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31
            ];
            for (index_year in years) {
                for (index_month in months) {
                    for (index_day in days) {
                        let average_day = 0;
                        let delivery_note_number = 0;
                        var tt = dataset.filter(
                            n =>
                                years[index_year] == n.ANYO &&
                                months[index_month] == n.MES &&
                                days[index_day] == n.DIA
                        );
                        //console.log('TT: ' + JSON.stringify(tt));
                        if (tt.length != 0) {
                            var ttt = tt.reduce((ac, n) => {
                                return ac + Number(n.HUMEDAD);
                            }, 0);
                            //console.log('TTT: ' + ttt);
                            //console.log("Número de objetos: " + tt.length);
                            //console.log("Media: " + (ttt/tt.length).toFixed(2));
                            average_data.unshift(Number((ttt / tt.length).toFixed(2))); //toFixed for limit decimal returns a string
                            datedata.unshift(tt[0].DIA + '/' + tt[0].MES + '/' + tt[0].ANYO);
                        }
                    }
                }
            }
            //console.log('DATOS: ' + average_data);
            //console.log("Fechas: " + datedata);
            return [average_data, datedata];
        }

        /*#GE------------------------------Humidity Graph---------------------------*/

        $http.get(url).then(
            function successCallback(res) {
                var data = weightedTimeSerieHumidity(res.data)[0];
                var datadate = weightedTimeSerieHumidity(res.data)[1];
                Highcharts.chart('graph3', {
                    chart: {
                        backgroundColor: {
                            linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                            stops: [[0, '#2a2a2b'], [1, '#3e3e40']]
                        },
                        style: {
                            fontFamily: "'Unica One', sans-serif"
                        },
                        plotBorderColor: '#606063',
                        zoomType: 'x'
                    },
                    title: {
                        style: {
                            color: '#E0E0E3',
                            textTransform: 'uppercase',
                            fontSize: '20px'
                        },
                        text: 'Humedad de los albaranes a lo largo del tiempo'
                    },
                    subtitle: {
                        style: {
                            color: '#E0E0E3',
                            textTransform: 'uppercase'
                        },
                        text:
                            document.ontouchstart === undefined
                                ? 'Haga clic y arrastre en el área de trazado para acercar'
                                : 'Pellizca el gráfico para acercar'
                    },
                    xAxis: {
                        gridLineColor: '#707073',
                        labels: {
                            style: {
                                color: '#E0E0E3'
                            }
                        },
                        lineColor: '#707073',
                        minorGridLineColor: '#505053',
                        tickColor: '#707073',
                        title: {
                            style: {
                                color: '#A0A0A3'
                            }
                        },
                        type: 'datetime',
                        categories: datadate
                    },
                    yAxis: {
                        gridLineColor: '#707073',
                        labels: {
                            style: {
                                color: '#E0E0E3'
                            }
                        },
                        lineColor: '#707073',
                        minorGridLineColor: '#505053',
                        tickColor: '#707073',
                        tickWidth: 1,
                        title: {
                            style: {
                                color: '#A0A0A3'
                            },
                            text: 'Humedad %'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                        style: {
                            color: '#F0F0F0'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        area: {
                            series: {
                                dataLabels: {
                                    color: '#F0F0F3',
                                    style: {
                                        fontSize: '13px'
                                    }
                                },
                                marker: {
                                    lineColor: '#333'
                                }
                            },
                            boxplot: {
                                fillColor: '#505053'
                            },
                            candlestick: {
                                lineColor: 'white'
                            },
                            errorbar: {
                                color: 'white'
                            },

                            lineWidth: 2,
                            states: {
                                hover: {
                                    lineWidth: 1
                                }
                            },
                            threshold: null
                        }
                    },

                    legend: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        itemStyle: {
                            color: '#E0E0E3'
                        },
                        itemHoverStyle: {
                            color: '#FFF'
                        },
                        itemHiddenStyle: {
                            color: '#606063'
                        },
                        title: {
                            style: {
                                color: '#C0C0C0'
                            }
                        }
                    },
                    credits: {
                        style: {
                            color: '#666'
                        }
                    },
                    labels: {
                        style: {
                            color: '#707073'
                        }
                    },
                    drilldown: {
                        activeAxisLabelStyle: {
                            color: '#F0F0F3'
                        },
                        activeDataLabelStyle: {
                            color: '#F0F0F3'
                        }
                    },
                    navigation: {
                        buttonOptions: {
                            symbolStroke: '#DDDDDD',
                            theme: {
                                fill: '#505053'
                            }
                        }
                    },
                    // scroll charts
                    rangeSelector: {
                        buttonTheme: {
                            fill: '#505053',
                            stroke: '#000000',
                            style: {
                                color: '#CCC'
                            },
                            states: {
                                hover: {
                                    fill: '#707073',
                                    stroke: '#000000',
                                    style: {
                                        color: 'white'
                                    }
                                },
                                select: {
                                    fill: '#000003',
                                    stroke: '#000000',
                                    style: {
                                        color: 'white'
                                    }
                                }
                            }
                        },
                        inputBoxBorderColor: '#505053',
                        inputStyle: {
                            backgroundColor: '#333',
                            color: 'silver'
                        },
                        labelStyle: {
                            color: 'silver'
                        }
                    },
                    navigator: {
                        handles: {
                            backgroundColor: '#666',
                            borderColor: '#AAA'
                        },
                        outlineColor: '#CCC',
                        maskFill: 'rgba(255,255,255,0.1)',
                        series: {
                            color: '#7798BF',
                            lineColor: '#A6C7ED'
                        },
                        xAxis: {
                            gridLineColor: '#505053'
                        }
                    },
                    scrollbar: {
                        barBackgroundColor: '#808083',
                        barBorderColor: '#808083',
                        buttonArrowColor: '#CCC',
                        buttonBackgroundColor: '#606063',
                        buttonBorderColor: '#606063',
                        rifleColor: '#FFF',
                        trackBackgroundColor: '#404043',
                        trackBorderColor: '#404043'
                    },

                    series: [
                        {
                            type: 'area',
                            name: 'Media Ponderada Humedad%',
                            data: data
                        }
                    ]
                });
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
		
		
		$scope.notifyclose = function(){notify.close()};
		
		
    }
]);