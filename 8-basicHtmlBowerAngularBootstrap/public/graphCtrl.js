angular.module('OliveApp').controller('GraphCtrl', [
    '$scope',
    '$http',

    function($scope, $http) {
        console.log('Graph controller initialized!!');
        var url = '/josprimenapi/v1/olive';

        function weightedTimeSerie(data) {
            var dataset = data;
            let average_data = [];
			let datedata = [];
            //var years = [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030];
            var years = [2014, 2015, 2016, 2017, 2018, 2019, 2020];
            var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            var days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
            console.log('ha entrado');
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
                        console.log('TT: ' + JSON.stringify(tt));
                        if (tt.length != 0) {
                            var ttt = tt.reduce((ac, n) => {
                                return ac + Number(n.RDTO);
                            }, 0);
                            console.log('TTT: ' + ttt);
							console.log("Número de objetos: " + tt.length);
							console.log("Media: " + ttt/tt.length);
                            average_data.unshift(ttt/tt.length);
							datedata.unshift(tt[0].DIA+"/"+tt[0].MES+"/"+tt[0].ANYO)
                        }
                    }
                }
            }
            console.log('DATOS: ' + average_data);
			console.log("Fechas: " + datedata);
            return [average_data, datedata];
        }

        $http.get(url).then(
            function successCallback(res) {
                var data = weightedTimeSerie(res.data)[0];
				var datadate = weightedTimeSerie(res.data)[1];
                //var data = res.data.map(function(d){return d.RDTO});
                Highcharts.chart('container', {
                    chart: {
                        zoomType: 'x'
                    },
                    title: {
                        text: 'Rendimiento de los albaranes a lo largo del tiempo'
                    },
                    subtitle: {
                        text:
                            document.ontouchstart === undefined
                                ? 'Click and drag in the plot area to zoom in'
                                : 'Pinch the chart to zoom in'
                    },
                    xAxis: {
                        type: 'datetime',
						categories: datadate
                    },
                    yAxis: {
                        title: {
                            text: 'Exchange rate'
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        area: {
                            fillColor: {
                                linearGradient: {
                                    x1: 0,
                                    y1: 0,
                                    x2: 0,
                                    y2: 1
                                },
                                stops: [
                                    [0, Highcharts.getOptions().colors[0]],
                                    [
                                        1,
                                        Highcharts.color(Highcharts.getOptions().colors[0])
                                            .setOpacity(0)
                                            .get('rgba')
                                    ]
                                ]
                            },
                            marker: {
                                radius: 2
                            },
                            lineWidth: 1,
                            states: {
                                hover: {
                                    lineWidth: 1
                                }
                            },
                            threshold: null
                        }
                    },

                    series: [
                        {
                            type: 'area',
                            name: 'Weigthed average RDTO',
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
    }
]);