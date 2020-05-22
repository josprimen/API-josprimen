angular.module('OliveApp').controller('EditCtrl', [
    '$scope',
    '$http',

    function($scope, $http) {
        console.log('Data controller initialized!!');

        
		
		$http.get("https://sos1718-08.herokuapp.com/api/v2/crimes-an/").then(function(response) {

            Highcharts.chart('contenedor', {
            chart: {
                type: 'area'
            },
            title: {
                text: 'Crimes'
            },

            yAxis: {
                title: {
                    text: 'Valor'
                }
            },
            xAxis: {
                categories: response.data.map(function(d) {return d.year + " " + d.province + " " + d.gender})
            },
            tooltip: {
                pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
            },
            plotOptions: {
                area: {
                    //pointStart: 1940,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                    name: 'OneCrime',
                    data: response.data.map(function(d) { return d.onecrime })
                },
                {
                    name: 'TwoCrime',
                    data: response.data.map(function(d) { return d.twocrime })
                },
                {
                    name: 'ThreeCrime',
                    data: response.data.map(function(d) { return d.threecrime })
                },
                {
                    name: 'MoreThreeCrime',
                    data: response.data.map(function(d) { return d.morethreecrime })
                }
            ]
            });

            });
		
		
		
    }
]);