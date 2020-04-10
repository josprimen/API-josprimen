console.log('Data Module');

/*module.exports = function(){
console.log("My test module in a function");	
}*/

var object = {};
object.console = function() {
    console.log('Module object test');
};

object.data = [
	
    {
        DIA: '21',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2095.0',
        RDTO: '19.78',
        HUMEDAD: '50.62',
        ACIDEZ: '0.13',
        TICKET: '2'
    },
    {
        DIA: '22',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '396.0',
        RDTO: '22.43',
        HUMEDAD: '46.71',
        ACIDEZ: '0.25',
        TICKET: '3'
    },
    {
        DIA: '21',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '119.0',
        RDTO: '12.77',
        HUMEDAD: '66.7',
        ACIDEZ: '0.2',
        TICKET: '1'
    },
    {
        DIA: '23',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '4528.0',
        RDTO: '20.62',
        HUMEDAD: '55.3',
        ACIDEZ: '0.25',
        TICKET: '8'
    },
    {
        DIA: '23',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '430.0',
        RDTO: '22.26',
        HUMEDAD: '47.91',
        ACIDEZ: '0.12',
        TICKET: '9'
    },
    {
        DIA: '24',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '473.0',
        RDTO: '22.61',
        HUMEDAD: '48.17',
        ACIDEZ: '0.19',
        TICKET: '18'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '640.0',
        RDTO: '20.38',
        HUMEDAD: '53.67',
        ACIDEZ: '0.25',
        TICKET: '28'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '945.0',
        RDTO: '15.75',
        HUMEDAD: '54.14',
        ACIDEZ: '0.21',
        TICKET: '29'
    },
    {
        DIA: '22',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '481.0',
        RDTO: '18.99',
        HUMEDAD: '51.76',
        ACIDEZ: '0.15',
        TICKET: '4'
    },
    {
        DIA: '22',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '172.0',
        RDTO: '15.84',
        HUMEDAD: '61.33',
        ACIDEZ: '0.22',
        TICKET: '5'
    },
    {
        DIA: '22',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '483.0',
        RDTO: '22.25',
        HUMEDAD: '46.22',
        ACIDEZ: '0.12',
        TICKET: '6'
    },
    {
        DIA: '22',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '3211.0',
        RDTO: '20.95',
        HUMEDAD: '51.52',
        ACIDEZ: '0.03',
        TICKET: '7'
    },
    {
        DIA: '23',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2067.0',
        RDTO: '17.67',
        HUMEDAD: '48.04',
        ACIDEZ: '0.08',
        TICKET: '10'
    },
    {
        DIA: '23',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '22.0',
        RDTO: '16.8',
        HUMEDAD: '52.37',
        ACIDEZ: '0.19',
        TICKET: '11'
    },
    {
        DIA: '23',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '671.0',
        RDTO: '23.14',
        HUMEDAD: '47.9',
        ACIDEZ: '0.22',
        TICKET: '12'
    },
    {
        DIA: '23',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '1362.0',
        RDTO: '22.65',
        HUMEDAD: '50.38',
        ACIDEZ: '0.22',
        TICKET: '13'
    },
    {
        DIA: '23',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '572.0',
        RDTO: '22.0',
        HUMEDAD: '48.9',
        ACIDEZ: '0.19',
        TICKET: '14'
    },
    {
        DIA: '23',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2351.0',
        RDTO: '19.06',
        HUMEDAD: '52.35',
        ACIDEZ: '0.22',
        TICKET: '15'
    },
    {
        DIA: '23',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '3333.0',
        RDTO: '20.92',
        HUMEDAD: '50.91',
        ACIDEZ: '0.12',
        TICKET: '16'
    },
    {
        DIA: '23',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2750.0',
        RDTO: '18.71',
        HUMEDAD: '57.87',
        ACIDEZ: '0.19',
        TICKET: '17'
    },
    {
        DIA: '24',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '521.0',
        RDTO: '15.0',
        HUMEDAD: '53.74',
        ACIDEZ: '0.22',
        TICKET: '19'
    },
    {
        DIA: '24',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2006.0',
        RDTO: '17.11',
        HUMEDAD: '49.49',
        ACIDEZ: '0.14',
        TICKET: '20'
    },
    {
        DIA: '24',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '609.0',
        RDTO: '25.13',
        HUMEDAD: '44.11',
        ACIDEZ: '0.23',
        TICKET: '21'
    },
    {
        DIA: '24',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '1593.0',
        RDTO: '21.83',
        HUMEDAD: '48.48',
        ACIDEZ: '0.18',
        TICKET: '22'
    },
    {
        DIA: '24',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '690.0',
        RDTO: '19.7',
        HUMEDAD: '51.61',
        ACIDEZ: '0.25',
        TICKET: '23'
    },
    {
        DIA: '24',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2935.0',
        RDTO: '19.93',
        HUMEDAD: '51.93',
        ACIDEZ: '0.19',
        TICKET: '24'
    },
    {
        DIA: '24',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '857.0',
        RDTO: '20.7',
        HUMEDAD: '46.93',
        ACIDEZ: '0.11',
        TICKET: '25'
    },
    {
        DIA: '24',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '4038.0',
        RDTO: '19.77',
        HUMEDAD: '52.88',
        ACIDEZ: '0.05',
        TICKET: '26'
    },
    {
        DIA: '24',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '3958.0',
        RDTO: '18.99',
        HUMEDAD: '58.57',
        ACIDEZ: '0.23',
        TICKET: '27'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2251.0',
        RDTO: '17.68',
        HUMEDAD: '51.83',
        ACIDEZ: '0.21',
        TICKET: '30'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '1258.0',
        RDTO: '17.8',
        HUMEDAD: '52.38',
        ACIDEZ: '0.21',
        TICKET: '31'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '386.0',
        RDTO: '15.8',
        HUMEDAD: '61.42',
        ACIDEZ: '0.19',
        TICKET: '32'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '672.0',
        RDTO: '20.78',
        HUMEDAD: '50.95',
        ACIDEZ: '0.16',
        TICKET: '33'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '787.0',
        RDTO: '24.07',
        HUMEDAD: '47.29',
        ACIDEZ: '0.24',
        TICKET: '34'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2011.0',
        RDTO: '22.95',
        HUMEDAD: '50.33',
        ACIDEZ: '0.24',
        TICKET: '35'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '1725.0',
        RDTO: '23.4',
        HUMEDAD: '46.43',
        ACIDEZ: '0.26',
        TICKET: '36'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '3371.0',
        RDTO: '18.8',
        HUMEDAD: '58.88',
        ACIDEZ: '0.32',
        TICKET: '37'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '1310.0',
        RDTO: '15.72',
        HUMEDAD: '58.7',
        ACIDEZ: '0.23',
        TICKET: '38'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '1518.0',
        RDTO: '19.91',
        HUMEDAD: '52.52',
        ACIDEZ: '0.29',
        TICKET: '39'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '3758.0',
        RDTO: '20.82',
        HUMEDAD: '52.4',
        ACIDEZ: '0.15',
        TICKET: '40'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '652.0',
        RDTO: '20.59',
        HUMEDAD: '50.17',
        ACIDEZ: '0.32',
        TICKET: '41'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2474.0',
        RDTO: '16.13',
        HUMEDAD: '57.54',
        ACIDEZ: '0.21',
        TICKET: '42'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '773.0',
        RDTO: '17.38',
        HUMEDAD: '46.72',
        ACIDEZ: '0.13',
        TICKET: '43'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '620.0',
        RDTO: '21.7',
        HUMEDAD: '49.15',
        ACIDEZ: '0.2',
        TICKET: '46'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '486.0',
        RDTO: '24.24',
        HUMEDAD: '45.35',
        ACIDEZ: '0.21',
        TICKET: '44'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '3745.0',
        RDTO: '17.76',
        HUMEDAD: '54.19',
        ACIDEZ: '0.19',
        TICKET: '45'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2834.0',
        RDTO: '21.55',
        HUMEDAD: '52.17',
        ACIDEZ: '0.28',
        TICKET: '47'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '4144.0',
        RDTO: '19.14',
        HUMEDAD: '56.35',
        ACIDEZ: '0.24',
        TICKET: '48'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '665.0',
        RDTO: '19.35',
        HUMEDAD: '43.81',
        ACIDEZ: '0.08',
        TICKET: '49'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '596.0',
        RDTO: '20.21',
        HUMEDAD: '52.34',
        ACIDEZ: '0.18',
        TICKET: '50'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '491.0',
        RDTO: '12.35',
        HUMEDAD: '56.0',
        ACIDEZ: '0.21',
        TICKET: '51'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '1018.0',
        RDTO: '19.6',
        HUMEDAD: '52.28',
        ACIDEZ: '0.27',
        TICKET: '52'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2684.0',
        RDTO: '18.27',
        HUMEDAD: '51.69',
        ACIDEZ: '0.18',
        TICKET: '53'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '447.0',
        RDTO: '20.13',
        HUMEDAD: '54.06',
        ACIDEZ: '0.27',
        TICKET: '54'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '389.0',
        RDTO: '19.24',
        HUMEDAD: '55.87',
        ACIDEZ: '0.3',
        TICKET: '55'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '3670.0',
        RDTO: '17.6',
        HUMEDAD: '55.43',
        ACIDEZ: '0.21',
        TICKET: '56'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '1944.0',
        RDTO: '23.3',
        HUMEDAD: '48.6',
        ACIDEZ: '0.21',
        TICKET: '57'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '738.0',
        RDTO: '21.1',
        HUMEDAD: '48.4',
        ACIDEZ: '0.34',
        TICKET: '58'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '682.0',
        RDTO: '19.8',
        HUMEDAD: '49.51',
        ACIDEZ: '0.16',
        TICKET: '59'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2305.0',
        RDTO: '20.93',
        HUMEDAD: '52.43',
        ACIDEZ: '0.2',
        TICKET: '60'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2989.0',
        RDTO: '18.57',
        HUMEDAD: '49.41',
        ACIDEZ: '0.1',
        TICKET: '61'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2333.0',
        RDTO: '23.27',
        HUMEDAD: '48.4',
        ACIDEZ: '0.18',
        TICKET: '62'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2421.0',
        RDTO: '19.85',
        HUMEDAD: '54.57',
        ACIDEZ: '0.31',
        TICKET: '63'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '788.0',
        RDTO: '19.63',
        HUMEDAD: '53.95',
        ACIDEZ: '0.19',
        TICKET: '64'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '526.0',
        RDTO: '19.29',
        HUMEDAD: '52.33',
        ACIDEZ: '0.23',
        TICKET: '65'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2659.0',
        RDTO: '20.1',
        HUMEDAD: '51.61',
        ACIDEZ: '0.16',
        TICKET: '66'
    },
    {
        DIA: '30',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2546.0',
        RDTO: '19.3',
        HUMEDAD: '50.0',
        ACIDEZ: '0.22',
        TICKET: '70'
    },
    {
        DIA: '30',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '1388.0',
        RDTO: '22.53',
        HUMEDAD: '47.56',
        ACIDEZ: '0.2',
        TICKET: '71'
    },
    {
        DIA: '30',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '3792.0',
        RDTO: '20.35',
        HUMEDAD: '54.83',
        ACIDEZ: '0.25',
        TICKET: '72'
    },
    {
        DIA: '30',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '451.0',
        RDTO: '15.29',
        HUMEDAD: '61.47',
        ACIDEZ: '0.2',
        TICKET: '73'
    },
    {
        DIA: '30',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '437.0',
        RDTO: '16.43',
        HUMEDAD: '59.22',
        ACIDEZ: '0.19',
        TICKET: '74'
    },
    {
        DIA: '30',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '3915.0',
        RDTO: '20.73',
        HUMEDAD: '52.98',
        ACIDEZ: '0.25',
        TICKET: '75'
    },
    {
        DIA: '30',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '570.0',
        RDTO: '22.43',
        HUMEDAD: '46.23',
        ACIDEZ: '0.2',
        TICKET: '76'
    },
    {
        DIA: '30',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2628.0',
        RDTO: '20.23',
        HUMEDAD: '47.77',
        ACIDEZ: '0.19',
        TICKET: '77'
    },
    {
        DIA: '30',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '901.0',
        RDTO: '21.03',
        HUMEDAD: '46.93',
        ACIDEZ: '0.38',
        TICKET: '78'
    },
    {
        DIA: '30',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2876.0',
        RDTO: '17.42',
        HUMEDAD: '54.29',
        ACIDEZ: '0.23',
        TICKET: '79'
    },
    {
        DIA: '30',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '1189.0',
        RDTO: '19.39',
        HUMEDAD: '50.26',
        ACIDEZ: '0.32',
        TICKET: '80'
    },
    {
        DIA: '30',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2135.0',
        RDTO: '20.78',
        HUMEDAD: '50.96',
        ACIDEZ: '0.2',
        TICKET: '81'
    },
    {
        DIA: '30',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '1874.0',
        RDTO: '20.27',
        HUMEDAD: '53.46',
        ACIDEZ: '0.33',
        TICKET: '82'
    },
    {
        DIA: '30',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '4487.0',
        RDTO: '20.95',
        HUMEDAD: '51.87',
        ACIDEZ: '0.2',
        TICKET: '83'
    },
    {
        DIA: '30',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '1388.0',
        RDTO: '20.89',
        HUMEDAD: '48.9',
        ACIDEZ: '0.29',
        TICKET: '84'
    },
    {
        DIA: '30',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '3614.0',
        RDTO: '20.05',
        HUMEDAD: '52.81',
        ACIDEZ: '0.17',
        TICKET: '67'
    },
    {
        DIA: '30',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '459.0',
        RDTO: '21.97',
        HUMEDAD: '47.77',
        ACIDEZ: '0.08',
        TICKET: '68'
    },
    {
        DIA: '30',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '406.0',
        RDTO: '14.79',
        HUMEDAD: '55.34',
        ACIDEZ: '0.2',
        TICKET: '69'
    },
    {
        DIA: '30',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '281.0',
        RDTO: '20.99',
        HUMEDAD: '50.14',
        ACIDEZ: '0.39',
        TICKET: '85'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '327.0',
        RDTO: '18.65',
        HUMEDAD: '55.52',
        ACIDEZ: '0.31',
        TICKET: '117'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '957.0',
        RDTO: '18.42',
        HUMEDAD: '53.18',
        ACIDEZ: '0.2',
        TICKET: '118'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '640.0',
        RDTO: '18.6',
        HUMEDAD: '56.68',
        ACIDEZ: '0.2',
        TICKET: '119'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '704.0',
        RDTO: '21.05',
        HUMEDAD: '49.7',
        ACIDEZ: '0.21',
        TICKET: '86'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '364.0',
        RDTO: '19.69',
        HUMEDAD: '49.06',
        ACIDEZ: '0.43',
        TICKET: '87'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '3534.0',
        RDTO: '16.27',
        HUMEDAD: '52.11',
        ACIDEZ: '0.18',
        TICKET: '88'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '1172.0',
        RDTO: '18.17',
        HUMEDAD: '47.86',
        ACIDEZ: '0.25',
        TICKET: '89'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '95.0',
        RDTO: '20.22',
        HUMEDAD: '50.23',
        ACIDEZ: '0.34',
        TICKET: '90'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '504.0',
        RDTO: '22.51',
        HUMEDAD: '46.08',
        ACIDEZ: '0.22',
        TICKET: '91'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '713.0',
        RDTO: '20.36',
        HUMEDAD: '48.65',
        ACIDEZ: '0.2',
        TICKET: '92'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2602.0',
        RDTO: '17.44',
        HUMEDAD: '51.83',
        ACIDEZ: '0.22',
        TICKET: '93'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '434.0',
        RDTO: '16.54',
        HUMEDAD: '58.08',
        ACIDEZ: '0.2',
        TICKET: '94'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '672.0',
        RDTO: '21.58',
        HUMEDAD: '49.89',
        ACIDEZ: '0.3',
        TICKET: '95'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2661.0',
        RDTO: '18.28',
        HUMEDAD: '55.99',
        ACIDEZ: '0.26',
        TICKET: '96'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2213.0',
        RDTO: '19.4',
        HUMEDAD: '49.62',
        ACIDEZ: '0.24',
        TICKET: '97'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '852.0',
        RDTO: '17.78',
        HUMEDAD: '49.92',
        ACIDEZ: '0.19',
        TICKET: '98'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '651.0',
        RDTO: '19.06',
        HUMEDAD: '50.53',
        ACIDEZ: '0.2',
        TICKET: '99'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '794.0',
        RDTO: '19.14',
        HUMEDAD: '52.92',
        ACIDEZ: '0.23',
        TICKET: '100'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '1027.0',
        RDTO: '20.78',
        HUMEDAD: '50.51',
        ACIDEZ: '0.27',
        TICKET: '101'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2988.0',
        RDTO: '18.56',
        HUMEDAD: '50.03',
        ACIDEZ: '0.18',
        TICKET: '102'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '1005.0',
        RDTO: '19.22',
        HUMEDAD: '48.69',
        ACIDEZ: '0.28',
        TICKET: '103'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '745.0',
        RDTO: '21.08',
        HUMEDAD: '49.02',
        ACIDEZ: '0.28',
        TICKET: '104'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '796.0',
        RDTO: '19.56',
        HUMEDAD: '52.69',
        ACIDEZ: '0.23',
        TICKET: '120'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '2174.0',
        RDTO: '20.66',
        HUMEDAD: '49.14',
        ACIDEZ: '0.26',
        TICKET: '105'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '1553.0',
        RDTO: '18.25',
        HUMEDAD: '54.67',
        ACIDEZ: '0.19',
        TICKET: '106'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '248.0',
        RDTO: '19.67',
        HUMEDAD: '52.2',
        ACIDEZ: '0.22',
        TICKET: '107'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '4946.0',
        RDTO: '21.44',
        HUMEDAD: '49.25',
        ACIDEZ: '0.14',
        TICKET: '108'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '671.0',
        RDTO: '20.77',
        HUMEDAD: '49.45',
        ACIDEZ: '0.22',
        TICKET: '109'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2657.0',
        RDTO: '17.42',
        HUMEDAD: '55.21',
        ACIDEZ: '0.23',
        TICKET: '121'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '4434.0',
        RDTO: '19.64',
        HUMEDAD: '50.93',
        ACIDEZ: '0.17',
        TICKET: '110'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '316.0',
        RDTO: '24.14',
        HUMEDAD: '45.72',
        ACIDEZ: '0.22',
        TICKET: '111'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '616.0',
        RDTO: '21.04',
        HUMEDAD: '47.68',
        ACIDEZ: '0.19',
        TICKET: '112'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2015',
        KGSACEITUNA: '934.0',
        RDTO: '18.55',
        HUMEDAD: '54.87',
        ACIDEZ: '0.25',
        TICKET: '113'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '324.0',
        RDTO: '19.97',
        HUMEDAD: '51.87',
        ACIDEZ: '0.21',
        TICKET: '114'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '417.0',
        RDTO: '18.1',
        HUMEDAD: '55.41',
        ACIDEZ: '0.26',
        TICKET: '115'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4391.0',
        RDTO: '21.48',
        HUMEDAD: '48.09',
        ACIDEZ: '0.29',
        TICKET: '116'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '548.0',
        RDTO: '19.59',
        HUMEDAD: '53.29',
        ACIDEZ: '0.25',
        TICKET: '122'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1126.0',
        RDTO: '17.95',
        HUMEDAD: '52.12',
        ACIDEZ: '0.17',
        TICKET: '123'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '826.0',
        RDTO: '21.43',
        HUMEDAD: '51.44',
        ACIDEZ: '0.27',
        TICKET: '124'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '487.0',
        RDTO: '24.25',
        HUMEDAD: '49.69',
        ACIDEZ: '0.21',
        TICKET: '125'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1880.0',
        RDTO: '20.25',
        HUMEDAD: '55.45',
        ACIDEZ: '0.25',
        TICKET: '126'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '73.0',
        RDTO: '20.4',
        HUMEDAD: '53.4',
        ACIDEZ: '0.53',
        TICKET: '127'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '233.0',
        RDTO: '17.97',
        HUMEDAD: '53.88',
        ACIDEZ: '0.23',
        TICKET: '134'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '800.0',
        RDTO: '20.4',
        HUMEDAD: '53.4',
        ACIDEZ: '0.53',
        TICKET: '128'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '121.0',
        RDTO: '20.78',
        HUMEDAD: '53.84',
        ACIDEZ: '0.32',
        TICKET: '135'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3566.0',
        RDTO: '16.5',
        HUMEDAD: '57.18',
        ACIDEZ: '0.23',
        TICKET: '129'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2467.0',
        RDTO: '20.77',
        HUMEDAD: '51.09',
        ACIDEZ: '0.13',
        TICKET: '130'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1122.0',
        RDTO: '17.88',
        HUMEDAD: '60.12',
        ACIDEZ: '0.28',
        TICKET: '131'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '883.0',
        RDTO: '19.44',
        HUMEDAD: '51.95',
        ACIDEZ: '0.22',
        TICKET: '132'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '245.0',
        RDTO: '19.17',
        HUMEDAD: '53.28',
        ACIDEZ: '0.29',
        TICKET: '133'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '705.0',
        RDTO: '20.97',
        HUMEDAD: '50.74',
        ACIDEZ: '0.26',
        TICKET: '136'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3281.0',
        RDTO: '18.74',
        HUMEDAD: '51.84',
        ACIDEZ: '0.23',
        TICKET: '137'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '593.0',
        RDTO: '23.43',
        HUMEDAD: '50.72',
        ACIDEZ: '0.22',
        TICKET: '138'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1128.0',
        RDTO: '18.21',
        HUMEDAD: '55.3',
        ACIDEZ: '0.24',
        TICKET: '139'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '878.0',
        RDTO: '18.26',
        HUMEDAD: '55.1',
        ACIDEZ: '0.24',
        TICKET: '140'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1083.0',
        RDTO: '20.75',
        HUMEDAD: '49.85',
        ACIDEZ: '0.31',
        TICKET: '141'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2742.0',
        RDTO: '19.31',
        HUMEDAD: '52.66',
        ACIDEZ: '0.27',
        TICKET: '142'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1294.0',
        RDTO: '21.26',
        HUMEDAD: '51.85',
        ACIDEZ: '0.23',
        TICKET: '143'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '363.0',
        RDTO: '22.73',
        HUMEDAD: '50.75',
        ACIDEZ: '0.21',
        TICKET: '144'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '313.0',
        RDTO: '21.22',
        HUMEDAD: '50.75',
        ACIDEZ: '0.11',
        TICKET: '145'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '783.0',
        RDTO: '19.88',
        HUMEDAD: '50.23',
        ACIDEZ: '0.16',
        TICKET: '146'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3621.0',
        RDTO: '21.67',
        HUMEDAD: '50.04',
        ACIDEZ: '0.24',
        TICKET: '147'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3470.0',
        RDTO: '17.82',
        HUMEDAD: '55.38',
        ACIDEZ: '0.23',
        TICKET: '148'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1449.0',
        RDTO: '21.88',
        HUMEDAD: '48.99',
        ACIDEZ: '0.19',
        TICKET: '149'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1154.0',
        RDTO: '18.92',
        HUMEDAD: '54.75',
        ACIDEZ: '0.24',
        TICKET: '150'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '361.0',
        RDTO: '22.24',
        HUMEDAD: '47.41',
        ACIDEZ: '0.25',
        TICKET: '151'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5144.0',
        RDTO: '20.03',
        HUMEDAD: '56.14',
        ACIDEZ: '0.23',
        TICKET: '152'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1868.0',
        RDTO: '21.87',
        HUMEDAD: '49.89',
        ACIDEZ: '0.18',
        TICKET: '153'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2007.0',
        RDTO: '20.22',
        HUMEDAD: '52.52',
        ACIDEZ: '0.29',
        TICKET: '154'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '968.0',
        RDTO: '18.56',
        HUMEDAD: '54.94',
        ACIDEZ: '0.27',
        TICKET: '155'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4590.0',
        RDTO: '21.69',
        HUMEDAD: '51.75',
        ACIDEZ: '0.25',
        TICKET: '156'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1147.0',
        RDTO: '21.69',
        HUMEDAD: '51.75',
        ACIDEZ: '0.25',
        TICKET: '157'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3442.0',
        RDTO: '17.63',
        HUMEDAD: '54.99',
        ACIDEZ: '0.53',
        TICKET: '158'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4207.0',
        RDTO: '19.11',
        HUMEDAD: '56.6',
        ACIDEZ: '0.17',
        TICKET: '159'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '927.0',
        RDTO: '20.88',
        HUMEDAD: '54.76',
        ACIDEZ: '0.26',
        TICKET: '160'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '189.0',
        RDTO: '18.63',
        HUMEDAD: '56.31',
        ACIDEZ: '0.29',
        TICKET: '161'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5016.0',
        RDTO: '19.1',
        HUMEDAD: '56.08',
        ACIDEZ: '0.17',
        TICKET: '162'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2123.0',
        RDTO: '20.23',
        HUMEDAD: '55.24',
        ACIDEZ: '0.18',
        TICKET: '163'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '202.0',
        RDTO: '24.58',
        HUMEDAD: '47.76',
        ACIDEZ: '0.22',
        TICKET: '164'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '569.0',
        RDTO: '20.84',
        HUMEDAD: '51.03',
        ACIDEZ: '0.22',
        TICKET: '165'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '612.0',
        RDTO: '17.31',
        HUMEDAD: '56.3',
        ACIDEZ: '0.24',
        TICKET: '166'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '463.0',
        RDTO: '21.95',
        HUMEDAD: '49.99',
        ACIDEZ: '0.21',
        TICKET: '176'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '678.0',
        RDTO: '19.27',
        HUMEDAD: '51.05',
        ACIDEZ: '0.11',
        TICKET: '177'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '774.0',
        RDTO: '20.73',
        HUMEDAD: '51.91',
        ACIDEZ: '0.46',
        TICKET: '178'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4201.0',
        RDTO: '17.1',
        HUMEDAD: '57.91',
        ACIDEZ: '0.24',
        TICKET: '179'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '432.0',
        RDTO: '19.76',
        HUMEDAD: '53.98',
        ACIDEZ: '0.49',
        TICKET: '167'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3410.0',
        RDTO: '21.51',
        HUMEDAD: '49.22',
        ACIDEZ: '0.18',
        TICKET: '168'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '540.0',
        RDTO: '21.06',
        HUMEDAD: '53.06',
        ACIDEZ: '0.27',
        TICKET: '169'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '828.0',
        RDTO: '19.26',
        HUMEDAD: '54.79',
        ACIDEZ: '0.21',
        TICKET: '170'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2667.0',
        RDTO: '18.94',
        HUMEDAD: '54.66',
        ACIDEZ: '0.28',
        TICKET: '171'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2488.0',
        RDTO: '20.48',
        HUMEDAD: '52.63',
        ACIDEZ: '0.43',
        TICKET: '172'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '276.0',
        RDTO: '20.48',
        HUMEDAD: '52.63',
        ACIDEZ: '0.43',
        TICKET: '173'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '598.0',
        RDTO: '20.32',
        HUMEDAD: '53.44',
        ACIDEZ: '0.21',
        TICKET: '174'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1152.0',
        RDTO: '17.48',
        HUMEDAD: '57.51',
        ACIDEZ: '0.42',
        TICKET: '175'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3214.0',
        RDTO: '18.94',
        HUMEDAD: '51.09',
        ACIDEZ: '0.18',
        TICKET: '180'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '363.0',
        RDTO: '20.8',
        HUMEDAD: '52.5',
        ACIDEZ: '0.22',
        TICKET: '181'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1941.0',
        RDTO: '21.73',
        HUMEDAD: '48.31',
        ACIDEZ: '0.19',
        TICKET: '182'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1417.0',
        RDTO: '21.38',
        HUMEDAD: '51.47',
        ACIDEZ: '0.21',
        TICKET: '183'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4288.0',
        RDTO: '16.84',
        HUMEDAD: '57.15',
        ACIDEZ: '0.41',
        TICKET: '184'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5088.0',
        RDTO: '17.59',
        HUMEDAD: '54.99',
        ACIDEZ: '0.2',
        TICKET: '185'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5379.0',
        RDTO: '18.86',
        HUMEDAD: '56.44',
        ACIDEZ: '0.3',
        TICKET: '186'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1345.0',
        RDTO: '18.86',
        HUMEDAD: '56.44',
        ACIDEZ: '0.3',
        TICKET: '187'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '916.0',
        RDTO: '16.38',
        HUMEDAD: '58.18',
        ACIDEZ: '0.22',
        TICKET: '188'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1180.0',
        RDTO: '18.76',
        HUMEDAD: '56.46',
        ACIDEZ: '0.25',
        TICKET: '189'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '8288.0',
        RDTO: '21.55',
        HUMEDAD: '54.27',
        ACIDEZ: '0.21',
        TICKET: '190'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '587.0',
        RDTO: '17.75',
        HUMEDAD: '55.32',
        ACIDEZ: '0.23',
        TICKET: '191'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '164.0',
        RDTO: '20.48',
        HUMEDAD: '44.77',
        ACIDEZ: '0.2',
        TICKET: '192'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1896.0',
        RDTO: '18.84',
        HUMEDAD: '57.35',
        ACIDEZ: '0.17',
        TICKET: '193'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '953.0',
        RDTO: '22.08',
        HUMEDAD: '48.29',
        ACIDEZ: '0.2',
        TICKET: '194'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5846.0',
        RDTO: '24.48',
        HUMEDAD: '43.72',
        ACIDEZ: '0.2',
        TICKET: '195'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1926.0',
        RDTO: '20.47',
        HUMEDAD: '50.66',
        ACIDEZ: '0.19',
        TICKET: '196'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '680.0',
        RDTO: '20.55',
        HUMEDAD: '51.85',
        ACIDEZ: '0.24',
        TICKET: '197'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '644.0',
        RDTO: '17.71',
        HUMEDAD: '55.14',
        ACIDEZ: '0.24',
        TICKET: '198'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '812.0',
        RDTO: '19.76',
        HUMEDAD: '50.8',
        ACIDEZ: '0.24',
        TICKET: '199'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '512.0',
        RDTO: '21.34',
        HUMEDAD: '48.51',
        ACIDEZ: '0.37',
        TICKET: '239'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '590.0',
        RDTO: '22.49',
        HUMEDAD: '47.94',
        ACIDEZ: '0.19',
        TICKET: '240'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '413.0',
        RDTO: '20.67',
        HUMEDAD: '51.06',
        ACIDEZ: '0.27',
        TICKET: '200'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '613.0',
        RDTO: '24.39',
        HUMEDAD: '47.97',
        ACIDEZ: '0.21',
        TICKET: '201'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3404.0',
        RDTO: '18.62',
        HUMEDAD: '52.63',
        ACIDEZ: '0.23',
        TICKET: '202'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '405.0',
        RDTO: '21.61',
        HUMEDAD: '52.81',
        ACIDEZ: '0.28',
        TICKET: '203'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '430.0',
        RDTO: '19.01',
        HUMEDAD: '53.74',
        ACIDEZ: '0.24',
        TICKET: '204'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '430.0',
        RDTO: '19.01',
        HUMEDAD: '53.74',
        ACIDEZ: '0.24',
        TICKET: '205'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1131.0',
        RDTO: '18.91',
        HUMEDAD: '53.05',
        ACIDEZ: '0.35',
        TICKET: '206'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1994.0',
        RDTO: '15.49',
        HUMEDAD: '56.59',
        ACIDEZ: '0.33',
        TICKET: '207'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2958.0',
        RDTO: '19.58',
        HUMEDAD: '55.08',
        ACIDEZ: '0.24',
        TICKET: '208'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1018.0',
        RDTO: '20.94',
        HUMEDAD: '50.56',
        ACIDEZ: '0.33',
        TICKET: '209'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '738.0',
        RDTO: '19.04',
        HUMEDAD: '53.94',
        ACIDEZ: '0.26',
        TICKET: '210'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '701.0',
        RDTO: '20.33',
        HUMEDAD: '50.41',
        ACIDEZ: '0.18',
        TICKET: '211'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '372.0',
        RDTO: '15.37',
        HUMEDAD: '56.97',
        ACIDEZ: '0.26',
        TICKET: '212'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1437.0',
        RDTO: '17.08',
        HUMEDAD: '58.43',
        ACIDEZ: '0.27',
        TICKET: '213'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1059.0',
        RDTO: '22.17',
        HUMEDAD: '48.47',
        ACIDEZ: '0.3',
        TICKET: '214'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '892.0',
        RDTO: '21.68',
        HUMEDAD: '51.93',
        ACIDEZ: '0.13',
        TICKET: '215'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1077.0',
        RDTO: '21.01',
        HUMEDAD: '49.56',
        ACIDEZ: '0.27',
        TICKET: '216'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4404.0',
        RDTO: '15.8',
        HUMEDAD: '59.39',
        ACIDEZ: '0.32',
        TICKET: '217'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '331.0',
        RDTO: '23.49',
        HUMEDAD: '48.61',
        ACIDEZ: '0.17',
        TICKET: '218'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4175.0',
        RDTO: '16.49',
        HUMEDAD: '58.76',
        ACIDEZ: '0.26',
        TICKET: '219'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2270.0',
        RDTO: '20.95',
        HUMEDAD: '52.51',
        ACIDEZ: '0.23',
        TICKET: '220'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '818.0',
        RDTO: '22.37',
        HUMEDAD: '49.92',
        ACIDEZ: '0.19',
        TICKET: '221'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2923.0',
        RDTO: '17.94',
        HUMEDAD: '50.88',
        ACIDEZ: '0.23',
        TICKET: '222'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2138.0',
        RDTO: '20.0',
        HUMEDAD: '52.02',
        ACIDEZ: '0.26',
        TICKET: '223'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '677.0',
        RDTO: '20.52',
        HUMEDAD: '54.39',
        ACIDEZ: '0.2',
        TICKET: '224'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '926.0',
        RDTO: '24.0',
        HUMEDAD: '46.4',
        ACIDEZ: '0.09',
        TICKET: '225'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1908.0',
        RDTO: '20.14',
        HUMEDAD: '55.66',
        ACIDEZ: '0.21',
        TICKET: '226'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '7009.0',
        RDTO: '20.98',
        HUMEDAD: '54.65',
        ACIDEZ: '0.17',
        TICKET: '227'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '6678.0',
        RDTO: '18.94',
        HUMEDAD: '54.53',
        ACIDEZ: '0.34',
        TICKET: '228'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1670.0',
        RDTO: '18.94',
        HUMEDAD: '54.53',
        ACIDEZ: '0.34',
        TICKET: '229'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1731.0',
        RDTO: '20.39',
        HUMEDAD: '52.37',
        ACIDEZ: '0.25',
        TICKET: '230'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '930.0',
        RDTO: '20.98',
        HUMEDAD: '48.95',
        ACIDEZ: '0.19',
        TICKET: '231'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '7506.0',
        RDTO: '18.22',
        HUMEDAD: '55.94',
        ACIDEZ: '0.26',
        TICKET: '232'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '979.0',
        RDTO: '21.68',
        HUMEDAD: '49.67',
        ACIDEZ: '0.23',
        TICKET: '233'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '754.0',
        RDTO: '20.86',
        HUMEDAD: '53.02',
        ACIDEZ: '0.27',
        TICKET: '234'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '561.0',
        RDTO: '21.41',
        HUMEDAD: '49.87',
        ACIDEZ: '0.22',
        TICKET: '235'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1394.0',
        RDTO: '18.71',
        HUMEDAD: '55.3',
        ACIDEZ: '0.22',
        TICKET: '236'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '379.0',
        RDTO: '19.13',
        HUMEDAD: '51.79',
        ACIDEZ: '0.25',
        TICKET: '237'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '833.0',
        RDTO: '18.16',
        HUMEDAD: '55.2',
        ACIDEZ: '0.21',
        TICKET: '241'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1143.0',
        RDTO: '21.13',
        HUMEDAD: '51.07',
        ACIDEZ: '0.36',
        TICKET: '242'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '638.0',
        RDTO: '20.56',
        HUMEDAD: '52.06',
        ACIDEZ: '0.33',
        TICKET: '243'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '725.0',
        RDTO: '16.84',
        HUMEDAD: '57.85',
        ACIDEZ: '0.43',
        TICKET: '244'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '269.0',
        RDTO: '19.62',
        HUMEDAD: '50.77',
        ACIDEZ: '0.23',
        TICKET: '245'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '269.0',
        RDTO: '19.62',
        HUMEDAD: '50.77',
        ACIDEZ: '0.23',
        TICKET: '246'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1869.0',
        RDTO: '12.56',
        HUMEDAD: '55.24',
        ACIDEZ: '0.23',
        TICKET: '247'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1211.0',
        RDTO: '21.62',
        HUMEDAD: '49.51',
        ACIDEZ: '0.48',
        TICKET: '248'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '892.0',
        RDTO: '20.08',
        HUMEDAD: '51.49',
        ACIDEZ: '0.27',
        TICKET: '249'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '682.0',
        RDTO: '19.12',
        HUMEDAD: '51.96',
        ACIDEZ: '0.19',
        TICKET: '250'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '531.0',
        RDTO: '21.06',
        HUMEDAD: '49.5',
        ACIDEZ: '0.34',
        TICKET: '251'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1628.0',
        RDTO: '19.12',
        HUMEDAD: '55.62',
        ACIDEZ: '0.24',
        TICKET: '252'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2154.0',
        RDTO: '18.97',
        HUMEDAD: '54.8',
        ACIDEZ: '0.37',
        TICKET: '253'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4969.0',
        RDTO: '19.34',
        HUMEDAD: '53.25',
        ACIDEZ: '0.25',
        TICKET: '254'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1622.0',
        RDTO: '16.15',
        HUMEDAD: '52.26',
        ACIDEZ: '0.18',
        TICKET: '238'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2219.0',
        RDTO: '20.57',
        HUMEDAD: '51.41',
        ACIDEZ: '0.31',
        TICKET: '255'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '863.0',
        RDTO: '19.0',
        HUMEDAD: '52.89',
        ACIDEZ: '0.27',
        TICKET: '256'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2033.0',
        RDTO: '17.77',
        HUMEDAD: '57.31',
        ACIDEZ: '0.21',
        TICKET: '257'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3443.0',
        RDTO: '18.07',
        HUMEDAD: '55.13',
        ACIDEZ: '0.23',
        TICKET: '258'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1707.0',
        RDTO: '17.96',
        HUMEDAD: '56.16',
        ACIDEZ: '0.19',
        TICKET: '259'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '9055.0',
        RDTO: '18.55',
        HUMEDAD: '55.05',
        ACIDEZ: '0.3',
        TICKET: '260'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4123.0',
        RDTO: '18.53',
        HUMEDAD: '55.25',
        ACIDEZ: '0.29',
        TICKET: '261'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5664.0',
        RDTO: '16.49',
        HUMEDAD: '57.17',
        ACIDEZ: '0.28',
        TICKET: '262'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '902.0',
        RDTO: '20.7',
        HUMEDAD: '52.17',
        ACIDEZ: '0.21',
        TICKET: '272'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1050.0',
        RDTO: '20.25',
        HUMEDAD: '52.92',
        ACIDEZ: '0.28',
        TICKET: '263'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5198.0',
        RDTO: '22.73',
        HUMEDAD: '49.19',
        ACIDEZ: '0.23',
        TICKET: '264'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1299.0',
        RDTO: '22.73',
        HUMEDAD: '49.19',
        ACIDEZ: '0.23',
        TICKET: '265'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2502.0',
        RDTO: '20.62',
        HUMEDAD: '53.03',
        ACIDEZ: '0.21',
        TICKET: '266'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3263.0',
        RDTO: '19.54',
        HUMEDAD: '55.24',
        ACIDEZ: '0.18',
        TICKET: '267'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '488.0',
        RDTO: '17.9',
        HUMEDAD: '56.97',
        ACIDEZ: '0.29',
        TICKET: '273'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '488.0',
        RDTO: '20.69',
        HUMEDAD: '52.12',
        ACIDEZ: '0.22',
        TICKET: '274'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '583.0',
        RDTO: '18.64',
        HUMEDAD: '54.48',
        ACIDEZ: '0.24',
        TICKET: '275'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '447.0',
        RDTO: '21.42',
        HUMEDAD: '52.44',
        ACIDEZ: '0.27',
        TICKET: '432'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '240.0',
        RDTO: '19.22',
        HUMEDAD: '52.52',
        ACIDEZ: '0.18',
        TICKET: '433'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '284.0',
        RDTO: '21.85',
        HUMEDAD: '48.2',
        ACIDEZ: '0.28',
        TICKET: '276'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1281.0',
        RDTO: '20.61',
        HUMEDAD: '52.12',
        ACIDEZ: '0.24',
        TICKET: '277'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1702.0',
        RDTO: '18.72',
        HUMEDAD: '54.27',
        ACIDEZ: '0.32',
        TICKET: '278'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '583.0',
        RDTO: '23.56',
        HUMEDAD: '48.98',
        ACIDEZ: '0.19',
        TICKET: '279'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '829.0',
        RDTO: '19.36',
        HUMEDAD: '53.67',
        ACIDEZ: '0.42',
        TICKET: '434'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '286.0',
        RDTO: '20.26',
        HUMEDAD: '50.14',
        ACIDEZ: '0.22',
        TICKET: '280'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '286.0',
        RDTO: '20.26',
        HUMEDAD: '50.14',
        ACIDEZ: '0.22',
        TICKET: '281'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2833.0',
        RDTO: '18.31',
        HUMEDAD: '53.26',
        ACIDEZ: '0.23',
        TICKET: '282'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4178.0',
        RDTO: '20.04',
        HUMEDAD: '50.05',
        ACIDEZ: '0.23',
        TICKET: '283'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1017.0',
        RDTO: '14.07',
        HUMEDAD: '62.69',
        ACIDEZ: '0.25',
        TICKET: '284'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1277.0',
        RDTO: '21.23',
        HUMEDAD: '50.36',
        ACIDEZ: '0.25',
        TICKET: '285'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '622.0',
        RDTO: '20.75',
        HUMEDAD: '54.24',
        ACIDEZ: '0.29',
        TICKET: '268'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '7203.0',
        RDTO: '20.18',
        HUMEDAD: '53.54',
        ACIDEZ: '0.21',
        TICKET: '269'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '511.0',
        RDTO: '19.69',
        HUMEDAD: '52.19',
        ACIDEZ: '0.2',
        TICKET: '270'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '306.0',
        RDTO: '21.61',
        HUMEDAD: '49.63',
        ACIDEZ: '0.2',
        TICKET: '271'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '542.0',
        RDTO: '19.73',
        HUMEDAD: '51.19',
        ACIDEZ: '0.21',
        TICKET: '286'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '843.0',
        RDTO: '20.21',
        HUMEDAD: '50.56',
        ACIDEZ: '0.25',
        TICKET: '287'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1278.0',
        RDTO: '19.81',
        HUMEDAD: '51.91',
        ACIDEZ: '0.26',
        TICKET: '288'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '559.0',
        RDTO: '17.89',
        HUMEDAD: '56.1',
        ACIDEZ: '0.33',
        TICKET: '289'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '888.0',
        RDTO: '20.07',
        HUMEDAD: '52.0',
        ACIDEZ: '0.12',
        TICKET: '290'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5102.0',
        RDTO: '19.73',
        HUMEDAD: '52.51',
        ACIDEZ: '0.24',
        TICKET: '291'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2573.0',
        RDTO: '20.62',
        HUMEDAD: '53.21',
        ACIDEZ: '0.23',
        TICKET: '292'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1913.0',
        RDTO: '19.36',
        HUMEDAD: '52.19',
        ACIDEZ: '0.24',
        TICKET: '293'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '684.0',
        RDTO: '14.8',
        HUMEDAD: '57.58',
        ACIDEZ: '0.24',
        TICKET: '294'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3693.0',
        RDTO: '24.28',
        HUMEDAD: '46.53',
        ACIDEZ: '0.18',
        TICKET: '295'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3162.0',
        RDTO: '18.1',
        HUMEDAD: '55.46',
        ACIDEZ: '0.15',
        TICKET: '306'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3264.0',
        RDTO: '17.47',
        HUMEDAD: '56.04',
        ACIDEZ: '0.25',
        TICKET: '296'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '9989.0',
        RDTO: '18.26',
        HUMEDAD: '55.03',
        ACIDEZ: '0.26',
        TICKET: '297'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4121.0',
        RDTO: '19.38',
        HUMEDAD: '52.42',
        ACIDEZ: '0.24',
        TICKET: '298'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1030.0',
        RDTO: '19.38',
        HUMEDAD: '52.42',
        ACIDEZ: '0.2',
        TICKET: '299'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1455.0',
        RDTO: '22.16',
        HUMEDAD: '49.53',
        ACIDEZ: '0.24',
        TICKET: '300'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '984.0',
        RDTO: '24.13',
        HUMEDAD: '47.46',
        ACIDEZ: '0.24',
        TICKET: '301'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '573.0',
        RDTO: '20.47',
        HUMEDAD: '50.11',
        ACIDEZ: '0.32',
        TICKET: '435'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '628.0',
        RDTO: '18.86',
        HUMEDAD: '56.5',
        ACIDEZ: '0.25',
        TICKET: '307'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '294.0',
        RDTO: '17.43',
        HUMEDAD: '56.1',
        ACIDEZ: '0.44',
        TICKET: '308'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '750.0',
        RDTO: '20.06',
        HUMEDAD: '49.96',
        ACIDEZ: '0.26',
        TICKET: '309'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4512.0',
        RDTO: '18.15',
        HUMEDAD: '54.56',
        ACIDEZ: '0.27',
        TICKET: '436'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '427.0',
        RDTO: '21.83',
        HUMEDAD: '48.59',
        ACIDEZ: '0.35',
        TICKET: '310'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2856.0',
        RDTO: '21.59',
        HUMEDAD: '47.67',
        ACIDEZ: '0.18',
        TICKET: '311'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '360.0',
        RDTO: '21.06',
        HUMEDAD: '50.37',
        ACIDEZ: '0.24',
        TICKET: '312'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '519.0',
        RDTO: '21.85',
        HUMEDAD: '50.93',
        ACIDEZ: '0.29',
        TICKET: '313'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '963.0',
        RDTO: '20.26',
        HUMEDAD: '50.28',
        ACIDEZ: '0.25',
        TICKET: '302'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '662.0',
        RDTO: '19.89',
        HUMEDAD: '55.75',
        ACIDEZ: '0.34',
        TICKET: '303'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '800.0',
        RDTO: '19.65',
        HUMEDAD: '54.21',
        ACIDEZ: '0.28',
        TICKET: '304'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5440.0',
        RDTO: '19.42',
        HUMEDAD: '54.45',
        ACIDEZ: '0.24',
        TICKET: '305'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '560.0',
        RDTO: '23.22',
        HUMEDAD: '46.91',
        ACIDEZ: '0.53',
        TICKET: '314'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '572.0',
        RDTO: '21.35',
        HUMEDAD: '52.46',
        ACIDEZ: '0.23',
        TICKET: '315'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3597.0',
        RDTO: '18.41',
        HUMEDAD: '54.58',
        ACIDEZ: '0.31',
        TICKET: '316'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1388.0',
        RDTO: '16.88',
        HUMEDAD: '56.87',
        ACIDEZ: '0.12',
        TICKET: '317'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '584.0',
        RDTO: '19.95',
        HUMEDAD: '50.27',
        ACIDEZ: '0.22',
        TICKET: '318'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1102.0',
        RDTO: '19.94',
        HUMEDAD: '51.77',
        ACIDEZ: '0.39',
        TICKET: '319'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3121.0',
        RDTO: '18.02',
        HUMEDAD: '52.73',
        ACIDEZ: '0.2',
        TICKET: '320'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '757.0',
        RDTO: '23.55',
        HUMEDAD: '49.87',
        ACIDEZ: '0.21',
        TICKET: '321'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1518.0',
        RDTO: '18.76',
        HUMEDAD: '54.37',
        ACIDEZ: '0.28',
        TICKET: '322'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '299.0',
        RDTO: '21.68',
        HUMEDAD: '49.92',
        ACIDEZ: '0.26',
        TICKET: '323'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4879.0',
        RDTO: '21.19',
        HUMEDAD: '55.09',
        ACIDEZ: '0.25',
        TICKET: '324'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '605.0',
        RDTO: '20.17',
        HUMEDAD: '55.17',
        ACIDEZ: '0.51',
        TICKET: '325'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1909.0',
        RDTO: '21.84',
        HUMEDAD: '52.95',
        ACIDEZ: '0.24',
        TICKET: '326'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '550.0',
        RDTO: '20.25',
        HUMEDAD: '52.2',
        ACIDEZ: '0.24',
        TICKET: '327'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4590.0',
        RDTO: '19.18',
        HUMEDAD: '54.7',
        ACIDEZ: '0.29',
        TICKET: '328'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3003.0',
        RDTO: '17.88',
        HUMEDAD: '56.85',
        ACIDEZ: '0.24',
        TICKET: '329'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1454.0',
        RDTO: '19.24',
        HUMEDAD: '53.11',
        ACIDEZ: '0.22',
        TICKET: '330'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2080.0',
        RDTO: '18.51',
        HUMEDAD: '55.85',
        ACIDEZ: '0.31',
        TICKET: '331'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1515.0',
        RDTO: '21.44',
        HUMEDAD: '53.36',
        ACIDEZ: '0.2',
        TICKET: '332'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2603.0',
        RDTO: '19.23',
        HUMEDAD: '53.89',
        ACIDEZ: '0.25',
        TICKET: '333'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '9456.0',
        RDTO: '17.67',
        HUMEDAD: '54.62',
        ACIDEZ: '0.3',
        TICKET: '334'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5273.0',
        RDTO: '22.75',
        HUMEDAD: '48.09',
        ACIDEZ: '0.24',
        TICKET: '335'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1199.0',
        RDTO: '19.22',
        HUMEDAD: '53.33',
        ACIDEZ: '0.3',
        TICKET: '336'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4798.0',
        RDTO: '19.22',
        HUMEDAD: '53.33',
        ACIDEZ: '0.3',
        TICKET: '337'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1895.0',
        RDTO: '21.7',
        HUMEDAD: '47.93',
        ACIDEZ: '0.13',
        TICKET: '338'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1144.0',
        RDTO: '20.67',
        HUMEDAD: '50.58',
        ACIDEZ: '0.26',
        TICKET: '339'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4050.0',
        RDTO: '19.94',
        HUMEDAD: '55.05',
        ACIDEZ: '0.25',
        TICKET: '340'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '871.0',
        RDTO: '20.92',
        HUMEDAD: '50.49',
        ACIDEZ: '0.52',
        TICKET: '341'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '313.0',
        RDTO: '18.65',
        HUMEDAD: '52.18',
        ACIDEZ: '0.1',
        TICKET: '342'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '302.0',
        RDTO: '21.34',
        HUMEDAD: '51.96',
        ACIDEZ: '0.24',
        TICKET: '343'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2140.0',
        RDTO: '17.45',
        HUMEDAD: '56.2',
        ACIDEZ: '0.24',
        TICKET: '344'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3277.0',
        RDTO: '18.2',
        HUMEDAD: '56.76',
        ACIDEZ: '0.23',
        TICKET: '345'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '831.0',
        RDTO: '17.66',
        HUMEDAD: '56.76',
        ACIDEZ: '0.19',
        TICKET: '346'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '625.0',
        RDTO: '18.89',
        HUMEDAD: '55.68',
        ACIDEZ: '0.27',
        TICKET: '347'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '284.0',
        RDTO: '21.79',
        HUMEDAD: '49.37',
        ACIDEZ: '0.2',
        TICKET: '348'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4621.0',
        RDTO: '21.43',
        HUMEDAD: '55.51',
        ACIDEZ: '0.28',
        TICKET: '352'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4202.0',
        RDTO: '17.4',
        HUMEDAD: '54.94',
        ACIDEZ: '0.23',
        TICKET: '350'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '706.0',
        RDTO: '17.2',
        HUMEDAD: '57.16',
        ACIDEZ: '0.32',
        TICKET: '351'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '770.0',
        RDTO: '18.61',
        HUMEDAD: '54.03',
        ACIDEZ: '0.26',
        TICKET: '353'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '712.0',
        RDTO: '18.78',
        HUMEDAD: '56.28',
        ACIDEZ: '0.26',
        TICKET: '354'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5128.0',
        RDTO: '18.59',
        HUMEDAD: '54.77',
        ACIDEZ: '0.28',
        TICKET: '355'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '704.0',
        RDTO: '20.92',
        HUMEDAD: '53.15',
        ACIDEZ: '0.37',
        TICKET: '356'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1054.0',
        RDTO: '24.32',
        HUMEDAD: '47.21',
        ACIDEZ: '0.19',
        TICKET: '357'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '312.0',
        RDTO: '23.15',
        HUMEDAD: '44.96',
        ACIDEZ: '0.48',
        TICKET: '358'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '317.0',
        RDTO: '20.45',
        HUMEDAD: '51.44',
        ACIDEZ: '0.25',
        TICKET: '359'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '637.0',
        RDTO: '17.24',
        HUMEDAD: '56.43',
        ACIDEZ: '0.39',
        TICKET: '360'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '674.0',
        RDTO: '20.1',
        HUMEDAD: '52.0',
        ACIDEZ: '0.26',
        TICKET: '361'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1310.0',
        RDTO: '18.35',
        HUMEDAD: '55.63',
        ACIDEZ: '0.41',
        TICKET: '362'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '251.0',
        RDTO: '19.45',
        HUMEDAD: '52.63',
        ACIDEZ: '0.3',
        TICKET: '363'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2775.0',
        RDTO: '17.08',
        HUMEDAD: '53.66',
        ACIDEZ: '0.18',
        TICKET: '349'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '251.0',
        RDTO: '19.45',
        HUMEDAD: '52.63',
        ACIDEZ: '0.3',
        TICKET: '364'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3673.0',
        RDTO: '19.96',
        HUMEDAD: '53.58',
        ACIDEZ: '0.39',
        TICKET: '365'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1375.0',
        RDTO: '19.24',
        HUMEDAD: '51.07',
        ACIDEZ: '0.19',
        TICKET: '366'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '659.0',
        RDTO: '16.2',
        HUMEDAD: '55.62',
        ACIDEZ: '0.29',
        TICKET: '367'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '492.0',
        RDTO: '18.85',
        HUMEDAD: '53.32',
        ACIDEZ: '0.24',
        TICKET: '368'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2882.0',
        RDTO: '19.72',
        HUMEDAD: '53.29',
        ACIDEZ: '0.38',
        TICKET: '369'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1243.0',
        RDTO: '19.47',
        HUMEDAD: '50.23',
        ACIDEZ: '0.33',
        TICKET: '370'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '473.0',
        RDTO: '20.63',
        HUMEDAD: '50.15',
        ACIDEZ: '0.42',
        TICKET: '371'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1743.0',
        RDTO: '17.16',
        HUMEDAD: '56.04',
        ACIDEZ: '0.19',
        TICKET: '372'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '461.0',
        RDTO: '19.91',
        HUMEDAD: '51.15',
        ACIDEZ: '0.19',
        TICKET: '373'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '440.0',
        RDTO: '17.23',
        HUMEDAD: '55.72',
        ACIDEZ: '0.36',
        TICKET: '374'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3027.0',
        RDTO: '18.12',
        HUMEDAD: '55.53',
        ACIDEZ: '0.32',
        TICKET: '375'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3453.0',
        RDTO: '15.74',
        HUMEDAD: '60.67',
        ACIDEZ: '0.24',
        TICKET: '376'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2057.0',
        RDTO: '18.67',
        HUMEDAD: '55.33',
        ACIDEZ: '0.42',
        TICKET: '377'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2323.0',
        RDTO: '24.23',
        HUMEDAD: '47.31',
        ACIDEZ: '0.22',
        TICKET: '378'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1039.0',
        RDTO: '17.14',
        HUMEDAD: '55.57',
        ACIDEZ: '0.22',
        TICKET: '379'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4108.0',
        RDTO: '18.48',
        HUMEDAD: '53.2',
        ACIDEZ: '0.22',
        TICKET: '380'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '310.0',
        RDTO: '19.42',
        HUMEDAD: '50.32',
        ACIDEZ: '0.17',
        TICKET: '381'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1776.0',
        RDTO: '20.95',
        HUMEDAD: '51.42',
        ACIDEZ: '0.24',
        TICKET: '382'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '873.0',
        RDTO: '18.84',
        HUMEDAD: '56.06',
        ACIDEZ: '0.23',
        TICKET: '383'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5022.0',
        RDTO: '18.0',
        HUMEDAD: '53.65',
        ACIDEZ: '0.25',
        TICKET: '384'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1255.0',
        RDTO: '18.0',
        HUMEDAD: '53.65',
        ACIDEZ: '0.25',
        TICKET: '385'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1888.0',
        RDTO: '20.24',
        HUMEDAD: '52.27',
        ACIDEZ: '0.23',
        TICKET: '386'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '8846.0',
        RDTO: '18.02',
        HUMEDAD: '53.2',
        ACIDEZ: '0.26',
        TICKET: '387'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1168.0',
        RDTO: '20.6',
        HUMEDAD: '50.41',
        ACIDEZ: '0.21',
        TICKET: '388'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '399.0',
        RDTO: '20.87',
        HUMEDAD: '53.82',
        ACIDEZ: '0.37',
        TICKET: '389'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '9044.0',
        RDTO: '22.33',
        HUMEDAD: '48.95',
        ACIDEZ: '0.23',
        TICKET: '390'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '664.0',
        RDTO: '18.71',
        HUMEDAD: '57.29',
        ACIDEZ: '0.32',
        TICKET: '391'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '267.0',
        RDTO: '21.09',
        HUMEDAD: '49.71',
        ACIDEZ: '0.57',
        TICKET: '392'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2870.0',
        RDTO: '18.82',
        HUMEDAD: '52.84',
        ACIDEZ: '0.13',
        TICKET: '393'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5485.0',
        RDTO: '21.64',
        HUMEDAD: '55.45',
        ACIDEZ: '0.26',
        TICKET: '394'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4146.0',
        RDTO: '20.18',
        HUMEDAD: '55.01',
        ACIDEZ: '0.26',
        TICKET: '395'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '635.0',
        RDTO: '18.02',
        HUMEDAD: '55.35',
        ACIDEZ: '0.32',
        TICKET: '396'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '553.0',
        RDTO: '18.97',
        HUMEDAD: '53.46',
        ACIDEZ: '0.28',
        TICKET: '397'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '522.0',
        RDTO: '20.19',
        HUMEDAD: '53.13',
        ACIDEZ: '0.28',
        TICKET: '398'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1223.0',
        RDTO: '16.28',
        HUMEDAD: '59.72',
        ACIDEZ: '0.27',
        TICKET: '399'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4893.0',
        RDTO: '19.95',
        HUMEDAD: '54.12',
        ACIDEZ: '0.22',
        TICKET: '400'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1098.0',
        RDTO: '20.97',
        HUMEDAD: '50.06',
        ACIDEZ: '0.26',
        TICKET: '401'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1190.0',
        RDTO: '25.59',
        HUMEDAD: '48.01',
        ACIDEZ: '0.21',
        TICKET: '402'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3753.0',
        RDTO: '21.45',
        HUMEDAD: '53.35',
        ACIDEZ: '0.28',
        TICKET: '403'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2242.0',
        RDTO: '18.74',
        HUMEDAD: '55.66',
        ACIDEZ: '0.4',
        TICKET: '418'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1005.0',
        RDTO: '15.79',
        HUMEDAD: '58.03',
        ACIDEZ: '0.31',
        TICKET: '419'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2146.0',
        RDTO: '21.55',
        HUMEDAD: '51.63',
        ACIDEZ: '0.37',
        TICKET: '420'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2979.0',
        RDTO: '18.39',
        HUMEDAD: '53.79',
        ACIDEZ: '0.23',
        TICKET: '421'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '905.0',
        RDTO: '18.04',
        HUMEDAD: '49.75',
        ACIDEZ: '0.18',
        TICKET: '422'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4275.0',
        RDTO: '18.48',
        HUMEDAD: '54.65',
        ACIDEZ: '0.38',
        TICKET: '423'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '569.0',
        RDTO: '17.89',
        HUMEDAD: '55.55',
        ACIDEZ: '0.35',
        TICKET: '404'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '798.0',
        RDTO: '21.81',
        HUMEDAD: '54.08',
        ACIDEZ: '0.31',
        TICKET: '405'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1926.0',
        RDTO: '21.59',
        HUMEDAD: '52.3',
        ACIDEZ: '0.22',
        TICKET: '406'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '939.0',
        RDTO: '18.19',
        HUMEDAD: '54.94',
        ACIDEZ: '0.31',
        TICKET: '407'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '331.0',
        RDTO: '20.89',
        HUMEDAD: '53.09',
        ACIDEZ: '0.49',
        TICKET: '408'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '331.0',
        RDTO: '20.89',
        HUMEDAD: '53.09',
        ACIDEZ: '0.49',
        TICKET: '409'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '766.0',
        RDTO: '18.93',
        HUMEDAD: '53.54',
        ACIDEZ: '0.31',
        TICKET: '410'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '546.0',
        RDTO: '18.61',
        HUMEDAD: '53.32',
        ACIDEZ: '0.4',
        TICKET: '411'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2220.0',
        RDTO: '22.32',
        HUMEDAD: '53.36',
        ACIDEZ: '0.22',
        TICKET: '412'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '631.0',
        RDTO: '20.26',
        HUMEDAD: '51.4',
        ACIDEZ: '0.29',
        TICKET: '413'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '440.0',
        RDTO: '20.3',
        HUMEDAD: '51.3',
        ACIDEZ: '0.23',
        TICKET: '414'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1642.0',
        RDTO: '17.67',
        HUMEDAD: '53.78',
        ACIDEZ: '0.23',
        TICKET: '415'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3590.0',
        RDTO: '19.02',
        HUMEDAD: '55.68',
        ACIDEZ: '0.4',
        TICKET: '416'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3134.0',
        RDTO: '16.93',
        HUMEDAD: '58.94',
        ACIDEZ: '0.29',
        TICKET: '417'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1069.0',
        RDTO: '18.48',
        HUMEDAD: '54.65',
        ACIDEZ: '0.38',
        TICKET: '424'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '534.0',
        RDTO: '20.03',
        HUMEDAD: '53.34',
        ACIDEZ: '0.21',
        TICKET: '425'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '443.0',
        RDTO: '18.51',
        HUMEDAD: '55.3',
        ACIDEZ: '0.31',
        TICKET: '437'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '635.0',
        RDTO: '17.06',
        HUMEDAD: '55.24',
        ACIDEZ: '0.26',
        TICKET: '441'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '729.0',
        RDTO: '18.69',
        HUMEDAD: '53.83',
        ACIDEZ: '0.22',
        TICKET: '442'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '547.0',
        RDTO: '20.5',
        HUMEDAD: '52.84',
        ACIDEZ: '0.32',
        TICKET: '443'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4249.0',
        RDTO: '18.87',
        HUMEDAD: '55.23',
        ACIDEZ: '0.27',
        TICKET: '444'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '9684.0',
        RDTO: '17.83',
        HUMEDAD: '54.2',
        ACIDEZ: '0.27',
        TICKET: '426'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '372.0',
        RDTO: '17.75',
        HUMEDAD: '54.06',
        ACIDEZ: '0.41',
        TICKET: '427'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '996.0',
        RDTO: '19.48',
        HUMEDAD: '52.49',
        ACIDEZ: '0.4',
        TICKET: '428'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1064.0',
        RDTO: '20.73',
        HUMEDAD: '49.96',
        ACIDEZ: '0.23',
        TICKET: '429'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5660.0',
        RDTO: '18.1',
        HUMEDAD: '56.22',
        ACIDEZ: '0.22',
        TICKET: '430'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1484.0',
        RDTO: '20.92',
        HUMEDAD: '51.68',
        ACIDEZ: '0.27',
        TICKET: '431'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '744.0',
        RDTO: '18.76',
        HUMEDAD: '55.63',
        ACIDEZ: '0.32',
        TICKET: '445'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1211.0',
        RDTO: '23.91',
        HUMEDAD: '47.72',
        ACIDEZ: '0.18',
        TICKET: '446'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '869.0',
        RDTO: '21.26',
        HUMEDAD: '52.73',
        ACIDEZ: '0.32',
        TICKET: '447'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '556.0',
        RDTO: '16.51',
        HUMEDAD: '55.13',
        ACIDEZ: '0.23',
        TICKET: '448'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1435.0',
        RDTO: '18.13',
        HUMEDAD: '55.66',
        ACIDEZ: '0.33',
        TICKET: '449'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5171.0',
        RDTO: '18.51',
        HUMEDAD: '54.52',
        ACIDEZ: '0.3',
        TICKET: '450'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '247.0',
        RDTO: '20.23',
        HUMEDAD: '53.17',
        ACIDEZ: '0.2',
        TICKET: '451'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '940.0',
        RDTO: '15.75',
        HUMEDAD: '58.47',
        ACIDEZ: '0.46',
        TICKET: '452'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '904.0',
        RDTO: '20.44',
        HUMEDAD: '51.26',
        ACIDEZ: '0.24',
        TICKET: '453'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '362.0',
        RDTO: '20.7',
        HUMEDAD: '52.09',
        ACIDEZ: '0.31',
        TICKET: '454'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '362.0',
        RDTO: '20.7',
        HUMEDAD: '52.09',
        ACIDEZ: '0.31',
        TICKET: '455'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '135.0',
        RDTO: '18.75',
        HUMEDAD: '53.05',
        ACIDEZ: '0.24',
        TICKET: '438'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5691.0',
        RDTO: '20.73',
        HUMEDAD: '54.32',
        ACIDEZ: '0.22',
        TICKET: '439'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5247.0',
        RDTO: '19.2',
        HUMEDAD: '54.0',
        ACIDEZ: '0.27',
        TICKET: '440'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '904.0',
        RDTO: '20.73',
        HUMEDAD: '52.83',
        ACIDEZ: '0.29',
        TICKET: '456'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3871.0',
        RDTO: '20.37',
        HUMEDAD: '53.35',
        ACIDEZ: '0.27',
        TICKET: '457'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '848.0',
        RDTO: '13.54',
        HUMEDAD: '56.36',
        ACIDEZ: '0.24',
        TICKET: '458'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '379.0',
        RDTO: '22.44',
        HUMEDAD: '51.15',
        ACIDEZ: '0.21',
        TICKET: '459'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '484.0',
        RDTO: '20.04',
        HUMEDAD: '53.16',
        ACIDEZ: '0.27',
        TICKET: '460'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '520.0',
        RDTO: '20.63',
        HUMEDAD: '51.35',
        ACIDEZ: '0.15',
        TICKET: '461'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4083.0',
        RDTO: '18.01',
        HUMEDAD: '55.87',
        ACIDEZ: '0.26',
        TICKET: '462'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '559.0',
        RDTO: '16.96',
        HUMEDAD: '59.45',
        ACIDEZ: '0.31',
        TICKET: '463'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '892.0',
        RDTO: '18.68',
        HUMEDAD: '57.12',
        ACIDEZ: '0.28',
        TICKET: '464'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '933.0',
        RDTO: '22.39',
        HUMEDAD: '50.31',
        ACIDEZ: '0.38',
        TICKET: '465'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '283.0',
        RDTO: '19.24',
        HUMEDAD: '54.39',
        ACIDEZ: '0.33',
        TICKET: '466'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1483.0',
        RDTO: '19.04',
        HUMEDAD: '53.46',
        ACIDEZ: '0.18',
        TICKET: '467'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1097.0',
        RDTO: '17.96',
        HUMEDAD: '54.43',
        ACIDEZ: '0.22',
        TICKET: '468'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1263.0',
        RDTO: '17.28',
        HUMEDAD: '58.37',
        ACIDEZ: '0.33',
        TICKET: '469'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '832.0',
        RDTO: '15.42',
        HUMEDAD: '55.53',
        ACIDEZ: '0.16',
        TICKET: '470'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3427.0',
        RDTO: '17.62',
        HUMEDAD: '59.65',
        ACIDEZ: '0.32',
        TICKET: '471'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1921.0',
        RDTO: '18.95',
        HUMEDAD: '56.09',
        ACIDEZ: '0.34',
        TICKET: '472'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2694.0',
        RDTO: '19.48',
        HUMEDAD: '53.54',
        ACIDEZ: '0.28',
        TICKET: '473'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2168.0',
        RDTO: '22.04',
        HUMEDAD: '50.34',
        ACIDEZ: '0.14',
        TICKET: '474'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5088.0',
        RDTO: '19.73',
        HUMEDAD: '53.44',
        ACIDEZ: '0.26',
        TICKET: '475'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5032.0',
        RDTO: '19.53',
        HUMEDAD: '56.45',
        ACIDEZ: '0.24',
        TICKET: '476'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '601.0',
        RDTO: '17.69',
        HUMEDAD: '55.88',
        ACIDEZ: '0.27',
        TICKET: '477'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3042.0',
        RDTO: '17.28',
        HUMEDAD: '58.14',
        ACIDEZ: '0.27',
        TICKET: '478'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2163.0',
        RDTO: '19.97',
        HUMEDAD: '52.21',
        ACIDEZ: '0.14',
        TICKET: '479'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1525.0',
        RDTO: '23.15',
        HUMEDAD: '47.48',
        ACIDEZ: '0.05',
        TICKET: '480'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '387.0',
        RDTO: '21.42',
        HUMEDAD: '50.65',
        ACIDEZ: '0.18',
        TICKET: '481'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '411.0',
        RDTO: '21.82',
        HUMEDAD: '52.54',
        ACIDEZ: '0.28',
        TICKET: '482'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '868.0',
        RDTO: '18.04',
        HUMEDAD: '54.18',
        ACIDEZ: '0.19',
        TICKET: '483'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4402.0',
        RDTO: '17.5',
        HUMEDAD: '56.94',
        ACIDEZ: '0.27',
        TICKET: '484'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1205.0',
        RDTO: '18.7',
        HUMEDAD: '56.96',
        ACIDEZ: '0.33',
        TICKET: '485'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '490.0',
        RDTO: '19.54',
        HUMEDAD: '53.78',
        ACIDEZ: '0.19',
        TICKET: '488'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1805.0',
        RDTO: '18.23',
        HUMEDAD: '53.97',
        ACIDEZ: '0.32',
        TICKET: '491'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '551.0',
        RDTO: '19.22',
        HUMEDAD: '55.06',
        ACIDEZ: '0.37',
        TICKET: '492'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2436.0',
        RDTO: '20.68',
        HUMEDAD: '51.83',
        ACIDEZ: '0.22',
        TICKET: '518'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '698.0',
        RDTO: '19.56',
        HUMEDAD: '53.66',
        ACIDEZ: '0.25',
        TICKET: '493'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '611.0',
        RDTO: '18.28',
        HUMEDAD: '54.89',
        ACIDEZ: '0.42',
        TICKET: '489'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5054.0',
        RDTO: '19.92',
        HUMEDAD: '53.47',
        ACIDEZ: '0.22',
        TICKET: '490'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '925.0',
        RDTO: '19.79',
        HUMEDAD: '51.09',
        ACIDEZ: '0.2',
        TICKET: '494'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '736.0',
        RDTO: '17.93',
        HUMEDAD: '52.25',
        ACIDEZ: '0.19',
        TICKET: '495'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '780.0',
        RDTO: '26.1',
        HUMEDAD: '45.97',
        ACIDEZ: '0.21',
        TICKET: '496'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '679.0',
        RDTO: '18.91',
        HUMEDAD: '57.6',
        ACIDEZ: '0.32',
        TICKET: '497'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '7791.0',
        RDTO: '17.42',
        HUMEDAD: '58.04',
        ACIDEZ: '0.27',
        TICKET: '486'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '8926.0',
        RDTO: '18.77',
        HUMEDAD: '55.92',
        ACIDEZ: '0.21',
        TICKET: '487'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4362.0',
        RDTO: '21.87',
        HUMEDAD: '52.33',
        ACIDEZ: '0.22',
        TICKET: '498'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '587.0',
        RDTO: '18.58',
        HUMEDAD: '55.97',
        ACIDEZ: '0.36',
        TICKET: '499'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4848.0',
        RDTO: '21.26',
        HUMEDAD: '54.59',
        ACIDEZ: '0.24',
        TICKET: '500'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '875.0',
        RDTO: '20.7',
        HUMEDAD: '50.52',
        ACIDEZ: '0.26',
        TICKET: '501'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '416.0',
        RDTO: '21.64',
        HUMEDAD: '51.0',
        ACIDEZ: '0.51',
        TICKET: '502'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '416.0',
        RDTO: '21.64',
        HUMEDAD: '51.0',
        ACIDEZ: '0.51',
        TICKET: '503'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '658.0',
        RDTO: '19.01',
        HUMEDAD: '55.13',
        ACIDEZ: '0.22',
        TICKET: '504'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2918.0',
        RDTO: '20.65',
        HUMEDAD: '52.11',
        ACIDEZ: '0.22',
        TICKET: '505'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1406.0',
        RDTO: '20.86',
        HUMEDAD: '52.97',
        ACIDEZ: '0.24',
        TICKET: '506'
    },
    {
        DIA: '8',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '2339.0',
        RDTO: '22.97',
        HUMEDAD: '49.2',
        ACIDEZ: '0.17',
        TICKET: '1647'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '795.0',
        RDTO: '21.81',
        HUMEDAD: '48.11',
        ACIDEZ: '0.4',
        TICKET: '507'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '881.0',
        RDTO: '19.47',
        HUMEDAD: '54.12',
        ACIDEZ: '0.4',
        TICKET: '508'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '648.0',
        RDTO: '22.47',
        HUMEDAD: '49.2',
        ACIDEZ: '0.17',
        TICKET: '509'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '735.0',
        RDTO: '19.17',
        HUMEDAD: '54.08',
        ACIDEZ: '0.42',
        TICKET: '510'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1811.0',
        RDTO: '20.27',
        HUMEDAD: '54.09',
        ACIDEZ: '0.33',
        TICKET: '511'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4057.0',
        RDTO: '17.59',
        HUMEDAD: '57.26',
        ACIDEZ: '0.17',
        TICKET: '512'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1542.0',
        RDTO: '18.58',
        HUMEDAD: '55.53',
        ACIDEZ: '0.33',
        TICKET: '513'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '533.0',
        RDTO: '18.1',
        HUMEDAD: '56.09',
        ACIDEZ: '0.42',
        TICKET: '514'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1004.0',
        RDTO: '17.71',
        HUMEDAD: '57.56',
        ACIDEZ: '0.46',
        TICKET: '515'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4703.0',
        RDTO: '19.07',
        HUMEDAD: '53.29',
        ACIDEZ: '0.26',
        TICKET: '516'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2232.0',
        RDTO: '20.56',
        HUMEDAD: '50.93',
        ACIDEZ: '0.22',
        TICKET: '517'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4282.0',
        RDTO: '18.61',
        HUMEDAD: '54.13',
        ACIDEZ: '0.37',
        TICKET: '519'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1070.0',
        RDTO: '18.61',
        HUMEDAD: '54.13',
        ACIDEZ: '0.37',
        TICKET: '520'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '926.0',
        RDTO: '22.3',
        HUMEDAD: '50.43',
        ACIDEZ: '0.35',
        TICKET: '521'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '968.0',
        RDTO: '13.51',
        HUMEDAD: '58.04',
        ACIDEZ: '0.19',
        TICKET: '522'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2707.0',
        RDTO: '17.16',
        HUMEDAD: '59.51',
        ACIDEZ: '0.24',
        TICKET: '523'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1741.0',
        RDTO: '22.73',
        HUMEDAD: '50.25',
        ACIDEZ: '0.3',
        TICKET: '524'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2776.0',
        RDTO: '20.03',
        HUMEDAD: '53.51',
        ACIDEZ: '0.23',
        TICKET: '525'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1110.0',
        RDTO: '16.85',
        HUMEDAD: '54.52',
        ACIDEZ: '0.16',
        TICKET: '526'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1765.0',
        RDTO: '17.97',
        HUMEDAD: '54.76',
        ACIDEZ: '0.14',
        TICKET: '527'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '6793.0',
        RDTO: '18.08',
        HUMEDAD: '57.14',
        ACIDEZ: '0.31',
        TICKET: '528'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1273.0',
        RDTO: '20.33',
        HUMEDAD: '52.62',
        ACIDEZ: '0.38',
        TICKET: '529'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '852.0',
        RDTO: '18.66',
        HUMEDAD: '53.57',
        ACIDEZ: '0.25',
        TICKET: '530'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '286.0',
        RDTO: '19.68',
        HUMEDAD: '57.35',
        ACIDEZ: '0.27',
        TICKET: '531'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '953.0',
        RDTO: '21.55',
        HUMEDAD: '52.14',
        ACIDEZ: '0.21',
        TICKET: '532'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5028.0',
        RDTO: '16.87',
        HUMEDAD: '57.9',
        ACIDEZ: '0.29',
        TICKET: '533'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '304.0',
        RDTO: '17.68',
        HUMEDAD: '56.68',
        ACIDEZ: '0.19',
        TICKET: '535'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4625.0',
        RDTO: '19.46',
        HUMEDAD: '54.35',
        ACIDEZ: '0.22',
        TICKET: '536'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '586.0',
        RDTO: '17.53',
        HUMEDAD: '55.28',
        ACIDEZ: '0.34',
        TICKET: '537'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4140.0',
        RDTO: '21.42',
        HUMEDAD: '53.23',
        ACIDEZ: '0.24',
        TICKET: '538'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1113.0',
        RDTO: '20.56',
        HUMEDAD: '50.63',
        ACIDEZ: '0.13',
        TICKET: '539'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '381.0',
        RDTO: '15.43',
        HUMEDAD: '56.8',
        ACIDEZ: '0.29',
        TICKET: '540'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4247.0',
        RDTO: '21.98',
        HUMEDAD: '52.53',
        ACIDEZ: '0.22',
        TICKET: '541'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '314.0',
        RDTO: '20.39',
        HUMEDAD: '51.15',
        ACIDEZ: '0.4',
        TICKET: '542'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '314.0',
        RDTO: '21.43',
        HUMEDAD: '49.87',
        ACIDEZ: '0.35',
        TICKET: '543'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '730.0',
        RDTO: '19.9',
        HUMEDAD: '52.66',
        ACIDEZ: '0.3',
        TICKET: '544'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '596.0',
        RDTO: '20.14',
        HUMEDAD: '50.72',
        ACIDEZ: '0.2',
        TICKET: '545'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '543.0',
        RDTO: '19.59',
        HUMEDAD: '55.48',
        ACIDEZ: '0.31',
        TICKET: '546'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2258.0',
        RDTO: '20.87',
        HUMEDAD: '52.12',
        ACIDEZ: '0.23',
        TICKET: '547'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4196.0',
        RDTO: '22.52',
        HUMEDAD: '54.51',
        ACIDEZ: '0.21',
        TICKET: '534'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '345.0',
        RDTO: '21.07',
        HUMEDAD: '50.72',
        ACIDEZ: '0.25',
        TICKET: '548'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1534.0',
        RDTO: '19.62',
        HUMEDAD: '53.9',
        ACIDEZ: '0.28',
        TICKET: '549'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1435.0',
        RDTO: '16.46',
        HUMEDAD: '59.65',
        ACIDEZ: '0.37',
        TICKET: '550'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2047.0',
        RDTO: '18.8',
        HUMEDAD: '54.93',
        ACIDEZ: '0.31',
        TICKET: '551'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2819.0',
        RDTO: '19.84',
        HUMEDAD: '51.71',
        ACIDEZ: '0.23',
        TICKET: '552'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1387.0',
        RDTO: '15.85',
        HUMEDAD: '56.63',
        ACIDEZ: '0.32',
        TICKET: '553'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3843.0',
        RDTO: '18.93',
        HUMEDAD: '53.44',
        ACIDEZ: '0.31',
        TICKET: '554'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2358.0',
        RDTO: '18.58',
        HUMEDAD: '56.1',
        ACIDEZ: '0.35',
        TICKET: '555'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '781.0',
        RDTO: '22.38',
        HUMEDAD: '52.14',
        ACIDEZ: '0.33',
        TICKET: '556'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3950.0',
        RDTO: '20.59',
        HUMEDAD: '50.55',
        ACIDEZ: '0.27',
        TICKET: '557'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '988.0',
        RDTO: '20.59',
        HUMEDAD: '50.55',
        ACIDEZ: '0.27',
        TICKET: '558'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '965.0',
        RDTO: '19.32',
        HUMEDAD: '55.05',
        ACIDEZ: '0.33',
        TICKET: '559'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2212.0',
        RDTO: '20.58',
        HUMEDAD: '52.21',
        ACIDEZ: '0.25',
        TICKET: '560'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2142.0',
        RDTO: '21.72',
        HUMEDAD: '49.97',
        ACIDEZ: '0.31',
        TICKET: '561'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '984.0',
        RDTO: '14.9',
        HUMEDAD: '55.54',
        ACIDEZ: '0.05',
        TICKET: '562'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5622.0',
        RDTO: '17.77',
        HUMEDAD: '54.94',
        ACIDEZ: '0.21',
        TICKET: '563'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '6153.0',
        RDTO: '18.45',
        HUMEDAD: '55.72',
        ACIDEZ: '0.23',
        TICKET: '564'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4438.0',
        RDTO: '18.78',
        HUMEDAD: '55.2',
        ACIDEZ: '0.23',
        TICKET: '565'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1137.0',
        RDTO: '19.94',
        HUMEDAD: '52.78',
        ACIDEZ: '0.23',
        TICKET: '566'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5136.0',
        RDTO: '19.3',
        HUMEDAD: '54.79',
        ACIDEZ: '0.23',
        TICKET: '567'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '484.0',
        RDTO: '20.73',
        HUMEDAD: '52.79',
        ACIDEZ: '0.4',
        TICKET: '568'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '13654.0',
        RDTO: '21.86',
        HUMEDAD: '48.6',
        ACIDEZ: '0.26',
        TICKET: '569'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4261.0',
        RDTO: '16.35',
        HUMEDAD: '55.48',
        ACIDEZ: '0.26',
        TICKET: '570'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3825.0',
        RDTO: '21.84',
        HUMEDAD: '54.16',
        ACIDEZ: '0.22',
        TICKET: '571'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '215.0',
        RDTO: '18.98',
        HUMEDAD: '53.22',
        ACIDEZ: '0.16',
        TICKET: '572'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '581.0',
        RDTO: '14.37',
        HUMEDAD: '57.58',
        ACIDEZ: '0.17',
        TICKET: '573'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '959.0',
        RDTO: '19.94',
        HUMEDAD: '54.71',
        ACIDEZ: '0.35',
        TICKET: '574'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '673.0',
        RDTO: '21.42',
        HUMEDAD: '49.87',
        ACIDEZ: '0.46',
        TICKET: '575'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3929.0',
        RDTO: '21.46',
        HUMEDAD: '55.03',
        ACIDEZ: '0.24',
        TICKET: '576'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1435.0',
        RDTO: '20.17',
        HUMEDAD: '50.51',
        ACIDEZ: '0.07',
        TICKET: '577'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '381.0',
        RDTO: '17.66',
        HUMEDAD: '56.56',
        ACIDEZ: '0.28',
        TICKET: '578'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3564.0',
        RDTO: '18.81',
        HUMEDAD: '55.02',
        ACIDEZ: '0.36',
        TICKET: '579'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '328.0',
        RDTO: '20.99',
        HUMEDAD: '51.7',
        ACIDEZ: '0.35',
        TICKET: '580'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '328.0',
        RDTO: '20.99',
        HUMEDAD: '51.7',
        ACIDEZ: '0.35',
        TICKET: '581'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '904.0',
        RDTO: '18.48',
        HUMEDAD: '54.94',
        ACIDEZ: '0.28',
        TICKET: '582'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1594.0',
        RDTO: '18.74',
        HUMEDAD: '55.42',
        ACIDEZ: '0.42',
        TICKET: '583'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '520.0',
        RDTO: '20.59',
        HUMEDAD: '50.75',
        ACIDEZ: '0.21',
        TICKET: '584'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '524.0',
        RDTO: '19.03',
        HUMEDAD: '54.79',
        ACIDEZ: '0.2',
        TICKET: '585'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '457.0',
        RDTO: '20.49',
        HUMEDAD: '50.41',
        ACIDEZ: '0.32',
        TICKET: '586'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '560.0',
        RDTO: '17.13',
        HUMEDAD: '54.56',
        ACIDEZ: '0.22',
        TICKET: '587'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1308.0',
        RDTO: '19.09',
        HUMEDAD: '54.47',
        ACIDEZ: '0.36',
        TICKET: '588'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1214.0',
        RDTO: '20.75',
        HUMEDAD: '50.72',
        ACIDEZ: '0.3',
        TICKET: '589'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1014.0',
        RDTO: '17.39',
        HUMEDAD: '57.03',
        ACIDEZ: '0.24',
        TICKET: '590'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '882.0',
        RDTO: '17.55',
        HUMEDAD: '56.36',
        ACIDEZ: '0.31',
        TICKET: '591'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '704.0',
        RDTO: '16.72',
        HUMEDAD: '57.79',
        ACIDEZ: '0.44',
        TICKET: '592'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1302.0',
        RDTO: '25.42',
        HUMEDAD: '45.17',
        ACIDEZ: '0.21',
        TICKET: '593'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2624.0',
        RDTO: '20.13',
        HUMEDAD: '52.09',
        ACIDEZ: '0.3',
        TICKET: '594'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1118.0',
        RDTO: '19.69',
        HUMEDAD: '51.79',
        ACIDEZ: '0.2',
        TICKET: '595'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1610.0',
        RDTO: '18.9',
        HUMEDAD: '54.92',
        ACIDEZ: '0.25',
        TICKET: '596'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1028.0',
        RDTO: '20.86',
        HUMEDAD: '50.61',
        ACIDEZ: '0.24',
        TICKET: '597'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4111.0',
        RDTO: '20.86',
        HUMEDAD: '50.61',
        ACIDEZ: '0.24',
        TICKET: '598'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2766.0',
        RDTO: '18.57',
        HUMEDAD: '54.01',
        ACIDEZ: '0.39',
        TICKET: '599'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1781.0',
        RDTO: '17.49',
        HUMEDAD: '52.38',
        ACIDEZ: '0.21',
        TICKET: '600'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2066.0',
        RDTO: '22.65',
        HUMEDAD: '48.31',
        ACIDEZ: '0.22',
        TICKET: '601'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '959.0',
        RDTO: '23.05',
        HUMEDAD: '50.81',
        ACIDEZ: '0.22',
        TICKET: '602'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '748.0',
        RDTO: '17.15',
        HUMEDAD: '55.77',
        ACIDEZ: '0.23',
        TICKET: '603'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5088.0',
        RDTO: '18.42',
        HUMEDAD: '55.78',
        ACIDEZ: '0.3',
        TICKET: '604'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3878.0',
        RDTO: '20.76',
        HUMEDAD: '50.12',
        ACIDEZ: '0.23',
        TICKET: '605'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4559.0',
        RDTO: '17.8',
        HUMEDAD: '56.32',
        ACIDEZ: '0.22',
        TICKET: '606'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1035.0',
        RDTO: '19.77',
        HUMEDAD: '51.88',
        ACIDEZ: '0.24',
        TICKET: '607'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5044.0',
        RDTO: '19.59',
        HUMEDAD: '53.86',
        ACIDEZ: '0.23',
        TICKET: '608'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '461.0',
        RDTO: '14.47',
        HUMEDAD: '54.45',
        ACIDEZ: '0.09',
        TICKET: '609'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '492.0',
        RDTO: '20.51',
        HUMEDAD: '51.49',
        ACIDEZ: '0.26',
        TICKET: '610'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '559.0',
        RDTO: '14.21',
        HUMEDAD: '55.5',
        ACIDEZ: '0.13',
        TICKET: '611'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '824.0',
        RDTO: '18.53',
        HUMEDAD: '57.01',
        ACIDEZ: '0.27',
        TICKET: '612'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '477.0',
        RDTO: '19.86',
        HUMEDAD: '54.81',
        ACIDEZ: '0.19',
        TICKET: '613'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3526.0',
        RDTO: '17.69',
        HUMEDAD: '56.79',
        ACIDEZ: '0.21',
        TICKET: '614'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '336.0',
        RDTO: '22.04',
        HUMEDAD: '47.01',
        ACIDEZ: '0.22',
        TICKET: '615'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '452.0',
        RDTO: '21.12',
        HUMEDAD: '48.91',
        ACIDEZ: '0.21',
        TICKET: '616'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1809.0',
        RDTO: '21.12',
        HUMEDAD: '48.91',
        ACIDEZ: '0.21',
        TICKET: '617'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1363.0',
        RDTO: '17.9',
        HUMEDAD: '55.43',
        ACIDEZ: '0.24',
        TICKET: '618'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3654.0',
        RDTO: '21.76',
        HUMEDAD: '53.1',
        ACIDEZ: '0.22',
        TICKET: '619'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1416.0',
        RDTO: '23.36',
        HUMEDAD: '47.7',
        ACIDEZ: '0.3',
        TICKET: '620'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4342.0',
        RDTO: '19.3',
        HUMEDAD: '53.08',
        ACIDEZ: '0.36',
        TICKET: '621'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1947.0',
        RDTO: '20.99',
        HUMEDAD: '50.52',
        ACIDEZ: '0.39',
        TICKET: '622'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '551.0',
        RDTO: '19.75',
        HUMEDAD: '53.52',
        ACIDEZ: '0.34',
        TICKET: '623'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1488.0',
        RDTO: '22.69',
        HUMEDAD: '48.45',
        ACIDEZ: '0.24',
        TICKET: '624'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1379.0',
        RDTO: '17.62',
        HUMEDAD: '54.74',
        ACIDEZ: '0.28',
        TICKET: '625'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '410.0',
        RDTO: '20.38',
        HUMEDAD: '51.61',
        ACIDEZ: '0.22',
        TICKET: '626'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '687.0',
        RDTO: '19.91',
        HUMEDAD: '49.34',
        ACIDEZ: '0.21',
        TICKET: '627'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '455.0',
        RDTO: '21.07',
        HUMEDAD: '51.05',
        ACIDEZ: '0.47',
        TICKET: '628'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '638.0',
        RDTO: '18.08',
        HUMEDAD: '54.43',
        ACIDEZ: '0.49',
        TICKET: '629'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '711.0',
        RDTO: '20.55',
        HUMEDAD: '49.8',
        ACIDEZ: '0.24',
        TICKET: '630'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1835.0',
        RDTO: '20.49',
        HUMEDAD: '52.94',
        ACIDEZ: '0.47',
        TICKET: '631'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '8418.0',
        RDTO: '18.4',
        HUMEDAD: '56.29',
        ACIDEZ: '0.31',
        TICKET: '632'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1651.0',
        RDTO: '18.56',
        HUMEDAD: '57.24',
        ACIDEZ: '0.26',
        TICKET: '633'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2067.0',
        RDTO: '19.15',
        HUMEDAD: '53.85',
        ACIDEZ: '0.38',
        TICKET: '634'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2310.0',
        RDTO: '20.95',
        HUMEDAD: '49.93',
        ACIDEZ: '0.23',
        TICKET: '635'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1767.0',
        RDTO: '20.8',
        HUMEDAD: '49.13',
        ACIDEZ: '0.24',
        TICKET: '636'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3633.0',
        RDTO: '18.63',
        HUMEDAD: '57.29',
        ACIDEZ: '0.44',
        TICKET: '637'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '341.0',
        RDTO: '18.44',
        HUMEDAD: '53.2',
        ACIDEZ: '0.22',
        TICKET: '638'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1364.0',
        RDTO: '18.44',
        HUMEDAD: '53.2',
        ACIDEZ: '0.22',
        TICKET: '639'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3614.0',
        RDTO: '19.67',
        HUMEDAD: '55.46',
        ACIDEZ: '0.34',
        TICKET: '640'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '904.0',
        RDTO: '19.67',
        HUMEDAD: '55.46',
        ACIDEZ: '0.34',
        TICKET: '641'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '994.0',
        RDTO: '24.5',
        HUMEDAD: '44.16',
        ACIDEZ: '0.35',
        TICKET: '642'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '944.0',
        RDTO: '15.95',
        HUMEDAD: '56.59',
        ACIDEZ: '0.25',
        TICKET: '643'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2531.0',
        RDTO: '18.85',
        HUMEDAD: '55.13',
        ACIDEZ: '0.35',
        TICKET: '644'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1516.0',
        RDTO: '22.8',
        HUMEDAD: '47.05',
        ACIDEZ: '0.22',
        TICKET: '645'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '992.0',
        RDTO: '20.26',
        HUMEDAD: '53.9',
        ACIDEZ: '0.22',
        TICKET: '646'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3548.0',
        RDTO: '19.94',
        HUMEDAD: '50.26',
        ACIDEZ: '0.26',
        TICKET: '647'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '957.0',
        RDTO: '19.4',
        HUMEDAD: '51.54',
        ACIDEZ: '0.26',
        TICKET: '648'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '472.0',
        RDTO: '17.21',
        HUMEDAD: '55.11',
        ACIDEZ: '0.5',
        TICKET: '649'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1607.0',
        RDTO: '19.99',
        HUMEDAD: '54.4',
        ACIDEZ: '0.24',
        TICKET: '650'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1015.0',
        RDTO: '23.89',
        HUMEDAD: '49.52',
        ACIDEZ: '0.23',
        TICKET: '651'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1915.0',
        RDTO: '18.12',
        HUMEDAD: '55.39',
        ACIDEZ: '0.22',
        TICKET: '652'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '344.0',
        RDTO: '20.38',
        HUMEDAD: '51.29',
        ACIDEZ: '0.26',
        TICKET: '653'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '716.0',
        RDTO: '19.03',
        HUMEDAD: '56.62',
        ACIDEZ: '0.25',
        TICKET: '654'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5494.0',
        RDTO: '22.1',
        HUMEDAD: '53.79',
        ACIDEZ: '0.26',
        TICKET: '655'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '714.0',
        RDTO: '19.09',
        HUMEDAD: '53.39',
        ACIDEZ: '0.31',
        TICKET: '656'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '465.0',
        RDTO: '22.64',
        HUMEDAD: '49.52',
        ACIDEZ: '0.33',
        TICKET: '657'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2533.0',
        RDTO: '20.47',
        HUMEDAD: '52.26',
        ACIDEZ: '0.34',
        TICKET: '658'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1640.0',
        RDTO: '22.24',
        HUMEDAD: '48.35',
        ACIDEZ: '0.17',
        TICKET: '659'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '621.0',
        RDTO: '19.74',
        HUMEDAD: '53.07',
        ACIDEZ: '0.43',
        TICKET: '660'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '304.0',
        RDTO: '20.3',
        HUMEDAD: '53.51',
        ACIDEZ: '0.44',
        TICKET: '661'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4808.0',
        RDTO: '22.67',
        HUMEDAD: '53.53',
        ACIDEZ: '0.23',
        TICKET: '662'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2707.0',
        RDTO: '18.19',
        HUMEDAD: '54.69',
        ACIDEZ: '0.57',
        TICKET: '663'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '496.0',
        RDTO: '22.34',
        HUMEDAD: '49.47',
        ACIDEZ: '0.37',
        TICKET: '664'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '542.0',
        RDTO: '20.67',
        HUMEDAD: '54.64',
        ACIDEZ: '0.28',
        TICKET: '704'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '565.0',
        RDTO: '20.86',
        HUMEDAD: '52.74',
        ACIDEZ: '0.22',
        TICKET: '666'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1147.0',
        RDTO: '21.77',
        HUMEDAD: '51.52',
        ACIDEZ: '0.28',
        TICKET: '667'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1230.0',
        RDTO: '19.32',
        HUMEDAD: '52.28',
        ACIDEZ: '0.21',
        TICKET: '668'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '722.0',
        RDTO: '18.71',
        HUMEDAD: '55.41',
        ACIDEZ: '0.43',
        TICKET: '669'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '670.0',
        RDTO: '21.16',
        HUMEDAD: '50.34',
        ACIDEZ: '0.3',
        TICKET: '670'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '512.0',
        RDTO: '19.01',
        HUMEDAD: '54.28',
        ACIDEZ: '0.3',
        TICKET: '671'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '301.0',
        RDTO: '17.64',
        HUMEDAD: '51.98',
        ACIDEZ: '0.21',
        TICKET: '672'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1692.0',
        RDTO: '17.03',
        HUMEDAD: '54.92',
        ACIDEZ: '0.4',
        TICKET: '673'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '778.0',
        RDTO: '18.43',
        HUMEDAD: '54.27',
        ACIDEZ: '0.29',
        TICKET: '674'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1465.0',
        RDTO: '19.46',
        HUMEDAD: '54.77',
        ACIDEZ: '0.22',
        TICKET: '675'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1966.0',
        RDTO: '21.08',
        HUMEDAD: '49.15',
        ACIDEZ: '0.24',
        TICKET: '676'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '505.0',
        RDTO: '20.96',
        HUMEDAD: '50.73',
        ACIDEZ: '0.22',
        TICKET: '677'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '6762.0',
        RDTO: '20.01',
        HUMEDAD: '53.49',
        ACIDEZ: '0.48',
        TICKET: '678'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4046.0',
        RDTO: '19.34',
        HUMEDAD: '55.99',
        ACIDEZ: '0.42',
        TICKET: '679'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1302.0',
        RDTO: '26.42',
        HUMEDAD: '45.86',
        ACIDEZ: '0.28',
        TICKET: '680'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1795.0',
        RDTO: '20.6',
        HUMEDAD: '54.11',
        ACIDEZ: '0.36',
        TICKET: '681'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '919.0',
        RDTO: '23.63',
        HUMEDAD: '50.83',
        ACIDEZ: '0.25',
        TICKET: '682'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4491.0',
        RDTO: '21.48',
        HUMEDAD: '52.0',
        ACIDEZ: '0.24',
        TICKET: '683'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3626.0',
        RDTO: '22.35',
        HUMEDAD: '49.61',
        ACIDEZ: '0.23',
        TICKET: '684'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1895.0',
        RDTO: '23.47',
        HUMEDAD: '48.66',
        ACIDEZ: '0.24',
        TICKET: '685'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1783.0',
        RDTO: '18.19',
        HUMEDAD: '55.47',
        ACIDEZ: '0.25',
        TICKET: '686'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2867.0',
        RDTO: '20.03',
        HUMEDAD: '53.2',
        ACIDEZ: '0.26',
        TICKET: '687'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '8078.0',
        RDTO: '19.02',
        HUMEDAD: '55.41',
        ACIDEZ: '0.25',
        TICKET: '688'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2496.0',
        RDTO: '18.81',
        HUMEDAD: '54.37',
        ACIDEZ: '0.22',
        TICKET: '689'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '556.0',
        RDTO: '20.49',
        HUMEDAD: '55.88',
        ACIDEZ: '0.18',
        TICKET: '690'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1956.0',
        RDTO: '20.04',
        HUMEDAD: '54.82',
        ACIDEZ: '0.26',
        TICKET: '691'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '489.0',
        RDTO: '20.04',
        HUMEDAD: '54.82',
        ACIDEZ: '0.26',
        TICKET: '692'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4707.0',
        RDTO: '18.59',
        HUMEDAD: '55.53',
        ACIDEZ: '0.25',
        TICKET: '693'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '581.0',
        RDTO: '17.88',
        HUMEDAD: '53.78',
        ACIDEZ: '0.36',
        TICKET: '694'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '742.0',
        RDTO: '19.81',
        HUMEDAD: '51.48',
        ACIDEZ: '0.33',
        TICKET: '695'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3664.0',
        RDTO: '22.21',
        HUMEDAD: '53.33',
        ACIDEZ: '0.35',
        TICKET: '697'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '387.0',
        RDTO: '20.22',
        HUMEDAD: '54.83',
        ACIDEZ: '0.23',
        TICKET: '696'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '798.0',
        RDTO: '20.55',
        HUMEDAD: '51.07',
        ACIDEZ: '0.24',
        TICKET: '705'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1302.0',
        RDTO: '19.24',
        HUMEDAD: '53.94',
        ACIDEZ: '0.25',
        TICKET: '706'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '489.0',
        RDTO: '24.18',
        HUMEDAD: '46.85',
        ACIDEZ: '0.23',
        TICKET: '707'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '348.0',
        RDTO: '20.47',
        HUMEDAD: '50.65',
        ACIDEZ: '0.23',
        TICKET: '708'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '642.0',
        RDTO: '21.38',
        HUMEDAD: '50.13',
        ACIDEZ: '0.29',
        TICKET: '709'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4476.0',
        RDTO: '19.68',
        HUMEDAD: '52.52',
        ACIDEZ: '0.26',
        TICKET: '710'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '632.0',
        RDTO: '22.23',
        HUMEDAD: '49.76',
        ACIDEZ: '0.24',
        TICKET: '711'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3684.0',
        RDTO: '18.46',
        HUMEDAD: '52.13',
        ACIDEZ: '0.35',
        TICKET: '698'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '588.0',
        RDTO: '17.63',
        HUMEDAD: '50.84',
        ACIDEZ: '0.27',
        TICKET: '699'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1633.0',
        RDTO: '23.93',
        HUMEDAD: '47.41',
        ACIDEZ: '0.28',
        TICKET: '700'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '998.0',
        RDTO: '23.49',
        HUMEDAD: '46.72',
        ACIDEZ: '0.23',
        TICKET: '701'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1117.0',
        RDTO: '21.45',
        HUMEDAD: '48.95',
        ACIDEZ: '0.31',
        TICKET: '702'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3597.0',
        RDTO: '23.94',
        HUMEDAD: '52.2',
        ACIDEZ: '0.37',
        TICKET: '703'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1384.0',
        RDTO: '17.57',
        HUMEDAD: '54.13',
        ACIDEZ: '0.23',
        TICKET: '712'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '608.0',
        RDTO: '21.15',
        HUMEDAD: '49.24',
        ACIDEZ: '0.28',
        TICKET: '713'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '164.0',
        RDTO: '23.77',
        HUMEDAD: '46.27',
        ACIDEZ: '0.25',
        TICKET: '714'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1270.0',
        RDTO: '21.6',
        HUMEDAD: '52.97',
        ACIDEZ: '0.62',
        TICKET: '715'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '886.0',
        RDTO: '20.57',
        HUMEDAD: '53.68',
        ACIDEZ: '0.33',
        TICKET: '716'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '665.0',
        RDTO: '25.05',
        HUMEDAD: '42.14',
        ACIDEZ: '0.19',
        TICKET: '717'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '462.0',
        RDTO: '19.76',
        HUMEDAD: '51.39',
        ACIDEZ: '0.53',
        TICKET: '718'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '758.0',
        RDTO: '22.19',
        HUMEDAD: '50.08',
        ACIDEZ: '0.27',
        TICKET: '719'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1342.0',
        RDTO: '19.79',
        HUMEDAD: '53.8',
        ACIDEZ: '0.31',
        TICKET: '720'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2213.0',
        RDTO: '22.18',
        HUMEDAD: '48.1',
        ACIDEZ: '0.23',
        TICKET: '721'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3324.0',
        RDTO: '24.12',
        HUMEDAD: '47.87',
        ACIDEZ: '0.22',
        TICKET: '722'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1248.0',
        RDTO: '28.42',
        HUMEDAD: '43.19',
        ACIDEZ: '0.49',
        TICKET: '723'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '613.0',
        RDTO: '24.46',
        HUMEDAD: '48.0',
        ACIDEZ: '0.15',
        TICKET: '724'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '959.0',
        RDTO: '23.12',
        HUMEDAD: '50.74',
        ACIDEZ: '0.34',
        TICKET: '725'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4949.0',
        RDTO: '18.77',
        HUMEDAD: '54.21',
        ACIDEZ: '0.34',
        TICKET: '726'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2140.0',
        RDTO: '23.49',
        HUMEDAD: '48.69',
        ACIDEZ: '0.32',
        TICKET: '727'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1189.0',
        RDTO: '20.83',
        HUMEDAD: '50.15',
        ACIDEZ: '0.26',
        TICKET: '728'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2963.0',
        RDTO: '18.62',
        HUMEDAD: '56.82',
        ACIDEZ: '0.19',
        TICKET: '729'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1989.0',
        RDTO: '20.0',
        HUMEDAD: '54.81',
        ACIDEZ: '0.35',
        TICKET: '730'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1817.0',
        RDTO: '19.91',
        HUMEDAD: '49.71',
        ACIDEZ: '0.17',
        TICKET: '733'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3496.0',
        RDTO: '20.6',
        HUMEDAD: '51.16',
        ACIDEZ: '0.21',
        TICKET: '734'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2709.0',
        RDTO: '19.08',
        HUMEDAD: '54.07',
        ACIDEZ: '0.32',
        TICKET: '731'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '8500.0',
        RDTO: '18.62',
        HUMEDAD: '55.66',
        ACIDEZ: '0.26',
        TICKET: '732'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1086.0',
        RDTO: '18.46',
        HUMEDAD: '55.89',
        ACIDEZ: '0.28',
        TICKET: '735'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '557.0',
        RDTO: '18.68',
        HUMEDAD: '53.16',
        ACIDEZ: '0.21',
        TICKET: '736'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4785.0',
        RDTO: '20.71',
        HUMEDAD: '52.27',
        ACIDEZ: '0.26',
        TICKET: '737'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1626.0',
        RDTO: '17.77',
        HUMEDAD: '53.63',
        ACIDEZ: '0.3',
        TICKET: '752'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1717.0',
        RDTO: '21.06',
        HUMEDAD: '49.27',
        ACIDEZ: '0.2',
        TICKET: '738'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '403.0',
        RDTO: '20.5',
        HUMEDAD: '51.37',
        ACIDEZ: '0.2',
        TICKET: '739'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '840.0',
        RDTO: '21.84',
        HUMEDAD: '47.97',
        ACIDEZ: '0.24',
        TICKET: '753'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1185.0',
        RDTO: '19.72',
        HUMEDAD: '52.11',
        ACIDEZ: '0.34',
        TICKET: '754'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1467.0',
        RDTO: '20.42',
        HUMEDAD: '51.98',
        ACIDEZ: '0.34',
        TICKET: '755'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '306.0',
        RDTO: '20.54',
        HUMEDAD: '49.87',
        ACIDEZ: '0.15',
        TICKET: '756'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '567.0',
        RDTO: '21.34',
        HUMEDAD: '50.6',
        ACIDEZ: '0.29',
        TICKET: '757'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '655.0',
        RDTO: '20.86',
        HUMEDAD: '49.13',
        ACIDEZ: '0.23',
        TICKET: '740'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '449.0',
        RDTO: '21.13',
        HUMEDAD: '48.95',
        ACIDEZ: '0.22',
        TICKET: '741'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2762.0',
        RDTO: '18.87',
        HUMEDAD: '53.22',
        ACIDEZ: '0.29',
        TICKET: '742'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '354.0',
        RDTO: '18.69',
        HUMEDAD: '53.22',
        ACIDEZ: '0.44',
        TICKET: '743'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1183.0',
        RDTO: '19.7',
        HUMEDAD: '51.76',
        ACIDEZ: '0.28',
        TICKET: '744'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '499.0',
        RDTO: '20.58',
        HUMEDAD: '49.11',
        ACIDEZ: '0.26',
        TICKET: '745'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4429.0',
        RDTO: '20.62',
        HUMEDAD: '52.32',
        ACIDEZ: '0.31',
        TICKET: '746'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '648.0',
        RDTO: '20.81',
        HUMEDAD: '49.48',
        ACIDEZ: '0.35',
        TICKET: '747'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '964.0',
        RDTO: '18.42',
        HUMEDAD: '52.93',
        ACIDEZ: '0.3',
        TICKET: '748'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1145.0',
        RDTO: '25.19',
        HUMEDAD: '46.27',
        ACIDEZ: '0.23',
        TICKET: '749'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '953.0',
        RDTO: '23.8',
        HUMEDAD: '42.47',
        ACIDEZ: '0.23',
        TICKET: '750'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '404.0',
        RDTO: '22.52',
        HUMEDAD: '45.32',
        ACIDEZ: '0.23',
        TICKET: '751'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3188.0',
        RDTO: '18.93',
        HUMEDAD: '54.63',
        ACIDEZ: '0.2',
        TICKET: '758'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '612.0',
        RDTO: '21.73',
        HUMEDAD: '50.28',
        ACIDEZ: '0.22',
        TICKET: '759'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '716.0',
        RDTO: '18.87',
        HUMEDAD: '56.68',
        ACIDEZ: '0.22',
        TICKET: '760'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '533.0',
        RDTO: '22.37',
        HUMEDAD: '48.52',
        ACIDEZ: '0.53',
        TICKET: '761'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '942.0',
        RDTO: '17.49',
        HUMEDAD: '57.85',
        ACIDEZ: '0.37',
        TICKET: '762'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '833.0',
        RDTO: '23.02',
        HUMEDAD: '48.83',
        ACIDEZ: '0.37',
        TICKET: '763'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '937.0',
        RDTO: '22.64',
        HUMEDAD: '42.63',
        ACIDEZ: '0.18',
        TICKET: '764'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2167.0',
        RDTO: '19.63',
        HUMEDAD: '54.65',
        ACIDEZ: '0.2',
        TICKET: '765'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1009.0',
        RDTO: '19.81',
        HUMEDAD: '52.01',
        ACIDEZ: '0.27',
        TICKET: '766'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1015.0',
        RDTO: '21.26',
        HUMEDAD: '51.5',
        ACIDEZ: '0.48',
        TICKET: '767'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2455.0',
        RDTO: '21.42',
        HUMEDAD: '46.79',
        ACIDEZ: '0.21',
        TICKET: '768'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3197.0',
        RDTO: '22.27',
        HUMEDAD: '49.86',
        ACIDEZ: '0.41',
        TICKET: '769'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2569.0',
        RDTO: '20.5',
        HUMEDAD: '54.56',
        ACIDEZ: '0.49',
        TICKET: '770'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1752.0',
        RDTO: '18.69',
        HUMEDAD: '52.6',
        ACIDEZ: '0.32',
        TICKET: '771'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2629.0',
        RDTO: '18.69',
        HUMEDAD: '52.6',
        ACIDEZ: '0.32',
        TICKET: '772'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '857.0',
        RDTO: '20.51',
        HUMEDAD: '52.92',
        ACIDEZ: '0.51',
        TICKET: '773'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '7171.0',
        RDTO: '17.19',
        HUMEDAD: '54.57',
        ACIDEZ: '0.29',
        TICKET: '774'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2344.0',
        RDTO: '22.19',
        HUMEDAD: '48.23',
        ACIDEZ: '0.22',
        TICKET: '775'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3484.0',
        RDTO: '20.07',
        HUMEDAD: '53.65',
        ACIDEZ: '0.21',
        TICKET: '776'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4368.0',
        RDTO: '20.14',
        HUMEDAD: '51.18',
        ACIDEZ: '0.26',
        TICKET: '777'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5167.0',
        RDTO: '22.02',
        HUMEDAD: '51.46',
        ACIDEZ: '0.22',
        TICKET: '778'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '781.0',
        RDTO: '21.51',
        HUMEDAD: '50.26',
        ACIDEZ: '0.21',
        TICKET: '779'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2635.0',
        RDTO: '19.69',
        HUMEDAD: '52.66',
        ACIDEZ: '0.25',
        TICKET: '780'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4378.0',
        RDTO: '20.25',
        HUMEDAD: '50.78',
        ACIDEZ: '0.3',
        TICKET: '781'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4237.0',
        RDTO: '20.5',
        HUMEDAD: '50.18',
        ACIDEZ: '0.29',
        TICKET: '782'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1092.0',
        RDTO: '19.51',
        HUMEDAD: '54.75',
        ACIDEZ: '0.33',
        TICKET: '783'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5111.0',
        RDTO: '20.84',
        HUMEDAD: '53.26',
        ACIDEZ: '0.29',
        TICKET: '784'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '597.0',
        RDTO: '22.57',
        HUMEDAD: '51.56',
        ACIDEZ: '0.29',
        TICKET: '785'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '369.0',
        RDTO: '16.14',
        HUMEDAD: '55.31',
        ACIDEZ: '0.2',
        TICKET: '786'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2599.0',
        RDTO: '15.97',
        HUMEDAD: '56.6',
        ACIDEZ: '0.3',
        TICKET: '787'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3404.0',
        RDTO: '20.77',
        HUMEDAD: '51.33',
        ACIDEZ: '0.21',
        TICKET: '788'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '291.0',
        RDTO: '20.66',
        HUMEDAD: '50.05',
        ACIDEZ: '0.22',
        TICKET: '789'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '660.0',
        RDTO: '20.59',
        HUMEDAD: '54.51',
        ACIDEZ: '0.31',
        TICKET: '790'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1001.0',
        RDTO: '21.29',
        HUMEDAD: '50.51',
        ACIDEZ: '0.32',
        TICKET: '791'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '593.0',
        RDTO: '20.15',
        HUMEDAD: '54.51',
        ACIDEZ: '0.17',
        TICKET: '792'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '304.0',
        RDTO: '19.66',
        HUMEDAD: '54.61',
        ACIDEZ: '0.2',
        TICKET: '793'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3806.0',
        RDTO: '19.49',
        HUMEDAD: '53.4',
        ACIDEZ: '0.24',
        TICKET: '795'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1145.0',
        RDTO: '19.01',
        HUMEDAD: '55.74',
        ACIDEZ: '0.29',
        TICKET: '796'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '765.0',
        RDTO: '21.17',
        HUMEDAD: '50.53',
        ACIDEZ: '0.29',
        TICKET: '797'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '702.0',
        RDTO: '19.44',
        HUMEDAD: '53.87',
        ACIDEZ: '0.36',
        TICKET: '798'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1098.0',
        RDTO: '22.33',
        HUMEDAD: '47.07',
        ACIDEZ: '0.18',
        TICKET: '799'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1679.0',
        RDTO: '19.76',
        HUMEDAD: '53.24',
        ACIDEZ: '0.44',
        TICKET: '800'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '698.0',
        RDTO: '18.33',
        HUMEDAD: '53.56',
        ACIDEZ: '0.31',
        TICKET: '801'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1995.0',
        RDTO: '21.62',
        HUMEDAD: '47.55',
        ACIDEZ: '0.23',
        TICKET: '802'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4127.0',
        RDTO: '19.31',
        HUMEDAD: '57.36',
        ACIDEZ: '0.27',
        TICKET: '794'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '514.0',
        RDTO: '21.97',
        HUMEDAD: '47.83',
        ACIDEZ: '0.22',
        TICKET: '803'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '531.0',
        RDTO: '18.95',
        HUMEDAD: '50.33',
        ACIDEZ: '0.19',
        TICKET: '804'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '651.0',
        RDTO: '22.74',
        HUMEDAD: '49.87',
        ACIDEZ: '0.56',
        TICKET: '805'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2015.0',
        RDTO: '21.16',
        HUMEDAD: '48.0',
        ACIDEZ: '0.19',
        TICKET: '806'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1190.0',
        RDTO: '22.3',
        HUMEDAD: '47.24',
        ACIDEZ: '0.21',
        TICKET: '807'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1134.0',
        RDTO: '20.91',
        HUMEDAD: '49.48',
        ACIDEZ: '0.24',
        TICKET: '808'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '770.0',
        RDTO: '20.87',
        HUMEDAD: '49.35',
        ACIDEZ: '0.29',
        TICKET: '809'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2258.0',
        RDTO: '22.18',
        HUMEDAD: '47.77',
        ACIDEZ: '0.21',
        TICKET: '818'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '854.0',
        RDTO: '22.25',
        HUMEDAD: '48.46',
        ACIDEZ: '0.33',
        TICKET: '810'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '886.0',
        RDTO: '20.64',
        HUMEDAD: '51.28',
        ACIDEZ: '0.44',
        TICKET: '811'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3037.0',
        RDTO: '17.5',
        HUMEDAD: '52.64',
        ACIDEZ: '0.35',
        TICKET: '812'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1174.0',
        RDTO: '19.79',
        HUMEDAD: '54.21',
        ACIDEZ: '0.41',
        TICKET: '813'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2637.0',
        RDTO: '19.75',
        HUMEDAD: '54.12',
        ACIDEZ: '0.31',
        TICKET: '814'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2174.0',
        RDTO: '18.91',
        HUMEDAD: '53.61',
        ACIDEZ: '0.31',
        TICKET: '815'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2174.0',
        RDTO: '18.91',
        HUMEDAD: '53.61',
        ACIDEZ: '0.31',
        TICKET: '816'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '8339.0',
        RDTO: '17.85',
        HUMEDAD: '56.42',
        ACIDEZ: '0.21',
        TICKET: '817'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '341.0',
        RDTO: '23.17',
        HUMEDAD: '47.68',
        ACIDEZ: '0.33',
        TICKET: '819'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3256.0',
        RDTO: '22.98',
        HUMEDAD: '48.82',
        ACIDEZ: '0.21',
        TICKET: '820'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '766.0',
        RDTO: '23.17',
        HUMEDAD: '48.63',
        ACIDEZ: '0.22',
        TICKET: '821'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2669.0',
        RDTO: '20.22',
        HUMEDAD: '52.58',
        ACIDEZ: '0.45',
        TICKET: '822'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3384.0',
        RDTO: '20.76',
        HUMEDAD: '48.19',
        ACIDEZ: '0.22',
        TICKET: '823'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4278.0',
        RDTO: '19.49',
        HUMEDAD: '53.14',
        ACIDEZ: '0.37',
        TICKET: '824'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '467.0',
        RDTO: '20.21',
        HUMEDAD: '47.98',
        ACIDEZ: '0.19',
        TICKET: '825'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1410.0',
        RDTO: '17.84',
        HUMEDAD: '53.74',
        ACIDEZ: '0.33',
        TICKET: '826'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '494.0',
        RDTO: '18.43',
        HUMEDAD: '52.72',
        ACIDEZ: '0.22',
        TICKET: '827'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5350.0',
        RDTO: '17.36',
        HUMEDAD: '58.49',
        ACIDEZ: '0.31',
        TICKET: '828'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2858.0',
        RDTO: '21.44',
        HUMEDAD: '46.73',
        ACIDEZ: '0.22',
        TICKET: '829'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '356.0',
        RDTO: '19.37',
        HUMEDAD: '53.33',
        ACIDEZ: '0.29',
        TICKET: '830'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '542.0',
        RDTO: '20.02',
        HUMEDAD: '52.72',
        ACIDEZ: '0.21',
        TICKET: '831'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '567.0',
        RDTO: '17.58',
        HUMEDAD: '51.92',
        ACIDEZ: '0.21',
        TICKET: '832'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '461.0',
        RDTO: '21.16',
        HUMEDAD: '51.75',
        ACIDEZ: '0.33',
        TICKET: '833'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3242.0',
        RDTO: '18.71',
        HUMEDAD: '51.59',
        ACIDEZ: '0.28',
        TICKET: '849'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '874.0',
        RDTO: '20.74',
        HUMEDAD: '46.91',
        ACIDEZ: '0.21',
        TICKET: '850'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2128.0',
        RDTO: '21.55',
        HUMEDAD: '45.9',
        ACIDEZ: '0.21',
        TICKET: '851'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2215.0',
        RDTO: '19.46',
        HUMEDAD: '52.63',
        ACIDEZ: '0.29',
        TICKET: '852'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2215.0',
        RDTO: '19.46',
        HUMEDAD: '52.63',
        ACIDEZ: '0.29',
        TICKET: '853'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '7933.0',
        RDTO: '17.56',
        HUMEDAD: '55.81',
        ACIDEZ: '0.29',
        TICKET: '854'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2351.0',
        RDTO: '19.67',
        HUMEDAD: '52.82',
        ACIDEZ: '0.39',
        TICKET: '855'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3002.0',
        RDTO: '23.58',
        HUMEDAD: '47.73',
        ACIDEZ: '0.25',
        TICKET: '856'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5881.0',
        RDTO: '17.98',
        HUMEDAD: '56.41',
        ACIDEZ: '0.4',
        TICKET: '857'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '6506.0',
        RDTO: '18.95',
        HUMEDAD: '57.17',
        ACIDEZ: '0.3',
        TICKET: '834'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1142.0',
        RDTO: '22.5',
        HUMEDAD: '47.62',
        ACIDEZ: '0.22',
        TICKET: '835'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4480.0',
        RDTO: '17.83',
        HUMEDAD: '54.0',
        ACIDEZ: '0.48',
        TICKET: '836'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '646.0',
        RDTO: '19.75',
        HUMEDAD: '54.5',
        ACIDEZ: '0.29',
        TICKET: '837'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '950.0',
        RDTO: '18.3',
        HUMEDAD: '53.1',
        ACIDEZ: '0.39',
        TICKET: '838'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1059.0',
        RDTO: '16.92',
        HUMEDAD: '54.82',
        ACIDEZ: '0.25',
        TICKET: '839'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3278.0',
        RDTO: '18.03',
        HUMEDAD: '52.88',
        ACIDEZ: '0.35',
        TICKET: '840'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '433.0',
        RDTO: '22.4',
        HUMEDAD: '47.6',
        ACIDEZ: '0.21',
        TICKET: '841'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '538.0',
        RDTO: '24.26',
        HUMEDAD: '46.2',
        ACIDEZ: '0.23',
        TICKET: '842'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '878.0',
        RDTO: '21.34',
        HUMEDAD: '49.4',
        ACIDEZ: '0.22',
        TICKET: '843'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '780.0',
        RDTO: '22.1',
        HUMEDAD: '49.08',
        ACIDEZ: '0.46',
        TICKET: '844'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1699.0',
        RDTO: '19.13',
        HUMEDAD: '52.72',
        ACIDEZ: '0.32',
        TICKET: '845'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1165.0',
        RDTO: '20.43',
        HUMEDAD: '49.12',
        ACIDEZ: '0.23',
        TICKET: '846'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2346.0',
        RDTO: '19.14',
        HUMEDAD: '52.0',
        ACIDEZ: '0.53',
        TICKET: '847'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '952.0',
        RDTO: '23.14',
        HUMEDAD: '47.74',
        ACIDEZ: '0.27',
        TICKET: '848'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4932.0',
        RDTO: '20.63',
        HUMEDAD: '50.37',
        ACIDEZ: '0.24',
        TICKET: '858'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '937.0',
        RDTO: '21.36',
        HUMEDAD: '49.66',
        ACIDEZ: '0.29',
        TICKET: '859'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3629.0',
        RDTO: '21.16',
        HUMEDAD: '51.05',
        ACIDEZ: '0.34',
        TICKET: '860'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '615.0',
        RDTO: '22.73',
        HUMEDAD: '46.01',
        ACIDEZ: '0.25',
        TICKET: '861'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5127.0',
        RDTO: '18.59',
        HUMEDAD: '53.09',
        ACIDEZ: '0.31',
        TICKET: '862'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1313.0',
        RDTO: '19.24',
        HUMEDAD: '51.29',
        ACIDEZ: '0.22',
        TICKET: '863'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '557.0',
        RDTO: '19.25',
        HUMEDAD: '48.66',
        ACIDEZ: '0.21',
        TICKET: '864'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '6340.0',
        RDTO: '18.89',
        HUMEDAD: '50.46',
        ACIDEZ: '0.23',
        TICKET: '865'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4880.0',
        RDTO: '19.78',
        HUMEDAD: '52.55',
        ACIDEZ: '0.47',
        TICKET: '866'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4709.0',
        RDTO: '21.81',
        HUMEDAD: '49.31',
        ACIDEZ: '0.32',
        TICKET: '867'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '484.0',
        RDTO: '19.81',
        HUMEDAD: '52.34',
        ACIDEZ: '0.11',
        TICKET: '868'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '721.0',
        RDTO: '22.32',
        HUMEDAD: '49.85',
        ACIDEZ: '0.31',
        TICKET: '870'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '997.0',
        RDTO: '23.97',
        HUMEDAD: '45.85',
        ACIDEZ: '0.21',
        TICKET: '871'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '890.0',
        RDTO: '20.69',
        HUMEDAD: '52.06',
        ACIDEZ: '0.31',
        TICKET: '872'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4189.0',
        RDTO: '18.11',
        HUMEDAD: '57.05',
        ACIDEZ: '0.28',
        TICKET: '873'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2748.0',
        RDTO: '21.02',
        HUMEDAD: '49.41',
        ACIDEZ: '0.24',
        TICKET: '874'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '825.0',
        RDTO: '17.67',
        HUMEDAD: '56.37',
        ACIDEZ: '0.28',
        TICKET: '875'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3805.0',
        RDTO: '18.65',
        HUMEDAD: '53.01',
        ACIDEZ: '0.51',
        TICKET: '876'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '466.0',
        RDTO: '16.74',
        HUMEDAD: '51.99',
        ACIDEZ: '0.19',
        TICKET: '877'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '565.0',
        RDTO: '20.72',
        HUMEDAD: '51.8',
        ACIDEZ: '0.49',
        TICKET: '878'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1435.0',
        RDTO: '21.18',
        HUMEDAD: '52.29',
        ACIDEZ: '0.36',
        TICKET: '879'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '600.0',
        RDTO: '23.29',
        HUMEDAD: '47.67',
        ACIDEZ: '0.26',
        TICKET: '880'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '641.0',
        RDTO: '20.19',
        HUMEDAD: '49.43',
        ACIDEZ: '0.21',
        TICKET: '881'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4929.0',
        RDTO: '18.82',
        HUMEDAD: '54.22',
        ACIDEZ: '0.63',
        TICKET: '869'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '499.0',
        RDTO: '22.83',
        HUMEDAD: '46.61',
        ACIDEZ: '0.21',
        TICKET: '882'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1806.0',
        RDTO: '19.94',
        HUMEDAD: '50.66',
        ACIDEZ: '0.24',
        TICKET: '883'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2556.0',
        RDTO: '21.38',
        HUMEDAD: '47.53',
        ACIDEZ: '0.26',
        TICKET: '884'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2175.0',
        RDTO: '21.23',
        HUMEDAD: '49.28',
        ACIDEZ: '0.28',
        TICKET: '885'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '535.0',
        RDTO: '21.08',
        HUMEDAD: '49.09',
        ACIDEZ: '0.21',
        TICKET: '886'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3543.0',
        RDTO: '19.14',
        HUMEDAD: '51.95',
        ACIDEZ: '0.34',
        TICKET: '887'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '648.0',
        RDTO: '20.5',
        HUMEDAD: '49.14',
        ACIDEZ: '0.22',
        TICKET: '888'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2097.0',
        RDTO: '20.07',
        HUMEDAD: '52.26',
        ACIDEZ: '0.27',
        TICKET: '889'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2097.0',
        RDTO: '20.07',
        HUMEDAD: '52.26',
        ACIDEZ: '0.27',
        TICKET: '890'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '8012.0',
        RDTO: '16.81',
        HUMEDAD: '56.29',
        ACIDEZ: '0.33',
        TICKET: '891'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '6026.0',
        RDTO: '20.39',
        HUMEDAD: '51.27',
        ACIDEZ: '0.33',
        TICKET: '892'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5184.0',
        RDTO: '20.12',
        HUMEDAD: '50.1',
        ACIDEZ: '0.22',
        TICKET: '893'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2528.0',
        RDTO: '22.33',
        HUMEDAD: '48.15',
        ACIDEZ: '0.21',
        TICKET: '894'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1762.0',
        RDTO: '18.3',
        HUMEDAD: '55.72',
        ACIDEZ: '0.26',
        TICKET: '895'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '6158.0',
        RDTO: '20.05',
        HUMEDAD: '52.48',
        ACIDEZ: '0.24',
        TICKET: '896'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2326.0',
        RDTO: '20.04',
        HUMEDAD: '51.9',
        ACIDEZ: '0.26',
        TICKET: '897'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3871.0',
        RDTO: '22.35',
        HUMEDAD: '46.61',
        ACIDEZ: '0.19',
        TICKET: '898'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1612.0',
        RDTO: '20.6',
        HUMEDAD: '49.43',
        ACIDEZ: '0.21',
        TICKET: '899'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '288.0',
        RDTO: '22.37',
        HUMEDAD: '46.39',
        ACIDEZ: '0.16',
        TICKET: '900'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '474.0',
        RDTO: '18.08',
        HUMEDAD: '49.2',
        ACIDEZ: '0.15',
        TICKET: '901'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3947.0',
        RDTO: '20.33',
        HUMEDAD: '51.88',
        ACIDEZ: '0.42',
        TICKET: '902'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1927.0',
        RDTO: '23.32',
        HUMEDAD: '45.95',
        ACIDEZ: '0.24',
        TICKET: '908'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '969.0',
        RDTO: '20.4',
        HUMEDAD: '51.99',
        ACIDEZ: '0.32',
        TICKET: '903'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1005.0',
        RDTO: '19.03',
        HUMEDAD: '47.72',
        ACIDEZ: '0.21',
        TICKET: '904'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '387.0',
        RDTO: '20.44',
        HUMEDAD: '50.67',
        ACIDEZ: '0.21',
        TICKET: '905'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '9251.0',
        RDTO: '23.01',
        HUMEDAD: '48.16',
        ACIDEZ: '0.25',
        TICKET: '906'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1022.0',
        RDTO: '21.18',
        HUMEDAD: '49.51',
        ACIDEZ: '0.25',
        TICKET: '909'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5379.0',
        RDTO: '17.62',
        HUMEDAD: '51.93',
        ACIDEZ: '0.4',
        TICKET: '910'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1882.0',
        RDTO: '19.07',
        HUMEDAD: '54.84',
        ACIDEZ: '0.32',
        TICKET: '911'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '394.0',
        RDTO: '21.9',
        HUMEDAD: '46.56',
        ACIDEZ: '0.25',
        TICKET: '912'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '393.0',
        RDTO: '22.89',
        HUMEDAD: '48.4',
        ACIDEZ: '0.25',
        TICKET: '913'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '379.0',
        RDTO: '22.22',
        HUMEDAD: '47.82',
        ACIDEZ: '0.26',
        TICKET: '914'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1517.0',
        RDTO: '22.22',
        HUMEDAD: '47.82',
        ACIDEZ: '0.26',
        TICKET: '915'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '406.0',
        RDTO: '21.65',
        HUMEDAD: '48.12',
        ACIDEZ: '0.26',
        TICKET: '916'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '865.0',
        RDTO: '19.11',
        HUMEDAD: '50.27',
        ACIDEZ: '0.37',
        TICKET: '917'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '973.0',
        RDTO: '22.56',
        HUMEDAD: '45.18',
        ACIDEZ: '0.25',
        TICKET: '918'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3514.0',
        RDTO: '18.52',
        HUMEDAD: '51.22',
        ACIDEZ: '0.36',
        TICKET: '919'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '592.0',
        RDTO: '17.42',
        HUMEDAD: '52.28',
        ACIDEZ: '0.16',
        TICKET: '920'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '555.0',
        RDTO: '22.46',
        HUMEDAD: '47.1',
        ACIDEZ: '0.25',
        TICKET: '921'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '397.0',
        RDTO: '20.98',
        HUMEDAD: '45.03',
        ACIDEZ: '0.25',
        TICKET: '922'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '326.0',
        RDTO: '21.58',
        HUMEDAD: '48.21',
        ACIDEZ: '0.22',
        TICKET: '923'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '354.0',
        RDTO: '21.22',
        HUMEDAD: '49.09',
        ACIDEZ: '0.38',
        TICKET: '907'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1003.0',
        RDTO: '17.5',
        HUMEDAD: '52.18',
        ACIDEZ: '0.24',
        TICKET: '924'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1126.0',
        RDTO: '22.34',
        HUMEDAD: '48.54',
        ACIDEZ: '0.24',
        TICKET: '925'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3269.0',
        RDTO: '18.77',
        HUMEDAD: '51.68',
        ACIDEZ: '0.4',
        TICKET: '926'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1042.0',
        RDTO: '19.87',
        HUMEDAD: '51.9',
        ACIDEZ: '0.36',
        TICKET: '927'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '815.0',
        RDTO: '22.3',
        HUMEDAD: '46.68',
        ACIDEZ: '0.26',
        TICKET: '928'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1999.0',
        RDTO: '19.62',
        HUMEDAD: '49.57',
        ACIDEZ: '0.26',
        TICKET: '929'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2876.0',
        RDTO: '19.78',
        HUMEDAD: '50.36',
        ACIDEZ: '0.24',
        TICKET: '930'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4202.0',
        RDTO: '21.03',
        HUMEDAD: '46.94',
        ACIDEZ: '0.21',
        TICKET: '931'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1903.0',
        RDTO: '19.76',
        HUMEDAD: '51.69',
        ACIDEZ: '0.21',
        TICKET: '932'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2797.0',
        RDTO: '19.62',
        HUMEDAD: '51.63',
        ACIDEZ: '0.22',
        TICKET: '933'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2288.0',
        RDTO: '19.62',
        HUMEDAD: '51.63',
        ACIDEZ: '0.22',
        TICKET: '934'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '6954.0',
        RDTO: '18.03',
        HUMEDAD: '54.06',
        ACIDEZ: '0.54',
        TICKET: '935'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2158.0',
        RDTO: '19.0',
        HUMEDAD: '52.63',
        ACIDEZ: '0.11',
        TICKET: '936'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2249.0',
        RDTO: '22.38',
        HUMEDAD: '44.59',
        ACIDEZ: '0.21',
        TICKET: '937'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2903.0',
        RDTO: '23.7',
        HUMEDAD: '45.51',
        ACIDEZ: '0.21',
        TICKET: '938'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5828.0',
        RDTO: '19.43',
        HUMEDAD: '51.81',
        ACIDEZ: '0.22',
        TICKET: '939'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '729.0',
        RDTO: '20.64',
        HUMEDAD: '48.34',
        ACIDEZ: '0.21',
        TICKET: '940'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '7483.0',
        RDTO: '20.76',
        HUMEDAD: '52.42',
        ACIDEZ: '0.23',
        TICKET: '941'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4636.0',
        RDTO: '20.88',
        HUMEDAD: '47.94',
        ACIDEZ: '0.16',
        TICKET: '942'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2045.0',
        RDTO: '20.24',
        HUMEDAD: '50.03',
        ACIDEZ: '0.29',
        TICKET: '943'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2938.0',
        RDTO: '19.62',
        HUMEDAD: '52.09',
        ACIDEZ: '0.62',
        TICKET: '944'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '6222.0',
        RDTO: '20.63',
        HUMEDAD: '50.1',
        ACIDEZ: '0.21',
        TICKET: '945'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '520.0',
        RDTO: '20.84',
        HUMEDAD: '47.58',
        ACIDEZ: '0.22',
        TICKET: '946'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1294.0',
        RDTO: '20.46',
        HUMEDAD: '52.24',
        ACIDEZ: '0.22',
        TICKET: '947'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5834.0',
        RDTO: '20.18',
        HUMEDAD: '50.68',
        ACIDEZ: '0.3',
        TICKET: '948'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '788.0',
        RDTO: '20.29',
        HUMEDAD: '52.38',
        ACIDEZ: '0.21',
        TICKET: '949'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '798.0',
        RDTO: '19.36',
        HUMEDAD: '55.81',
        ACIDEZ: '0.37',
        TICKET: '950'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '926.0',
        RDTO: '21.47',
        HUMEDAD: '47.79',
        ACIDEZ: '0.16',
        TICKET: '952'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '469.0',
        RDTO: '23.0',
        HUMEDAD: '45.29',
        ACIDEZ: '0.21',
        TICKET: '953'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4541.0',
        RDTO: '17.92',
        HUMEDAD: '54.74',
        ACIDEZ: '0.46',
        TICKET: '954'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2326.0',
        RDTO: '22.96',
        HUMEDAD: '47.34',
        ACIDEZ: '0.23',
        TICKET: '955'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1311.0',
        RDTO: '19.25',
        HUMEDAD: '53.0',
        ACIDEZ: '0.43',
        TICKET: '956'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1072.0',
        RDTO: '19.25',
        HUMEDAD: '53.0',
        ACIDEZ: '0.43',
        TICKET: '957'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1255.0',
        RDTO: '21.49',
        HUMEDAD: '50.34',
        ACIDEZ: '0.28',
        TICKET: '958'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '597.0',
        RDTO: '22.08',
        HUMEDAD: '49.94',
        ACIDEZ: '0.29',
        TICKET: '959'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1493.0',
        RDTO: '19.93',
        HUMEDAD: '54.25',
        ACIDEZ: '0.45',
        TICKET: '960'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1881.0',
        RDTO: '18.32',
        HUMEDAD: '53.28',
        ACIDEZ: '0.27',
        TICKET: '961'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3780.0',
        RDTO: '18.8',
        HUMEDAD: '53.23',
        ACIDEZ: '0.34',
        TICKET: '962'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '494.0',
        RDTO: '20.63',
        HUMEDAD: '47.41',
        ACIDEZ: '0.23',
        TICKET: '963'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '388.0',
        RDTO: '20.7',
        HUMEDAD: '50.68',
        ACIDEZ: '0.25',
        TICKET: '964'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '642.0',
        RDTO: '22.12',
        HUMEDAD: '49.53',
        ACIDEZ: '0.33',
        TICKET: '951'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '389.0',
        RDTO: '23.11',
        HUMEDAD: '48.16',
        ACIDEZ: '0.25',
        TICKET: '965'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '740.0',
        RDTO: '23.6',
        HUMEDAD: '48.68',
        ACIDEZ: '0.21',
        TICKET: '966'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '531.0',
        RDTO: '13.88',
        HUMEDAD: '53.76',
        ACIDEZ: '0.21',
        TICKET: '967'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '513.0',
        RDTO: '22.13',
        HUMEDAD: '47.08',
        ACIDEZ: '0.24',
        TICKET: '968'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '702.0',
        RDTO: '19.75',
        HUMEDAD: '51.02',
        ACIDEZ: '0.14',
        TICKET: '969'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3454.0',
        RDTO: '18.47',
        HUMEDAD: '51.87',
        ACIDEZ: '0.41',
        TICKET: '970'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2367.0',
        RDTO: '22.45',
        HUMEDAD: '46.88',
        ACIDEZ: '0.27',
        TICKET: '971'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '453.0',
        RDTO: '21.18',
        HUMEDAD: '50.15',
        ACIDEZ: '0.36',
        TICKET: '972'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '723.0',
        RDTO: '20.45',
        HUMEDAD: '49.85',
        ACIDEZ: '0.52',
        TICKET: '973'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '855.0',
        RDTO: '21.09',
        HUMEDAD: '52.77',
        ACIDEZ: '0.44',
        TICKET: '974'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1794.0',
        RDTO: '19.3',
        HUMEDAD: '49.96',
        ACIDEZ: '0.25',
        TICKET: '975'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '6438.0',
        RDTO: '18.66',
        HUMEDAD: '53.75',
        ACIDEZ: '0.27',
        TICKET: '976'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '5517.0',
        RDTO: '19.73',
        HUMEDAD: '48.71',
        ACIDEZ: '0.26',
        TICKET: '977'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2069.0',
        RDTO: '25.08',
        HUMEDAD: '44.79',
        ACIDEZ: '0.23',
        TICKET: '978'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2224.0',
        RDTO: '22.34',
        HUMEDAD: '47.57',
        ACIDEZ: '0.18',
        TICKET: '979'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1754.0',
        RDTO: '22.48',
        HUMEDAD: '48.13',
        ACIDEZ: '0.25',
        TICKET: '980'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2491.0',
        RDTO: '21.27',
        HUMEDAD: '49.52',
        ACIDEZ: '0.21',
        TICKET: '981'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '10637.0',
        RDTO: '19.3',
        HUMEDAD: '51.87',
        ACIDEZ: '0.24',
        TICKET: '982'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4838.0',
        RDTO: '21.55',
        HUMEDAD: '48.88',
        ACIDEZ: '0.24',
        TICKET: '983'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4537.0',
        RDTO: '19.89',
        HUMEDAD: '49.6',
        ACIDEZ: '0.24',
        TICKET: '984'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2388.0',
        RDTO: '21.95',
        HUMEDAD: '47.88',
        ACIDEZ: '0.18',
        TICKET: '985'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '805.0',
        RDTO: '20.8',
        HUMEDAD: '50.99',
        ACIDEZ: '0.22',
        TICKET: '986'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1194.0',
        RDTO: '22.29',
        HUMEDAD: '47.58',
        ACIDEZ: '0.13',
        TICKET: '987'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '426.0',
        RDTO: '23.68',
        HUMEDAD: '45.53',
        ACIDEZ: '0.15',
        TICKET: '988'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1626.0',
        RDTO: '20.58',
        HUMEDAD: '49.45',
        ACIDEZ: '0.22',
        TICKET: '989'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1244.0',
        RDTO: '18.84',
        HUMEDAD: '52.15',
        ACIDEZ: '0.42',
        TICKET: '990'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1204.0',
        RDTO: '19.9',
        HUMEDAD: '52.57',
        ACIDEZ: '0.32',
        TICKET: '991'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '702.0',
        RDTO: '18.79',
        HUMEDAD: '55.07',
        ACIDEZ: '0.31',
        TICKET: '992'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4691.0',
        RDTO: '18.35',
        HUMEDAD: '52.96',
        ACIDEZ: '0.24',
        TICKET: '993'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '4927.0',
        RDTO: '20.1',
        HUMEDAD: '48.73',
        ACIDEZ: '0.26',
        TICKET: '994'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '524.0',
        RDTO: '20.5',
        HUMEDAD: '53.08',
        ACIDEZ: '0.41',
        TICKET: '995'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '730.0',
        RDTO: '19.99',
        HUMEDAD: '50.19',
        ACIDEZ: '0.26',
        TICKET: '996'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2476.0',
        RDTO: '22.12',
        HUMEDAD: '47.07',
        ACIDEZ: '0.29',
        TICKET: '1032'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '414.0',
        RDTO: '22.58',
        HUMEDAD: '46.95',
        ACIDEZ: '0.24',
        TICKET: '1033'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4557.0',
        RDTO: '19.32',
        HUMEDAD: '51.07',
        ACIDEZ: '0.49',
        TICKET: '1034'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '837.0',
        RDTO: '20.18',
        HUMEDAD: '51.83',
        ACIDEZ: '0.41',
        TICKET: '1035'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1182.0',
        RDTO: '22.14',
        HUMEDAD: '46.15',
        ACIDEZ: '0.17',
        TICKET: '1036'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '5255.0',
        RDTO: '21.24',
        HUMEDAD: '48.44',
        ACIDEZ: '0.22',
        TICKET: '1037'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '720.0',
        RDTO: '18.36',
        HUMEDAD: '54.15',
        ACIDEZ: '0.24',
        TICKET: '1038'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '767.0',
        RDTO: '13.63',
        HUMEDAD: '54.26',
        ACIDEZ: '0.24',
        TICKET: '1039'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2448.0',
        RDTO: '18.63',
        HUMEDAD: '50.82',
        ACIDEZ: '0.33',
        TICKET: '997'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '282.0',
        RDTO: '13.91',
        HUMEDAD: '55.71',
        ACIDEZ: '0.04',
        TICKET: '998'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '852.0',
        RDTO: '16.6',
        HUMEDAD: '53.43',
        ACIDEZ: '0.34',
        TICKET: '999'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1124.0',
        RDTO: '21.92',
        HUMEDAD: '47.38',
        ACIDEZ: '0.24',
        TICKET: '1000'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '675.0',
        RDTO: '20.1',
        HUMEDAD: '51.29',
        ACIDEZ: '0.32',
        TICKET: '1001'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '163.0',
        RDTO: '23.61',
        HUMEDAD: '47.82',
        ACIDEZ: '0.38',
        TICKET: '1002'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1821.0',
        RDTO: '20.32',
        HUMEDAD: '49.75',
        ACIDEZ: '0.48',
        TICKET: '1003'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '544.0',
        RDTO: '22.87',
        HUMEDAD: '47.73',
        ACIDEZ: '0.22',
        TICKET: '1004'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '781.0',
        RDTO: '19.94',
        HUMEDAD: '50.54',
        ACIDEZ: '0.19',
        TICKET: '1005'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '910.0',
        RDTO: '21.93',
        HUMEDAD: '45.84',
        ACIDEZ: '0.21',
        TICKET: '1006'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2145.0',
        RDTO: '18.81',
        HUMEDAD: '51.28',
        ACIDEZ: '0.35',
        TICKET: '1007'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '700.0',
        RDTO: '18.81',
        HUMEDAD: '51.28',
        ACIDEZ: '0.35',
        TICKET: '1008'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '9640.0',
        RDTO: '18.51',
        HUMEDAD: '53.77',
        ACIDEZ: '0.35',
        TICKET: '1009'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2485.0',
        RDTO: '22.7',
        HUMEDAD: '46.64',
        ACIDEZ: '0.25',
        TICKET: '1010'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '627.0',
        RDTO: '20.88',
        HUMEDAD: '48.52',
        ACIDEZ: '0.19',
        TICKET: '1011'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2990.0',
        RDTO: '21.63',
        HUMEDAD: '50.69',
        ACIDEZ: '0.31',
        TICKET: '1012'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1287.0',
        RDTO: '21.14',
        HUMEDAD: '49.25',
        ACIDEZ: '0.34',
        TICKET: '1013'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '6438.0',
        RDTO: '20.79',
        HUMEDAD: '50.39',
        ACIDEZ: '0.3',
        TICKET: '1014'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1554.0',
        RDTO: '23.52',
        HUMEDAD: '44.67',
        ACIDEZ: '0.21',
        TICKET: '1015'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2412.0',
        RDTO: '25.2',
        HUMEDAD: '44.55',
        ACIDEZ: '0.21',
        TICKET: '1016'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '681.0',
        RDTO: '25.67',
        HUMEDAD: '43.87',
        ACIDEZ: '0.21',
        TICKET: '1017'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '3889.0',
        RDTO: '20.81',
        HUMEDAD: '49.06',
        ACIDEZ: '0.27',
        TICKET: '1018'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '6922.0',
        RDTO: '16.42',
        HUMEDAD: '53.69',
        ACIDEZ: '0.37',
        TICKET: '1019'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1222.0',
        RDTO: '16.42',
        HUMEDAD: '53.69',
        ACIDEZ: '0.37',
        TICKET: '1020'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1514.0',
        RDTO: '17.85',
        HUMEDAD: '49.61',
        ACIDEZ: '0.2',
        TICKET: '1021'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '584.0',
        RDTO: '22.76',
        HUMEDAD: '48.24',
        ACIDEZ: '0.23',
        TICKET: '1022'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '470.0',
        RDTO: '21.67',
        HUMEDAD: '46.28',
        ACIDEZ: '0.09',
        TICKET: '1023'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1042.0',
        RDTO: '22.39',
        HUMEDAD: '45.33',
        ACIDEZ: '0.21',
        TICKET: '1024'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '962.0',
        RDTO: '21.85',
        HUMEDAD: '48.56',
        ACIDEZ: '0.33',
        TICKET: '1025'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '604.0',
        RDTO: '19.58',
        HUMEDAD: '48.52',
        ACIDEZ: '0.27',
        TICKET: '1026'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '457.0',
        RDTO: '19.92',
        HUMEDAD: '50.19',
        ACIDEZ: '0.25',
        TICKET: '1027'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '414.0',
        RDTO: '19.93',
        HUMEDAD: '52.08',
        ACIDEZ: '0.25',
        TICKET: '1028'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '959.0',
        RDTO: '19.03',
        HUMEDAD: '51.46',
        ACIDEZ: '0.49',
        TICKET: '1040'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '398.0',
        RDTO: '22.49',
        HUMEDAD: '50.25',
        ACIDEZ: '0.27',
        TICKET: '1029'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '1427.0',
        RDTO: '23.56',
        HUMEDAD: '46.38',
        ACIDEZ: '0.2',
        TICKET: '1030'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2015',
        KGSACEITUNA: '2005.0',
        RDTO: '20.66',
        HUMEDAD: '51.71',
        ACIDEZ: '0.24',
        TICKET: '1031'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2803.0',
        RDTO: '20.54',
        HUMEDAD: '50.79',
        ACIDEZ: '0.5',
        TICKET: '1041'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '513.0',
        RDTO: '24.25',
        HUMEDAD: '45.07',
        ACIDEZ: '0.22',
        TICKET: '1042'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1661.0',
        RDTO: '18.57',
        HUMEDAD: '51.34',
        ACIDEZ: '0.28',
        TICKET: '1043'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '762.0',
        RDTO: '22.55',
        HUMEDAD: '46.74',
        ACIDEZ: '0.19',
        TICKET: '1044'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2330.0',
        RDTO: '22.68',
        HUMEDAD: '47.69',
        ACIDEZ: '0.28',
        TICKET: '1045'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '781.0',
        RDTO: '20.08',
        HUMEDAD: '50.52',
        ACIDEZ: '0.23',
        TICKET: '1046'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1315.0',
        RDTO: '22.07',
        HUMEDAD: '48.28',
        ACIDEZ: '0.24',
        TICKET: '1047'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1056.0',
        RDTO: '21.86',
        HUMEDAD: '50.32',
        ACIDEZ: '0.23',
        TICKET: '1048'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '7836.0',
        RDTO: '22.03',
        HUMEDAD: '49.83',
        ACIDEZ: '0.25',
        TICKET: '1049'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2163.0',
        RDTO: '27.14',
        HUMEDAD: '43.19',
        ACIDEZ: '0.22',
        TICKET: '1050'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '5931.0',
        RDTO: '18.38',
        HUMEDAD: '55.23',
        ACIDEZ: '0.39',
        TICKET: '1051'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3675.0',
        RDTO: '19.97',
        HUMEDAD: '53.05',
        ACIDEZ: '0.27',
        TICKET: '1052'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3111.0',
        RDTO: '20.96',
        HUMEDAD: '47.82',
        ACIDEZ: '0.2',
        TICKET: '1053'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1433.0',
        RDTO: '22.18',
        HUMEDAD: '49.22',
        ACIDEZ: '0.22',
        TICKET: '1054'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '8094.0',
        RDTO: '19.54',
        HUMEDAD: '51.7',
        ACIDEZ: '0.25',
        TICKET: '1055'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3539.0',
        RDTO: '19.44',
        HUMEDAD: '51.6',
        ACIDEZ: '0.44',
        TICKET: '1056'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4716.0',
        RDTO: '21.03',
        HUMEDAD: '50.17',
        ACIDEZ: '0.29',
        TICKET: '1057'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1712.0',
        RDTO: '20.7',
        HUMEDAD: '51.9',
        ACIDEZ: '0.34',
        TICKET: '1058'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '393.0',
        RDTO: '20.54',
        HUMEDAD: '51.11',
        ACIDEZ: '0.27',
        TICKET: '1059'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '397.0',
        RDTO: '19.68',
        HUMEDAD: '51.39',
        ACIDEZ: '0.21',
        TICKET: '1060'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '5246.0',
        RDTO: '21.03',
        HUMEDAD: '50.42',
        ACIDEZ: '0.19',
        TICKET: '1061'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '433.0',
        RDTO: '25.13',
        HUMEDAD: '47.47',
        ACIDEZ: '0.22',
        TICKET: '1062'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1405.0',
        RDTO: '20.98',
        HUMEDAD: '48.92',
        ACIDEZ: '0.2',
        TICKET: '1063'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '469.0',
        RDTO: '23.27',
        HUMEDAD: '46.34',
        ACIDEZ: '0.23',
        TICKET: '1064'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '777.0',
        RDTO: '21.13',
        HUMEDAD: '50.85',
        ACIDEZ: '0.21',
        TICKET: '1066'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '976.0',
        RDTO: '21.0',
        HUMEDAD: '45.4',
        ACIDEZ: '0.23',
        TICKET: '1458'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '203.0',
        RDTO: '22.82',
        HUMEDAD: '46.86',
        ACIDEZ: '0.41',
        TICKET: '1067'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1009.0',
        RDTO: '22.09',
        HUMEDAD: '46.15',
        ACIDEZ: '0.17',
        TICKET: '1068'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4029.0',
        RDTO: '21.07',
        HUMEDAD: '49.5',
        ACIDEZ: '0.29',
        TICKET: '1069'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '466.0',
        RDTO: '21.96',
        HUMEDAD: '50.29',
        ACIDEZ: '0.24',
        TICKET: '1070'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '516.0',
        RDTO: '22.42',
        HUMEDAD: '46.73',
        ACIDEZ: '0.23',
        TICKET: '1071'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '600.0',
        RDTO: '23.11',
        HUMEDAD: '45.61',
        ACIDEZ: '0.17',
        TICKET: '1072'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '562.0',
        RDTO: '19.21',
        HUMEDAD: '49.84',
        ACIDEZ: '0.41',
        TICKET: '1073'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4188.0',
        RDTO: '19.26',
        HUMEDAD: '51.76',
        ACIDEZ: '0.34',
        TICKET: '1065'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '7967.0',
        RDTO: '20.44',
        HUMEDAD: '52.92',
        ACIDEZ: '0.28',
        TICKET: '1082'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2207.0',
        RDTO: '21.29',
        HUMEDAD: '49.33',
        ACIDEZ: '0.27',
        TICKET: '1074'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1124.0',
        RDTO: '22.18',
        HUMEDAD: '48.39',
        ACIDEZ: '0.2',
        TICKET: '1075'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2811.0',
        RDTO: '20.07',
        HUMEDAD: '50.96',
        ACIDEZ: '0.28',
        TICKET: '1076'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1127.0',
        RDTO: '21.28',
        HUMEDAD: '50.03',
        ACIDEZ: '0.21',
        TICKET: '1077'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1186.0',
        RDTO: '20.38',
        HUMEDAD: '50.84',
        ACIDEZ: '0.18',
        TICKET: '1078'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '930.0',
        RDTO: '20.74',
        HUMEDAD: '48.15',
        ACIDEZ: '0.24',
        TICKET: '1079'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '847.0',
        RDTO: '18.97',
        HUMEDAD: '51.22',
        ACIDEZ: '0.23',
        TICKET: '1080'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3515.0',
        RDTO: '22.25',
        HUMEDAD: '48.93',
        ACIDEZ: '0.22',
        TICKET: '1081'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1918.0',
        RDTO: '25.09',
        HUMEDAD: '43.04',
        ACIDEZ: '0.19',
        TICKET: '1083'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '5467.0',
        RDTO: '19.1',
        HUMEDAD: '53.53',
        ACIDEZ: '0.39',
        TICKET: '1084'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3425.0',
        RDTO: '20.99',
        HUMEDAD: '51.48',
        ACIDEZ: '0.26',
        TICKET: '1085'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3319.0',
        RDTO: '22.76',
        HUMEDAD: '47.36',
        ACIDEZ: '0.22',
        TICKET: '1086'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '8561.0',
        RDTO: '19.21',
        HUMEDAD: '51.26',
        ACIDEZ: '0.23',
        TICKET: '1087'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '6986.0',
        RDTO: '20.46',
        HUMEDAD: '46.74',
        ACIDEZ: '0.2',
        TICKET: '1088'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4907.0',
        RDTO: '20.59',
        HUMEDAD: '48.26',
        ACIDEZ: '0.21',
        TICKET: '1089'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '683.0',
        RDTO: '20.05',
        HUMEDAD: '49.23',
        ACIDEZ: '0.23',
        TICKET: '1090'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1280.0',
        RDTO: '23.4',
        HUMEDAD: '45.13',
        ACIDEZ: '0.18',
        TICKET: '1091'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4560.0',
        RDTO: '20.59',
        HUMEDAD: '49.64',
        ACIDEZ: '0.33',
        TICKET: '1093'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3916.0',
        RDTO: '21.87',
        HUMEDAD: '51.52',
        ACIDEZ: '0.28',
        TICKET: '1094'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1927.0',
        RDTO: '20.31',
        HUMEDAD: '47.34',
        ACIDEZ: '0.28',
        TICKET: '1095'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '813.0',
        RDTO: '21.48',
        HUMEDAD: '48.34',
        ACIDEZ: '0.38',
        TICKET: '1096'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1085.0',
        RDTO: '21.46',
        HUMEDAD: '47.01',
        ACIDEZ: '0.18',
        TICKET: '1097'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '423.0',
        RDTO: '20.51',
        HUMEDAD: '48.35',
        ACIDEZ: '0.18',
        TICKET: '1098'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3522.0',
        RDTO: '20.97',
        HUMEDAD: '49.34',
        ACIDEZ: '0.25',
        TICKET: '1099'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '472.0',
        RDTO: '21.32',
        HUMEDAD: '51.07',
        ACIDEZ: '0.2',
        TICKET: '1100'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '207.0',
        RDTO: '22.9',
        HUMEDAD: '44.67',
        ACIDEZ: '0.15',
        TICKET: '1101'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1267.0',
        RDTO: '20.33',
        HUMEDAD: '50.59',
        ACIDEZ: '0.25',
        TICKET: '1102'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '822.0',
        RDTO: '19.83',
        HUMEDAD: '50.54',
        ACIDEZ: '0.43',
        TICKET: '1103'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1223.0',
        RDTO: '19.74',
        HUMEDAD: '50.4',
        ACIDEZ: '0.25',
        TICKET: '1104'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4572.0',
        RDTO: '17.03',
        HUMEDAD: '55.9',
        ACIDEZ: '0.28',
        TICKET: '1105'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2345.0',
        RDTO: '23.58',
        HUMEDAD: '46.15',
        ACIDEZ: '0.19',
        TICKET: '1106'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1288.0',
        RDTO: '20.1',
        HUMEDAD: '51.36',
        ACIDEZ: '0.29',
        TICKET: '1107'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '422.0',
        RDTO: '27.25',
        HUMEDAD: '43.36',
        ACIDEZ: '0.21',
        TICKET: '1092'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '886.0',
        RDTO: '19.66',
        HUMEDAD: '50.55',
        ACIDEZ: '0.21',
        TICKET: '1108'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2949.0',
        RDTO: '21.69',
        HUMEDAD: '48.97',
        ACIDEZ: '0.2',
        TICKET: '1109'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2908.0',
        RDTO: '19.11',
        HUMEDAD: '53.36',
        ACIDEZ: '0.33',
        TICKET: '1110'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1129.0',
        RDTO: '20.42',
        HUMEDAD: '49.37',
        ACIDEZ: '0.21',
        TICKET: '1111'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '6363.0',
        RDTO: '20.67',
        HUMEDAD: '50.4',
        ACIDEZ: '0.35',
        TICKET: '1112'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '600.0',
        RDTO: '22.42',
        HUMEDAD: '46.15',
        ACIDEZ: '0.22',
        TICKET: '1122'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1916.0',
        RDTO: '27.0',
        HUMEDAD: '40.39',
        ACIDEZ: '0.22',
        TICKET: '1113'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1063.0',
        RDTO: '20.92',
        HUMEDAD: '48.74',
        ACIDEZ: '0.36',
        TICKET: '1114'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '7970.0',
        RDTO: '21.61',
        HUMEDAD: '49.46',
        ACIDEZ: '0.24',
        TICKET: '1115'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4939.0',
        RDTO: '23.15',
        HUMEDAD: '44.02',
        ACIDEZ: '0.2',
        TICKET: '1116'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3219.0',
        RDTO: '22.01',
        HUMEDAD: '49.57',
        ACIDEZ: '0.24',
        TICKET: '1117'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '8785.0',
        RDTO: '19.8',
        HUMEDAD: '51.17',
        ACIDEZ: '0.24',
        TICKET: '1118'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '329.0',
        RDTO: '24.75',
        HUMEDAD: '42.57',
        ACIDEZ: '0.2',
        TICKET: '1119'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3477.0',
        RDTO: '22.07',
        HUMEDAD: '47.29',
        ACIDEZ: '0.2',
        TICKET: '1120'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1718.0',
        RDTO: '22.72',
        HUMEDAD: '45.7',
        ACIDEZ: '0.19',
        TICKET: '1121'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4416.0',
        RDTO: '20.78',
        HUMEDAD: '49.87',
        ACIDEZ: '0.36',
        TICKET: '1127'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3666.0',
        RDTO: '21.71',
        HUMEDAD: '50.18',
        ACIDEZ: '0.2',
        TICKET: '1128'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '384.0',
        RDTO: '21.15',
        HUMEDAD: '52.58',
        ACIDEZ: '0.28',
        TICKET: '1129'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '819.0',
        RDTO: '20.48',
        HUMEDAD: '49.01',
        ACIDEZ: '0.31',
        TICKET: '1130'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1146.0',
        RDTO: '21.17',
        HUMEDAD: '49.61',
        ACIDEZ: '0.26',
        TICKET: '1131'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3336.0',
        RDTO: '20.52',
        HUMEDAD: '50.17',
        ACIDEZ: '0.28',
        TICKET: '1132'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '980.0',
        RDTO: '21.06',
        HUMEDAD: '50.13',
        ACIDEZ: '0.28',
        TICKET: '1133'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2595.0',
        RDTO: '23.71',
        HUMEDAD: '46.8',
        ACIDEZ: '0.23',
        TICKET: '1134'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2527.0',
        RDTO: '22.56',
        HUMEDAD: '48.87',
        ACIDEZ: '0.26',
        TICKET: '1135'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2221.0',
        RDTO: '19.26',
        HUMEDAD: '50.8',
        ACIDEZ: '0.35',
        TICKET: '1136'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '226.0',
        RDTO: '27.97',
        HUMEDAD: '42.65',
        ACIDEZ: '0.28',
        TICKET: '1123'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '816.0',
        RDTO: '20.38',
        HUMEDAD: '50.31',
        ACIDEZ: '0.24',
        TICKET: '1124'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '406.0',
        RDTO: '22.29',
        HUMEDAD: '50.16',
        ACIDEZ: '0.25',
        TICKET: '1125'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '772.0',
        RDTO: '21.47',
        HUMEDAD: '50.73',
        ACIDEZ: '0.29',
        TICKET: '1126'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1394.0',
        RDTO: '21.09',
        HUMEDAD: '48.68',
        ACIDEZ: '0.24',
        TICKET: '1137'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '6488.0',
        RDTO: '22.99',
        HUMEDAD: '45.06',
        ACIDEZ: '0.21',
        TICKET: '1138'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1882.0',
        RDTO: '20.89',
        HUMEDAD: '49.05',
        ACIDEZ: '0.13',
        TICKET: '1139'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1882.0',
        RDTO: '20.89',
        HUMEDAD: '49.05',
        ACIDEZ: '0.13',
        TICKET: '1140'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '8931.0',
        RDTO: '20.34',
        HUMEDAD: '50.59',
        ACIDEZ: '0.3',
        TICKET: '1141'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4114.0',
        RDTO: '19.12',
        HUMEDAD: '51.63',
        ACIDEZ: '0.4',
        TICKET: '1142'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1280.0',
        RDTO: '19.87',
        HUMEDAD: '51.17',
        ACIDEZ: '0.29',
        TICKET: '1143'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '706.0',
        RDTO: '23.76',
        HUMEDAD: '45.89',
        ACIDEZ: '0.43',
        TICKET: '1144'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3964.0',
        RDTO: '21.07',
        HUMEDAD: '49.69',
        ACIDEZ: '0.23',
        TICKET: '1145'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2046.0',
        RDTO: '25.74',
        HUMEDAD: '43.57',
        ACIDEZ: '0.19',
        TICKET: '1146'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4571.0',
        RDTO: '22.3',
        HUMEDAD: '49.85',
        ACIDEZ: '0.26',
        TICKET: '1147'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1700.0',
        RDTO: '21.01',
        HUMEDAD: '48.69',
        ACIDEZ: '0.22',
        TICKET: '1148'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '7392.0',
        RDTO: '21.19',
        HUMEDAD: '49.83',
        ACIDEZ: '0.4',
        TICKET: '1149'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '775.0',
        RDTO: '21.77',
        HUMEDAD: '50.99',
        ACIDEZ: '0.27',
        TICKET: '1150'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '115.0',
        RDTO: '20.67',
        HUMEDAD: '45.99',
        ACIDEZ: '0.15',
        TICKET: '1151'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1680.0',
        RDTO: '22.3',
        HUMEDAD: '47.8',
        ACIDEZ: '0.31',
        TICKET: '1152'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '393.0',
        RDTO: '17.51',
        HUMEDAD: '52.95',
        ACIDEZ: '0.24',
        TICKET: '1153'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1473.0',
        RDTO: '23.64',
        HUMEDAD: '46.73',
        ACIDEZ: '0.19',
        TICKET: '1189'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '419.0',
        RDTO: '18.65',
        HUMEDAD: '53.77',
        ACIDEZ: '0.46',
        TICKET: '1190'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '173.0',
        RDTO: '23.35',
        HUMEDAD: '46.91',
        ACIDEZ: '0.22',
        TICKET: '1154'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '416.0',
        RDTO: '25.23',
        HUMEDAD: '45.89',
        ACIDEZ: '0.24',
        TICKET: '1155'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4004.0',
        RDTO: '20.51',
        HUMEDAD: '49.97',
        ACIDEZ: '0.25',
        TICKET: '1156'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '389.0',
        RDTO: '21.97',
        HUMEDAD: '50.65',
        ACIDEZ: '0.24',
        TICKET: '1157'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3335.0',
        RDTO: '22.22',
        HUMEDAD: '46.44',
        ACIDEZ: '0.18',
        TICKET: '1158'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2347.0',
        RDTO: '21.24',
        HUMEDAD: '51.59',
        ACIDEZ: '0.25',
        TICKET: '1159'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '356.0',
        RDTO: '21.27',
        HUMEDAD: '52.74',
        ACIDEZ: '0.43',
        TICKET: '1160'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1619.0',
        RDTO: '21.43',
        HUMEDAD: '49.62',
        ACIDEZ: '0.46',
        TICKET: '1161'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '370.0',
        RDTO: '24.06',
        HUMEDAD: '46.65',
        ACIDEZ: '0.24',
        TICKET: '1162'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1507.0',
        RDTO: '20.44',
        HUMEDAD: '51.16',
        ACIDEZ: '0.45',
        TICKET: '1163'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3845.0',
        RDTO: '21.01',
        HUMEDAD: '49.71',
        ACIDEZ: '0.28',
        TICKET: '1164'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '941.0',
        RDTO: '20.52',
        HUMEDAD: '49.54',
        ACIDEZ: '0.22',
        TICKET: '1165'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2572.0',
        RDTO: '23.32',
        HUMEDAD: '46.79',
        ACIDEZ: '0.29',
        TICKET: '1166'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1247.0',
        RDTO: '21.28',
        HUMEDAD: '50.07',
        ACIDEZ: '0.33',
        TICKET: '1167'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2863.0',
        RDTO: '20.4',
        HUMEDAD: '49.44',
        ACIDEZ: '0.22',
        TICKET: '1168'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1292.0',
        RDTO: '21.6',
        HUMEDAD: '49.57',
        ACIDEZ: '0.22',
        TICKET: '1169'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '7251.0',
        RDTO: '21.34',
        HUMEDAD: '49.98',
        ACIDEZ: '0.33',
        TICKET: '1170'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2460.0',
        RDTO: '24.3',
        HUMEDAD: '45.47',
        ACIDEZ: '0.21',
        TICKET: '1171'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2717.0',
        RDTO: '20.23',
        HUMEDAD: '51.84',
        ACIDEZ: '0.32',
        TICKET: '1172'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1502.0',
        RDTO: '21.63',
        HUMEDAD: '48.72',
        ACIDEZ: '0.23',
        TICKET: '1173'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3151.0',
        RDTO: '21.63',
        HUMEDAD: '48.72',
        ACIDEZ: '0.23',
        TICKET: '1174'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3931.0',
        RDTO: '19.52',
        HUMEDAD: '49.98',
        ACIDEZ: '0.26',
        TICKET: '1175'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '984.0',
        RDTO: '18.97',
        HUMEDAD: '53.8',
        ACIDEZ: '0.35',
        TICKET: '1176'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '7135.0',
        RDTO: '22.64',
        HUMEDAD: '49.25',
        ACIDEZ: '0.29',
        TICKET: '1177'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3802.0',
        RDTO: '22.37',
        HUMEDAD: '50.31',
        ACIDEZ: '0.31',
        TICKET: '1178'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2786.0',
        RDTO: '20.0',
        HUMEDAD: '51.65',
        ACIDEZ: '0.8',
        TICKET: '1179'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '8208.0',
        RDTO: '21.58',
        HUMEDAD: '49.66',
        ACIDEZ: '0.22',
        TICKET: '1180'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1768.0',
        RDTO: '20.75',
        HUMEDAD: '50.11',
        ACIDEZ: '0.22',
        TICKET: '1181'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '674.0',
        RDTO: '19.82',
        HUMEDAD: '50.95',
        ACIDEZ: '0.59',
        TICKET: '1182'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '270.0',
        RDTO: '24.58',
        HUMEDAD: '46.44',
        ACIDEZ: '0.22',
        TICKET: '1191'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3725.0',
        RDTO: '19.55',
        HUMEDAD: '49.63',
        ACIDEZ: '0.23',
        TICKET: '1183'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '62.0',
        RDTO: '21.66',
        HUMEDAD: '47.35',
        ACIDEZ: '0.21',
        TICKET: '1184'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1520.0',
        RDTO: '22.14',
        HUMEDAD: '46.44',
        ACIDEZ: '0.2',
        TICKET: '1185'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '445.0',
        RDTO: '17.38',
        HUMEDAD: '50.08',
        ACIDEZ: '0.19',
        TICKET: '1186'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1920.0',
        RDTO: '19.8',
        HUMEDAD: '51.67',
        ACIDEZ: '0.32',
        TICKET: '1192'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3688.0',
        RDTO: '21.99',
        HUMEDAD: '47.68',
        ACIDEZ: '0.25',
        TICKET: '1193'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1360.0',
        RDTO: '21.39',
        HUMEDAD: '49.39',
        ACIDEZ: '0.4',
        TICKET: '1194'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '474.0',
        RDTO: '19.79',
        HUMEDAD: '53.73',
        ACIDEZ: '0.64',
        TICKET: '1195'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '699.0',
        RDTO: '23.06',
        HUMEDAD: '49.89',
        ACIDEZ: '0.25',
        TICKET: '1196'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '476.0',
        RDTO: '20.72',
        HUMEDAD: '47.26',
        ACIDEZ: '0.27',
        TICKET: '1197'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '730.0',
        RDTO: '20.56',
        HUMEDAD: '50.61',
        ACIDEZ: '0.25',
        TICKET: '1198'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '502.0',
        RDTO: '23.13',
        HUMEDAD: '49.01',
        ACIDEZ: '0.32',
        TICKET: '1187'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '233.0',
        RDTO: '26.26',
        HUMEDAD: '45.93',
        ACIDEZ: '0.22',
        TICKET: '1188'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1379.0',
        RDTO: '21.77',
        HUMEDAD: '49.46',
        ACIDEZ: '0.34',
        TICKET: '1199'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1235.0',
        RDTO: '24.29',
        HUMEDAD: '45.68',
        ACIDEZ: '0.21',
        TICKET: '1200'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3033.0',
        RDTO: '21.62',
        HUMEDAD: '50.7',
        ACIDEZ: '0.26',
        TICKET: '1201'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1344.0',
        RDTO: '18.84',
        HUMEDAD: '52.64',
        ACIDEZ: '0.53',
        TICKET: '1202'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '949.0',
        RDTO: '18.29',
        HUMEDAD: '52.13',
        ACIDEZ: '0.42',
        TICKET: '1203'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '849.0',
        RDTO: '20.2',
        HUMEDAD: '50.21',
        ACIDEZ: '0.26',
        TICKET: '1204'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2850.0',
        RDTO: '21.25',
        HUMEDAD: '50.07',
        ACIDEZ: '0.36',
        TICKET: '1205'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2802.0',
        RDTO: '22.51',
        HUMEDAD: '45.27',
        ACIDEZ: '0.23',
        TICKET: '1206'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '6010.0',
        RDTO: '22.94',
        HUMEDAD: '47.15',
        ACIDEZ: '0.34',
        TICKET: '1207'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4694.0',
        RDTO: '21.45',
        HUMEDAD: '50.18',
        ACIDEZ: '0.3',
        TICKET: '1208'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1162.0',
        RDTO: '20.73',
        HUMEDAD: '50.59',
        ACIDEZ: '0.45',
        TICKET: '1209'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '8836.0',
        RDTO: '19.8',
        HUMEDAD: '52.16',
        ACIDEZ: '0.34',
        TICKET: '1210'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '982.0',
        RDTO: '19.8',
        HUMEDAD: '52.16',
        ACIDEZ: '0.34',
        TICKET: '1211'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '630.0',
        RDTO: '20.7',
        HUMEDAD: '51.26',
        ACIDEZ: '0.41',
        TICKET: '1212'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '469.0',
        RDTO: '22.51',
        HUMEDAD: '47.41',
        ACIDEZ: '0.33',
        TICKET: '1213'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1376.0',
        RDTO: '16.73',
        HUMEDAD: '52.91',
        ACIDEZ: '0.25',
        TICKET: '1214'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '565.0',
        RDTO: '22.32',
        HUMEDAD: '47.65',
        ACIDEZ: '0.34',
        TICKET: '1215'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2791.0',
        RDTO: '21.68',
        HUMEDAD: '48.04',
        ACIDEZ: '0.42',
        TICKET: '1216'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '8372.0',
        RDTO: '21.68',
        HUMEDAD: '48.04',
        ACIDEZ: '0.42',
        TICKET: '1217'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '7400.0',
        RDTO: '21.89',
        HUMEDAD: '48.84',
        ACIDEZ: '0.38',
        TICKET: '1218'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '740.0',
        RDTO: '21.57',
        HUMEDAD: '50.65',
        ACIDEZ: '0.23',
        TICKET: '1219'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4941.0',
        RDTO: '22.15',
        HUMEDAD: '48.54',
        ACIDEZ: '0.24',
        TICKET: '1220'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '594.0',
        RDTO: '20.51',
        HUMEDAD: '51.84',
        ACIDEZ: '0.43',
        TICKET: '1221'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2833.0',
        RDTO: '21.14',
        HUMEDAD: '49.37',
        ACIDEZ: '0.3',
        TICKET: '1222'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1263.0',
        RDTO: '24.4',
        HUMEDAD: '45.35',
        ACIDEZ: '0.21',
        TICKET: '1223'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '408.0',
        RDTO: '21.37',
        HUMEDAD: '53.23',
        ACIDEZ: '0.43',
        TICKET: '1224'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1407.0',
        RDTO: '17.77',
        HUMEDAD: '52.51',
        ACIDEZ: '0.25',
        TICKET: '1244'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3801.0',
        RDTO: '21.07',
        HUMEDAD: '47.47',
        ACIDEZ: '0.55',
        TICKET: '1245'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3956.0',
        RDTO: '21.0',
        HUMEDAD: '50.46',
        ACIDEZ: '0.43',
        TICKET: '1246'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '467.0',
        RDTO: '19.53',
        HUMEDAD: '51.85',
        ACIDEZ: '0.33',
        TICKET: '1247'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '277.0',
        RDTO: '22.4',
        HUMEDAD: '49.35',
        ACIDEZ: '0.22',
        TICKET: '1225'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3154.0',
        RDTO: '22.33',
        HUMEDAD: '49.63',
        ACIDEZ: '0.27',
        TICKET: '1226'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1481.0',
        RDTO: '19.74',
        HUMEDAD: '51.14',
        ACIDEZ: '0.32',
        TICKET: '1227'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '624.0',
        RDTO: '25.25',
        HUMEDAD: '46.67',
        ACIDEZ: '0.24',
        TICKET: '1228'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '822.0',
        RDTO: '29.1',
        HUMEDAD: '43.55',
        ACIDEZ: '0.22',
        TICKET: '1229'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1373.0',
        RDTO: '21.59',
        HUMEDAD: '48.98',
        ACIDEZ: '0.27',
        TICKET: '1230'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '720.0',
        RDTO: '19.33',
        HUMEDAD: '49.31',
        ACIDEZ: '0.21',
        TICKET: '1231'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '980.0',
        RDTO: '22.76',
        HUMEDAD: '47.29',
        ACIDEZ: '0.21',
        TICKET: '1232'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1010.0',
        RDTO: '21.58',
        HUMEDAD: '49.28',
        ACIDEZ: '0.43',
        TICKET: '1233'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2549.0',
        RDTO: '20.98',
        HUMEDAD: '51.21',
        ACIDEZ: '0.24',
        TICKET: '1234'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3104.0',
        RDTO: '16.97',
        HUMEDAD: '58.04',
        ACIDEZ: '0.35',
        TICKET: '1235'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3685.0',
        RDTO: '22.76',
        HUMEDAD: '49.24',
        ACIDEZ: '0.31',
        TICKET: '1236'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '606.0',
        RDTO: '21.05',
        HUMEDAD: '51.73',
        ACIDEZ: '0.32',
        TICKET: '1261'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2642.0',
        RDTO: '23.23',
        HUMEDAD: '46.28',
        ACIDEZ: '0.2',
        TICKET: '1237'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '7492.0',
        RDTO: '21.28',
        HUMEDAD: '49.65',
        ACIDEZ: '0.25',
        TICKET: '1238'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '832.0',
        RDTO: '21.28',
        HUMEDAD: '49.65',
        ACIDEZ: '0.25',
        TICKET: '1239'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '492.0',
        RDTO: '23.57',
        HUMEDAD: '47.51',
        ACIDEZ: '0.28',
        TICKET: '1240'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '604.0',
        RDTO: '22.05',
        HUMEDAD: '49.91',
        ACIDEZ: '0.29',
        TICKET: '1241'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4648.0',
        RDTO: '21.96',
        HUMEDAD: '49.84',
        ACIDEZ: '0.25',
        TICKET: '1242'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '8267.0',
        RDTO: '20.96',
        HUMEDAD: '50.9',
        ACIDEZ: '0.45',
        TICKET: '1243'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '5457.0',
        RDTO: '21.05',
        HUMEDAD: '51.73',
        ACIDEZ: '0.32',
        TICKET: '1262'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3226.0',
        RDTO: '21.52',
        HUMEDAD: '50.28',
        ACIDEZ: '0.33',
        TICKET: '1263'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '614.0',
        RDTO: '23.01',
        HUMEDAD: '47.94',
        ACIDEZ: '0.26',
        TICKET: '1264'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3749.0',
        RDTO: '22.12',
        HUMEDAD: '48.94',
        ACIDEZ: '8.55',
        TICKET: '1270'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '551.0',
        RDTO: '21.85',
        HUMEDAD: '48.73',
        ACIDEZ: '0.42',
        TICKET: '1248'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '518.0',
        RDTO: '20.66',
        HUMEDAD: '50.06',
        ACIDEZ: '0.32',
        TICKET: '1249'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3860.0',
        RDTO: '20.67',
        HUMEDAD: '50.44',
        ACIDEZ: '0.34',
        TICKET: '1250'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '810.0',
        RDTO: '20.3',
        HUMEDAD: '50.08',
        ACIDEZ: '0.28',
        TICKET: '1251'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1780.0',
        RDTO: '21.63',
        HUMEDAD: '49.46',
        ACIDEZ: '0.27',
        TICKET: '1252'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1236.0',
        RDTO: '21.0',
        HUMEDAD: '51.59',
        ACIDEZ: '0.24',
        TICKET: '1253'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1982.0',
        RDTO: '16.44',
        HUMEDAD: '54.67',
        ACIDEZ: '0.4',
        TICKET: '1265'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '651.0',
        RDTO: '20.24',
        HUMEDAD: '51.76',
        ACIDEZ: '0.21',
        TICKET: '1266'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '992.0',
        RDTO: '19.63',
        HUMEDAD: '52.21',
        ACIDEZ: '0.25',
        TICKET: '1254'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1178.0',
        RDTO: '22.68',
        HUMEDAD: '49.22',
        ACIDEZ: '0.22',
        TICKET: '1255'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1723.0',
        RDTO: '21.51',
        HUMEDAD: '48.06',
        ACIDEZ: '0.19',
        TICKET: '1256'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2351.0',
        RDTO: '25.55',
        HUMEDAD: '44.89',
        ACIDEZ: '0.12',
        TICKET: '1257'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2002.0',
        RDTO: '21.68',
        HUMEDAD: '48.99',
        ACIDEZ: '0.26',
        TICKET: '1258'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '325.0',
        RDTO: '18.31',
        HUMEDAD: '55.47',
        ACIDEZ: '0.24',
        TICKET: '1259'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '700.0',
        RDTO: '21.05',
        HUMEDAD: '51.73',
        ACIDEZ: '0.32',
        TICKET: '1260'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1682.0',
        RDTO: '22.61',
        HUMEDAD: '46.58',
        ACIDEZ: '0.19',
        TICKET: '1267'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4904.0',
        RDTO: '21.27',
        HUMEDAD: '50.3',
        ACIDEZ: '0.25',
        TICKET: '1271'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1082.0',
        RDTO: '19.53',
        HUMEDAD: '54.65',
        ACIDEZ: '0.34',
        TICKET: '1272'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '928.0',
        RDTO: '20.89',
        HUMEDAD: '49.97',
        ACIDEZ: '0.22',
        TICKET: '1274'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '388.0',
        RDTO: '22.64',
        HUMEDAD: '47.1',
        ACIDEZ: '0.25',
        TICKET: '1275'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '417.0',
        RDTO: '22.11',
        HUMEDAD: '48.47',
        ACIDEZ: '0.39',
        TICKET: '1273'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '443.0',
        RDTO: '19.28',
        HUMEDAD: '53.69',
        ACIDEZ: '0.21',
        TICKET: '1296'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '384.0',
        RDTO: '19.68',
        HUMEDAD: '51.22',
        ACIDEZ: '0.36',
        TICKET: '1276'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '5157.0',
        RDTO: '19.59',
        HUMEDAD: '49.84',
        ACIDEZ: '0.24',
        TICKET: '1277'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '845.0',
        RDTO: '20.37',
        HUMEDAD: '51.27',
        ACIDEZ: '0.21',
        TICKET: '1278'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '880.0',
        RDTO: '20.33',
        HUMEDAD: '49.37',
        ACIDEZ: '0.24',
        TICKET: '1279'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2245.0',
        RDTO: '23.85',
        HUMEDAD: '47.35',
        ACIDEZ: '0.14',
        TICKET: '1268'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '442.0',
        RDTO: '21.75',
        HUMEDAD: '50.51',
        ACIDEZ: '0.35',
        TICKET: '1269'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1028.0',
        RDTO: '20.11',
        HUMEDAD: '51.26',
        ACIDEZ: '0.25',
        TICKET: '1280'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2486.0',
        RDTO: '21.43',
        HUMEDAD: '49.31',
        ACIDEZ: '0.19',
        TICKET: '1281'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4232.0',
        RDTO: '20.66',
        HUMEDAD: '49.1',
        ACIDEZ: '0.24',
        TICKET: '1282'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1134.0',
        RDTO: '21.37',
        HUMEDAD: '50.35',
        ACIDEZ: '0.24',
        TICKET: '1283'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '763.0',
        RDTO: '22.51',
        HUMEDAD: '47.91',
        ACIDEZ: '0.33',
        TICKET: '1284'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2363.0',
        RDTO: '20.43',
        HUMEDAD: '48.8',
        ACIDEZ: '0.21',
        TICKET: '1285'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2364.0',
        RDTO: '26.24',
        HUMEDAD: '42.93',
        ACIDEZ: '0.21',
        TICKET: '1286'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '9971.0',
        RDTO: '20.21',
        HUMEDAD: '51.33',
        ACIDEZ: '0.29',
        TICKET: '1287'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4083.0',
        RDTO: '20.1',
        HUMEDAD: '50.62',
        ACIDEZ: '0.44',
        TICKET: '1297'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '348.0',
        RDTO: '21.36',
        HUMEDAD: '51.74',
        ACIDEZ: '0.31',
        TICKET: '1298'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '324.0',
        RDTO: '21.26',
        HUMEDAD: '52.51',
        ACIDEZ: '0.36',
        TICKET: '1324'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3513.0',
        RDTO: '21.65',
        HUMEDAD: '48.27',
        ACIDEZ: '0.2',
        TICKET: '1288'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1558.0',
        RDTO: '21.72',
        HUMEDAD: '50.47',
        ACIDEZ: '0.26',
        TICKET: '1289'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2704.0',
        RDTO: '20.61',
        HUMEDAD: '51.92',
        ACIDEZ: '0.28',
        TICKET: '1290'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '6124.0',
        RDTO: '22.16',
        HUMEDAD: '50.24',
        ACIDEZ: '0.36',
        TICKET: '1291'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '649.0',
        RDTO: '21.58',
        HUMEDAD: '48.36',
        ACIDEZ: '0.22',
        TICKET: '1292'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4953.0',
        RDTO: '18.82',
        HUMEDAD: '51.3',
        ACIDEZ: '0.25',
        TICKET: '1293'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '760.0',
        RDTO: '19.48',
        HUMEDAD: '52.58',
        ACIDEZ: '0.3',
        TICKET: '1294'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1639.0',
        RDTO: '23.29',
        HUMEDAD: '47.25',
        ACIDEZ: '0.12',
        TICKET: '1295'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '772.0',
        RDTO: '18.17',
        HUMEDAD: '49.89',
        ACIDEZ: '0.2',
        TICKET: '1299'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '368.0',
        RDTO: '21.42',
        HUMEDAD: '49.29',
        ACIDEZ: '0.43',
        TICKET: '1300'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '767.0',
        RDTO: '17.91',
        HUMEDAD: '56.7',
        ACIDEZ: '0.43',
        TICKET: '1301'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1020.0',
        RDTO: '19.61',
        HUMEDAD: '48.87',
        ACIDEZ: '0.29',
        TICKET: '1302'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4968.0',
        RDTO: '22.37',
        HUMEDAD: '48.74',
        ACIDEZ: '0.47',
        TICKET: '1303'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1025.0',
        RDTO: '22.1',
        HUMEDAD: '48.64',
        ACIDEZ: '0.22',
        TICKET: '1304'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2177.0',
        RDTO: '19.99',
        HUMEDAD: '50.59',
        ACIDEZ: '0.29',
        TICKET: '1305'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '935.0',
        RDTO: '20.61',
        HUMEDAD: '51.02',
        ACIDEZ: '0.22',
        TICKET: '1306'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '456.0',
        RDTO: '23.55',
        HUMEDAD: '47.94',
        ACIDEZ: '0.32',
        TICKET: '1307'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2207.0',
        RDTO: '22.25',
        HUMEDAD: '49.84',
        ACIDEZ: '0.22',
        TICKET: '1308'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '6090.0',
        RDTO: '19.78',
        HUMEDAD: '52.08',
        ACIDEZ: '0.37',
        TICKET: '1309'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '761.0',
        RDTO: '19.78',
        HUMEDAD: '52.08',
        ACIDEZ: '0.37',
        TICKET: '1310'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '761.0',
        RDTO: '19.78',
        HUMEDAD: '52.08',
        ACIDEZ: '0.37',
        TICKET: '1311'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3911.0',
        RDTO: '19.3',
        HUMEDAD: '53.15',
        ACIDEZ: '0.18',
        TICKET: '1312'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2321.0',
        RDTO: '23.7',
        HUMEDAD: '46.55',
        ACIDEZ: '0.19',
        TICKET: '1313'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3734.0',
        RDTO: '19.95',
        HUMEDAD: '48.81',
        ACIDEZ: '0.18',
        TICKET: '1314'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '8129.0',
        RDTO: '21.81',
        HUMEDAD: '47.86',
        ACIDEZ: '0.34',
        TICKET: '1315'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '7698.0',
        RDTO: '22.09',
        HUMEDAD: '49.3',
        ACIDEZ: '0.26',
        TICKET: '1316'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2490.0',
        RDTO: '20.33',
        HUMEDAD: '51.05',
        ACIDEZ: '0.28',
        TICKET: '1317'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '926.0',
        RDTO: '23.31',
        HUMEDAD: '47.25',
        ACIDEZ: '0.3',
        TICKET: '1318'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1165.0',
        RDTO: '21.07',
        HUMEDAD: '50.04',
        ACIDEZ: '0.21',
        TICKET: '1319'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '166.0',
        RDTO: '20.74',
        HUMEDAD: '51.46',
        ACIDEZ: '0.34',
        TICKET: '1320'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '5939.0',
        RDTO: '21.17',
        HUMEDAD: '49.43',
        ACIDEZ: '0.31',
        TICKET: '1321'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '485.0',
        RDTO: '20.08',
        HUMEDAD: '52.83',
        ACIDEZ: '0.2',
        TICKET: '1322'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2064.0',
        RDTO: '22.01',
        HUMEDAD: '48.43',
        ACIDEZ: '0.17',
        TICKET: '1323'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '486.0',
        RDTO: '21.23',
        HUMEDAD: '49.19',
        ACIDEZ: '0.39',
        TICKET: '1325'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '251.0',
        RDTO: '20.71',
        HUMEDAD: '49.11',
        ACIDEZ: '0.2',
        TICKET: '1326'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '443.0',
        RDTO: '20.33',
        HUMEDAD: '51.81',
        ACIDEZ: '0.39',
        TICKET: '1327'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4427.0',
        RDTO: '21.24',
        HUMEDAD: '48.93',
        ACIDEZ: '0.26',
        TICKET: '1328'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '525.0',
        RDTO: '21.98',
        HUMEDAD: '47.26',
        ACIDEZ: '0.36',
        TICKET: '1329'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '961.0',
        RDTO: '21.51',
        HUMEDAD: '48.47',
        ACIDEZ: '0.24',
        TICKET: '1330'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '217.0',
        RDTO: '19.06',
        HUMEDAD: '49.95',
        ACIDEZ: '0.24',
        TICKET: '1331'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '334.0',
        RDTO: '19.94',
        HUMEDAD: '52.59',
        ACIDEZ: '0.45',
        TICKET: '1332'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '5460.0',
        RDTO: '22.33',
        HUMEDAD: '47.03',
        ACIDEZ: '0.28',
        TICKET: '1333'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '534.0',
        RDTO: '25.02',
        HUMEDAD: '46.09',
        ACIDEZ: '0.28',
        TICKET: '1334'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '365.0',
        RDTO: '23.1',
        HUMEDAD: '46.45',
        ACIDEZ: '0.23',
        TICKET: '1335'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1064.0',
        RDTO: '23.51',
        HUMEDAD: '47.28',
        ACIDEZ: '0.21',
        TICKET: '1336'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2456.0',
        RDTO: '22.36',
        HUMEDAD: '49.29',
        ACIDEZ: '0.22',
        TICKET: '1337'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2957.0',
        RDTO: '19.98',
        HUMEDAD: '49.1',
        ACIDEZ: '0.21',
        TICKET: '1338'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2270.0',
        RDTO: '25.94',
        HUMEDAD: '43.68',
        ACIDEZ: '0.2',
        TICKET: '1339'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '6991.0',
        RDTO: '21.5',
        HUMEDAD: '49.78',
        ACIDEZ: '0.36',
        TICKET: '1340'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '874.0',
        RDTO: '21.5',
        HUMEDAD: '49.78',
        ACIDEZ: '0.36',
        TICKET: '1341'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '874.0',
        RDTO: '21.5',
        HUMEDAD: '49.78',
        ACIDEZ: '0.36',
        TICKET: '1342'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '7996.0',
        RDTO: '20.37',
        HUMEDAD: '51.81',
        ACIDEZ: '0.43',
        TICKET: '1343'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1384.0',
        RDTO: '21.13',
        HUMEDAD: '49.94',
        ACIDEZ: '0.39',
        TICKET: '1344'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '5663.0',
        RDTO: '21.88',
        HUMEDAD: '49.29',
        ACIDEZ: '0.22',
        TICKET: '1345'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '5163.0',
        RDTO: '24.83',
        HUMEDAD: '45.46',
        ACIDEZ: '0.07',
        TICKET: '1346'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3071.0',
        RDTO: '22.12',
        HUMEDAD: '49.59',
        ACIDEZ: '0.25',
        TICKET: '1347'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2620.0',
        RDTO: '19.12',
        HUMEDAD: '49.39',
        ACIDEZ: '0.18',
        TICKET: '1348'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '737.0',
        RDTO: '20.55',
        HUMEDAD: '50.85',
        ACIDEZ: '0.25',
        TICKET: '1349'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2030.0',
        RDTO: '22.22',
        HUMEDAD: '48.14',
        ACIDEZ: '0.21',
        TICKET: '1350'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2503.0',
        RDTO: '19.01',
        HUMEDAD: '51.0',
        ACIDEZ: '0.19',
        TICKET: '1372'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2551.0',
        RDTO: '22.3',
        HUMEDAD: '49.55',
        ACIDEZ: '0.39',
        TICKET: '1373'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '641.0',
        RDTO: '23.81',
        HUMEDAD: '47.37',
        ACIDEZ: '0.32',
        TICKET: '1374'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1407.0',
        RDTO: '22.14',
        HUMEDAD: '49.31',
        ACIDEZ: '0.2',
        TICKET: '1375'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '449.0',
        RDTO: '23.51',
        HUMEDAD: '48.36',
        ACIDEZ: '0.34',
        TICKET: '1351'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '485.0',
        RDTO: '24.9',
        HUMEDAD: '45.71',
        ACIDEZ: '0.25',
        TICKET: '1352'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4957.0',
        RDTO: '22.41',
        HUMEDAD: '48.98',
        ACIDEZ: '0.22',
        TICKET: '1353'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '238.0',
        RDTO: '20.8',
        HUMEDAD: '51.0',
        ACIDEZ: '0.4',
        TICKET: '1354'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3718.0',
        RDTO: '20.74',
        HUMEDAD: '51.16',
        ACIDEZ: '0.31',
        TICKET: '1355'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '411.0',
        RDTO: '21.48',
        HUMEDAD: '52.36',
        ACIDEZ: '0.39',
        TICKET: '1356'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1470.0',
        RDTO: '21.47',
        HUMEDAD: '48.66',
        ACIDEZ: '0.28',
        TICKET: '1357'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1156.0',
        RDTO: '24.25',
        HUMEDAD: '45.76',
        ACIDEZ: '0.2',
        TICKET: '1358'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1287.0',
        RDTO: '22.46',
        HUMEDAD: '49.58',
        ACIDEZ: '0.22',
        TICKET: '1359'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '6342.0',
        RDTO: '24.95',
        HUMEDAD: '43.76',
        ACIDEZ: '0.21',
        TICKET: '1360'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2023.0',
        RDTO: '24.43',
        HUMEDAD: '45.75',
        ACIDEZ: '0.2',
        TICKET: '1361'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '673.0',
        RDTO: '22.24',
        HUMEDAD: '49.46',
        ACIDEZ: '0.21',
        TICKET: '1362'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2540.0',
        RDTO: '22.33',
        HUMEDAD: '50.52',
        ACIDEZ: '0.21',
        TICKET: '1363'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '7260.0',
        RDTO: '20.35',
        HUMEDAD: '52.42',
        ACIDEZ: '0.31',
        TICKET: '1364'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '908.0',
        RDTO: '20.35',
        HUMEDAD: '52.42',
        ACIDEZ: '0.31',
        TICKET: '1365'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '908.0',
        RDTO: '20.35',
        HUMEDAD: '52.42',
        ACIDEZ: '0.31',
        TICKET: '1366'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4002.0',
        RDTO: '22.01',
        HUMEDAD: '49.64',
        ACIDEZ: '0.21',
        TICKET: '1367'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1334.0',
        RDTO: '22.01',
        HUMEDAD: '49.64',
        ACIDEZ: '0.21',
        TICKET: '1368'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3579.0',
        RDTO: '19.67',
        HUMEDAD: '51.02',
        ACIDEZ: '0.21',
        TICKET: '1369'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '8265.0',
        RDTO: '21.37',
        HUMEDAD: '49.74',
        ACIDEZ: '0.25',
        TICKET: '1370'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3556.0',
        RDTO: '21.85',
        HUMEDAD: '50.66',
        ACIDEZ: '0.2',
        TICKET: '1371'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4534.0',
        RDTO: '19.92',
        HUMEDAD: '50.98',
        ACIDEZ: '0.35',
        TICKET: '1377'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '531.0',
        RDTO: '23.79',
        HUMEDAD: '48.1',
        ACIDEZ: '0.32',
        TICKET: '1378'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3926.0',
        RDTO: '22.45',
        HUMEDAD: '48.69',
        ACIDEZ: '0.32',
        TICKET: '1395'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '378.0',
        RDTO: '18.33',
        HUMEDAD: '52.7',
        ACIDEZ: '0.39',
        TICKET: '1379'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '369.0',
        RDTO: '24.03',
        HUMEDAD: '47.56',
        ACIDEZ: '0.22',
        TICKET: '1380'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3789.0',
        RDTO: '21.5',
        HUMEDAD: '50.3',
        ACIDEZ: '0.38',
        TICKET: '1381'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '706.0',
        RDTO: '21.31',
        HUMEDAD: '48.52',
        ACIDEZ: '0.21',
        TICKET: '1382'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2978.0',
        RDTO: '23.3',
        HUMEDAD: '46.54',
        ACIDEZ: '0.26',
        TICKET: '1383'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '965.0',
        RDTO: '21.34',
        HUMEDAD: '49.89',
        ACIDEZ: '0.48',
        TICKET: '1384'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '426.0',
        RDTO: '22.11',
        HUMEDAD: '48.63',
        ACIDEZ: '0.33',
        TICKET: '1376'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2013.0',
        RDTO: '23.32',
        HUMEDAD: '47.04',
        ACIDEZ: '0.43',
        TICKET: '1385'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1391.0',
        RDTO: '22.12',
        HUMEDAD: '47.76',
        ACIDEZ: '0.28',
        TICKET: '1386'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '438.0',
        RDTO: '21.58',
        HUMEDAD: '45.63',
        ACIDEZ: '0.25',
        TICKET: '1387'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3027.0',
        RDTO: '24.58',
        HUMEDAD: '46.37',
        ACIDEZ: '0.23',
        TICKET: '1388'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2228.0',
        RDTO: '25.38',
        HUMEDAD: '43.18',
        ACIDEZ: '0.22',
        TICKET: '1389'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4885.0',
        RDTO: '22.36',
        HUMEDAD: '49.61',
        ACIDEZ: '0.27',
        TICKET: '1390'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2357.0',
        RDTO: '22.11',
        HUMEDAD: '50.24',
        ACIDEZ: '0.2',
        TICKET: '1391'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '7833.0',
        RDTO: '20.53',
        HUMEDAD: '51.82',
        ACIDEZ: '0.46',
        TICKET: '1392'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '979.0',
        RDTO: '20.53',
        HUMEDAD: '51.82',
        ACIDEZ: '0.46',
        TICKET: '1393'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '979.0',
        RDTO: '20.53',
        HUMEDAD: '51.82',
        ACIDEZ: '0.46',
        TICKET: '1394'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1309.0',
        RDTO: '22.45',
        HUMEDAD: '48.69',
        ACIDEZ: '0.32',
        TICKET: '1396'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '5249.0',
        RDTO: '22.9',
        HUMEDAD: '48.2',
        ACIDEZ: '0.31',
        TICKET: '1397'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3305.0',
        RDTO: '20.81',
        HUMEDAD: '50.28',
        ACIDEZ: '0.25',
        TICKET: '1398'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '11819.0',
        RDTO: '21.93',
        HUMEDAD: '48.62',
        ACIDEZ: '0.19',
        TICKET: '1399'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4911.0',
        RDTO: '20.9',
        HUMEDAD: '48.22',
        ACIDEZ: '0.08',
        TICKET: '1400'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1147.0',
        RDTO: '23.42',
        HUMEDAD: '46.57',
        ACIDEZ: '0.24',
        TICKET: '1401'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '314.0',
        RDTO: '22.88',
        HUMEDAD: '49.55',
        ACIDEZ: '0.23',
        TICKET: '1402'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2053.0',
        RDTO: '23.34',
        HUMEDAD: '47.9',
        ACIDEZ: '0.17',
        TICKET: '1403'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2001.0',
        RDTO: '22.64',
        HUMEDAD: '48.18',
        ACIDEZ: '0.19',
        TICKET: '1409'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '603.0',
        RDTO: '21.95',
        HUMEDAD: '49.42',
        ACIDEZ: '0.29',
        TICKET: '1404'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '158.0',
        RDTO: '27.64',
        HUMEDAD: '41.56',
        ACIDEZ: '0.42',
        TICKET: '1405'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '588.0',
        RDTO: '22.37',
        HUMEDAD: '48.55',
        ACIDEZ: '0.17',
        TICKET: '1406'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4317.0',
        RDTO: '21.1',
        HUMEDAD: '49.01',
        ACIDEZ: '0.19',
        TICKET: '1407'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '291.0',
        RDTO: '20.47',
        HUMEDAD: '49.48',
        ACIDEZ: '0.26',
        TICKET: '1408'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '20669.0',
        RDTO: '21.94',
        HUMEDAD: '49.82',
        ACIDEZ: '0.29',
        TICKET: '1410'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '207.0',
        RDTO: '18.97',
        HUMEDAD: '47.54',
        ACIDEZ: '0.22',
        TICKET: '1411'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4117.0',
        RDTO: '20.39',
        HUMEDAD: '50.33',
        ACIDEZ: '0.26',
        TICKET: '1412'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '288.0',
        RDTO: '21.29',
        HUMEDAD: '48.99',
        ACIDEZ: '0.26',
        TICKET: '1413'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4966.0',
        RDTO: '21.53',
        HUMEDAD: '49.66',
        ACIDEZ: '0.47',
        TICKET: '1414'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '601.0',
        RDTO: '19.88',
        HUMEDAD: '50.21',
        ACIDEZ: '0.26',
        TICKET: '1415'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '302.0',
        RDTO: '22.25',
        HUMEDAD: '47.91',
        ACIDEZ: '0.29',
        TICKET: '1416'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4922.0',
        RDTO: '21.04',
        HUMEDAD: '48.45',
        ACIDEZ: '0.33',
        TICKET: '1417'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1021.0',
        RDTO: '21.56',
        HUMEDAD: '47.93',
        ACIDEZ: '0.37',
        TICKET: '1418'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1514.0',
        RDTO: '26.14',
        HUMEDAD: '42.58',
        ACIDEZ: '0.23',
        TICKET: '1419'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '6750.0',
        RDTO: '20.51',
        HUMEDAD: '50.69',
        ACIDEZ: '0.26',
        TICKET: '1420'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '844.0',
        RDTO: '20.51',
        HUMEDAD: '50.69',
        ACIDEZ: '0.26',
        TICKET: '1421'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '844.0',
        RDTO: '20.51',
        HUMEDAD: '50.69',
        ACIDEZ: '0.26',
        TICKET: '1422'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2010.0',
        RDTO: '21.38',
        HUMEDAD: '47.42',
        ACIDEZ: '0.2',
        TICKET: '1423'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4967.0',
        RDTO: '22.08',
        HUMEDAD: '48.4',
        ACIDEZ: '0.27',
        TICKET: '1424'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4333.0',
        RDTO: '22.2',
        HUMEDAD: '48.57',
        ACIDEZ: '0.35',
        TICKET: '1425'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '8090.0',
        RDTO: '21.23',
        HUMEDAD: '48.23',
        ACIDEZ: '0.23',
        TICKET: '1426'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3768.0',
        RDTO: '24.13',
        HUMEDAD: '47.93',
        ACIDEZ: '0.19',
        TICKET: '1427'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3844.0',
        RDTO: '20.08',
        HUMEDAD: '51.28',
        ACIDEZ: '0.5',
        TICKET: '1428'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1281.0',
        RDTO: '20.08',
        HUMEDAD: '51.28',
        ACIDEZ: '0.5',
        TICKET: '1429'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '10345.0',
        RDTO: '22.45',
        HUMEDAD: '48.18',
        ACIDEZ: '0.25',
        TICKET: '1430'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1770.0',
        RDTO: '23.34',
        HUMEDAD: '47.84',
        ACIDEZ: '0.32',
        TICKET: '1431'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '926.0',
        RDTO: '22.8',
        HUMEDAD: '45.94',
        ACIDEZ: '0.21',
        TICKET: '1432'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4886.0',
        RDTO: '22.16',
        HUMEDAD: '48.33',
        ACIDEZ: '0.24',
        TICKET: '1433'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3814.0',
        RDTO: '21.44',
        HUMEDAD: '49.51',
        ACIDEZ: '0.32',
        TICKET: '1434'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '15622.0',
        RDTO: '21.79',
        HUMEDAD: '50.21',
        ACIDEZ: '0.27',
        TICKET: '1435'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2035.0',
        RDTO: '22.68',
        HUMEDAD: '47.56',
        ACIDEZ: '0.21',
        TICKET: '1436'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4315.0',
        RDTO: '22.21',
        HUMEDAD: '46.86',
        ACIDEZ: '0.26',
        TICKET: '1437'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3276.0',
        RDTO: '24.0',
        HUMEDAD: '45.41',
        ACIDEZ: '0.23',
        TICKET: '1438'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '477.0',
        RDTO: '25.04',
        HUMEDAD: '44.17',
        ACIDEZ: '0.19',
        TICKET: '1439'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1800.0',
        RDTO: '23.75',
        HUMEDAD: '44.46',
        ACIDEZ: '0.21',
        TICKET: '1440'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '563.0',
        RDTO: '23.27',
        HUMEDAD: '48.73',
        ACIDEZ: '0.27',
        TICKET: '1459'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '781.0',
        RDTO: '21.88',
        HUMEDAD: '49.61',
        ACIDEZ: '0.23',
        TICKET: '1441'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1087.0',
        RDTO: '25.76',
        HUMEDAD: '45.13',
        ACIDEZ: '0.25',
        TICKET: '1442'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3699.0',
        RDTO: '21.94',
        HUMEDAD: '48.55',
        ACIDEZ: '0.35',
        TICKET: '1443'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1013.0',
        RDTO: '23.0',
        HUMEDAD: '47.97',
        ACIDEZ: '0.18',
        TICKET: '1444'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2864.0',
        RDTO: '21.5',
        HUMEDAD: '46.42',
        ACIDEZ: '0.25',
        TICKET: '1445'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1411.0',
        RDTO: '24.43',
        HUMEDAD: '46.48',
        ACIDEZ: '0.25',
        TICKET: '1446'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2388.0',
        RDTO: '27.01',
        HUMEDAD: '41.99',
        ACIDEZ: '0.25',
        TICKET: '1447'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2927.0',
        RDTO: '22.09',
        HUMEDAD: '49.51',
        ACIDEZ: '0.25',
        TICKET: '1448'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '11387.0',
        RDTO: '21.55',
        HUMEDAD: '50.17',
        ACIDEZ: '0.27',
        TICKET: '1449'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4724.0',
        RDTO: '21.82',
        HUMEDAD: '48.09',
        ACIDEZ: '0.25',
        TICKET: '1450'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '5127.0',
        RDTO: '21.66',
        HUMEDAD: '49.72',
        ACIDEZ: '0.31',
        TICKET: '1451'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4490.0',
        RDTO: '23.39',
        HUMEDAD: '47.84',
        ACIDEZ: '0.26',
        TICKET: '1452'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '7056.0',
        RDTO: '22.37',
        HUMEDAD: '48.78',
        ACIDEZ: '0.35',
        TICKET: '1453'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2644.0',
        RDTO: '25.81',
        HUMEDAD: '46.48',
        ACIDEZ: '0.32',
        TICKET: '1454'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '792.0',
        RDTO: '26.08',
        HUMEDAD: '42.33',
        ACIDEZ: '0.23',
        TICKET: '1464'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '5054.0',
        RDTO: '22.0',
        HUMEDAD: '50.1',
        ACIDEZ: '0.28',
        TICKET: '1455'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '6658.0',
        RDTO: '20.82',
        HUMEDAD: '51.85',
        ACIDEZ: '0.42',
        TICKET: '1456'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2219.0',
        RDTO: '20.82',
        HUMEDAD: '51.85',
        ACIDEZ: '0.42',
        TICKET: '1457'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1091.0',
        RDTO: '21.78',
        HUMEDAD: '47.23',
        ACIDEZ: '0.21',
        TICKET: '1460'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '193.0',
        RDTO: '21.78',
        HUMEDAD: '47.23',
        ACIDEZ: '0.21',
        TICKET: '1461'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '561.0',
        RDTO: '23.25',
        HUMEDAD: '46.36',
        ACIDEZ: '0.28',
        TICKET: '1462'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '833.0',
        RDTO: '22.32',
        HUMEDAD: '46.7',
        ACIDEZ: '0.27',
        TICKET: '1463'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '19417.0',
        RDTO: '22.04',
        HUMEDAD: '48.34',
        ACIDEZ: '0.24',
        TICKET: '1465'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '859.0',
        RDTO: '22.44',
        HUMEDAD: '46.77',
        ACIDEZ: '0.23',
        TICKET: '1472'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2707.0',
        RDTO: '24.45',
        HUMEDAD: '46.36',
        ACIDEZ: '0.32',
        TICKET: '1473'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '853.0',
        RDTO: '23.52',
        HUMEDAD: '43.14',
        ACIDEZ: '0.07',
        TICKET: '1474'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1860.0',
        RDTO: '26.08',
        HUMEDAD: '42.11',
        ACIDEZ: '0.27',
        TICKET: '1475'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2879.0',
        RDTO: '21.7',
        HUMEDAD: '50.29',
        ACIDEZ: '0.42',
        TICKET: '1476'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2275.0',
        RDTO: '23.84',
        HUMEDAD: '46.78',
        ACIDEZ: '0.38',
        TICKET: '1477'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3605.0',
        RDTO: '22.31',
        HUMEDAD: '47.9',
        ACIDEZ: '0.29',
        TICKET: '1466'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '550.0',
        RDTO: '21.39',
        HUMEDAD: '47.65',
        ACIDEZ: '0.32',
        TICKET: '1467'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '11485.0',
        RDTO: '21.89',
        HUMEDAD: '48.73',
        ACIDEZ: '0.26',
        TICKET: '1478'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '624.0',
        RDTO: '21.25',
        HUMEDAD: '46.53',
        ACIDEZ: '0.27',
        TICKET: '1468'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3262.0',
        RDTO: '21.87',
        HUMEDAD: '45.67',
        ACIDEZ: '0.2',
        TICKET: '1479'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '465.0',
        RDTO: '21.4',
        HUMEDAD: '48.57',
        ACIDEZ: '0.27',
        TICKET: '1469'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4131.0',
        RDTO: '24.4',
        HUMEDAD: '43.75',
        ACIDEZ: '0.2',
        TICKET: '1470'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '6539.0',
        RDTO: '22.75',
        HUMEDAD: '47.46',
        ACIDEZ: '0.32',
        TICKET: '1471'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '384.0',
        RDTO: '20.49',
        HUMEDAD: '45.77',
        ACIDEZ: '0.25',
        TICKET: '1480'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2177.0',
        RDTO: '20.49',
        HUMEDAD: '45.77',
        ACIDEZ: '0.25',
        TICKET: '1481'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4438.0',
        RDTO: '18.82',
        HUMEDAD: '54.22',
        ACIDEZ: '0.3',
        TICKET: '1482'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3292.0',
        RDTO: '23.04',
        HUMEDAD: '46.39',
        ACIDEZ: '0.2',
        TICKET: '1483'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '7765.0',
        RDTO: '23.25',
        HUMEDAD: '47.58',
        ACIDEZ: '0.2',
        TICKET: '1484'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3818.0',
        RDTO: '21.74',
        HUMEDAD: '48.3',
        ACIDEZ: '0.3',
        TICKET: '1485'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '712.0',
        RDTO: '22.84',
        HUMEDAD: '47.4',
        ACIDEZ: '0.35',
        TICKET: '1486'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '6347.0',
        RDTO: '21.52',
        HUMEDAD: '46.16',
        ACIDEZ: '0.25',
        TICKET: '1487'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2116.0',
        RDTO: '21.52',
        HUMEDAD: '46.16',
        ACIDEZ: '0.25',
        TICKET: '1488'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3983.0',
        RDTO: '22.68',
        HUMEDAD: '48.12',
        ACIDEZ: '0.27',
        TICKET: '1489'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '448.0',
        RDTO: '26.37',
        HUMEDAD: '43.58',
        ACIDEZ: '0.19',
        TICKET: '1490'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4352.0',
        RDTO: '22.73',
        HUMEDAD: '48.48',
        ACIDEZ: '0.29',
        TICKET: '1491'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '157.0',
        RDTO: '25.05',
        HUMEDAD: '44.86',
        ACIDEZ: '0.33',
        TICKET: '1492'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3888.0',
        RDTO: '21.94',
        HUMEDAD: '48.62',
        ACIDEZ: '0.27',
        TICKET: '1493'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1522.0',
        RDTO: '26.08',
        HUMEDAD: '43.11',
        ACIDEZ: '0.18',
        TICKET: '1494'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2995.0',
        RDTO: '25.19',
        HUMEDAD: '45.84',
        ACIDEZ: '0.18',
        TICKET: '1495'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '338.0',
        RDTO: '26.04',
        HUMEDAD: '42.11',
        ACIDEZ: '0.21',
        TICKET: '1496'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1140.0',
        RDTO: '23.44',
        HUMEDAD: '45.68',
        ACIDEZ: '0.25',
        TICKET: '1497'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1671.0',
        RDTO: '24.99',
        HUMEDAD: '44.71',
        ACIDEZ: '0.19',
        TICKET: '1498'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '757.0',
        RDTO: '23.07',
        HUMEDAD: '43.92',
        ACIDEZ: '0.24',
        TICKET: '1499'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2367.0',
        RDTO: '24.42',
        HUMEDAD: '46.09',
        ACIDEZ: '0.27',
        TICKET: '1500'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2775.0',
        RDTO: '23.38',
        HUMEDAD: '46.11',
        ACIDEZ: '0.43',
        TICKET: '1501'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2548.0',
        RDTO: '23.41',
        HUMEDAD: '46.89',
        ACIDEZ: '0.28',
        TICKET: '1502'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3428.0',
        RDTO: '22.21',
        HUMEDAD: '46.96',
        ACIDEZ: '0.28',
        TICKET: '1503'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1072.0',
        RDTO: '25.48',
        HUMEDAD: '43.85',
        ACIDEZ: '0.17',
        TICKET: '1504'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3331.0',
        RDTO: '23.77',
        HUMEDAD: '46.09',
        ACIDEZ: '0.27',
        TICKET: '1505'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2378.0',
        RDTO: '19.99',
        HUMEDAD: '45.72',
        ACIDEZ: '0.23',
        TICKET: '1506'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '420.0',
        RDTO: '19.99',
        HUMEDAD: '45.72',
        ACIDEZ: '0.23',
        TICKET: '1507'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '6541.0',
        RDTO: '22.79',
        HUMEDAD: '45.27',
        ACIDEZ: '0.24',
        TICKET: '1508'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2180.0',
        RDTO: '22.79',
        HUMEDAD: '45.27',
        ACIDEZ: '0.24',
        TICKET: '1509'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3274.0',
        RDTO: '21.95',
        HUMEDAD: '45.94',
        ACIDEZ: '0.19',
        TICKET: '1510'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '747.0',
        RDTO: '23.67',
        HUMEDAD: '46.65',
        ACIDEZ: '0.27',
        TICKET: '1511'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '6070.0',
        RDTO: '23.69',
        HUMEDAD: '45.64',
        ACIDEZ: '0.26',
        TICKET: '1512'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '565.0',
        RDTO: '24.09',
        HUMEDAD: '45.97',
        ACIDEZ: '0.16',
        TICKET: '1517'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '598.0',
        RDTO: '23.64',
        HUMEDAD: '46.85',
        ACIDEZ: '0.28',
        TICKET: '1518'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3669.0',
        RDTO: '21.4',
        HUMEDAD: '48.52',
        ACIDEZ: '0.38',
        TICKET: '1519'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '530.0',
        RDTO: '20.24',
        HUMEDAD: '45.61',
        ACIDEZ: '0.17',
        TICKET: '1520'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '1405.0',
        RDTO: '22.85',
        HUMEDAD: '43.82',
        ACIDEZ: '1.68',
        TICKET: '1662'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '281.0',
        RDTO: '23.19',
        HUMEDAD: '46.56',
        ACIDEZ: '0.24',
        TICKET: '1521'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4407.0',
        RDTO: '22.35',
        HUMEDAD: '47.72',
        ACIDEZ: '0.25',
        TICKET: '1522'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3721.0',
        RDTO: '21.91',
        HUMEDAD: '48.76',
        ACIDEZ: '0.45',
        TICKET: '1523'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '322.0',
        RDTO: '22.06',
        HUMEDAD: '48.42',
        ACIDEZ: '0.27',
        TICKET: '1524'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '784.0',
        RDTO: '23.34',
        HUMEDAD: '43.64',
        ACIDEZ: '0.21',
        TICKET: '1513'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '247.0',
        RDTO: '23.75',
        HUMEDAD: '43.53',
        ACIDEZ: '0.21',
        TICKET: '1514'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '271.0',
        RDTO: '25.3',
        HUMEDAD: '45.79',
        ACIDEZ: '0.19',
        TICKET: '1515'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '350.0',
        RDTO: '26.57',
        HUMEDAD: '44.59',
        ACIDEZ: '0.24',
        TICKET: '1516'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2489.0',
        RDTO: '24.37',
        HUMEDAD: '47.75',
        ACIDEZ: '0.23',
        TICKET: '1525'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '778.0',
        RDTO: '23.7',
        HUMEDAD: '47.61',
        ACIDEZ: '0.32',
        TICKET: '1526'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3667.0',
        RDTO: '23.24',
        HUMEDAD: '45.59',
        ACIDEZ: '0.2',
        TICKET: '1527'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1940.0',
        RDTO: '25.03',
        HUMEDAD: '44.21',
        ACIDEZ: '0.1',
        TICKET: '1528'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '5012.0',
        RDTO: '22.07',
        HUMEDAD: '46.3',
        ACIDEZ: '0.05',
        TICKET: '1529'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1671.0',
        RDTO: '22.07',
        HUMEDAD: '46.3',
        ACIDEZ: '0.05',
        TICKET: '1530'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3514.0',
        RDTO: '19.7',
        HUMEDAD: '50.02',
        ACIDEZ: '0.24',
        TICKET: '1531'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3116.0',
        RDTO: '25.32',
        HUMEDAD: '44.39',
        ACIDEZ: '0.2',
        TICKET: '1532'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '9062.0',
        RDTO: '22.33',
        HUMEDAD: '46.35',
        ACIDEZ: '0.19',
        TICKET: '1533'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4876.0',
        RDTO: '21.8',
        HUMEDAD: '46.76',
        ACIDEZ: '0.32',
        TICKET: '1534'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2535.0',
        RDTO: '22.6',
        HUMEDAD: '47.52',
        ACIDEZ: '0.24',
        TICKET: '1535'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '529.0',
        RDTO: '25.29',
        HUMEDAD: '44.17',
        ACIDEZ: '0.26',
        TICKET: '1536'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '11314.0',
        RDTO: '23.57',
        HUMEDAD: '46.6',
        ACIDEZ: '0.17',
        TICKET: '1537'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1358.0',
        RDTO: '23.8',
        HUMEDAD: '45.98',
        ACIDEZ: '0.31',
        TICKET: '1538'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '848.0',
        RDTO: '31.1',
        HUMEDAD: '32.15',
        ACIDEZ: '1.49',
        TICKET: '1539'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2008.0',
        RDTO: '21.45',
        HUMEDAD: '45.42',
        ACIDEZ: '0.19',
        TICKET: '1540'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1208.0',
        RDTO: '23.79',
        HUMEDAD: '45.32',
        ACIDEZ: '0.26',
        TICKET: '1541'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4132.0',
        RDTO: '22.89',
        HUMEDAD: '45.2',
        ACIDEZ: '0.46',
        TICKET: '1542'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4536.0',
        RDTO: '20.89',
        HUMEDAD: '46.25',
        ACIDEZ: '0.23',
        TICKET: '1543'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3211.0',
        RDTO: '20.03',
        HUMEDAD: '49.59',
        ACIDEZ: '0.25',
        TICKET: '1544'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '659.0',
        RDTO: '23.21',
        HUMEDAD: '45.04',
        ACIDEZ: '0.14',
        TICKET: '1545'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1823.0',
        RDTO: '21.51',
        HUMEDAD: '44.3',
        ACIDEZ: '0.05',
        TICKET: '1546'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2365.0',
        RDTO: '24.06',
        HUMEDAD: '45.95',
        ACIDEZ: '0.21',
        TICKET: '1547'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4461.0',
        RDTO: '24.2',
        HUMEDAD: '45.69',
        ACIDEZ: '0.21',
        TICKET: '1548'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2826.0',
        RDTO: '21.55',
        HUMEDAD: '47.28',
        ACIDEZ: '0.34',
        TICKET: '1549'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2565.0',
        RDTO: '23.56',
        HUMEDAD: '47.49',
        ACIDEZ: '0.23',
        TICKET: '1550'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '12067.0',
        RDTO: '21.48',
        HUMEDAD: '48.09',
        ACIDEZ: '0.25',
        TICKET: '1551'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1612.0',
        RDTO: '21.49',
        HUMEDAD: '45.77',
        ACIDEZ: '0.13',
        TICKET: '1552'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4952.0',
        RDTO: '24.01',
        HUMEDAD: '46.71',
        ACIDEZ: '0.12',
        TICKET: '1570'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '545.0',
        RDTO: '24.86',
        HUMEDAD: '43.79',
        ACIDEZ: '0.23',
        TICKET: '1571'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '430.0',
        RDTO: '22.41',
        HUMEDAD: '48.8',
        ACIDEZ: '0.23',
        TICKET: '1572'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1101.0',
        RDTO: '23.13',
        HUMEDAD: '43.91',
        ACIDEZ: '0.21',
        TICKET: '1573'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4402.0',
        RDTO: '23.0',
        HUMEDAD: '46.67',
        ACIDEZ: '0.21',
        TICKET: '1597'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '505.0',
        RDTO: '23.59',
        HUMEDAD: '46.43',
        ACIDEZ: '0.2',
        TICKET: '1553'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3943.0',
        RDTO: '21.58',
        HUMEDAD: '48.55',
        ACIDEZ: '0.27',
        TICKET: '1554'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3409.0',
        RDTO: '21.66',
        HUMEDAD: '47.35',
        ACIDEZ: '0.24',
        TICKET: '1555'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2970.0',
        RDTO: '22.01',
        HUMEDAD: '47.91',
        ACIDEZ: '0.29',
        TICKET: '1556'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '822.0',
        RDTO: '24.18',
        HUMEDAD: '45.25',
        ACIDEZ: '0.25',
        TICKET: '1557'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1166.0',
        RDTO: '23.5',
        HUMEDAD: '44.11',
        ACIDEZ: '0.23',
        TICKET: '1558'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2523.0',
        RDTO: '23.69',
        HUMEDAD: '46.29',
        ACIDEZ: '0.28',
        TICKET: '1559'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '5860.0',
        RDTO: '23.02',
        HUMEDAD: '47.32',
        ACIDEZ: '0.21',
        TICKET: '1560'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1752.0',
        RDTO: '19.72',
        HUMEDAD: '45.42',
        ACIDEZ: '0.22',
        TICKET: '1561'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '309.0',
        RDTO: '19.72',
        HUMEDAD: '45.42',
        ACIDEZ: '0.22',
        TICKET: '1562'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '9837.0',
        RDTO: '21.24',
        HUMEDAD: '47.84',
        ACIDEZ: '0.26',
        TICKET: '1563'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1636.0',
        RDTO: '21.94',
        HUMEDAD: '48.47',
        ACIDEZ: '0.29',
        TICKET: '1564'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2734.0',
        RDTO: '23.55',
        HUMEDAD: '46.72',
        ACIDEZ: '0.15',
        TICKET: '1565'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3258.0',
        RDTO: '20.43',
        HUMEDAD: '54.19',
        ACIDEZ: '0.31',
        TICKET: '1598'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1659.0',
        RDTO: '19.96',
        HUMEDAD: '47.26',
        ACIDEZ: '0.1',
        TICKET: '1566'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3408.0',
        RDTO: '22.09',
        HUMEDAD: '47.14',
        ACIDEZ: '0.36',
        TICKET: '1567'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '13487.0',
        RDTO: '22.35',
        HUMEDAD: '46.11',
        ACIDEZ: '0.29',
        TICKET: '1568'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3084.0',
        RDTO: '22.45',
        HUMEDAD: '46.69',
        ACIDEZ: '0.15',
        TICKET: '1569'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '857.0',
        RDTO: '22.57',
        HUMEDAD: '47.38',
        ACIDEZ: '0.22',
        TICKET: '1599'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1058.0',
        RDTO: '21.79',
        HUMEDAD: '44.61',
        ACIDEZ: '0.15',
        TICKET: '1608'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '857.0',
        RDTO: '22.57',
        HUMEDAD: '47.38',
        ACIDEZ: '0.22',
        TICKET: '1600'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '10495.0',
        RDTO: '20.79',
        HUMEDAD: '49.35',
        ACIDEZ: '0.34',
        TICKET: '1601'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '690.0',
        RDTO: '23.4',
        HUMEDAD: '47.86',
        ACIDEZ: '0.37',
        TICKET: '1574'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3858.0',
        RDTO: '20.46',
        HUMEDAD: '50.88',
        ACIDEZ: '0.3',
        TICKET: '1575'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4144.0',
        RDTO: '22.9',
        HUMEDAD: '46.3',
        ACIDEZ: '0.25',
        TICKET: '1576'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2268.0',
        RDTO: '20.89',
        HUMEDAD: '51.83',
        ACIDEZ: '0.27',
        TICKET: '1577'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3974.0',
        RDTO: '19.69',
        HUMEDAD: '49.69',
        ACIDEZ: '0.33',
        TICKET: '1578'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '777.0',
        RDTO: '17.88',
        HUMEDAD: '45.81',
        ACIDEZ: '0.17',
        TICKET: '1579'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '406.0',
        RDTO: '19.63',
        HUMEDAD: '50.7',
        ACIDEZ: '0.29',
        TICKET: '1580'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1866.0',
        RDTO: '24.56',
        HUMEDAD: '45.58',
        ACIDEZ: '0.23',
        TICKET: '1581'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '886.0',
        RDTO: '24.14',
        HUMEDAD: '47.02',
        ACIDEZ: '0.25',
        TICKET: '1582'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4663.0',
        RDTO: '21.14',
        HUMEDAD: '49.93',
        ACIDEZ: '0.29',
        TICKET: '1583'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '8731.0',
        RDTO: '20.88',
        HUMEDAD: '50.45',
        ACIDEZ: '0.36',
        TICKET: '1584'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2487.0',
        RDTO: '23.62',
        HUMEDAD: '46.81',
        ACIDEZ: '0.2',
        TICKET: '1585'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1553.0',
        RDTO: '21.88',
        HUMEDAD: '45.94',
        ACIDEZ: '0.27',
        TICKET: '1586'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1383.0',
        RDTO: '21.41',
        HUMEDAD: '45.65',
        ACIDEZ: '0.24',
        TICKET: '1587'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '7883.0',
        RDTO: '21.91',
        HUMEDAD: '45.0',
        ACIDEZ: '0.21',
        TICKET: '1588'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3388.0',
        RDTO: '23.68',
        HUMEDAD: '45.41',
        ACIDEZ: '0.23',
        TICKET: '1589'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4047.0',
        RDTO: '23.64',
        HUMEDAD: '46.48',
        ACIDEZ: '0.2',
        TICKET: '1590'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '4047.0',
        RDTO: '23.64',
        HUMEDAD: '46.48',
        ACIDEZ: '0.2',
        TICKET: '1591'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '179.0',
        RDTO: '24.92',
        HUMEDAD: '44.2',
        ACIDEZ: '0.3',
        TICKET: '1592'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '670.0',
        RDTO: '25.5',
        HUMEDAD: '44.36',
        ACIDEZ: '0.3',
        TICKET: '1593'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '5237.0',
        RDTO: '22.56',
        HUMEDAD: '47.18',
        ACIDEZ: '0.29',
        TICKET: '1594'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '8155.0',
        RDTO: '20.28',
        HUMEDAD: '51.48',
        ACIDEZ: '0.4',
        TICKET: '1595'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '845.0',
        RDTO: '26.29',
        HUMEDAD: '41.3',
        ACIDEZ: '1.45',
        TICKET: '1610'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1388.0',
        RDTO: '23.44',
        HUMEDAD: '43.39',
        ACIDEZ: '0.35',
        TICKET: '1603'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2429.0',
        RDTO: '24.78',
        HUMEDAD: '44.99',
        ACIDEZ: '0.51',
        TICKET: '1604'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1514.0',
        RDTO: '22.04',
        HUMEDAD: '48.46',
        ACIDEZ: '0.24',
        TICKET: '1596'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3821.0',
        RDTO: '21.22',
        HUMEDAD: '49.2',
        ACIDEZ: '0.37',
        TICKET: '1602'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3522.0',
        RDTO: '24.28',
        HUMEDAD: '46.75',
        ACIDEZ: '0.29',
        TICKET: '1605'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3041.0',
        RDTO: '22.65',
        HUMEDAD: '47.07',
        ACIDEZ: '0.27',
        TICKET: '1606'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '3554.0',
        RDTO: '23.98',
        HUMEDAD: '44.75',
        ACIDEZ: '0.25',
        TICKET: '1607'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '970.0',
        RDTO: '22.31',
        HUMEDAD: '46.56',
        ACIDEZ: '0.21',
        TICKET: '1609'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1834.0',
        RDTO: '21.74',
        HUMEDAD: '48.27',
        ACIDEZ: '0.26',
        TICKET: '1611'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '712.0',
        RDTO: '18.73',
        HUMEDAD: '46.56',
        ACIDEZ: '0.29',
        TICKET: '1612'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '164.0',
        RDTO: '23.15',
        HUMEDAD: '48.27',
        ACIDEZ: '0.09',
        TICKET: '1613'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1153.0',
        RDTO: '22.76',
        HUMEDAD: '47.28',
        ACIDEZ: '0.17',
        TICKET: '1614'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1431.0',
        RDTO: '22.94',
        HUMEDAD: '45.48',
        ACIDEZ: '0.2',
        TICKET: '1615'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '2437.0',
        RDTO: '24.25',
        HUMEDAD: '47.07',
        ACIDEZ: '0.18',
        TICKET: '1616'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '10943.0',
        RDTO: '22.23',
        HUMEDAD: '49.53',
        ACIDEZ: '0.2',
        TICKET: '1617'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '6002.0',
        RDTO: '23.16',
        HUMEDAD: '47.92',
        ACIDEZ: '0.23',
        TICKET: '1618'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '448.0',
        RDTO: '16.09',
        HUMEDAD: '50.92',
        ACIDEZ: '0.19',
        TICKET: '56'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1399.0',
        RDTO: '19.47',
        HUMEDAD: '45.84',
        ACIDEZ: '0.23',
        TICKET: '1619'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '1373.0',
        RDTO: '23.49',
        HUMEDAD: '45.82',
        ACIDEZ: '0.49',
        TICKET: '1620'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '6284.0',
        RDTO: '21.4',
        HUMEDAD: '48.31',
        ACIDEZ: '0.23',
        TICKET: '1621'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2015',
        KGSACEITUNA: '275.0',
        RDTO: '21.96',
        HUMEDAD: '44.28',
        ACIDEZ: '0.21',
        TICKET: '1622'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '5966.0',
        RDTO: '22.61',
        HUMEDAD: '47.59',
        ACIDEZ: '0.34',
        TICKET: '1623'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '5300.0',
        RDTO: '24.98',
        HUMEDAD: '46.4',
        ACIDEZ: '0.36',
        TICKET: '1624'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '1499.0',
        RDTO: '20.14',
        HUMEDAD: '50.81',
        ACIDEZ: '0.23',
        TICKET: '1625'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '3922.0',
        RDTO: '22.76',
        HUMEDAD: '46.58',
        ACIDEZ: '0.26',
        TICKET: '1626'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '2573.0',
        RDTO: '22.02',
        HUMEDAD: '46.67',
        ACIDEZ: '0.3',
        TICKET: '1627'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '2994.0',
        RDTO: '19.84',
        HUMEDAD: '46.52',
        ACIDEZ: '0.3',
        TICKET: '1628'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '1451.0',
        RDTO: '22.21',
        HUMEDAD: '46.82',
        ACIDEZ: '0.24',
        TICKET: '1629'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '5144.0',
        RDTO: '17.17',
        HUMEDAD: '54.96',
        ACIDEZ: '0.29',
        TICKET: '1630'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '7789.0',
        RDTO: '18.85',
        HUMEDAD: '53.66',
        ACIDEZ: '0.3',
        TICKET: '1631'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '9863.0',
        RDTO: '17.78',
        HUMEDAD: '54.84',
        ACIDEZ: '0.35',
        TICKET: '1632'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '9865.0',
        RDTO: '18.3',
        HUMEDAD: '54.66',
        ACIDEZ: '0.43',
        TICKET: '1633'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '4873.0',
        RDTO: '22.56',
        HUMEDAD: '50.2',
        ACIDEZ: '0.24',
        TICKET: '1634'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '6527.0',
        RDTO: '22.15',
        HUMEDAD: '50.35',
        ACIDEZ: '0.11',
        TICKET: '1635'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '3132.0',
        RDTO: '20.4',
        HUMEDAD: '47.6',
        ACIDEZ: '0.12',
        TICKET: '1636'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '1275.0',
        RDTO: '19.73',
        HUMEDAD: '54.91',
        ACIDEZ: '0.13',
        TICKET: '1637'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '5275.0',
        RDTO: '22.05',
        HUMEDAD: '50.55',
        ACIDEZ: '0.22',
        TICKET: '1638'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '6964.0',
        RDTO: '23.65',
        HUMEDAD: '49.5',
        ACIDEZ: '0.08',
        TICKET: '1639'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '3046.0',
        RDTO: '22.62',
        HUMEDAD: '47.65',
        ACIDEZ: '0.15',
        TICKET: '1640'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '12010.0',
        RDTO: '22.32',
        HUMEDAD: '49.7',
        ACIDEZ: '0.17',
        TICKET: '1641'
    },
    {
        DIA: '8',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '3004.0',
        RDTO: '23.98',
        HUMEDAD: '44.96',
        ACIDEZ: '0.6',
        TICKET: '1642'
    },
    {
        DIA: '8',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '1462.0',
        RDTO: '19.93',
        HUMEDAD: '49.95',
        ACIDEZ: '0.23',
        TICKET: '1643'
    },
    {
        DIA: '8',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '1671.0',
        RDTO: '18.71',
        HUMEDAD: '54.81',
        ACIDEZ: '0.36',
        TICKET: '1644'
    },
    {
        DIA: '8',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '8005.0',
        RDTO: '21.7',
        HUMEDAD: '49.68',
        ACIDEZ: '0.26',
        TICKET: '1645'
    },
    {
        DIA: '8',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '1505.0',
        RDTO: '22.12',
        HUMEDAD: '49.79',
        ACIDEZ: '0.22',
        TICKET: '1646'
    },
    {
        DIA: '8',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '6058.0',
        RDTO: '23.12',
        HUMEDAD: '49.45',
        ACIDEZ: '0.19',
        TICKET: '1648'
    },
    {
        DIA: '8',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '1037.0',
        RDTO: '21.73',
        HUMEDAD: '48.91',
        ACIDEZ: '0.21',
        TICKET: '1649'
    },
    {
        DIA: '8',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '3722.0',
        RDTO: '23.63',
        HUMEDAD: '47.45',
        ACIDEZ: '0.24',
        TICKET: '1650'
    },
    {
        DIA: '8',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '1183.0',
        RDTO: '26.54',
        HUMEDAD: '43.9',
        ACIDEZ: '0.23',
        TICKET: '1651'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '1270.0',
        RDTO: '24.75',
        HUMEDAD: '41.61',
        ACIDEZ: '1.81',
        TICKET: '1655'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '472.0',
        RDTO: '26.07',
        HUMEDAD: '42.99',
        ACIDEZ: '1.49',
        TICKET: '1659'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '217.0',
        RDTO: '21.98',
        HUMEDAD: '49.71',
        ACIDEZ: '0.3',
        TICKET: '1665'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '1691.0',
        RDTO: '21.38',
        HUMEDAD: '49.92',
        ACIDEZ: '0.28',
        TICKET: '1652'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '3027.0',
        RDTO: '21.46',
        HUMEDAD: '48.3',
        ACIDEZ: '0.38',
        TICKET: '1653'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '4760.0',
        RDTO: '22.09',
        HUMEDAD: '48.51',
        ACIDEZ: '0.36',
        TICKET: '1654'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '467.0',
        RDTO: '24.53',
        HUMEDAD: '42.9',
        ACIDEZ: '1.74',
        TICKET: '1660'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '460.0',
        RDTO: '25.12',
        HUMEDAD: '43.09',
        ACIDEZ: '1.52',
        TICKET: '1661'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '1497.0',
        RDTO: '22.35',
        HUMEDAD: '48.88',
        ACIDEZ: '0.23',
        TICKET: '1666'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '566.0',
        RDTO: '23.74',
        HUMEDAD: '42.14',
        ACIDEZ: '1.74',
        TICKET: '1663'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '254.0',
        RDTO: '24.8',
        HUMEDAD: '44.0',
        ACIDEZ: '0.73',
        TICKET: '1664'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '1350.0',
        RDTO: '23.5',
        HUMEDAD: '50.29',
        ACIDEZ: '0.43',
        TICKET: '1667'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '1957.0',
        RDTO: '26.41',
        HUMEDAD: '43.77',
        ACIDEZ: '0.81',
        TICKET: '1668'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '1138.0',
        RDTO: '20.46',
        HUMEDAD: '50.16',
        ACIDEZ: '0.34',
        TICKET: '1656'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '1506.0',
        RDTO: '24.84',
        HUMEDAD: '40.28',
        ACIDEZ: '1.01',
        TICKET: '1657'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '942.0',
        RDTO: '24.36',
        HUMEDAD: '42.72',
        ACIDEZ: '1.59',
        TICKET: '1658'
    },
    {
        DIA: '15',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '63.0',
        RDTO: '19.25',
        HUMEDAD: '52.56',
        ACIDEZ: '0.35',
        TICKET: '1670'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '393.0',
        RDTO: '19.78',
        HUMEDAD: '55.3',
        ACIDEZ: '0.23',
        TICKET: '1671'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '3700.0',
        RDTO: '22.23',
        HUMEDAD: '50.12',
        ACIDEZ: '0.26',
        TICKET: '1669'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '78.0',
        RDTO: '19.88',
        HUMEDAD: '51.5',
        ACIDEZ: '0.23',
        TICKET: '1672'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2016',
        KGSACEITUNA: '2127.0',
        RDTO: '20.62',
        HUMEDAD: '51.0',
        ACIDEZ: '0.23',
        TICKET: '1673'
    },
    {
        DIA: '26',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '2166.0',
        RDTO: '19.88',
        HUMEDAD: '53.28',
        ACIDEZ: '0.18',
        TICKET: '2'
    },
    {
        DIA: '26',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '3403.0',
        RDTO: '19.23',
        HUMEDAD: '54.35',
        ACIDEZ: '0.19',
        TICKET: '1'
    },
    {
        DIA: '26',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '4093.0',
        RDTO: '18.6',
        HUMEDAD: '53.71',
        ACIDEZ: '0.23',
        TICKET: '3'
    },
    {
        DIA: '27',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '581.0',
        RDTO: '18.29',
        HUMEDAD: '51.94',
        ACIDEZ: '0.22',
        TICKET: '5'
    },
    {
        DIA: '27',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '3920.0',
        RDTO: '19.43',
        HUMEDAD: '55.08',
        ACIDEZ: '0.24',
        TICKET: '4'
    },
    {
        DIA: '27',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '581.0',
        RDTO: '18.29',
        HUMEDAD: '51.94',
        ACIDEZ: '0.22',
        TICKET: '6'
    },
    {
        DIA: '27',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '706.0',
        RDTO: '19.78',
        HUMEDAD: '50.5',
        ACIDEZ: '0.23',
        TICKET: '7'
    },
    {
        DIA: '27',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '3786.0',
        RDTO: '19.33',
        HUMEDAD: '55.43',
        ACIDEZ: '0.26',
        TICKET: '8'
    },
    {
        DIA: '27',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '4987.0',
        RDTO: '16.62',
        HUMEDAD: '50.2',
        ACIDEZ: '0.09',
        TICKET: '9'
    },
    {
        DIA: '27',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '5294.0',
        RDTO: '19.66',
        HUMEDAD: '56.84',
        ACIDEZ: '0.25',
        TICKET: '10'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '668.0',
        RDTO: '18.44',
        HUMEDAD: '52.42',
        ACIDEZ: '0.26',
        TICKET: '21'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '668.0',
        RDTO: '18.44',
        HUMEDAD: '52.42',
        ACIDEZ: '0.26',
        TICKET: '22'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '2042.0',
        RDTO: '18.95',
        HUMEDAD: '52.16',
        ACIDEZ: '0.23',
        TICKET: '25'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '1004.0',
        RDTO: '17.83',
        HUMEDAD: '53.59',
        ACIDEZ: '0.2',
        TICKET: '23'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '3448.0',
        RDTO: '18.3',
        HUMEDAD: '53.99',
        ACIDEZ: '0.31',
        TICKET: '11'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '738.0',
        RDTO: '18.16',
        HUMEDAD: '52.77',
        ACIDEZ: '0.3',
        TICKET: '12'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '738.0',
        RDTO: '18.16',
        HUMEDAD: '52.77',
        ACIDEZ: '0.03',
        TICKET: '13'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '3973.0',
        RDTO: '18.53',
        HUMEDAD: '53.6',
        ACIDEZ: '0.3',
        TICKET: '14'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '5712.0',
        RDTO: '18.89',
        HUMEDAD: '57.9',
        ACIDEZ: '0.21',
        TICKET: '15'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '4107.0',
        RDTO: '21.47',
        HUMEDAD: '50.87',
        ACIDEZ: '0.22',
        TICKET: '16'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '4836.0',
        RDTO: '15.4',
        HUMEDAD: '51.52',
        ACIDEZ: '0.26',
        TICKET: '17'
    },
    {
        DIA: '28',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '5940.0',
        RDTO: '21.39',
        HUMEDAD: '50.77',
        ACIDEZ: '0.22',
        TICKET: '18'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '221.0',
        RDTO: '22.03',
        HUMEDAD: '49.28',
        ACIDEZ: '0.45',
        TICKET: '19'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '3898.0',
        RDTO: '19.03',
        HUMEDAD: '52.7',
        ACIDEZ: '0.21',
        TICKET: '20'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '3900.0',
        RDTO: '18.43',
        HUMEDAD: '51.06',
        ACIDEZ: '0.15',
        TICKET: '24'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '4625.0',
        RDTO: '21.19',
        HUMEDAD: '51.34',
        ACIDEZ: '0.17',
        TICKET: '26'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '6179.0',
        RDTO: '19.69',
        HUMEDAD: '58.06',
        ACIDEZ: '0.23',
        TICKET: '27'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '733.0',
        RDTO: '20.14',
        HUMEDAD: '52.53',
        ACIDEZ: '0.13',
        TICKET: '28'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '3675.0',
        RDTO: '21.53',
        HUMEDAD: '50.09',
        ACIDEZ: '0.18',
        TICKET: '29'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '1100.0',
        RDTO: '20.59',
        HUMEDAD: '51.19',
        ACIDEZ: '0.23',
        TICKET: '39'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '139.0',
        RDTO: '20.55',
        HUMEDAD: '47.6',
        ACIDEZ: '0.48',
        TICKET: '33'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '2444.0',
        RDTO: '20.84',
        HUMEDAD: '49.49',
        ACIDEZ: '0.23',
        TICKET: '34'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '1070.0',
        RDTO: '20.75',
        HUMEDAD: '50.06',
        ACIDEZ: '0.2',
        TICKET: '30'
    },
    {
        DIA: '29',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '4362.0',
        RDTO: '14.22',
        HUMEDAD: '51.62',
        ACIDEZ: '0.15',
        TICKET: '31'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '1199.0',
        RDTO: '19.75',
        HUMEDAD: '49.48',
        ACIDEZ: '0.17',
        TICKET: '35'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '1501.0',
        RDTO: '21.14',
        HUMEDAD: '47.92',
        ACIDEZ: '0.25',
        TICKET: '36'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '5328.0',
        RDTO: '19.59',
        HUMEDAD: '51.53',
        ACIDEZ: '0.11',
        TICKET: '37'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '3799.0',
        RDTO: '18.69',
        HUMEDAD: '50.74',
        ACIDEZ: '0.15',
        TICKET: '32'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '2184.0',
        RDTO: '18.49',
        HUMEDAD: '48.05',
        ACIDEZ: '0.21',
        TICKET: '38'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '6692.0',
        RDTO: '19.64',
        HUMEDAD: '52.1',
        ACIDEZ: '0.15',
        TICKET: '40'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '5765.0',
        RDTO: '20.53',
        HUMEDAD: '49.14',
        ACIDEZ: '0.19',
        TICKET: '41'
    },
    {
        DIA: '31',
        MES: '10',
        ANYO: '2016',
        KGSACEITUNA: '578.0',
        RDTO: '17.65',
        HUMEDAD: '53.92',
        ACIDEZ: '0.23',
        TICKET: '42'
    },
    {
        DIA: '1',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '4210.0',
        RDTO: '18.57',
        HUMEDAD: '54.85',
        ACIDEZ: '0.2',
        TICKET: '43'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '392.0',
        RDTO: '18.59',
        HUMEDAD: '49.39',
        ACIDEZ: '0.23',
        TICKET: '53'
    },
    {
        DIA: '1',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '588.0',
        RDTO: '17.8',
        HUMEDAD: '49.65',
        ACIDEZ: '0.23',
        TICKET: '44'
    },
    {
        DIA: '1',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '588.0',
        RDTO: '17.8',
        HUMEDAD: '49.65',
        ACIDEZ: '0.23',
        TICKET: '45'
    },
    {
        DIA: '1',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3863.0',
        RDTO: '16.21',
        HUMEDAD: '52.99',
        ACIDEZ: '0.16',
        TICKET: '46'
    },
    {
        DIA: '1',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3838.0',
        RDTO: '17.79',
        HUMEDAD: '53.03',
        ACIDEZ: '0.14',
        TICKET: '47'
    },
    {
        DIA: '1',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '4459.0',
        RDTO: '20.98',
        HUMEDAD: '50.99',
        ACIDEZ: '0.06',
        TICKET: '48'
    },
    {
        DIA: '1',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2134.0',
        RDTO: '14.22',
        HUMEDAD: '51.41',
        ACIDEZ: '0.08',
        TICKET: '49'
    },
    {
        DIA: '1',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1186.0',
        RDTO: '19.28',
        HUMEDAD: '51.35',
        ACIDEZ: '0.13',
        TICKET: '50'
    },
    {
        DIA: '1',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3113.0',
        RDTO: '20.36',
        HUMEDAD: '50.9',
        ACIDEZ: '0.24',
        TICKET: '51'
    },
    {
        DIA: '1',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '4751.0',
        RDTO: '17.51',
        HUMEDAD: '51.78',
        ACIDEZ: '0.18',
        TICKET: '52'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '448.0',
        RDTO: '16.09',
        HUMEDAD: '50.92',
        ACIDEZ: '0.19',
        TICKET: '57'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '531.0',
        RDTO: '12.71',
        HUMEDAD: '61.61',
        ACIDEZ: '0.27',
        TICKET: '54'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '4170.0',
        RDTO: '17.61',
        HUMEDAD: '52.4',
        ACIDEZ: '0.34',
        TICKET: '55'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2916.0',
        RDTO: '19.71',
        HUMEDAD: '50.45',
        ACIDEZ: '0.28',
        TICKET: '58'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1065.0',
        RDTO: '18.7',
        HUMEDAD: '52.12',
        ACIDEZ: '0.28',
        TICKET: '59'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3987.0',
        RDTO: '21.01',
        HUMEDAD: '49.79',
        ACIDEZ: '0.15',
        TICKET: '60'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1514.0',
        RDTO: '15.65',
        HUMEDAD: '46.8',
        ACIDEZ: '0.01',
        TICKET: '61'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2456.0',
        RDTO: '20.35',
        HUMEDAD: '51.35',
        ACIDEZ: '0.23',
        TICKET: '62'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1323.0',
        RDTO: '18.89',
        HUMEDAD: '49.58',
        ACIDEZ: '0.23',
        TICKET: '63'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3548.0',
        RDTO: '16.16',
        HUMEDAD: '52.39',
        ACIDEZ: '0.23',
        TICKET: '64'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '544.0',
        RDTO: '22.93',
        HUMEDAD: '50.4',
        ACIDEZ: '0.13',
        TICKET: '65'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '650.0',
        RDTO: '21.98',
        HUMEDAD: '47.77',
        ACIDEZ: '0.46',
        TICKET: '66'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '970.0',
        RDTO: '22.36',
        HUMEDAD: '48.19',
        ACIDEZ: '0.03',
        TICKET: '67'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '511.0',
        RDTO: '14.28',
        HUMEDAD: '60.21',
        ACIDEZ: '0.19',
        TICKET: '68'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '378.0',
        RDTO: '17.83',
        HUMEDAD: '51.23',
        ACIDEZ: '0.2',
        TICKET: '69'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '378.0',
        RDTO: '17.83',
        HUMEDAD: '51.23',
        ACIDEZ: '0.2',
        TICKET: '70'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '831.0',
        RDTO: '19.6',
        HUMEDAD: '45.15',
        ACIDEZ: '0.13',
        TICKET: '71'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1096.0',
        RDTO: '19.68',
        HUMEDAD: '50.0',
        ACIDEZ: '0.12',
        TICKET: '72'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1673.0',
        RDTO: '19.02',
        HUMEDAD: '50.65',
        ACIDEZ: '0.12',
        TICKET: '73'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1594.0',
        RDTO: '23.12',
        HUMEDAD: '43.57',
        ACIDEZ: '0.12',
        TICKET: '74'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2543.0',
        RDTO: '17.78',
        HUMEDAD: '50.79',
        ACIDEZ: '0.19',
        TICKET: '75'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1795.0',
        RDTO: '20.42',
        HUMEDAD: '50.89',
        ACIDEZ: '0.19',
        TICKET: '76'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '679.0',
        RDTO: '21.53',
        HUMEDAD: '46.39',
        ACIDEZ: '0.07',
        TICKET: '77'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1642.0',
        RDTO: '24.15',
        HUMEDAD: '48.48',
        ACIDEZ: '0.1',
        TICKET: '78'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '510.0',
        RDTO: '22.41',
        HUMEDAD: '52.43',
        ACIDEZ: '0.07',
        TICKET: '79'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3200.0',
        RDTO: '14.56',
        HUMEDAD: '51.13',
        ACIDEZ: '0.12',
        TICKET: '80'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1022.0',
        RDTO: '17.77',
        HUMEDAD: '50.79',
        ACIDEZ: '0.19',
        TICKET: '81'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '669.0',
        RDTO: '13.8',
        HUMEDAD: '60.4',
        ACIDEZ: '0.27',
        TICKET: '82'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '421.0',
        RDTO: '19.46',
        HUMEDAD: '50.61',
        ACIDEZ: '0.15',
        TICKET: '83'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '438.0',
        RDTO: '21.4',
        HUMEDAD: '50.56',
        ACIDEZ: '0.28',
        TICKET: '84'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1303.0',
        RDTO: '12.87',
        HUMEDAD: '59.76',
        ACIDEZ: '0.34',
        TICKET: '85'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2459.0',
        RDTO: '14.67',
        HUMEDAD: '52.77',
        ACIDEZ: '0.11',
        TICKET: '86'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2239.0',
        RDTO: '18.58',
        HUMEDAD: '50.06',
        ACIDEZ: '0.2',
        TICKET: '87'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '558.0',
        RDTO: '18.26',
        HUMEDAD: '45.76',
        ACIDEZ: '0.05',
        TICKET: '88'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1338.0',
        RDTO: '17.99',
        HUMEDAD: '52.33',
        ACIDEZ: '0.25',
        TICKET: '89'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '608.0',
        RDTO: '22.79',
        HUMEDAD: '46.37',
        ACIDEZ: '0.16',
        TICKET: '90'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2859.0',
        RDTO: '21.7',
        HUMEDAD: '51.66',
        ACIDEZ: '0.24',
        TICKET: '91'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3017.0',
        RDTO: '16.6',
        HUMEDAD: '51.16',
        ACIDEZ: '0.26',
        TICKET: '92'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '249.0',
        RDTO: '21.97',
        HUMEDAD: '53.08',
        ACIDEZ: '0.15',
        TICKET: '93'
    },
    {
        DIA: '4',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '573.0',
        RDTO: '18.76',
        HUMEDAD: '51.83',
        ACIDEZ: '0.25',
        TICKET: '94'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1041.0',
        RDTO: '18.29',
        HUMEDAD: '48.44',
        ACIDEZ: '0.23',
        TICKET: '95'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '545.0',
        RDTO: '14.27',
        HUMEDAD: '59.08',
        ACIDEZ: '0.24',
        TICKET: '96'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '230.0',
        RDTO: '17.98',
        HUMEDAD: '55.22',
        ACIDEZ: '0.24',
        TICKET: '97'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1466.0',
        RDTO: '18.3',
        HUMEDAD: '45.39',
        ACIDEZ: '0.23',
        TICKET: '98'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '471.0',
        RDTO: '22.72',
        HUMEDAD: '45.68',
        ACIDEZ: '0.25',
        TICKET: '99'
    },
    {
        DIA: '5',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2270.0',
        RDTO: '21.93',
        HUMEDAD: '50.57',
        ACIDEZ: '0.24',
        TICKET: '100'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2942.0',
        RDTO: '19.7',
        HUMEDAD: '51.0',
        ACIDEZ: '0.24',
        TICKET: '106'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1144.0',
        RDTO: '20.76',
        HUMEDAD: '51.17',
        ACIDEZ: '0.23',
        TICKET: '107'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '818.0',
        RDTO: '13.42',
        HUMEDAD: '61.79',
        ACIDEZ: '0.23',
        TICKET: '101'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '232.0',
        RDTO: '20.88',
        HUMEDAD: '53.54',
        ACIDEZ: '0.24',
        TICKET: '102'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '835.0',
        RDTO: '16.62',
        HUMEDAD: '54.95',
        ACIDEZ: '0.23',
        TICKET: '103'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '835.0',
        RDTO: '16.62',
        HUMEDAD: '54.95',
        ACIDEZ: '0.23',
        TICKET: '104'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '718.0',
        RDTO: '18.89',
        HUMEDAD: '49.92',
        ACIDEZ: '0.38',
        TICKET: '105'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3242.0',
        RDTO: '16.03',
        HUMEDAD: '54.28',
        ACIDEZ: '0.25',
        TICKET: '108'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2518.0',
        RDTO: '20.83',
        HUMEDAD: '52.69',
        ACIDEZ: '0.29',
        TICKET: '109'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1949.0',
        RDTO: '19.41',
        HUMEDAD: '55.34',
        ACIDEZ: '0.34',
        TICKET: '110'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1818.0',
        RDTO: '19.68',
        HUMEDAD: '54.41',
        ACIDEZ: '0.27',
        TICKET: '111'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '494.0',
        RDTO: '25.79',
        HUMEDAD: '46.85',
        ACIDEZ: '0.23',
        TICKET: '112'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '474.0',
        RDTO: '12.83',
        HUMEDAD: '52.77',
        ACIDEZ: '0.25',
        TICKET: '113'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1419.0',
        RDTO: '19.86',
        HUMEDAD: '55.9',
        ACIDEZ: '0.25',
        TICKET: '114'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '5677.0',
        RDTO: '19.86',
        HUMEDAD: '55.9',
        ACIDEZ: '0.25',
        TICKET: '115'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '370.0',
        RDTO: '20.18',
        HUMEDAD: '51.57',
        ACIDEZ: '0.24',
        TICKET: '116'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3426.0',
        RDTO: '18.12',
        HUMEDAD: '50.16',
        ACIDEZ: '0.23',
        TICKET: '117'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1554.0',
        RDTO: '12.81',
        HUMEDAD: '52.69',
        ACIDEZ: '0.18',
        TICKET: '119'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '427.0',
        RDTO: '15.35',
        HUMEDAD: '56.99',
        ACIDEZ: '0.19',
        TICKET: '118'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '588.0',
        RDTO: '10.94',
        HUMEDAD: '45.69',
        ACIDEZ: '0.21',
        TICKET: '120'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2603.0',
        RDTO: '16.91',
        HUMEDAD: '51.0',
        ACIDEZ: '0.18',
        TICKET: '121'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1135.0',
        RDTO: '23.32',
        HUMEDAD: '46.75',
        ACIDEZ: '0.01',
        TICKET: '122'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '729.0',
        RDTO: '19.59',
        HUMEDAD: '46.26',
        ACIDEZ: '0.26',
        TICKET: '123'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2510.0',
        RDTO: '19.8',
        HUMEDAD: '49.21',
        ACIDEZ: '0.16',
        TICKET: '124'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '513.0',
        RDTO: '21.83',
        HUMEDAD: '47.19',
        ACIDEZ: '0.18',
        TICKET: '125'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1538.0',
        RDTO: '21.83',
        HUMEDAD: '47.19',
        ACIDEZ: '0.18',
        TICKET: '126'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1662.0',
        RDTO: '20.09',
        HUMEDAD: '51.33',
        ACIDEZ: '0.18',
        TICKET: '127'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '460.0',
        RDTO: '22.86',
        HUMEDAD: '49.31',
        ACIDEZ: '0.17',
        TICKET: '128'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2235.0',
        RDTO: '20.01',
        HUMEDAD: '53.5',
        ACIDEZ: '0.25',
        TICKET: '129'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '334.0',
        RDTO: '10.71',
        HUMEDAD: '50.49',
        ACIDEZ: '0.18',
        TICKET: '130'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1231.0',
        RDTO: '17.93',
        HUMEDAD: '54.32',
        ACIDEZ: '0.19',
        TICKET: '131'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '4924.0',
        RDTO: '17.93',
        HUMEDAD: '54.32',
        ACIDEZ: '0.19',
        TICKET: '132'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '239.0',
        RDTO: '21.12',
        HUMEDAD: '44.63',
        ACIDEZ: '0.07',
        TICKET: '134'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '438.0',
        RDTO: '21.93',
        HUMEDAD: '44.42',
        ACIDEZ: '0.2',
        TICKET: '135'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1296.0',
        RDTO: '13.47',
        HUMEDAD: '48.22',
        ACIDEZ: '0.19',
        TICKET: '136'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1900.0',
        RDTO: '16.13',
        HUMEDAD: '48.29',
        ACIDEZ: '0.22',
        TICKET: '137'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '974.0',
        RDTO: '20.86',
        HUMEDAD: '48.55',
        ACIDEZ: '0.11',
        TICKET: '138'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3148.0',
        RDTO: '19.57',
        HUMEDAD: '46.14',
        ACIDEZ: '0.17',
        TICKET: '139'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '251.0',
        RDTO: '18.93',
        HUMEDAD: '49.95',
        ACIDEZ: '0.19',
        TICKET: '140'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2037.0',
        RDTO: '21.43',
        HUMEDAD: '51.18',
        ACIDEZ: '0.13',
        TICKET: '141'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '374.0',
        RDTO: '18.57',
        HUMEDAD: '42.88',
        ACIDEZ: '0.07',
        TICKET: '142'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2213.0',
        RDTO: '20.27',
        HUMEDAD: '49.5',
        ACIDEZ: '0.12',
        TICKET: '133'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1638.0',
        RDTO: '20.61',
        HUMEDAD: '48.52',
        ACIDEZ: '0.13',
        TICKET: '143'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '366.0',
        RDTO: '18.41',
        HUMEDAD: '53.75',
        ACIDEZ: '0.18',
        TICKET: '144'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '547.0',
        RDTO: '13.08',
        HUMEDAD: '49.47',
        ACIDEZ: '0.18',
        TICKET: '145'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3011.0',
        RDTO: '20.9',
        HUMEDAD: '49.86',
        ACIDEZ: '0.17',
        TICKET: '146'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '4882.0',
        RDTO: '19.21',
        HUMEDAD: '50.98',
        ACIDEZ: '0.18',
        TICKET: '147'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1220.0',
        RDTO: '19.21',
        HUMEDAD: '50.98',
        ACIDEZ: '0.18',
        TICKET: '148'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '600.0',
        RDTO: '21.88',
        HUMEDAD: '46.88',
        ACIDEZ: '0.26',
        TICKET: '149'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '381.0',
        RDTO: '18.6',
        HUMEDAD: '45.84',
        ACIDEZ: '0.13',
        TICKET: '152'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3260.0',
        RDTO: '18.48',
        HUMEDAD: '50.18',
        ACIDEZ: '0.21',
        TICKET: '150'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '537.0',
        RDTO: '24.44',
        HUMEDAD: '44.32',
        ACIDEZ: '0.24',
        TICKET: '151'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '675.0',
        RDTO: '10.93',
        HUMEDAD: '52.07',
        ACIDEZ: '0.43',
        TICKET: '153'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '675.0',
        RDTO: '10.93',
        HUMEDAD: '52.07',
        ACIDEZ: '0.43',
        TICKET: '154'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '547.0',
        RDTO: '15.79',
        HUMEDAD: '47.72',
        ACIDEZ: '0.17',
        TICKET: '155'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '770.0',
        RDTO: '19.43',
        HUMEDAD: '52.23',
        ACIDEZ: '0.22',
        TICKET: '156'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3258.0',
        RDTO: '18.27',
        HUMEDAD: '49.68',
        ACIDEZ: '0.19',
        TICKET: '157'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '174.0',
        RDTO: '19.54',
        HUMEDAD: '50.06',
        ACIDEZ: '0.16',
        TICKET: '158'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '319.0',
        RDTO: '20.71',
        HUMEDAD: '49.15',
        ACIDEZ: '0.18',
        TICKET: '159'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2583.0',
        RDTO: '16.78',
        HUMEDAD: '52.15',
        ACIDEZ: '0.19',
        TICKET: '160'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '415.0',
        RDTO: '23.99',
        HUMEDAD: '47.52',
        ACIDEZ: '0.11',
        TICKET: '161'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2057.0',
        RDTO: '21.24',
        HUMEDAD: '49.9',
        ACIDEZ: '0.21',
        TICKET: '162'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1148.0',
        RDTO: '20.21',
        HUMEDAD: '51.27',
        ACIDEZ: '0.2',
        TICKET: '163'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1671.0',
        RDTO: '22.02',
        HUMEDAD: '50.19',
        ACIDEZ: '0.19',
        TICKET: '164'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '431.0',
        RDTO: '10.58',
        HUMEDAD: '52.15',
        ACIDEZ: '0.2',
        TICKET: '165'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '612.0',
        RDTO: '20.61',
        HUMEDAD: '49.9',
        ACIDEZ: '0.21',
        TICKET: '166'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '404.0',
        RDTO: '25.72',
        HUMEDAD: '45.12',
        ACIDEZ: '0.26',
        TICKET: '167'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1200.0',
        RDTO: '16.68',
        HUMEDAD: '53.52',
        ACIDEZ: '0.19',
        TICKET: '168'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '4801.0',
        RDTO: '16.68',
        HUMEDAD: '53.52',
        ACIDEZ: '0.19',
        TICKET: '169'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1585.0',
        RDTO: '20.35',
        HUMEDAD: '50.63',
        ACIDEZ: '0.2',
        TICKET: '170'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '528.0',
        RDTO: '20.35',
        HUMEDAD: '50.63',
        ACIDEZ: '0.2',
        TICKET: '171'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2236.0',
        RDTO: '20.32',
        HUMEDAD: '49.54',
        ACIDEZ: '0.27',
        TICKET: '174'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1367.0',
        RDTO: '24.63',
        HUMEDAD: '46.17',
        ACIDEZ: '0.25',
        TICKET: '175'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '4180.0',
        RDTO: '20.05',
        HUMEDAD: '48.5',
        ACIDEZ: '0.35',
        TICKET: '176'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '632.0',
        RDTO: '17.5',
        HUMEDAD: '52.58',
        ACIDEZ: '0.24',
        TICKET: '177'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '632.0',
        RDTO: '17.5',
        HUMEDAD: '52.58',
        ACIDEZ: '0.24',
        TICKET: '178'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '460.0',
        RDTO: '22.06',
        HUMEDAD: '45.89',
        ACIDEZ: '0.19',
        TICKET: '179'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3210.0',
        RDTO: '19.05',
        HUMEDAD: '49.96',
        ACIDEZ: '0.19',
        TICKET: '180'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '818.0',
        RDTO: '20.48',
        HUMEDAD: '49.24',
        ACIDEZ: '0.19',
        TICKET: '181'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '247.0',
        RDTO: '21.28',
        HUMEDAD: '43.57',
        ACIDEZ: '0.04',
        TICKET: '172'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1031.0',
        RDTO: '21.03',
        HUMEDAD: '51.16',
        ACIDEZ: '0.12',
        TICKET: '173'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2858.0',
        RDTO: '15.75',
        HUMEDAD: '49.93',
        ACIDEZ: '0.18',
        TICKET: '182'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2794.0',
        RDTO: '18.42',
        HUMEDAD: '48.68',
        ACIDEZ: '0.2',
        TICKET: '183'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '561.0',
        RDTO: '20.1',
        HUMEDAD: '51.78',
        ACIDEZ: '0.2',
        TICKET: '184'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '800.0',
        RDTO: '20.88',
        HUMEDAD: '52.09',
        ACIDEZ: '0.22',
        TICKET: '185'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '284.0',
        RDTO: '19.87',
        HUMEDAD: '50.0',
        ACIDEZ: '0.19',
        TICKET: '196'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1039.0',
        RDTO: '20.38',
        HUMEDAD: '49.29',
        ACIDEZ: '0.09',
        TICKET: '197'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '380.0',
        RDTO: '25.89',
        HUMEDAD: '47.83',
        ACIDEZ: '0.15',
        TICKET: '186'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1954.0',
        RDTO: '21.77',
        HUMEDAD: '51.1',
        ACIDEZ: '0.19',
        TICKET: '187'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '87.0',
        RDTO: '16.1',
        HUMEDAD: '60.16',
        ACIDEZ: '0.21',
        TICKET: '188'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '381.0',
        RDTO: '21.61',
        HUMEDAD: '50.35',
        ACIDEZ: '0.19',
        TICKET: '189'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '535.0',
        RDTO: '19.5',
        HUMEDAD: '51.32',
        ACIDEZ: '0.18',
        TICKET: '198'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '411.0',
        RDTO: '22.1',
        HUMEDAD: '48.33',
        ACIDEZ: '0.19',
        TICKET: '190'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '982.0',
        RDTO: '19.76',
        HUMEDAD: '46.96',
        ACIDEZ: '0.18',
        TICKET: '191'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1963.0',
        RDTO: '18.24',
        HUMEDAD: '51.61',
        ACIDEZ: '0.2',
        TICKET: '192'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '999.0',
        RDTO: '23.05',
        HUMEDAD: '46.6',
        ACIDEZ: '0.11',
        TICKET: '193'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2401.0',
        RDTO: '18.43',
        HUMEDAD: '51.5',
        ACIDEZ: '0.2',
        TICKET: '194'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '254.0',
        RDTO: '16.97',
        HUMEDAD: '52.61',
        ACIDEZ: '0.17',
        TICKET: '195'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3177.0',
        RDTO: '18.45',
        HUMEDAD: '48.07',
        ACIDEZ: '0.18',
        TICKET: '199'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3510.0',
        RDTO: '17.89',
        HUMEDAD: '51.23',
        ACIDEZ: '0.19',
        TICKET: '200'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1445.0',
        RDTO: '20.35',
        HUMEDAD: '45.79',
        ACIDEZ: '0.19',
        TICKET: '201'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1271.0',
        RDTO: '23.65',
        HUMEDAD: '43.23',
        ACIDEZ: '0.22',
        TICKET: '202'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2474.0',
        RDTO: '19.08',
        HUMEDAD: '45.49',
        ACIDEZ: '0.14',
        TICKET: '203'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '436.0',
        RDTO: '22.69',
        HUMEDAD: '48.02',
        ACIDEZ: '0.2',
        TICKET: '204'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '357.0',
        RDTO: '17.04',
        HUMEDAD: '49.72',
        ACIDEZ: '0.17',
        TICKET: '205'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '272.0',
        RDTO: '17.25',
        HUMEDAD: '44.22',
        ACIDEZ: '0.18',
        TICKET: '206'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '6106.0',
        RDTO: '17.0',
        HUMEDAD: '53.79',
        ACIDEZ: '0.19',
        TICKET: '207'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1527.0',
        RDTO: '17.0',
        HUMEDAD: '53.79',
        ACIDEZ: '0.19',
        TICKET: '208'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '566.0',
        RDTO: '18.7',
        HUMEDAD: '50.99',
        ACIDEZ: '0.2',
        TICKET: '209'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1697.0',
        RDTO: '18.7',
        HUMEDAD: '50.99',
        ACIDEZ: '0.28',
        TICKET: '210'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '4307.0',
        RDTO: '22.52',
        HUMEDAD: '47.46',
        ACIDEZ: '0.19',
        TICKET: '211'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '775.0',
        RDTO: '21.78',
        HUMEDAD: '48.74',
        ACIDEZ: '0.14',
        TICKET: '212'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '305.0',
        RDTO: '23.51',
        HUMEDAD: '45.28',
        ACIDEZ: '0.19',
        TICKET: '213'
    },
    {
        DIA: '12',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1218.0',
        RDTO: '19.92',
        HUMEDAD: '48.36',
        ACIDEZ: '0.18',
        TICKET: '214'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1009.0',
        RDTO: '19.64',
        HUMEDAD: '52.31',
        ACIDEZ: '0.19',
        TICKET: '215'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '793.0',
        RDTO: '15.42',
        HUMEDAD: '56.22',
        ACIDEZ: '0.2',
        TICKET: '216'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3785.0',
        RDTO: '23.41',
        HUMEDAD: '45.94',
        ACIDEZ: '0.18',
        TICKET: '217'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1025.0',
        RDTO: '19.44',
        HUMEDAD: '50.38',
        ACIDEZ: '0.17',
        TICKET: '218'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '809.0',
        RDTO: '20.93',
        HUMEDAD: '46.59',
        ACIDEZ: '0.18',
        TICKET: '219'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '660.0',
        RDTO: '15.63',
        HUMEDAD: '55.28',
        ACIDEZ: '0.18',
        TICKET: '220'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2669.0',
        RDTO: '22.91',
        HUMEDAD: '46.33',
        ACIDEZ: '0.13',
        TICKET: '221'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '767.0',
        RDTO: '19.46',
        HUMEDAD: '50.76',
        ACIDEZ: '0.18',
        TICKET: '222'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1244.0',
        RDTO: '17.4',
        HUMEDAD: '52.04',
        ACIDEZ: '0.21',
        TICKET: '223'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2803.0',
        RDTO: '18.79',
        HUMEDAD: '45.74',
        ACIDEZ: '0.16',
        TICKET: '224'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2390.0',
        RDTO: '22.22',
        HUMEDAD: '44.49',
        ACIDEZ: '0.14',
        TICKET: '225'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1178.0',
        RDTO: '21.82',
        HUMEDAD: '47.97',
        ACIDEZ: '0.21',
        TICKET: '226'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '345.0',
        RDTO: '20.61',
        HUMEDAD: '49.23',
        ACIDEZ: '0.19',
        TICKET: '227'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1739.0',
        RDTO: '23.53',
        HUMEDAD: '44.14',
        ACIDEZ: '0.19',
        TICKET: '228'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '762.0',
        RDTO: '20.77',
        HUMEDAD: '46.09',
        ACIDEZ: '0.2',
        TICKET: '229'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '738.0',
        RDTO: '16.49',
        HUMEDAD: '53.62',
        ACIDEZ: '0.18',
        TICKET: '230'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '669.0',
        RDTO: '25.48',
        HUMEDAD: '47.22',
        ACIDEZ: '0.07',
        TICKET: '231'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2693.0',
        RDTO: '19.16',
        HUMEDAD: '49.82',
        ACIDEZ: '0.28',
        TICKET: '232'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '7807.0',
        RDTO: '19.19',
        HUMEDAD: '51.03',
        ACIDEZ: '0.23',
        TICKET: '233'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '425.0',
        RDTO: '15.1',
        HUMEDAD: '53.41',
        ACIDEZ: '0.19',
        TICKET: '234'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2188.0',
        RDTO: '19.95',
        HUMEDAD: '55.74',
        ACIDEZ: '0.24',
        TICKET: '235'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '6046.0',
        RDTO: '17.54',
        HUMEDAD: '53.61',
        ACIDEZ: '0.21',
        TICKET: '236'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1512.0',
        RDTO: '17.54',
        HUMEDAD: '53.61',
        ACIDEZ: '0.21',
        TICKET: '237'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1001.0',
        RDTO: '21.08',
        HUMEDAD: '50.58',
        ACIDEZ: '0.16',
        TICKET: '238'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '475.0',
        RDTO: '19.88',
        HUMEDAD: '44.06',
        ACIDEZ: '0.07',
        TICKET: '239'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '732.0',
        RDTO: '14.06',
        HUMEDAD: '55.91',
        ACIDEZ: '0.19',
        TICKET: '240'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '729.0',
        RDTO: '15.56',
        HUMEDAD: '55.4',
        ACIDEZ: '0.19',
        TICKET: '241'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '631.0',
        RDTO: '21.65',
        HUMEDAD: '48.6',
        ACIDEZ: '0.26',
        TICKET: '242'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1146.0',
        RDTO: '16.69',
        HUMEDAD: '50.21',
        ACIDEZ: '0.16',
        TICKET: '243'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '453.0',
        RDTO: '22.31',
        HUMEDAD: '47.45',
        ACIDEZ: '0.12',
        TICKET: '244'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2604.0',
        RDTO: '17.31',
        HUMEDAD: '46.45',
        ACIDEZ: '0.13',
        TICKET: '245'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1552.0',
        RDTO: '22.33',
        HUMEDAD: '49.8',
        ACIDEZ: '0.18',
        TICKET: '246'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '924.0',
        RDTO: '19.99',
        HUMEDAD: '45.54',
        ACIDEZ: '0.02',
        TICKET: '247'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3378.0',
        RDTO: '17.51',
        HUMEDAD: '48.94',
        ACIDEZ: '0.2',
        TICKET: '248'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2396.0',
        RDTO: '22.1',
        HUMEDAD: '46.81',
        ACIDEZ: '0.14',
        TICKET: '249'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1427.0',
        RDTO: '19.19',
        HUMEDAD: '42.12',
        ACIDEZ: '0.05',
        TICKET: '250'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '624.0',
        RDTO: '16.28',
        HUMEDAD: '54.65',
        ACIDEZ: '0.19',
        TICKET: '251'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1545.0',
        RDTO: '23.51',
        HUMEDAD: '44.2',
        ACIDEZ: '0.29',
        TICKET: '252'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2235.0',
        RDTO: '19.55',
        HUMEDAD: '42.59',
        ACIDEZ: '0.13',
        TICKET: '253'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '4967.0',
        RDTO: '24.92',
        HUMEDAD: '44.5',
        ACIDEZ: '0.14',
        TICKET: '254'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '674.0',
        RDTO: '25.68',
        HUMEDAD: '44.83',
        ACIDEZ: '0.11',
        TICKET: '255'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3403.0',
        RDTO: '19.32',
        HUMEDAD: '41.43',
        ACIDEZ: '0.13',
        TICKET: '256'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '708.0',
        RDTO: '18.45',
        HUMEDAD: '56.26',
        ACIDEZ: '0.44',
        TICKET: '257'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '5282.0',
        RDTO: '20.29',
        HUMEDAD: '49.22',
        ACIDEZ: '0.25',
        TICKET: '258'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3974.0',
        RDTO: '19.55',
        HUMEDAD: '49.83',
        ACIDEZ: '0.23',
        TICKET: '259'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '666.0',
        RDTO: '19.28',
        HUMEDAD: '53.28',
        ACIDEZ: '0.19',
        TICKET: '260'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '731.0',
        RDTO: '15.84',
        HUMEDAD: '53.82',
        ACIDEZ: '0.18',
        TICKET: '261'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '753.0',
        RDTO: '16.72',
        HUMEDAD: '54.79',
        ACIDEZ: '0.18',
        TICKET: '262'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '999.0',
        RDTO: '20.08',
        HUMEDAD: '46.7',
        ACIDEZ: '0.18',
        TICKET: '263'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1335.0',
        RDTO: '17.24',
        HUMEDAD: '50.58',
        ACIDEZ: '0.18',
        TICKET: '264'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2946.0',
        RDTO: '19.28',
        HUMEDAD: '47.64',
        ACIDEZ: '0.19',
        TICKET: '265'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1425.0',
        RDTO: '23.74',
        HUMEDAD: '47.69',
        ACIDEZ: '0.23',
        TICKET: '266'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3979.0',
        RDTO: '16.14',
        HUMEDAD: '47.44',
        ACIDEZ: '0.18',
        TICKET: '267'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '147.0',
        RDTO: '22.44',
        HUMEDAD: '47.03',
        ACIDEZ: '0.2',
        TICKET: '268'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1003.0',
        RDTO: '18.15',
        HUMEDAD: '43.84',
        ACIDEZ: '0.17',
        TICKET: '269'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '439.0',
        RDTO: '26.24',
        HUMEDAD: '45.22',
        ACIDEZ: '0.15',
        TICKET: '270'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '483.0',
        RDTO: '20.31',
        HUMEDAD: '50.02',
        ACIDEZ: '0.18',
        TICKET: '271'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1853.0',
        RDTO: '21.11',
        HUMEDAD: '40.67',
        ACIDEZ: '0.18',
        TICKET: '272'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '864.0',
        RDTO: '18.19',
        HUMEDAD: '46.69',
        ACIDEZ: '0.18',
        TICKET: '273'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '561.0',
        RDTO: '20.6',
        HUMEDAD: '47.48',
        ACIDEZ: '0.18',
        TICKET: '274'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1799.0',
        RDTO: '23.48',
        HUMEDAD: '45.49',
        ACIDEZ: '0.18',
        TICKET: '275'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '4799.0',
        RDTO: '26.94',
        HUMEDAD: '43.17',
        ACIDEZ: '0.18',
        TICKET: '276'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '728.0',
        RDTO: '15.3',
        HUMEDAD: '55.84',
        ACIDEZ: '0.18',
        TICKET: '277'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2533.0',
        RDTO: '23.69',
        HUMEDAD: '47.81',
        ACIDEZ: '0.09',
        TICKET: '278'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1364.0',
        RDTO: '24.24',
        HUMEDAD: '45.61',
        ACIDEZ: '0.15',
        TICKET: '279'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2241.0',
        RDTO: '16.15',
        HUMEDAD: '55.24',
        ACIDEZ: '0.19',
        TICKET: '280'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '7998.0',
        RDTO: '20.13',
        HUMEDAD: '48.66',
        ACIDEZ: '0.19',
        TICKET: '281'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '152.0',
        RDTO: '16.47',
        HUMEDAD: '53.14',
        ACIDEZ: '0.18',
        TICKET: '282'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1464.0',
        RDTO: '15.43',
        HUMEDAD: '55.88',
        ACIDEZ: '0.23',
        TICKET: '283'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '877.0',
        RDTO: '20.23',
        HUMEDAD: '51.51',
        ACIDEZ: '0.27',
        TICKET: '284'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1082.0',
        RDTO: '18.0',
        HUMEDAD: '48.95',
        ACIDEZ: '0.24',
        TICKET: '285'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '5839.0',
        RDTO: '19.71',
        HUMEDAD: '48.21',
        ACIDEZ: '0.32',
        TICKET: '286'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '646.0',
        RDTO: '21.07',
        HUMEDAD: '48.5',
        ACIDEZ: '0.22',
        TICKET: '287'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '460.0',
        RDTO: '15.58',
        HUMEDAD: '55.76',
        ACIDEZ: '0.24',
        TICKET: '288'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1285.0',
        RDTO: '22.31',
        HUMEDAD: '47.51',
        ACIDEZ: '0.41',
        TICKET: '289'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2929.0',
        RDTO: '20.7',
        HUMEDAD: '45.25',
        ACIDEZ: '0.29',
        TICKET: '290'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '4251.0',
        RDTO: '17.04',
        HUMEDAD: '49.53',
        ACIDEZ: '0.24',
        TICKET: '291'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '456.0',
        RDTO: '22.67',
        HUMEDAD: '44.22',
        ACIDEZ: '0.24',
        TICKET: '292'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3515.0',
        RDTO: '20.72',
        HUMEDAD: '47.21',
        ACIDEZ: '0.24',
        TICKET: '293'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1812.0',
        RDTO: '20.15',
        HUMEDAD: '47.75',
        ACIDEZ: '0.24',
        TICKET: '294'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1847.0',
        RDTO: '23.75',
        HUMEDAD: '43.15',
        ACIDEZ: '0.27',
        TICKET: '295'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2498.0',
        RDTO: '24.38',
        HUMEDAD: '46.29',
        ACIDEZ: '0.23',
        TICKET: '296'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '5831.0',
        RDTO: '25.08',
        HUMEDAD: '44.35',
        ACIDEZ: '0.37',
        TICKET: '297'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1804.0',
        RDTO: '23.51',
        HUMEDAD: '45.4',
        ACIDEZ: '0.24',
        TICKET: '298'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2326.0',
        RDTO: '18.97',
        HUMEDAD: '51.04',
        ACIDEZ: '0.31',
        TICKET: '299'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '775.0',
        RDTO: '18.97',
        HUMEDAD: '51.04',
        ACIDEZ: '0.31',
        TICKET: '300'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '505.0',
        RDTO: '17.31',
        HUMEDAD: '57.73',
        ACIDEZ: '0.25',
        TICKET: '301'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '535.0',
        RDTO: '24.95',
        HUMEDAD: '42.13',
        ACIDEZ: '0.14',
        TICKET: '303'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1189.0',
        RDTO: '16.69',
        HUMEDAD: '50.32',
        ACIDEZ: '0.24',
        TICKET: '304'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1477.0',
        RDTO: '19.73',
        HUMEDAD: '44.56',
        ACIDEZ: '0.15',
        TICKET: '305'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '768.0',
        RDTO: '19.79',
        HUMEDAD: '49.92',
        ACIDEZ: '0.24',
        TICKET: '306'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '688.0',
        RDTO: '21.78',
        HUMEDAD: '47.64',
        ACIDEZ: '0.31',
        TICKET: '307'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '703.0',
        RDTO: '24.05',
        HUMEDAD: '43.4',
        ACIDEZ: '0.23',
        TICKET: '308'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1243.0',
        RDTO: '24.58',
        HUMEDAD: '46.12',
        ACIDEZ: '0.21',
        TICKET: '309'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '283.0',
        RDTO: '17.46',
        HUMEDAD: '57.68',
        ACIDEZ: '0.23',
        TICKET: '302'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1041.0',
        RDTO: '23.88',
        HUMEDAD: '42.98',
        ACIDEZ: '0.16',
        TICKET: '310'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1856.0',
        RDTO: '20.08',
        HUMEDAD: '46.55',
        ACIDEZ: '0.18',
        TICKET: '316'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '823.0',
        RDTO: '28.17',
        HUMEDAD: '41.6',
        ACIDEZ: '0.19',
        TICKET: '311'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3163.0',
        RDTO: '20.78',
        HUMEDAD: '46.67',
        ACIDEZ: '0.18',
        TICKET: '312'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '405.0',
        RDTO: '25.57',
        HUMEDAD: '39.34',
        ACIDEZ: '0.11',
        TICKET: '313'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '357.0',
        RDTO: '27.54',
        HUMEDAD: '38.38',
        ACIDEZ: '0.09',
        TICKET: '314'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1529.0',
        RDTO: '24.16',
        HUMEDAD: '43.6',
        ACIDEZ: '0.21',
        TICKET: '315'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '6655.0',
        RDTO: '27.03',
        HUMEDAD: '42.14',
        ACIDEZ: '0.19',
        TICKET: '317'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2501.0',
        RDTO: '23.66',
        HUMEDAD: '44.95',
        ACIDEZ: '0.05',
        TICKET: '318'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3125.0',
        RDTO: '19.19',
        HUMEDAD: '49.81',
        ACIDEZ: '0.32',
        TICKET: '319'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2611.0',
        RDTO: '21.82',
        HUMEDAD: '40.64',
        ACIDEZ: '0.06',
        TICKET: '320'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3899.0',
        RDTO: '21.73',
        HUMEDAD: '51.16',
        ACIDEZ: '0.38',
        TICKET: '321'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '348.0',
        RDTO: '17.02',
        HUMEDAD: '49.85',
        ACIDEZ: '0.07',
        TICKET: '322'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1045.0',
        RDTO: '17.02',
        HUMEDAD: '49.85',
        ACIDEZ: '0.07',
        TICKET: '323'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '137.0',
        RDTO: '18.9',
        HUMEDAD: '53.45',
        ACIDEZ: '0.27',
        TICKET: '324'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '651.0',
        RDTO: '23.05',
        HUMEDAD: '46.71',
        ACIDEZ: '0.2',
        TICKET: '326'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '12044.0',
        RDTO: '19.61',
        HUMEDAD: '47.92',
        ACIDEZ: '0.23',
        TICKET: '325'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '243.0',
        RDTO: '19.48',
        HUMEDAD: '57.12',
        ACIDEZ: '0.21',
        TICKET: '327'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '177.0',
        RDTO: '19.0',
        HUMEDAD: '51.03',
        ACIDEZ: '0.19',
        TICKET: '328'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1412.0',
        RDTO: '24.12',
        HUMEDAD: '44.56',
        ACIDEZ: '0.28',
        TICKET: '329'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '507.0',
        RDTO: '19.89',
        HUMEDAD: '46.33',
        ACIDEZ: '0.16',
        TICKET: '330'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1821.0',
        RDTO: '20.52',
        HUMEDAD: '54.68',
        ACIDEZ: '0.46',
        TICKET: '331'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '209.0',
        RDTO: '18.77',
        HUMEDAD: '55.32',
        ACIDEZ: '0.19',
        TICKET: '332'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1057.0',
        RDTO: '26.95',
        HUMEDAD: '39.15',
        ACIDEZ: '0.18',
        TICKET: '333'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '597.0',
        RDTO: '22.13',
        HUMEDAD: '47.47',
        ACIDEZ: '0.18',
        TICKET: '334'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '510.0',
        RDTO: '26.72',
        HUMEDAD: '44.44',
        ACIDEZ: '0.18',
        TICKET: '335'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3063.0',
        RDTO: '20.08',
        HUMEDAD: '47.62',
        ACIDEZ: '0.29',
        TICKET: '336'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1938.0',
        RDTO: '21.64',
        HUMEDAD: '40.81',
        ACIDEZ: '0.01',
        TICKET: '337'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '365.0',
        RDTO: '20.23',
        HUMEDAD: '45.31',
        ACIDEZ: '0.2',
        TICKET: '338'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1649.0',
        RDTO: '18.27',
        HUMEDAD: '45.17',
        ACIDEZ: '0.2',
        TICKET: '339'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '6613.0',
        RDTO: '21.46',
        HUMEDAD: '49.88',
        ACIDEZ: '0.18',
        TICKET: '340'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '4147.0',
        RDTO: '18.22',
        HUMEDAD: '49.06',
        ACIDEZ: '0.18',
        TICKET: '341'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1717.0',
        RDTO: '26.07',
        HUMEDAD: '41.26',
        ACIDEZ: '0.14',
        TICKET: '342'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3339.0',
        RDTO: '24.29',
        HUMEDAD: '45.99',
        ACIDEZ: '0.13',
        TICKET: '343'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '697.0',
        RDTO: '21.38',
        HUMEDAD: '48.47',
        ACIDEZ: '0.26',
        TICKET: '344'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1090.0',
        RDTO: '21.95',
        HUMEDAD: '45.98',
        ACIDEZ: '0.24',
        TICKET: '345'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1553.0',
        RDTO: '20.89',
        HUMEDAD: '46.02',
        ACIDEZ: '0.3',
        TICKET: '346'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1974.0',
        RDTO: '17.85',
        HUMEDAD: '50.19',
        ACIDEZ: '0.38',
        TICKET: '347'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '224.0',
        RDTO: '20.41',
        HUMEDAD: '52.98',
        ACIDEZ: '0.62',
        TICKET: '348'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '12774.0',
        RDTO: '18.75',
        HUMEDAD: '49.69',
        ACIDEZ: '0.26',
        TICKET: '349'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '207.0',
        RDTO: '20.03',
        HUMEDAD: '53.55',
        ACIDEZ: '0.23',
        TICKET: '350'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '8126.0',
        RDTO: '23.41',
        HUMEDAD: '43.34',
        ACIDEZ: '0.14',
        TICKET: '351'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3979.0',
        RDTO: '18.07',
        HUMEDAD: '42.82',
        ACIDEZ: '0.05',
        TICKET: '352'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '378.0',
        RDTO: '25.0',
        HUMEDAD: '43.44',
        ACIDEZ: '0.3',
        TICKET: '353'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '170.0',
        RDTO: '19.19',
        HUMEDAD: '52.51',
        ACIDEZ: '0.25',
        TICKET: '354'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1254.0',
        RDTO: '18.29',
        HUMEDAD: '49.57',
        ACIDEZ: '0.23',
        TICKET: '355'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '834.0',
        RDTO: '18.29',
        HUMEDAD: '51.66',
        ACIDEZ: '0.23',
        TICKET: '356'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '903.0',
        RDTO: '14.94',
        HUMEDAD: '50.88',
        ACIDEZ: '0.25',
        TICKET: '357'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '302.0',
        RDTO: '18.08',
        HUMEDAD: '54.9',
        ACIDEZ: '0.31',
        TICKET: '358'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1035.0',
        RDTO: '18.99',
        HUMEDAD: '50.18',
        ACIDEZ: '0.22',
        TICKET: '359'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '465.0',
        RDTO: '16.14',
        HUMEDAD: '51.91',
        ACIDEZ: '0.23',
        TICKET: '360'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '266.0',
        RDTO: '18.37',
        HUMEDAD: '49.77',
        ACIDEZ: '0.25',
        TICKET: '361'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2114.0',
        RDTO: '22.07',
        HUMEDAD: '48.91',
        ACIDEZ: '0.2',
        TICKET: '362'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '644.0',
        RDTO: '26.37',
        HUMEDAD: '44.83',
        ACIDEZ: '0.13',
        TICKET: '363'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '580.0',
        RDTO: '22.45',
        HUMEDAD: '49.09',
        ACIDEZ: '0.16',
        TICKET: '364'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '223.0',
        RDTO: '19.97',
        HUMEDAD: '50.58',
        ACIDEZ: '0.34',
        TICKET: '365'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '508.0',
        RDTO: '24.49',
        HUMEDAD: '46.13',
        ACIDEZ: '0.14',
        TICKET: '366'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '686.0',
        RDTO: '13.45',
        HUMEDAD: '52.48',
        ACIDEZ: '0.19',
        TICKET: '367'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '198.0',
        RDTO: '18.59',
        HUMEDAD: '47.96',
        ACIDEZ: '0.18',
        TICKET: '368'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '905.0',
        RDTO: '18.87',
        HUMEDAD: '52.89',
        ACIDEZ: '0.26',
        TICKET: '369'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '347.0',
        RDTO: '19.99',
        HUMEDAD: '51.56',
        ACIDEZ: '0.25',
        TICKET: '370'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '564.0',
        RDTO: '20.09',
        HUMEDAD: '51.75',
        ACIDEZ: '0.1',
        TICKET: '371'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2812.0',
        RDTO: '19.54',
        HUMEDAD: '50.36',
        ACIDEZ: '0.21',
        TICKET: '372'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1756.0',
        RDTO: '16.91',
        HUMEDAD: '53.18',
        ACIDEZ: '0.22',
        TICKET: '373'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '824.0',
        RDTO: '16.67',
        HUMEDAD: '55.9',
        ACIDEZ: '0.19',
        TICKET: '374'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1955.0',
        RDTO: '23.43',
        HUMEDAD: '44.95',
        ACIDEZ: '0.13',
        TICKET: '375'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '813.0',
        RDTO: '20.33',
        HUMEDAD: '48.41',
        ACIDEZ: '0.16',
        TICKET: '376'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '532.0',
        RDTO: '19.31',
        HUMEDAD: '50.61',
        ACIDEZ: '0.22',
        TICKET: '377'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1593.0',
        RDTO: '20.27',
        HUMEDAD: '49.0',
        ACIDEZ: '0.22',
        TICKET: '378'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '341.0',
        RDTO: '26.74',
        HUMEDAD: '40.87',
        ACIDEZ: '0.16',
        TICKET: '379'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1357.0',
        RDTO: '21.9',
        HUMEDAD: '51.22',
        ACIDEZ: '0.24',
        TICKET: '380'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2510.0',
        RDTO: '21.55',
        HUMEDAD: '50.85',
        ACIDEZ: '0.11',
        TICKET: '381'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1071.0',
        RDTO: '16.36',
        HUMEDAD: '52.39',
        ACIDEZ: '0.16',
        TICKET: '382'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2963.0',
        RDTO: '20.05',
        HUMEDAD: '49.3',
        ACIDEZ: '0.14',
        TICKET: '383'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3172.0',
        RDTO: '23.17',
        HUMEDAD: '49.53',
        ACIDEZ: '0.15',
        TICKET: '384'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '535.0',
        RDTO: '17.65',
        HUMEDAD: '53.69',
        ACIDEZ: '0.25',
        TICKET: '385'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1903.0',
        RDTO: '20.5',
        HUMEDAD: '56.95',
        ACIDEZ: '0.25',
        TICKET: '386'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1712.0',
        RDTO: '19.44',
        HUMEDAD: '52.32',
        ACIDEZ: '0.26',
        TICKET: '387'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '8407.0',
        RDTO: '20.03',
        HUMEDAD: '51.37',
        ACIDEZ: '0.07',
        TICKET: '388'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '8283.0',
        RDTO: '17.15',
        HUMEDAD: '52.42',
        ACIDEZ: '0.23',
        TICKET: '389'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '384.0',
        RDTO: '11.04',
        HUMEDAD: '52.29',
        ACIDEZ: '0.23',
        TICKET: '393'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '450.0',
        RDTO: '20.34',
        HUMEDAD: '48.09',
        ACIDEZ: '0.18',
        TICKET: '394'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '131.0',
        RDTO: '16.28',
        HUMEDAD: '57.34',
        ACIDEZ: '0.29',
        TICKET: '395'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '651.0',
        RDTO: '21.87',
        HUMEDAD: '45.65',
        ACIDEZ: '0.17',
        TICKET: '396'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '289.0',
        RDTO: '20.0',
        HUMEDAD: '49.15',
        ACIDEZ: '0.32',
        TICKET: '397'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '415.0',
        RDTO: '19.39',
        HUMEDAD: '49.97',
        ACIDEZ: '0.22',
        TICKET: '390'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '680.0',
        RDTO: '22.02',
        HUMEDAD: '47.17',
        ACIDEZ: '0.11',
        TICKET: '391'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '886.0',
        RDTO: '21.77',
        HUMEDAD: '50.58',
        ACIDEZ: '0.15',
        TICKET: '392'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '452.0',
        RDTO: '19.02',
        HUMEDAD: '49.77',
        ACIDEZ: '0.22',
        TICKET: '398'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2938.0',
        RDTO: '19.74',
        HUMEDAD: '48.81',
        ACIDEZ: '0.25',
        TICKET: '399'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1805.0',
        RDTO: '16.4',
        HUMEDAD: '55.29',
        ACIDEZ: '0.26',
        TICKET: '400'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '413.0',
        RDTO: '17.86',
        HUMEDAD: '51.78',
        ACIDEZ: '0.19',
        TICKET: '401'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1496.0',
        RDTO: '21.33',
        HUMEDAD: '47.89',
        ACIDEZ: '0.22',
        TICKET: '402'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1838.0',
        RDTO: '20.48',
        HUMEDAD: '55.99',
        ACIDEZ: '0.15',
        TICKET: '411'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '445.0',
        RDTO: '25.55',
        HUMEDAD: '47.21',
        ACIDEZ: '0.08',
        TICKET: '403'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1331.0',
        RDTO: '17.33',
        HUMEDAD: '50.39',
        ACIDEZ: '0.22',
        TICKET: '404'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2232.0',
        RDTO: '21.49',
        HUMEDAD: '48.9',
        ACIDEZ: '0.22',
        TICKET: '405'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2680.0',
        RDTO: '18.09',
        HUMEDAD: '52.7',
        ACIDEZ: '0.26',
        TICKET: '406'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '354.0',
        RDTO: '23.16',
        HUMEDAD: '45.72',
        ACIDEZ: '0.12',
        TICKET: '407'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '10082.0',
        RDTO: '18.72',
        HUMEDAD: '50.89',
        ACIDEZ: '0.12',
        TICKET: '408'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3581.0',
        RDTO: '21.74',
        HUMEDAD: '49.99',
        ACIDEZ: '0.21',
        TICKET: '409'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '324.0',
        RDTO: '19.9',
        HUMEDAD: '54.93',
        ACIDEZ: '0.19',
        TICKET: '410'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '385.0',
        RDTO: '19.48',
        HUMEDAD: '53.34',
        ACIDEZ: '0.3',
        TICKET: '412'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1309.0',
        RDTO: '18.2',
        HUMEDAD: '51.65',
        ACIDEZ: '0.17',
        TICKET: '413'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '616.0',
        RDTO: '18.38',
        HUMEDAD: '52.53',
        ACIDEZ: '0.2',
        TICKET: '414'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '434.0',
        RDTO: '20.47',
        HUMEDAD: '51.26',
        ACIDEZ: '0.25',
        TICKET: '415'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1283.0',
        RDTO: '19.08',
        HUMEDAD: '51.75',
        ACIDEZ: '0.26',
        TICKET: '416'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '955.0',
        RDTO: '18.98',
        HUMEDAD: '52.74',
        ACIDEZ: '0.16',
        TICKET: '417'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '407.0',
        RDTO: '17.57',
        HUMEDAD: '51.88',
        ACIDEZ: '0.21',
        TICKET: '432'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1021.0',
        RDTO: '24.63',
        HUMEDAD: '45.69',
        ACIDEZ: '0.15',
        TICKET: '418'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '829.0',
        RDTO: '20.95',
        HUMEDAD: '48.82',
        ACIDEZ: '0.22',
        TICKET: '419'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '628.0',
        RDTO: '23.81',
        HUMEDAD: '50.34',
        ACIDEZ: '0.01',
        TICKET: '420'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2528.0',
        RDTO: '19.57',
        HUMEDAD: '51.86',
        ACIDEZ: '0.23',
        TICKET: '421'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '852.0',
        RDTO: '19.24',
        HUMEDAD: '50.17',
        ACIDEZ: '0.28',
        TICKET: '422'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1927.0',
        RDTO: '19.93',
        HUMEDAD: '50.93',
        ACIDEZ: '0.26',
        TICKET: '423'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1225.0',
        RDTO: '15.65',
        HUMEDAD: '51.86',
        ACIDEZ: '0.18',
        TICKET: '424'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2580.0',
        RDTO: '17.98',
        HUMEDAD: '53.09',
        ACIDEZ: '0.17',
        TICKET: '425'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2325.0',
        RDTO: '18.87',
        HUMEDAD: '52.29',
        ACIDEZ: '0.24',
        TICKET: '426'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '867.0',
        RDTO: '16.35',
        HUMEDAD: '51.47',
        ACIDEZ: '0.35',
        TICKET: '427'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2306.0',
        RDTO: '21.08',
        HUMEDAD: '50.67',
        ACIDEZ: '0.09',
        TICKET: '428'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '834.0',
        RDTO: '20.31',
        HUMEDAD: '52.11',
        ACIDEZ: '0.18',
        TICKET: '429'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '249.0',
        RDTO: '19.69',
        HUMEDAD: '54.85',
        ACIDEZ: '0.19',
        TICKET: '430'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3528.0',
        RDTO: '19.83',
        HUMEDAD: '50.31',
        ACIDEZ: '0.2',
        TICKET: '431'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '956.0',
        RDTO: '17.35',
        HUMEDAD: '54.75',
        ACIDEZ: '0.12',
        TICKET: '433'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2223.0',
        RDTO: '21.01',
        HUMEDAD: '49.15',
        ACIDEZ: '0.33',
        TICKET: '434'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1206.0',
        RDTO: '23.12',
        HUMEDAD: '45.37',
        ACIDEZ: '0.07',
        TICKET: '435'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '355.0',
        RDTO: '15.99',
        HUMEDAD: '58.2',
        ACIDEZ: '0.43',
        TICKET: '436'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '848.0',
        RDTO: '21.63',
        HUMEDAD: '49.24',
        ACIDEZ: '0.21',
        TICKET: '437'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '835.0',
        RDTO: '20.58',
        HUMEDAD: '51.03',
        ACIDEZ: '0.31',
        TICKET: '438'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '858.0',
        RDTO: '19.84',
        HUMEDAD: '48.31',
        ACIDEZ: '0.16',
        TICKET: '439'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1672.0',
        RDTO: '20.56',
        HUMEDAD: '49.09',
        ACIDEZ: '0.21',
        TICKET: '440'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2824.0',
        RDTO: '17.0',
        HUMEDAD: '54.84',
        ACIDEZ: '0.28',
        TICKET: '441'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2794.0',
        RDTO: '18.75',
        HUMEDAD: '51.27',
        ACIDEZ: '0.19',
        TICKET: '442'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '651.0',
        RDTO: '24.13',
        HUMEDAD: '47.96',
        ACIDEZ: '0.05',
        TICKET: '443'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1112.0',
        RDTO: '17.91',
        HUMEDAD: '51.39',
        ACIDEZ: '0.19',
        TICKET: '444'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3531.0',
        RDTO: '25.55',
        HUMEDAD: '47.98',
        ACIDEZ: '0.18',
        TICKET: '445'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2668.0',
        RDTO: '19.48',
        HUMEDAD: '52.15',
        ACIDEZ: '0.23',
        TICKET: '446'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2270.0',
        RDTO: '20.16',
        HUMEDAD: '50.4',
        ACIDEZ: '0.14',
        TICKET: '447'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '479.0',
        RDTO: '18.19',
        HUMEDAD: '51.21',
        ACIDEZ: '0.04',
        TICKET: '448'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '3102.0',
        RDTO: '14.16',
        HUMEDAD: '53.91',
        ACIDEZ: '0.23',
        TICKET: '449'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '4853.0',
        RDTO: '19.34',
        HUMEDAD: '57.05',
        ACIDEZ: '0.12',
        TICKET: '453'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1861.0',
        RDTO: '18.06',
        HUMEDAD: '53.21',
        ACIDEZ: '0.22',
        TICKET: '450'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '2788.0',
        RDTO: '17.85',
        HUMEDAD: '52.62',
        ACIDEZ: '0.21',
        TICKET: '451'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '11429.0',
        RDTO: '17.37',
        HUMEDAD: '53.16',
        ACIDEZ: '0.23',
        TICKET: '452'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '632.0',
        RDTO: '18.69',
        HUMEDAD: '49.61',
        ACIDEZ: '0.16',
        TICKET: '454'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1346.0',
        RDTO: '17.19',
        HUMEDAD: '49.66',
        ACIDEZ: '0.19',
        TICKET: '455'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2016',
        KGSACEITUNA: '1059.0',
        RDTO: '19.58',
        HUMEDAD: '52.84',
        ACIDEZ: '0.25',
        TICKET: '456'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1404.0',
        RDTO: '16.3',
        HUMEDAD: '54.29',
        ACIDEZ: '0.21',
        TICKET: '457'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '809.0',
        RDTO: '17.92',
        HUMEDAD: '52.57',
        ACIDEZ: '0.16',
        TICKET: '458'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '859.0',
        RDTO: '20.88',
        HUMEDAD: '49.48',
        ACIDEZ: '0.19',
        TICKET: '478'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '433.0',
        RDTO: '21.34',
        HUMEDAD: '49.07',
        ACIDEZ: '0.18',
        TICKET: '459'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6159.0',
        RDTO: '20.06',
        HUMEDAD: '53.49',
        ACIDEZ: '0.14',
        TICKET: '460'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2645.0',
        RDTO: '19.53',
        HUMEDAD: '51.91',
        ACIDEZ: '0.16',
        TICKET: '461'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1003.0',
        RDTO: '23.75',
        HUMEDAD: '45.32',
        ACIDEZ: '0.11',
        TICKET: '462'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1422.0',
        RDTO: '17.71',
        HUMEDAD: '49.85',
        ACIDEZ: '0.22',
        TICKET: '463'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '778.0',
        RDTO: '20.95',
        HUMEDAD: '50.13',
        ACIDEZ: '0.11',
        TICKET: '464'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3918.0',
        RDTO: '19.27',
        HUMEDAD: '50.44',
        ACIDEZ: '0.19',
        TICKET: '465'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2131.0',
        RDTO: '16.7',
        HUMEDAD: '53.02',
        ACIDEZ: '0.21',
        TICKET: '466'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5707.0',
        RDTO: '19.14',
        HUMEDAD: '54.35',
        ACIDEZ: '0.29',
        TICKET: '467'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '419.0',
        RDTO: '20.13',
        HUMEDAD: '49.06',
        ACIDEZ: '0.15',
        TICKET: '468'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2975.0',
        RDTO: '18.75',
        HUMEDAD: '52.49',
        ACIDEZ: '0.24',
        TICKET: '469'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1604.0',
        RDTO: '18.93',
        HUMEDAD: '50.5',
        ACIDEZ: '0.23',
        TICKET: '470'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '920.0',
        RDTO: '18.89',
        HUMEDAD: '50.43',
        ACIDEZ: '0.22',
        TICKET: '471'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '373.0',
        RDTO: '20.12',
        HUMEDAD: '49.75',
        ACIDEZ: '0.29',
        TICKET: '472'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '647.0',
        RDTO: '18.86',
        HUMEDAD: '49.35',
        ACIDEZ: '0.27',
        TICKET: '473'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1575.0',
        RDTO: '18.69',
        HUMEDAD: '52.11',
        ACIDEZ: '0.28',
        TICKET: '479'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '794.0',
        RDTO: '18.49',
        HUMEDAD: '55.34',
        ACIDEZ: '0.47',
        TICKET: '480'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '455.0',
        RDTO: '17.92',
        HUMEDAD: '52.48',
        ACIDEZ: '0.51',
        TICKET: '481'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '488.0',
        RDTO: '21.91',
        HUMEDAD: '50.39',
        ACIDEZ: '0.24',
        TICKET: '482'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2557.0',
        RDTO: '19.91',
        HUMEDAD: '52.55',
        ACIDEZ: '0.27',
        TICKET: '483'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2303.0',
        RDTO: '16.41',
        HUMEDAD: '52.84',
        ACIDEZ: '0.31',
        TICKET: '484'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5346.0',
        RDTO: '15.31',
        HUMEDAD: '56.05',
        ACIDEZ: '0.26',
        TICKET: '485'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2845.0',
        RDTO: '18.81',
        HUMEDAD: '53.73',
        ACIDEZ: '0.23',
        TICKET: '486'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1373.0',
        RDTO: '21.53',
        HUMEDAD: '49.92',
        ACIDEZ: '0.17',
        TICKET: '487'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '403.0',
        RDTO: '18.55',
        HUMEDAD: '52.65',
        ACIDEZ: '0.27',
        TICKET: '488'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2890.0',
        RDTO: '20.15',
        HUMEDAD: '53.28',
        ACIDEZ: '0.31',
        TICKET: '489'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4216.0',
        RDTO: '19.89',
        HUMEDAD: '50.28',
        ACIDEZ: '0.21',
        TICKET: '490'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '555.0',
        RDTO: '23.53',
        HUMEDAD: '50.4',
        ACIDEZ: '0.12',
        TICKET: '474'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '473.0',
        RDTO: '17.46',
        HUMEDAD: '53.6',
        ACIDEZ: '0.11',
        TICKET: '475'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '473.0',
        RDTO: '17.46',
        HUMEDAD: '53.6',
        ACIDEZ: '0.1',
        TICKET: '476'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '857.0',
        RDTO: '25.98',
        HUMEDAD: '41.76',
        ACIDEZ: '0.11',
        TICKET: '477'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '948.0',
        RDTO: '20.32',
        HUMEDAD: '49.64',
        ACIDEZ: '0.23',
        TICKET: '491'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4841.0',
        RDTO: '22.33',
        HUMEDAD: '55.48',
        ACIDEZ: '0.23',
        TICKET: '492'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '715.0',
        RDTO: '21.88',
        HUMEDAD: '48.6',
        ACIDEZ: '0.23',
        TICKET: '493'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '238.0',
        RDTO: '22.01',
        HUMEDAD: '51.69',
        ACIDEZ: '0.37',
        TICKET: '494'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4643.0',
        RDTO: '21.5',
        HUMEDAD: '52.0',
        ACIDEZ: '0.34',
        TICKET: '495'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1062.0',
        RDTO: '17.34',
        HUMEDAD: '52.78',
        ACIDEZ: '0.39',
        TICKET: '496'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '164.0',
        RDTO: '17.52',
        HUMEDAD: '54.51',
        ACIDEZ: '0.21',
        TICKET: '497'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '760.0',
        RDTO: '18.55',
        HUMEDAD: '52.93',
        ACIDEZ: '0.21',
        TICKET: '498'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1244.0',
        RDTO: '19.57',
        HUMEDAD: '52.74',
        ACIDEZ: '0.27',
        TICKET: '499'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '286.0',
        RDTO: '21.06',
        HUMEDAD: '51.13',
        ACIDEZ: '0.23',
        TICKET: '500'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '425.0',
        RDTO: '17.51',
        HUMEDAD: '55.01',
        ACIDEZ: '0.23',
        TICKET: '501'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3274.0',
        RDTO: '15.94',
        HUMEDAD: '56.01',
        ACIDEZ: '0.18',
        TICKET: '502'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '129.0',
        RDTO: '20.05',
        HUMEDAD: '52.53',
        ACIDEZ: '0.21',
        TICKET: '503'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '706.0',
        RDTO: '17.86',
        HUMEDAD: '54.99',
        ACIDEZ: '0.15',
        TICKET: '504'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '597.0',
        RDTO: '23.16',
        HUMEDAD: '48.05',
        ACIDEZ: '0.21',
        TICKET: '505'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1057.0',
        RDTO: '19.43',
        HUMEDAD: '52.23',
        ACIDEZ: '0.19',
        TICKET: '506'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '582.0',
        RDTO: '18.59',
        HUMEDAD: '52.39',
        ACIDEZ: '0.18',
        TICKET: '507'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2924.0',
        RDTO: '15.05',
        HUMEDAD: '55.53',
        ACIDEZ: '0.23',
        TICKET: '508'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1193.0',
        RDTO: '18.56',
        HUMEDAD: '51.76',
        ACIDEZ: '0.32',
        TICKET: '516'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '749.0',
        RDTO: '21.24',
        HUMEDAD: '52.86',
        ACIDEZ: '0.27',
        TICKET: '509'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '692.0',
        RDTO: '18.96',
        HUMEDAD: '52.43',
        ACIDEZ: '0.26',
        TICKET: '510'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1224.0',
        RDTO: '23.38',
        HUMEDAD: '46.53',
        ACIDEZ: '0.24',
        TICKET: '511'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '972.0',
        RDTO: '20.77',
        HUMEDAD: '51.02',
        ACIDEZ: '0.34',
        TICKET: '512'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '777.0',
        RDTO: '18.24',
        HUMEDAD: '55.07',
        ACIDEZ: '0.32',
        TICKET: '513'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '554.0',
        RDTO: '23.13',
        HUMEDAD: '49.24',
        ACIDEZ: '0.32',
        TICKET: '514'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '731.0',
        RDTO: '20.91',
        HUMEDAD: '50.88',
        ACIDEZ: '0.42',
        TICKET: '515'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2839.0',
        RDTO: '13.55',
        HUMEDAD: '54.33',
        ACIDEZ: '0.29',
        TICKET: '517'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '981.0',
        RDTO: '20.5',
        HUMEDAD: '51.47',
        ACIDEZ: '0.32',
        TICKET: '518'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2359.0',
        RDTO: '18.84',
        HUMEDAD: '51.94',
        ACIDEZ: '0.34',
        TICKET: '519'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5070.0',
        RDTO: '19.91',
        HUMEDAD: '50.95',
        ACIDEZ: '0.31',
        TICKET: '520'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '569.0',
        RDTO: '23.3',
        HUMEDAD: '51.6',
        ACIDEZ: '0.18',
        TICKET: '521'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '720.0',
        RDTO: '15.58',
        HUMEDAD: '54.76',
        ACIDEZ: '0.37',
        TICKET: '522'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1034.0',
        RDTO: '18.94',
        HUMEDAD: '55.33',
        ACIDEZ: '0.4',
        TICKET: '523'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1034.0',
        RDTO: '18.95',
        HUMEDAD: '55.47',
        ACIDEZ: '0.41',
        TICKET: '524'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '784.0',
        RDTO: '19.58',
        HUMEDAD: '53.37',
        ACIDEZ: '0.43',
        TICKET: '527'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2005.0',
        RDTO: '19.39',
        HUMEDAD: '54.33',
        ACIDEZ: '0.34',
        TICKET: '525'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1756.0',
        RDTO: '17.36',
        HUMEDAD: '54.19',
        ACIDEZ: '0.23',
        TICKET: '526'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2247.0',
        RDTO: '18.34',
        HUMEDAD: '53.29',
        ACIDEZ: '0.44',
        TICKET: '528'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3473.0',
        RDTO: '20.09',
        HUMEDAD: '54.7',
        ACIDEZ: '0.36',
        TICKET: '529'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3931.0',
        RDTO: '18.82',
        HUMEDAD: '51.84',
        ACIDEZ: '0.27',
        TICKET: '530'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3524.0',
        RDTO: '17.73',
        HUMEDAD: '56.41',
        ACIDEZ: '0.34',
        TICKET: '531'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3201.0',
        RDTO: '19.14',
        HUMEDAD: '52.75',
        ACIDEZ: '0.21',
        TICKET: '532'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1713.0',
        RDTO: '17.8',
        HUMEDAD: '53.57',
        ACIDEZ: '0.14',
        TICKET: '533'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '449.0',
        RDTO: '15.69',
        HUMEDAD: '55.45',
        ACIDEZ: '0.16',
        TICKET: '534'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3443.0',
        RDTO: '19.18',
        HUMEDAD: '54.65',
        ACIDEZ: '0.16',
        TICKET: '535'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3092.0',
        RDTO: '16.42',
        HUMEDAD: '57.97',
        ACIDEZ: '0.21',
        TICKET: '536'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '362.0',
        RDTO: '20.14',
        HUMEDAD: '52.84',
        ACIDEZ: '0.28',
        TICKET: '537'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '298.0',
        RDTO: '20.78',
        HUMEDAD: '51.68',
        ACIDEZ: '0.18',
        TICKET: '538'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '345.0',
        RDTO: '21.29',
        HUMEDAD: '53.06',
        ACIDEZ: '0.28',
        TICKET: '539'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1009.0',
        RDTO: '19.22',
        HUMEDAD: '52.51',
        ACIDEZ: '0.18',
        TICKET: '540'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1064.0',
        RDTO: '17.04',
        HUMEDAD: '54.4',
        ACIDEZ: '0.24',
        TICKET: '541'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6114.0',
        RDTO: '19.67',
        HUMEDAD: '53.61',
        ACIDEZ: '0.34',
        TICKET: '542'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '966.0',
        RDTO: '20.8',
        HUMEDAD: '50.08',
        ACIDEZ: '0.22',
        TICKET: '543'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3407.0',
        RDTO: '20.29',
        HUMEDAD: '50.18',
        ACIDEZ: '0.27',
        TICKET: '544'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '486.0',
        RDTO: '25.19',
        HUMEDAD: '49.4',
        ACIDEZ: '0.25',
        TICKET: '545'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1090.0',
        RDTO: '18.65',
        HUMEDAD: '52.37',
        ACIDEZ: '0.29',
        TICKET: '546'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '978.0',
        RDTO: '26.95',
        HUMEDAD: '43.38',
        ACIDEZ: '0.25',
        TICKET: '547'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '990.0',
        RDTO: '21.08',
        HUMEDAD: '53.87',
        ACIDEZ: '0.33',
        TICKET: '548'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '720.0',
        RDTO: '19.08',
        HUMEDAD: '55.22',
        ACIDEZ: '0.38',
        TICKET: '549'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2139.0',
        RDTO: '20.33',
        HUMEDAD: '51.82',
        ACIDEZ: '0.49',
        TICKET: '550'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '663.0',
        RDTO: '19.05',
        HUMEDAD: '52.25',
        ACIDEZ: '0.27',
        TICKET: '551'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3883.0',
        RDTO: '18.92',
        HUMEDAD: '51.22',
        ACIDEZ: '0.3',
        TICKET: '552'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2460.0',
        RDTO: '18.82',
        HUMEDAD: '53.11',
        ACIDEZ: '0.38',
        TICKET: '553'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2118.0',
        RDTO: '18.07',
        HUMEDAD: '54.48',
        ACIDEZ: '0.35',
        TICKET: '554'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4411.0',
        RDTO: '17.71',
        HUMEDAD: '55.14',
        ACIDEZ: '0.34',
        TICKET: '555'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1095.0',
        RDTO: '19.46',
        HUMEDAD: '53.93',
        ACIDEZ: '0.36',
        TICKET: '556'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1095.0',
        RDTO: '19.46',
        HUMEDAD: '53.93',
        ACIDEZ: '0.36',
        TICKET: '557'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4301.0',
        RDTO: '21.47',
        HUMEDAD: '49.9',
        ACIDEZ: '0.17',
        TICKET: '558'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3031.0',
        RDTO: '18.0',
        HUMEDAD: '52.73',
        ACIDEZ: '0.25',
        TICKET: '559'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '620.0',
        RDTO: '15.3',
        HUMEDAD: '54.5',
        ACIDEZ: '0.21',
        TICKET: '570'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5020.0',
        RDTO: '19.76',
        HUMEDAD: '50.33',
        ACIDEZ: '0.18',
        TICKET: '560'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1200.0',
        RDTO: '19.54',
        HUMEDAD: '52.74',
        ACIDEZ: '0.21',
        TICKET: '561'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2241.0',
        RDTO: '18.4',
        HUMEDAD: '55.06',
        ACIDEZ: '0.18',
        TICKET: '562'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3943.0',
        RDTO: '17.95',
        HUMEDAD: '55.33',
        ACIDEZ: '0.26',
        TICKET: '563'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1334.0',
        RDTO: '17.85',
        HUMEDAD: '52.92',
        ACIDEZ: '0.35',
        TICKET: '564'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6296.0',
        RDTO: '19.45',
        HUMEDAD: '55.17',
        ACIDEZ: '0.25',
        TICKET: '565'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2108.0',
        RDTO: '17.2',
        HUMEDAD: '53.92',
        ACIDEZ: '0.21',
        TICKET: '566'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3878.0',
        RDTO: '15.65',
        HUMEDAD: '60.36',
        ACIDEZ: '0.31',
        TICKET: '567'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4768.0',
        RDTO: '19.52',
        HUMEDAD: '57.91',
        ACIDEZ: '0.21',
        TICKET: '568'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5076.0',
        RDTO: '16.77',
        HUMEDAD: '54.92',
        ACIDEZ: '0.23',
        TICKET: '569'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1058.0',
        RDTO: '21.42',
        HUMEDAD: '48.71',
        ACIDEZ: '0.11',
        TICKET: '571'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '241.0',
        RDTO: '21.07',
        HUMEDAD: '51.38',
        ACIDEZ: '0.27',
        TICKET: '572'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '432.0',
        RDTO: '11.05',
        HUMEDAD: '58.84',
        ACIDEZ: '0.2',
        TICKET: '579'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '754.0',
        RDTO: '20.11',
        HUMEDAD: '51.38',
        ACIDEZ: '0.14',
        TICKET: '580'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '236.0',
        RDTO: '18.33',
        HUMEDAD: '55.56',
        ACIDEZ: '0.19',
        TICKET: '581'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1093.0',
        RDTO: '20.97',
        HUMEDAD: '48.8',
        ACIDEZ: '0.23',
        TICKET: '582'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '705.0',
        RDTO: '17.7',
        HUMEDAD: '52.54',
        ACIDEZ: '0.2',
        TICKET: '583'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '737.0',
        RDTO: '18.03',
        HUMEDAD: '51.41',
        ACIDEZ: '0.2',
        TICKET: '584'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '804.0',
        RDTO: '19.58',
        HUMEDAD: '51.16',
        ACIDEZ: '0.24',
        TICKET: '585'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3804.0',
        RDTO: '18.81',
        HUMEDAD: '54.19',
        ACIDEZ: '0.29',
        TICKET: '573'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1207.0',
        RDTO: '18.63',
        HUMEDAD: '54.39',
        ACIDEZ: '0.21',
        TICKET: '574'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1056.0',
        RDTO: '23.18',
        HUMEDAD: '47.84',
        ACIDEZ: '0.28',
        TICKET: '575'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '298.0',
        RDTO: '22.46',
        HUMEDAD: '49.42',
        ACIDEZ: '0.23',
        TICKET: '576'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '338.0',
        RDTO: '18.34',
        HUMEDAD: '56.35',
        ACIDEZ: '0.24',
        TICKET: '577'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '463.0',
        RDTO: '17.93',
        HUMEDAD: '55.69',
        ACIDEZ: '0.21',
        TICKET: '578'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '466.0',
        RDTO: '22.81',
        HUMEDAD: '47.78',
        ACIDEZ: '0.14',
        TICKET: '586'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '657.0',
        RDTO: '23.4',
        HUMEDAD: '45.97',
        ACIDEZ: '0.28',
        TICKET: '587'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '609.0',
        RDTO: '25.15',
        HUMEDAD: '48.24',
        ACIDEZ: '0.08',
        TICKET: '588'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1414.0',
        RDTO: '19.11',
        HUMEDAD: '53.26',
        ACIDEZ: '0.4',
        TICKET: '589'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '372.0',
        RDTO: '17.97',
        HUMEDAD: '50.56',
        ACIDEZ: '0.25',
        TICKET: '590'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2861.0',
        RDTO: '18.12',
        HUMEDAD: '54.93',
        ACIDEZ: '0.48',
        TICKET: '591'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1336.0',
        RDTO: '15.31',
        HUMEDAD: '55.09',
        ACIDEZ: '0.21',
        TICKET: '592'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1003.0',
        RDTO: '21.43',
        HUMEDAD: '47.9',
        ACIDEZ: '0.13',
        TICKET: '593'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2683.0',
        RDTO: '18.67',
        HUMEDAD: '52.87',
        ACIDEZ: '0.22',
        TICKET: '594'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4528.0',
        RDTO: '16.7',
        HUMEDAD: '53.45',
        ACIDEZ: '0.22',
        TICKET: '595'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2089.0',
        RDTO: '19.28',
        HUMEDAD: '53.19',
        ACIDEZ: '0.25',
        TICKET: '596'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '861.0',
        RDTO: '26.14',
        HUMEDAD: '42.16',
        ACIDEZ: '0.09',
        TICKET: '597'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3432.0',
        RDTO: '18.47',
        HUMEDAD: '51.14',
        ACIDEZ: '0.2',
        TICKET: '598'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2395.0',
        RDTO: '19.3',
        HUMEDAD: '51.99',
        ACIDEZ: '0.13',
        TICKET: '599'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3972.0',
        RDTO: '21.94',
        HUMEDAD: '49.77',
        ACIDEZ: '0.2',
        TICKET: '600'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1090.0',
        RDTO: '19.63',
        HUMEDAD: '52.88',
        ACIDEZ: '0.28',
        TICKET: '601'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1090.0',
        RDTO: '19.63',
        HUMEDAD: '52.88',
        ACIDEZ: '0.28',
        TICKET: '602'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4160.0',
        RDTO: '20.56',
        HUMEDAD: '50.09',
        ACIDEZ: '0.18',
        TICKET: '603'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1741.0',
        RDTO: '18.47',
        HUMEDAD: '53.02',
        ACIDEZ: '0.36',
        TICKET: '604'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2397.0',
        RDTO: '19.38',
        HUMEDAD: '53.43',
        ACIDEZ: '0.21',
        TICKET: '605'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6192.0',
        RDTO: '21.25',
        HUMEDAD: '48.45',
        ACIDEZ: '0.16',
        TICKET: '606'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3348.0',
        RDTO: '23.4',
        HUMEDAD: '49.11',
        ACIDEZ: '0.12',
        TICKET: '607'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2544.0',
        RDTO: '19.06',
        HUMEDAD: '54.11',
        ACIDEZ: '0.27',
        TICKET: '608'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2839.0',
        RDTO: '20.87',
        HUMEDAD: '50.03',
        ACIDEZ: '0.08',
        TICKET: '609'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2090.0',
        RDTO: '17.69',
        HUMEDAD: '54.17',
        ACIDEZ: '0.2',
        TICKET: '610'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1260.0',
        RDTO: '16.52',
        HUMEDAD: '55.02',
        ACIDEZ: '0.32',
        TICKET: '611'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5322.0',
        RDTO: '20.37',
        HUMEDAD: '53.62',
        ACIDEZ: '0.16',
        TICKET: '612'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4158.0',
        RDTO: '16.79',
        HUMEDAD: '56.68',
        ACIDEZ: '0.32',
        TICKET: '613'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6663.0',
        RDTO: '19.27',
        HUMEDAD: '54.47',
        ACIDEZ: '0.24',
        TICKET: '614'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5149.0',
        RDTO: '20.49',
        HUMEDAD: '52.0',
        ACIDEZ: '0.19',
        TICKET: '615'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1160.0',
        RDTO: '17.21',
        HUMEDAD: '51.52',
        ACIDEZ: '0.17',
        TICKET: '616'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3290.0',
        RDTO: '16.78',
        HUMEDAD: '54.53',
        ACIDEZ: '0.21',
        TICKET: '617'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1528.0',
        RDTO: '20.87',
        HUMEDAD: '50.26',
        ACIDEZ: '0.19',
        TICKET: '621'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1382.0',
        RDTO: '19.22',
        HUMEDAD: '51.04',
        ACIDEZ: '0.22',
        TICKET: '622'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3130.0',
        RDTO: '19.6',
        HUMEDAD: '52.43',
        ACIDEZ: '0.32',
        TICKET: '623'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '592.0',
        RDTO: '22.69',
        HUMEDAD: '51.46',
        ACIDEZ: '0.17',
        TICKET: '624'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4363.0',
        RDTO: '19.35',
        HUMEDAD: '52.34',
        ACIDEZ: '0.36',
        TICKET: '625'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '212.0',
        RDTO: '21.82',
        HUMEDAD: '52.56',
        ACIDEZ: '0.29',
        TICKET: '626'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '368.0',
        RDTO: '20.44',
        HUMEDAD: '51.3',
        ACIDEZ: '0.25',
        TICKET: '627'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '368.0',
        RDTO: '20.44',
        HUMEDAD: '51.3',
        ACIDEZ: '0.25',
        TICKET: '628'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2607.0',
        RDTO: '18.96',
        HUMEDAD: '52.56',
        ACIDEZ: '0.26',
        TICKET: '629'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '718.0',
        RDTO: '16.93',
        HUMEDAD: '54.27',
        ACIDEZ: '0.19',
        TICKET: '630'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '993.0',
        RDTO: '20.54',
        HUMEDAD: '49.49',
        ACIDEZ: '0.2',
        TICKET: '631'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '433.0',
        RDTO: '21.19',
        HUMEDAD: '49.77',
        ACIDEZ: '0.12',
        TICKET: '632'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5965.0',
        RDTO: '19.55',
        HUMEDAD: '53.42',
        ACIDEZ: '0.13',
        TICKET: '618'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5242.0',
        RDTO: '18.1',
        HUMEDAD: '55.53',
        ACIDEZ: '0.41',
        TICKET: '619'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4123.0',
        RDTO: '15.9',
        HUMEDAD: '55.61',
        ACIDEZ: '0.2',
        TICKET: '620'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3937.0',
        RDTO: '16.98',
        HUMEDAD: '53.81',
        ACIDEZ: '0.23',
        TICKET: '633'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1742.0',
        RDTO: '20.34',
        HUMEDAD: '50.39',
        ACIDEZ: '0.16',
        TICKET: '634'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '760.0',
        RDTO: '20.56',
        HUMEDAD: '50.32',
        ACIDEZ: '0.23',
        TICKET: '635'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '996.0',
        RDTO: '24.85',
        HUMEDAD: '42.08',
        ACIDEZ: '0.15',
        TICKET: '636'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2741.0',
        RDTO: '22.3',
        HUMEDAD: '50.07',
        ACIDEZ: '0.24',
        TICKET: '637'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1360.0',
        RDTO: '19.72',
        HUMEDAD: '53.25',
        ACIDEZ: '0.24',
        TICKET: '638'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1360.0',
        RDTO: '19.72',
        HUMEDAD: '53.25',
        ACIDEZ: '0.24',
        TICKET: '639'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1117.0',
        RDTO: '19.94',
        HUMEDAD: '52.23',
        ACIDEZ: '0.33',
        TICKET: '640'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2426.0',
        RDTO: '21.5',
        HUMEDAD: '50.29',
        ACIDEZ: '0.29',
        TICKET: '641'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1248.0',
        RDTO: '21.99',
        HUMEDAD: '50.36',
        ACIDEZ: '0.17',
        TICKET: '642'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3850.0',
        RDTO: '21.97',
        HUMEDAD: '48.95',
        ACIDEZ: '0.2',
        TICKET: '643'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1910.0',
        RDTO: '19.31',
        HUMEDAD: '51.67',
        ACIDEZ: '0.22',
        TICKET: '644'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3156.0',
        RDTO: '19.55',
        HUMEDAD: '53.11',
        ACIDEZ: '0.35',
        TICKET: '645'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3722.0',
        RDTO: '20.71',
        HUMEDAD: '50.03',
        ACIDEZ: '0.17',
        TICKET: '646'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1506.0',
        RDTO: '17.97',
        HUMEDAD: '52.39',
        ACIDEZ: '0.21',
        TICKET: '647'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '387.0',
        RDTO: '18.23',
        HUMEDAD: '53.83',
        ACIDEZ: '0.19',
        TICKET: '661'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3700.0',
        RDTO: '17.55',
        HUMEDAD: '53.95',
        ACIDEZ: '0.18',
        TICKET: '648'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3118.0',
        RDTO: '17.19',
        HUMEDAD: '56.23',
        ACIDEZ: '0.26',
        TICKET: '649'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '934.0',
        RDTO: '22.27',
        HUMEDAD: '48.23',
        ACIDEZ: '0.19',
        TICKET: '650'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4108.0',
        RDTO: '14.35',
        HUMEDAD: '59.64',
        ACIDEZ: '0.18',
        TICKET: '651'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '9654.0',
        RDTO: '17.7',
        HUMEDAD: '54.5',
        ACIDEZ: '0.24',
        TICKET: '652'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '610.0',
        RDTO: '21.39',
        HUMEDAD: '50.17',
        ACIDEZ: '0.18',
        TICKET: '653'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3711.0',
        RDTO: '22.0',
        HUMEDAD: '48.52',
        ACIDEZ: '0.22',
        TICKET: '654'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3146.0',
        RDTO: '21.49',
        HUMEDAD: '48.57',
        ACIDEZ: '0.2',
        TICKET: '655'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '7055.0',
        RDTO: '19.71',
        HUMEDAD: '51.02',
        ACIDEZ: '0.16',
        TICKET: '656'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '623.0',
        RDTO: '16.89',
        HUMEDAD: '54.34',
        ACIDEZ: '0.2',
        TICKET: '657'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4111.0',
        RDTO: '17.4',
        HUMEDAD: '55.41',
        ACIDEZ: '0.18',
        TICKET: '658'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '975.0',
        RDTO: '19.0',
        HUMEDAD: '52.65',
        ACIDEZ: '0.21',
        TICKET: '659'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '728.0',
        RDTO: '26.4',
        HUMEDAD: '47.4',
        ACIDEZ: '0.19',
        TICKET: '660'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '569.0',
        RDTO: '17.37',
        HUMEDAD: '54.25',
        ACIDEZ: '0.28',
        TICKET: '662'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '531.0',
        RDTO: '19.26',
        HUMEDAD: '53.3',
        ACIDEZ: '0.22',
        TICKET: '663'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2122.0',
        RDTO: '19.26',
        HUMEDAD: '53.3',
        ACIDEZ: '0.22',
        TICKET: '664'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1087.0',
        RDTO: '17.3',
        HUMEDAD: '54.11',
        ACIDEZ: '0.28',
        TICKET: '665'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1277.0',
        RDTO: '21.36',
        HUMEDAD: '50.39',
        ACIDEZ: '0.18',
        TICKET: '666'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '114.0',
        RDTO: '21.24',
        HUMEDAD: '52.9',
        ACIDEZ: '0.26',
        TICKET: '667'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '702.0',
        RDTO: '19.15',
        HUMEDAD: '52.6',
        ACIDEZ: '0.31',
        TICKET: '668'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '702.0',
        RDTO: '19.15',
        HUMEDAD: '52.6',
        ACIDEZ: '0.31',
        TICKET: '669'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '612.0',
        RDTO: '22.23',
        HUMEDAD: '49.94',
        ACIDEZ: '0.14',
        TICKET: '670'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '999.0',
        RDTO: '20.8',
        HUMEDAD: '57.36',
        ACIDEZ: '0.23',
        TICKET: '671'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '849.0',
        RDTO: '22.55',
        HUMEDAD: '49.04',
        ACIDEZ: '0.21',
        TICKET: '672'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4321.0',
        RDTO: '18.96',
        HUMEDAD: '52.51',
        ACIDEZ: '0.25',
        TICKET: '673'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '925.0',
        RDTO: '17.65',
        HUMEDAD: '52.89',
        ACIDEZ: '0.27',
        TICKET: '674'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '450.0',
        RDTO: '21.6',
        HUMEDAD: '50.89',
        ACIDEZ: '0.23',
        TICKET: '675'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '450.0',
        RDTO: '21.6',
        HUMEDAD: '50.89',
        ACIDEZ: '0.23',
        TICKET: '676'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '668.0',
        RDTO: '20.58',
        HUMEDAD: '51.56',
        ACIDEZ: '0.15',
        TICKET: '677'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '452.0',
        RDTO: '20.08',
        HUMEDAD: '53.36',
        ACIDEZ: '0.22',
        TICKET: '678'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '846.0',
        RDTO: '19.36',
        HUMEDAD: '50.23',
        ACIDEZ: '0.24',
        TICKET: '679'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '973.0',
        RDTO: '19.98',
        HUMEDAD: '50.63',
        ACIDEZ: '0.23',
        TICKET: '682'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1121.0',
        RDTO: '22.52',
        HUMEDAD: '47.47',
        ACIDEZ: '0.19',
        TICKET: '680'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '640.0',
        RDTO: '19.22',
        HUMEDAD: '50.78',
        ACIDEZ: '0.13',
        TICKET: '681'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1304.0',
        RDTO: '20.29',
        HUMEDAD: '50.1',
        ACIDEZ: '0.23',
        TICKET: '683'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '986.0',
        RDTO: '21.08',
        HUMEDAD: '51.36',
        ACIDEZ: '0.27',
        TICKET: '684'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '905.0',
        RDTO: '20.8',
        HUMEDAD: '50.95',
        ACIDEZ: '0.15',
        TICKET: '685'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1327.0',
        RDTO: '19.81',
        HUMEDAD: '53.06',
        ACIDEZ: '0.32',
        TICKET: '686'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3646.0',
        RDTO: '20.03',
        HUMEDAD: '51.84',
        ACIDEZ: '0.22',
        TICKET: '694'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3379.0',
        RDTO: '22.01',
        HUMEDAD: '48.14',
        ACIDEZ: '0.21',
        TICKET: '687'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3304.0',
        RDTO: '19.18',
        HUMEDAD: '52.16',
        ACIDEZ: '0.32',
        TICKET: '688'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2609.0',
        RDTO: '19.88',
        HUMEDAD: '50.91',
        ACIDEZ: '0.2',
        TICKET: '689'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2062.0',
        RDTO: '19.64',
        HUMEDAD: '51.51',
        ACIDEZ: '0.23',
        TICKET: '690'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1907.0',
        RDTO: '19.1',
        HUMEDAD: '52.32',
        ACIDEZ: '0.27',
        TICKET: '691'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3710.0',
        RDTO: '18.86',
        HUMEDAD: '51.6',
        ACIDEZ: '0.23',
        TICKET: '692'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '927.0',
        RDTO: '18.86',
        HUMEDAD: '51.6',
        ACIDEZ: '0.23',
        TICKET: '693'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3357.0',
        RDTO: '15.69',
        HUMEDAD: '54.67',
        ACIDEZ: '0.21',
        TICKET: '695'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1392.0',
        RDTO: '17.22',
        HUMEDAD: '54.78',
        ACIDEZ: '0.23',
        TICKET: '696'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3248.0',
        RDTO: '20.56',
        HUMEDAD: '49.76',
        ACIDEZ: '0.28',
        TICKET: '697'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4113.0',
        RDTO: '19.78',
        HUMEDAD: '48.9',
        ACIDEZ: '0.18',
        TICKET: '698'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2984.0',
        RDTO: '20.51',
        HUMEDAD: '52.57',
        ACIDEZ: '0.31',
        TICKET: '699'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2790.0',
        RDTO: '17.67',
        HUMEDAD: '53.09',
        ACIDEZ: '0.21',
        TICKET: '700'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3599.0',
        RDTO: '17.29',
        HUMEDAD: '56.9',
        ACIDEZ: '0.26',
        TICKET: '701'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3946.0',
        RDTO: '16.08',
        HUMEDAD: '50.66',
        ACIDEZ: '0.11',
        TICKET: '702'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '9226.0',
        RDTO: '16.5',
        HUMEDAD: '55.34',
        ACIDEZ: '0.23',
        TICKET: '703'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '997.0',
        RDTO: '20.16',
        HUMEDAD: '51.51',
        ACIDEZ: '0.22',
        TICKET: '704'
    },
    {
        DIA: '10',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '618.0',
        RDTO: '17.25',
        HUMEDAD: '53.56',
        ACIDEZ: '0.12',
        TICKET: '705'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '569.0',
        RDTO: '16.23',
        HUMEDAD: '57.19',
        ACIDEZ: '0.19',
        TICKET: '706'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '902.0',
        RDTO: '18.82',
        HUMEDAD: '52.01',
        ACIDEZ: '0.43',
        TICKET: '707'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '374.0',
        RDTO: '18.14',
        HUMEDAD: '53.56',
        ACIDEZ: '0.39',
        TICKET: '708'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '730.0',
        RDTO: '16.42',
        HUMEDAD: '54.46',
        ACIDEZ: '0.21',
        TICKET: '709'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '713.0',
        RDTO: '19.47',
        HUMEDAD: '51.27',
        ACIDEZ: '0.38',
        TICKET: '710'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '83.0',
        RDTO: '20.73',
        HUMEDAD: '53.6',
        ACIDEZ: '0.67',
        TICKET: '711'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4190.0',
        RDTO: '18.31',
        HUMEDAD: '51.62',
        ACIDEZ: '0.39',
        TICKET: '712'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '879.0',
        RDTO: '19.88',
        HUMEDAD: '49.15',
        ACIDEZ: '0.23',
        TICKET: '719'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '860.0',
        RDTO: '19.03',
        HUMEDAD: '51.88',
        ACIDEZ: '0.31',
        TICKET: '720'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2298.0',
        RDTO: '17.02',
        HUMEDAD: '53.07',
        ACIDEZ: '0.21',
        TICKET: '721'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1149.0',
        RDTO: '24.69',
        HUMEDAD: '43.83',
        ACIDEZ: '0.15',
        TICKET: '722'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1064.0',
        RDTO: '17.92',
        HUMEDAD: '51.5',
        ACIDEZ: '0.29',
        TICKET: '723'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3737.0',
        RDTO: '16.25',
        HUMEDAD: '58.62',
        ACIDEZ: '0.24',
        TICKET: '724'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1686.0',
        RDTO: '19.02',
        HUMEDAD: '51.69',
        ACIDEZ: '0.23',
        TICKET: '725'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '944.0',
        RDTO: '19.58',
        HUMEDAD: '50.81',
        ACIDEZ: '0.38',
        TICKET: '713'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1385.0',
        RDTO: '17.07',
        HUMEDAD: '55.92',
        ACIDEZ: '0.3',
        TICKET: '714'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '995.0',
        RDTO: '18.05',
        HUMEDAD: '53.29',
        ACIDEZ: '0.21',
        TICKET: '785'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '285.0',
        RDTO: '18.21',
        HUMEDAD: '53.58',
        ACIDEZ: '0.29',
        TICKET: '716'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1438.0',
        RDTO: '17.98',
        HUMEDAD: '52.85',
        ACIDEZ: '0.27',
        TICKET: '717'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '660.0',
        RDTO: '24.13',
        HUMEDAD: '46.76',
        ACIDEZ: '0.4',
        TICKET: '718'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2192.0',
        RDTO: '20.57',
        HUMEDAD: '49.64',
        ACIDEZ: '0.23',
        TICKET: '726'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '729.0',
        RDTO: '15.14',
        HUMEDAD: '54.78',
        ACIDEZ: '0.35',
        TICKET: '727'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '899.0',
        RDTO: '18.39',
        HUMEDAD: '52.51',
        ACIDEZ: '0.19',
        TICKET: '728'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1480.0',
        RDTO: '17.81',
        HUMEDAD: '52.33',
        ACIDEZ: '0.26',
        TICKET: '729'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1565.0',
        RDTO: '20.27',
        HUMEDAD: '52.3',
        ACIDEZ: '0.27',
        TICKET: '730'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1698.0',
        RDTO: '17.84',
        HUMEDAD: '51.91',
        ACIDEZ: '0.4',
        TICKET: '731'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2074.0',
        RDTO: '21.25',
        HUMEDAD: '51.86',
        ACIDEZ: '0.2',
        TICKET: '732'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '816.0',
        RDTO: '21.45',
        HUMEDAD: '50.41',
        ACIDEZ: '0.34',
        TICKET: '733'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3266.0',
        RDTO: '21.45',
        HUMEDAD: '50.41',
        ACIDEZ: '0.34',
        TICKET: '734'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1639.0',
        RDTO: '16.63',
        HUMEDAD: '56.04',
        ACIDEZ: '0.28',
        TICKET: '735'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3843.0',
        RDTO: '20.79',
        HUMEDAD: '48.36',
        ACIDEZ: '0.18',
        TICKET: '736'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '880.0',
        RDTO: '22.37',
        HUMEDAD: '49.19',
        ACIDEZ: '0.23',
        TICKET: '737'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4045.0',
        RDTO: '17.93',
        HUMEDAD: '56.17',
        ACIDEZ: '0.37',
        TICKET: '738'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3603.0',
        RDTO: '16.75',
        HUMEDAD: '53.88',
        ACIDEZ: '0.21',
        TICKET: '739'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5921.0',
        RDTO: '18.1',
        HUMEDAD: '54.19',
        ACIDEZ: '0.23',
        TICKET: '740'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '207.0',
        RDTO: '20.67',
        HUMEDAD: '50.82',
        ACIDEZ: '0.27',
        TICKET: '741'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4001.0',
        RDTO: '18.33',
        HUMEDAD: '50.43',
        ACIDEZ: '0.4',
        TICKET: '742'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '7964.0',
        RDTO: '19.62',
        HUMEDAD: '52.56',
        ACIDEZ: '0.23',
        TICKET: '743'
    },
    {
        DIA: '11',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '930.0',
        RDTO: '19.61',
        HUMEDAD: '51.38',
        ACIDEZ: '0.23',
        TICKET: '744'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3393.0',
        RDTO: '15.76',
        HUMEDAD: '52.94',
        ACIDEZ: '0.21',
        TICKET: '750'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '915.0',
        RDTO: '17.7',
        HUMEDAD: '51.86',
        ACIDEZ: '0.23',
        TICKET: '751'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '544.0',
        RDTO: '21.46',
        HUMEDAD: '48.71',
        ACIDEZ: '0.21',
        TICKET: '752'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '544.0',
        RDTO: '21.46',
        HUMEDAD: '48.71',
        ACIDEZ: '0.21',
        TICKET: '753'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '918.0',
        RDTO: '19.16',
        HUMEDAD: '52.7',
        ACIDEZ: '0.21',
        TICKET: '754'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '709.0',
        RDTO: '16.89',
        HUMEDAD: '54.81',
        ACIDEZ: '0.23',
        TICKET: '755'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '922.0',
        RDTO: '17.08',
        HUMEDAD: '52.34',
        ACIDEZ: '0.25',
        TICKET: '756'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '800.0',
        RDTO: '25.8',
        HUMEDAD: '45.11',
        ACIDEZ: '0.15',
        TICKET: '757'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '868.0',
        RDTO: '20.7',
        HUMEDAD: '50.5',
        ACIDEZ: '0.24',
        TICKET: '745'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '667.0',
        RDTO: '20.14',
        HUMEDAD: '50.68',
        ACIDEZ: '0.24',
        TICKET: '746'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '760.0',
        RDTO: '22.56',
        HUMEDAD: '49.36',
        ACIDEZ: '0.17',
        TICKET: '747'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4859.0',
        RDTO: '15.62',
        HUMEDAD: '53.27',
        ACIDEZ: '0.23',
        TICKET: '748'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '184.0',
        RDTO: '19.41',
        HUMEDAD: '50.2',
        ACIDEZ: '0.21',
        TICKET: '749'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2510.0',
        RDTO: '17.87',
        HUMEDAD: '55.86',
        ACIDEZ: '0.33',
        TICKET: '758'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1640.0',
        RDTO: '20.55',
        HUMEDAD: '50.91',
        ACIDEZ: '0.4',
        TICKET: '759'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1766.0',
        RDTO: '26.65',
        HUMEDAD: '44.3',
        ACIDEZ: '0.19',
        TICKET: '760'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '521.0',
        RDTO: '19.74',
        HUMEDAD: '50.63',
        ACIDEZ: '0.2',
        TICKET: '761'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2420.0',
        RDTO: '18.44',
        HUMEDAD: '53.19',
        ACIDEZ: '0.32',
        TICKET: '762'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2420.0',
        RDTO: '18.44',
        HUMEDAD: '53.19',
        ACIDEZ: '0.32',
        TICKET: '763'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1100.0',
        RDTO: '16.87',
        HUMEDAD: '56.29',
        ACIDEZ: '0.26',
        TICKET: '764'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1981.0',
        RDTO: '14.14',
        HUMEDAD: '56.1',
        ACIDEZ: '0.26',
        TICKET: '765'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1892.0',
        RDTO: '20.81',
        HUMEDAD: '51.66',
        ACIDEZ: '0.27',
        TICKET: '766'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '923.0',
        RDTO: '20.49',
        HUMEDAD: '51.69',
        ACIDEZ: '0.34',
        TICKET: '767'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2972.0',
        RDTO: '17.6',
        HUMEDAD: '53.96',
        ACIDEZ: '0.37',
        TICKET: '768'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2091.0',
        RDTO: '18.43',
        HUMEDAD: '51.94',
        ACIDEZ: '0.28',
        TICKET: '769'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4102.0',
        RDTO: '19.53',
        HUMEDAD: '51.2',
        ACIDEZ: '0.19',
        TICKET: '770'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1026.0',
        RDTO: '19.53',
        HUMEDAD: '51.2',
        ACIDEZ: '0.19',
        TICKET: '771'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3416.0',
        RDTO: '17.95',
        HUMEDAD: '54.68',
        ACIDEZ: '0.2',
        TICKET: '772'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2855.0',
        RDTO: '20.2',
        HUMEDAD: '50.54',
        ACIDEZ: '0.29',
        TICKET: '773'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4019.0',
        RDTO: '21.52',
        HUMEDAD: '50.51',
        ACIDEZ: '0.15',
        TICKET: '774'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4148.0',
        RDTO: '19.06',
        HUMEDAD: '53.74',
        ACIDEZ: '0.21',
        TICKET: '775'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6195.0',
        RDTO: '19.82',
        HUMEDAD: '51.18',
        ACIDEZ: '0.14',
        TICKET: '776'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4265.0',
        RDTO: '19.7',
        HUMEDAD: '52.88',
        ACIDEZ: '0.15',
        TICKET: '777'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2018.0',
        RDTO: '20.23',
        HUMEDAD: '50.01',
        ACIDEZ: '0.16',
        TICKET: '778'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1031.0',
        RDTO: '20.36',
        HUMEDAD: '51.46',
        ACIDEZ: '0.22',
        TICKET: '779'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3422.0',
        RDTO: '18.08',
        HUMEDAD: '55.88',
        ACIDEZ: '0.34',
        TICKET: '780'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '830.0',
        RDTO: '20.05',
        HUMEDAD: '51.62',
        ACIDEZ: '0.21',
        TICKET: '786'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1013.0',
        RDTO: '19.04',
        HUMEDAD: '51.89',
        ACIDEZ: '0.23',
        TICKET: '787'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1225.0',
        RDTO: '20.84',
        HUMEDAD: '51.55',
        ACIDEZ: '0.18',
        TICKET: '788'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '344.0',
        RDTO: '18.14',
        HUMEDAD: '53.69',
        ACIDEZ: '0.28',
        TICKET: '789'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '820.0',
        RDTO: '25.6',
        HUMEDAD: '42.31',
        ACIDEZ: '0.17',
        TICKET: '790'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1624.0',
        RDTO: '16.78',
        HUMEDAD: '55.37',
        ACIDEZ: '0.26',
        TICKET: '781'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '399.0',
        RDTO: '23.72',
        HUMEDAD: '46.92',
        ACIDEZ: '0.2',
        TICKET: '791'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1278.0',
        RDTO: '15.79',
        HUMEDAD: '53.54',
        ACIDEZ: '0.07',
        TICKET: '792'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1158.0',
        RDTO: '22.63',
        HUMEDAD: '46.97',
        ACIDEZ: '0.16',
        TICKET: '793'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2118.0',
        RDTO: '18.11',
        HUMEDAD: '51.97',
        ACIDEZ: '0.23',
        TICKET: '794'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2118.0',
        RDTO: '18.11',
        HUMEDAD: '51.97',
        ACIDEZ: '0.23',
        TICKET: '795'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1663.0',
        RDTO: '22.32',
        HUMEDAD: '47.55',
        ACIDEZ: '0.19',
        TICKET: '796'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2179.0',
        RDTO: '16.39',
        HUMEDAD: '54.62',
        ACIDEZ: '0.38',
        TICKET: '797'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2069.0',
        RDTO: '18.63',
        HUMEDAD: '52.62',
        ACIDEZ: '0.27',
        TICKET: '798'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3453.0',
        RDTO: '20.34',
        HUMEDAD: '52.3',
        ACIDEZ: '0.31',
        TICKET: '799'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3724.0',
        RDTO: '19.49',
        HUMEDAD: '51.7',
        ACIDEZ: '0.25',
        TICKET: '800'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '778.0',
        RDTO: '16.65',
        HUMEDAD: '55.76',
        ACIDEZ: '0.23',
        TICKET: '782'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '554.0',
        RDTO: '21.62',
        HUMEDAD: '48.88',
        ACIDEZ: '0.2',
        TICKET: '783'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '554.0',
        RDTO: '21.62',
        HUMEDAD: '48.88',
        ACIDEZ: '0.2',
        TICKET: '784'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '850.0',
        RDTO: '21.28',
        HUMEDAD: '48.11',
        ACIDEZ: '0.23',
        TICKET: '801'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3960.0',
        RDTO: '21.11',
        HUMEDAD: '49.27',
        ACIDEZ: '0.21',
        TICKET: '802'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4837.0',
        RDTO: '19.57',
        HUMEDAD: '50.22',
        ACIDEZ: '0.12',
        TICKET: '803'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1209.0',
        RDTO: '19.57',
        HUMEDAD: '50.22',
        ACIDEZ: '0.12',
        TICKET: '804'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '8544.0',
        RDTO: '21.19',
        HUMEDAD: '49.95',
        ACIDEZ: '0.26',
        TICKET: '805'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3247.0',
        RDTO: '21.71',
        HUMEDAD: '47.04',
        ACIDEZ: '0.12',
        TICKET: '806'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1209.0',
        RDTO: '20.41',
        HUMEDAD: '49.64',
        ACIDEZ: '0.11',
        TICKET: '807'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2729.0',
        RDTO: '22.67',
        HUMEDAD: '50.1',
        ACIDEZ: '0.17',
        TICKET: '808'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '286.0',
        RDTO: '23.3',
        HUMEDAD: '47.6',
        ACIDEZ: '0.24',
        TICKET: '815'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2316.0',
        RDTO: '17.33',
        HUMEDAD: '54.7',
        ACIDEZ: '0.17',
        TICKET: '809'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2995.0',
        RDTO: '18.66',
        HUMEDAD: '53.32',
        ACIDEZ: '0.2',
        TICKET: '810'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4316.0',
        RDTO: '18.7',
        HUMEDAD: '54.25',
        ACIDEZ: '0.23',
        TICKET: '811'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '320.0',
        RDTO: '20.08',
        HUMEDAD: '50.34',
        ACIDEZ: '0.22',
        TICKET: '812'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '800.0',
        RDTO: '20.26',
        HUMEDAD: '50.11',
        ACIDEZ: '0.28',
        TICKET: '813'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1269.0',
        RDTO: '20.46',
        HUMEDAD: '51.25',
        ACIDEZ: '0.27',
        TICKET: '816'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '318.0',
        RDTO: '18.76',
        HUMEDAD: '51.59',
        ACIDEZ: '0.21',
        TICKET: '817'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '318.0',
        RDTO: '18.76',
        HUMEDAD: '51.19',
        ACIDEZ: '0.21',
        TICKET: '818'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '894.0',
        RDTO: '20.5',
        HUMEDAD: '52.77',
        ACIDEZ: '0.45',
        TICKET: '819'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '970.0',
        RDTO: '21.24',
        HUMEDAD: '51.89',
        ACIDEZ: '0.27',
        TICKET: '820'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '859.0',
        RDTO: '19.29',
        HUMEDAD: '54.1',
        ACIDEZ: '0.37',
        TICKET: '821'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '916.0',
        RDTO: '19.36',
        HUMEDAD: '51.06',
        ACIDEZ: '0.19',
        TICKET: '814'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '876.0',
        RDTO: '16.12',
        HUMEDAD: '55.99',
        ACIDEZ: '0.28',
        TICKET: '822'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '902.0',
        RDTO: '17.72',
        HUMEDAD: '53.14',
        ACIDEZ: '0.27',
        TICKET: '823'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '618.0',
        RDTO: '18.51',
        HUMEDAD: '53.35',
        ACIDEZ: '0.19',
        TICKET: '824'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1057.0',
        RDTO: '17.21',
        HUMEDAD: '54.64',
        ACIDEZ: '0.33',
        TICKET: '825'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1392.0',
        RDTO: '22.01',
        HUMEDAD: '49.36',
        ACIDEZ: '0.14',
        TICKET: '826'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1072.0',
        RDTO: '22.18',
        HUMEDAD: '50.62',
        ACIDEZ: '0.24',
        TICKET: '827'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '967.0',
        RDTO: '25.46',
        HUMEDAD: '43.51',
        ACIDEZ: '0.17',
        TICKET: '828'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '725.0',
        RDTO: '16.04',
        HUMEDAD: '53.3',
        ACIDEZ: '0.09',
        TICKET: '829'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1005.0',
        RDTO: '22.03',
        HUMEDAD: '46.77',
        ACIDEZ: '0.3',
        TICKET: '830'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5954.0',
        RDTO: '20.82',
        HUMEDAD: '50.96',
        ACIDEZ: '0.35',
        TICKET: '831'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '226.0',
        RDTO: '21.38',
        HUMEDAD: '51.56',
        ACIDEZ: '0.31',
        TICKET: '832'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2476.0',
        RDTO: '18.99',
        HUMEDAD: '51.74',
        ACIDEZ: '0.28',
        TICKET: '833'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2134.0',
        RDTO: '17.83',
        HUMEDAD: '51.92',
        ACIDEZ: '0.19',
        TICKET: '834'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2134.0',
        RDTO: '17.83',
        HUMEDAD: '51.92',
        ACIDEZ: '0.19',
        TICKET: '835'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '871.0',
        RDTO: '21.48',
        HUMEDAD: '48.87',
        ACIDEZ: '0.19',
        TICKET: '836'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1696.0',
        RDTO: '16.02',
        HUMEDAD: '53.21',
        ACIDEZ: '0.24',
        TICKET: '837'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3443.0',
        RDTO: '15.56',
        HUMEDAD: '54.51',
        ACIDEZ: '0.26',
        TICKET: '838'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1120.0',
        RDTO: '18.8',
        HUMEDAD: '51.08',
        ACIDEZ: '0.36',
        TICKET: '839'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1253.0',
        RDTO: '18.12',
        HUMEDAD: '53.92',
        ACIDEZ: '0.32',
        TICKET: '840'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5010.0',
        RDTO: '18.12',
        HUMEDAD: '53.92',
        ACIDEZ: '0.32',
        TICKET: '841'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '563.0',
        RDTO: '19.45',
        HUMEDAD: '52.85',
        ACIDEZ: '0.24',
        TICKET: '842'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5069.0',
        RDTO: '19.45',
        HUMEDAD: '52.85',
        ACIDEZ: '0.24',
        TICKET: '843'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4284.0',
        RDTO: '20.76',
        HUMEDAD: '49.64',
        ACIDEZ: '0.3',
        TICKET: '844'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3031.0',
        RDTO: '16.27',
        HUMEDAD: '53.32',
        ACIDEZ: '0.18',
        TICKET: '845'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3390.0',
        RDTO: '18.8',
        HUMEDAD: '53.05',
        ACIDEZ: '0.34',
        TICKET: '846'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3129.0',
        RDTO: '21.48',
        HUMEDAD: '50.27',
        ACIDEZ: '0.19',
        TICKET: '847'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3190.0',
        RDTO: '19.01',
        HUMEDAD: '52.39',
        ACIDEZ: '0.26',
        TICKET: '848'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '930.0',
        RDTO: '19.38',
        HUMEDAD: '52.15',
        ACIDEZ: '0.43',
        TICKET: '849'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '654.0',
        RDTO: '16.31',
        HUMEDAD: '53.82',
        ACIDEZ: '0.19',
        TICKET: '850'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1138.0',
        RDTO: '16.69',
        HUMEDAD: '53.18',
        ACIDEZ: '0.28',
        TICKET: '851'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '546.0',
        RDTO: '15.17',
        HUMEDAD: '53.94',
        ACIDEZ: '0.35',
        TICKET: '852'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4358.0',
        RDTO: '18.28',
        HUMEDAD: '49.57',
        ACIDEZ: '0.24',
        TICKET: '853'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '830.0',
        RDTO: '17.37',
        HUMEDAD: '53.29',
        ACIDEZ: '0.21',
        TICKET: '854'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3890.0',
        RDTO: '18.42',
        HUMEDAD: '53.78',
        ACIDEZ: '0.32',
        TICKET: '855'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '931.0',
        RDTO: '15.3',
        HUMEDAD: '51.91',
        ACIDEZ: '0.11',
        TICKET: '856'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '161.0',
        RDTO: '18.68',
        HUMEDAD: '51.9',
        ACIDEZ: '0.29',
        TICKET: '857'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5147.0',
        RDTO: '19.54',
        HUMEDAD: '53.11',
        ACIDEZ: '0.3',
        TICKET: '858'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '862.0',
        RDTO: '21.89',
        HUMEDAD: '45.95',
        ACIDEZ: '0.17',
        TICKET: '879'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1017.0',
        RDTO: '19.96',
        HUMEDAD: '52.2',
        ACIDEZ: '0.22',
        TICKET: '859'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1090.0',
        RDTO: '18.57',
        HUMEDAD: '53.0',
        ACIDEZ: '0.22',
        TICKET: '860'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '715.0',
        RDTO: '19.26',
        HUMEDAD: '51.68',
        ACIDEZ: '0.2',
        TICKET: '861'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1158.0',
        RDTO: '21.43',
        HUMEDAD: '51.08',
        ACIDEZ: '0.19',
        TICKET: '862'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1301.0',
        RDTO: '22.15',
        HUMEDAD: '48.47',
        ACIDEZ: '0.18',
        TICKET: '863'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '647.0',
        RDTO: '21.59',
        HUMEDAD: '51.12',
        ACIDEZ: '0.28',
        TICKET: '864'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '387.0',
        RDTO: '17.85',
        HUMEDAD: '52.8',
        ACIDEZ: '0.18',
        TICKET: '865'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1354.0',
        RDTO: '21.07',
        HUMEDAD: '50.42',
        ACIDEZ: '0.35',
        TICKET: '866'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4343.0',
        RDTO: '19.07',
        HUMEDAD: '51.74',
        ACIDEZ: '0.29',
        TICKET: '867'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '740.0',
        RDTO: '21.0',
        HUMEDAD: '52.19',
        ACIDEZ: '0.21',
        TICKET: '868'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3611.0',
        RDTO: '21.4',
        HUMEDAD: '50.17',
        ACIDEZ: '0.19',
        TICKET: '869'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '314.0',
        RDTO: '19.8',
        HUMEDAD: '50.93',
        ACIDEZ: '0.22',
        TICKET: '870'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4177.0',
        RDTO: '22.47',
        HUMEDAD: '49.28',
        ACIDEZ: '0.18',
        TICKET: '871'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4751.0',
        RDTO: '20.4',
        HUMEDAD: '52.07',
        ACIDEZ: '0.33',
        TICKET: '872'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6994.0',
        RDTO: '20.52',
        HUMEDAD: '52.47',
        ACIDEZ: '0.31',
        TICKET: '873'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '814.0',
        RDTO: '24.98',
        HUMEDAD: '49.36',
        ACIDEZ: '0.19',
        TICKET: '874'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '624.0',
        RDTO: '19.85',
        HUMEDAD: '51.64',
        ACIDEZ: '0.18',
        TICKET: '875'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1165.0',
        RDTO: '24.06',
        HUMEDAD: '49.73',
        ACIDEZ: '0.18',
        TICKET: '876'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6522.0',
        RDTO: '20.37',
        HUMEDAD: '53.05',
        ACIDEZ: '0.27',
        TICKET: '877'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2898.0',
        RDTO: '22.04',
        HUMEDAD: '49.19',
        ACIDEZ: '0.19',
        TICKET: '878'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '475.0',
        RDTO: '22.81',
        HUMEDAD: '46.77',
        ACIDEZ: '0.18',
        TICKET: '880'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '394.0',
        RDTO: '20.19',
        HUMEDAD: '51.96',
        ACIDEZ: '0.2',
        TICKET: '881'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '676.0',
        RDTO: '20.24',
        HUMEDAD: '48.62',
        ACIDEZ: '0.19',
        TICKET: '882'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '824.0',
        RDTO: '19.46',
        HUMEDAD: '51.94',
        ACIDEZ: '0.21',
        TICKET: '883'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '744.0',
        RDTO: '23.17',
        HUMEDAD: '48.51',
        ACIDEZ: '0.3',
        TICKET: '884'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1031.0',
        RDTO: '20.5',
        HUMEDAD: '48.57',
        ACIDEZ: '0.24',
        TICKET: '885'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '383.0',
        RDTO: '21.12',
        HUMEDAD: '49.12',
        ACIDEZ: '0.25',
        TICKET: '886'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1033.0',
        RDTO: '22.0',
        HUMEDAD: '50.26',
        ACIDEZ: '0.27',
        TICKET: '887'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '279.0',
        RDTO: '14.47',
        HUMEDAD: '54.66',
        ACIDEZ: '0.22',
        TICKET: '888'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '786.0',
        RDTO: '21.54',
        HUMEDAD: '48.57',
        ACIDEZ: '0.2',
        TICKET: '889'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2017.0',
        RDTO: '20.7',
        HUMEDAD: '50.94',
        ACIDEZ: '0.23',
        TICKET: '890'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '419.0',
        RDTO: '21.76',
        HUMEDAD: '50.84',
        ACIDEZ: '0.22',
        TICKET: '891'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '744.0',
        RDTO: '21.95',
        HUMEDAD: '48.49',
        ACIDEZ: '0.18',
        TICKET: '892'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '911.0',
        RDTO: '18.64',
        HUMEDAD: '50.23',
        ACIDEZ: '0.24',
        TICKET: '893'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '871.0',
        RDTO: '18.91',
        HUMEDAD: '51.74',
        ACIDEZ: '0.22',
        TICKET: '894'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '710.0',
        RDTO: '19.18',
        HUMEDAD: '52.69',
        ACIDEZ: '0.2',
        TICKET: '895'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1885.0',
        RDTO: '19.44',
        HUMEDAD: '51.03',
        ACIDEZ: '0.21',
        TICKET: '896'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1885.0',
        RDTO: '19.44',
        HUMEDAD: '51.03',
        ACIDEZ: '0.21',
        TICKET: '897'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3585.0',
        RDTO: '21.54',
        HUMEDAD: '49.66',
        ACIDEZ: '0.18',
        TICKET: '898'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '981.0',
        RDTO: '15.62',
        HUMEDAD: '48.91',
        ACIDEZ: '0.18',
        TICKET: '899'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '119.0',
        RDTO: '21.72',
        HUMEDAD: '49.05',
        ACIDEZ: '0.16',
        TICKET: '900'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1346.0',
        RDTO: '20.5',
        HUMEDAD: '48.57',
        ACIDEZ: '0.17',
        TICKET: '901'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2051.0',
        RDTO: '22.7',
        HUMEDAD: '49.07',
        ACIDEZ: '0.18',
        TICKET: '902'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2258.0',
        RDTO: '20.04',
        HUMEDAD: '49.21',
        ACIDEZ: '0.15',
        TICKET: '903'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5290.0',
        RDTO: '18.01',
        HUMEDAD: '53.03',
        ACIDEZ: '0.21',
        TICKET: '904'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3427.0',
        RDTO: '16.83',
        HUMEDAD: '51.6',
        ACIDEZ: '0.18',
        TICKET: '905'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4055.0',
        RDTO: '21.93',
        HUMEDAD: '46.53',
        ACIDEZ: '0.2',
        TICKET: '906'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1091.0',
        RDTO: '20.92',
        HUMEDAD: '48.11',
        ACIDEZ: '0.32',
        TICKET: '907'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '728.0',
        RDTO: '19.12',
        HUMEDAD: '51.65',
        ACIDEZ: '0.26',
        TICKET: '908'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6548.0',
        RDTO: '19.12',
        HUMEDAD: '51.65',
        ACIDEZ: '0.26',
        TICKET: '909'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2783.0',
        RDTO: '17.89',
        HUMEDAD: '47.52',
        ACIDEZ: '0.11',
        TICKET: '910'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2381.0',
        RDTO: '19.79',
        HUMEDAD: '49.85',
        ACIDEZ: '0.15',
        TICKET: '911'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '7342.0',
        RDTO: '21.12',
        HUMEDAD: '48.09',
        ACIDEZ: '0.13',
        TICKET: '912'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3202.0',
        RDTO: '19.23',
        HUMEDAD: '52.93',
        ACIDEZ: '0.19',
        TICKET: '913'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1068.0',
        RDTO: '19.23',
        HUMEDAD: '52.93',
        ACIDEZ: '0.19',
        TICKET: '914'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5091.0',
        RDTO: '19.33',
        HUMEDAD: '51.8',
        ACIDEZ: '0.24',
        TICKET: '915'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3220.0',
        RDTO: '19.73',
        HUMEDAD: '52.73',
        ACIDEZ: '0.29',
        TICKET: '916'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '702.0',
        RDTO: '20.53',
        HUMEDAD: '49.06',
        ACIDEZ: '0.15',
        TICKET: '917'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4223.0',
        RDTO: '22.21',
        HUMEDAD: '49.52',
        ACIDEZ: '0.2',
        TICKET: '918'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2800.0',
        RDTO: '21.86',
        HUMEDAD: '46.79',
        ACIDEZ: '0.11',
        TICKET: '919'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3694.0',
        RDTO: '19.71',
        HUMEDAD: '53.02',
        ACIDEZ: '0.18',
        TICKET: '920'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '727.0',
        RDTO: '19.41',
        HUMEDAD: '49.6',
        ACIDEZ: '0.47',
        TICKET: '929'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '559.0',
        RDTO: '20.1',
        HUMEDAD: '49.15',
        ACIDEZ: '0.21',
        TICKET: '931'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '988.0',
        RDTO: '17.72',
        HUMEDAD: '51.29',
        ACIDEZ: '0.34',
        TICKET: '930'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '817.0',
        RDTO: '20.95',
        HUMEDAD: '48.29',
        ACIDEZ: '0.29',
        TICKET: '921'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '651.0',
        RDTO: '20.93',
        HUMEDAD: '47.56',
        ACIDEZ: '0.36',
        TICKET: '922'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '690.0',
        RDTO: '19.68',
        HUMEDAD: '48.35',
        ACIDEZ: '0.23',
        TICKET: '923'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '530.0',
        RDTO: '20.53',
        HUMEDAD: '50.82',
        ACIDEZ: '0.34',
        TICKET: '924'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '577.0',
        RDTO: '20.72',
        HUMEDAD: '48.68',
        ACIDEZ: '0.23',
        TICKET: '925'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1043.0',
        RDTO: '20.65',
        HUMEDAD: '50.28',
        ACIDEZ: '0.49',
        TICKET: '926'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '335.0',
        RDTO: '21.02',
        HUMEDAD: '49.55',
        ACIDEZ: '0.31',
        TICKET: '927'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3467.0',
        RDTO: '20.45',
        HUMEDAD: '50.23',
        ACIDEZ: '0.27',
        TICKET: '928'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '520.0',
        RDTO: '19.07',
        HUMEDAD: '51.6',
        ACIDEZ: '0.24',
        TICKET: '932'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1085.0',
        RDTO: '21.43',
        HUMEDAD: '48.97',
        ACIDEZ: '0.29',
        TICKET: '933'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '732.0',
        RDTO: '20.75',
        HUMEDAD: '49.11',
        ACIDEZ: '0.22',
        TICKET: '934'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1751.0',
        RDTO: '20.5',
        HUMEDAD: '51.08',
        ACIDEZ: '0.27',
        TICKET: '935'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '625.0',
        RDTO: '21.93',
        HUMEDAD: '47.79',
        ACIDEZ: '0.34',
        TICKET: '936'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1133.0',
        RDTO: '21.68',
        HUMEDAD: '49.75',
        ACIDEZ: '0.46',
        TICKET: '937'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '987.0',
        RDTO: '20.75',
        HUMEDAD: '49.5',
        ACIDEZ: '0.58',
        TICKET: '938'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '847.0',
        RDTO: '19.24',
        HUMEDAD: '52.92',
        ACIDEZ: '0.3',
        TICKET: '939'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2008.0',
        RDTO: '19.75',
        HUMEDAD: '49.95',
        ACIDEZ: '0.25',
        TICKET: '940'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2008.0',
        RDTO: '19.75',
        HUMEDAD: '49.95',
        ACIDEZ: '0.25',
        TICKET: '941'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1610.0',
        RDTO: '22.4',
        HUMEDAD: '48.18',
        ACIDEZ: '0.27',
        TICKET: '942'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '156.0',
        RDTO: '21.43',
        HUMEDAD: '49.77',
        ACIDEZ: '0.25',
        TICKET: '943'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '705.0',
        RDTO: '20.86',
        HUMEDAD: '49.91',
        ACIDEZ: '0.22',
        TICKET: '944'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1330.0',
        RDTO: '18.67',
        HUMEDAD: '51.25',
        ACIDEZ: '0.28',
        TICKET: '945'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '998.0',
        RDTO: '20.44',
        HUMEDAD: '51.01',
        ACIDEZ: '0.48',
        TICKET: '946'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3993.0',
        RDTO: '20.44',
        HUMEDAD: '51.01',
        ACIDEZ: '0.48',
        TICKET: '947'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3518.0',
        RDTO: '17.53',
        HUMEDAD: '50.71',
        ACIDEZ: '0.48',
        TICKET: '948'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3621.0',
        RDTO: '18.25',
        HUMEDAD: '50.3',
        ACIDEZ: '0.28',
        TICKET: '949'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2087.0',
        RDTO: '21.98',
        HUMEDAD: '48.81',
        ACIDEZ: '0.21',
        TICKET: '950'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4100.0',
        RDTO: '15.8',
        HUMEDAD: '53.98',
        ACIDEZ: '0.26',
        TICKET: '951'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '599.0',
        RDTO: '18.27',
        HUMEDAD: '50.25',
        ACIDEZ: '0.13',
        TICKET: '952'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '7489.0',
        RDTO: '21.52',
        HUMEDAD: '48.31',
        ACIDEZ: '0.2',
        TICKET: '953'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3869.0',
        RDTO: '21.78',
        HUMEDAD: '48.1',
        ACIDEZ: '0.23',
        TICKET: '954'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2563.0',
        RDTO: '19.51',
        HUMEDAD: '51.49',
        ACIDEZ: '0.26',
        TICKET: '955'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1963.0',
        RDTO: '19.87',
        HUMEDAD: '48.45',
        ACIDEZ: '0.07',
        TICKET: '956'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3775.0',
        RDTO: '21.8',
        HUMEDAD: '49.06',
        ACIDEZ: '0.11',
        TICKET: '957'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2514.0',
        RDTO: '16.27',
        HUMEDAD: '50.29',
        ACIDEZ: '0.18',
        TICKET: '958'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '780.0',
        RDTO: '19.65',
        HUMEDAD: '53.1',
        ACIDEZ: '0.31',
        TICKET: '959'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '7016.0',
        RDTO: '19.65',
        HUMEDAD: '53.1',
        ACIDEZ: '0.31',
        TICKET: '960'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3550.0',
        RDTO: '20.1',
        HUMEDAD: '51.96',
        ACIDEZ: '0.23',
        TICKET: '961'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1184.0',
        RDTO: '20.1',
        HUMEDAD: '51.96',
        ACIDEZ: '0.23',
        TICKET: '962'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3394.0',
        RDTO: '18.65',
        HUMEDAD: '53.12',
        ACIDEZ: '0.24',
        TICKET: '963'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '533.0',
        RDTO: '20.42',
        HUMEDAD: '50.36',
        ACIDEZ: '0.3',
        TICKET: '972'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6291.0',
        RDTO: '21.99',
        HUMEDAD: '48.51',
        ACIDEZ: '0.19',
        TICKET: '964'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '627.0',
        RDTO: '19.61',
        HUMEDAD: '48.99',
        ACIDEZ: '0.11',
        TICKET: '965'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5085.0',
        RDTO: '23.13',
        HUMEDAD: '49.76',
        ACIDEZ: '0.2',
        TICKET: '966'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4083.0',
        RDTO: '18.95',
        HUMEDAD: '56.8',
        ACIDEZ: '0.23',
        TICKET: '967'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4185.0',
        RDTO: '18.64',
        HUMEDAD: '50.53',
        ACIDEZ: '0.11',
        TICKET: '968'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1316.0',
        RDTO: '14.29',
        HUMEDAD: '53.84',
        ACIDEZ: '0.27',
        TICKET: '969'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '845.0',
        RDTO: '20.43',
        HUMEDAD: '47.8',
        ACIDEZ: '0.19',
        TICKET: '973'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '389.0',
        RDTO: '22.24',
        HUMEDAD: '49.31',
        ACIDEZ: '0.19',
        TICKET: '974'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5328.0',
        RDTO: '22.37',
        HUMEDAD: '49.95',
        ACIDEZ: '0.14',
        TICKET: '975'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '779.0',
        RDTO: '19.79',
        HUMEDAD: '49.48',
        ACIDEZ: '0.22',
        TICKET: '976'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '351.0',
        RDTO: '20.49',
        HUMEDAD: '48.86',
        ACIDEZ: '0.18',
        TICKET: '977'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '547.0',
        RDTO: '21.39',
        HUMEDAD: '48.48',
        ACIDEZ: '0.23',
        TICKET: '978'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1014.0',
        RDTO: '22.06',
        HUMEDAD: '49.28',
        ACIDEZ: '0.2',
        TICKET: '979'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1280.0',
        RDTO: '19.85',
        HUMEDAD: '50.95',
        ACIDEZ: '0.21',
        TICKET: '980'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '851.0',
        RDTO: '22.3',
        HUMEDAD: '47.34',
        ACIDEZ: '0.17',
        TICKET: '981'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '849.0',
        RDTO: '21.83',
        HUMEDAD: '47.12',
        ACIDEZ: '0.1',
        TICKET: '970'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2389.0',
        RDTO: '19.88',
        HUMEDAD: '47.87',
        ACIDEZ: '0.16',
        TICKET: '971'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1793.0',
        RDTO: '21.46',
        HUMEDAD: '47.99',
        ACIDEZ: '0.2',
        TICKET: '982'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '129.0',
        RDTO: '19.29',
        HUMEDAD: '49.26',
        ACIDEZ: '0.23',
        TICKET: '983'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3967.0',
        RDTO: '19.86',
        HUMEDAD: '48.97',
        ACIDEZ: '0.15',
        TICKET: '984'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '867.0',
        RDTO: '22.23',
        HUMEDAD: '47.55',
        ACIDEZ: '0.17',
        TICKET: '985'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '821.0',
        RDTO: '20.44',
        HUMEDAD: '51.7',
        ACIDEZ: '0.22',
        TICKET: '986'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2114.0',
        RDTO: '19.5',
        HUMEDAD: '50.25',
        ACIDEZ: '0.21',
        TICKET: '987'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2114.0',
        RDTO: '19.5',
        HUMEDAD: '50.25',
        ACIDEZ: '0.21',
        TICKET: '988'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '925.0',
        RDTO: '21.58',
        HUMEDAD: '48.98',
        ACIDEZ: '0.12',
        TICKET: '989'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3700.0',
        RDTO: '21.58',
        HUMEDAD: '48.98',
        ACIDEZ: '0.12',
        TICKET: '990'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1720.0',
        RDTO: '22.77',
        HUMEDAD: '47.3',
        ACIDEZ: '0.12',
        TICKET: '991'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1077.0',
        RDTO: '24.6',
        HUMEDAD: '46.24',
        ACIDEZ: '0.18',
        TICKET: '992'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1932.0',
        RDTO: '22.1',
        HUMEDAD: '49.62',
        ACIDEZ: '0.28',
        TICKET: '993'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1565.0',
        RDTO: '17.84',
        HUMEDAD: '48.71',
        ACIDEZ: '0.16',
        TICKET: '994'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1582.0',
        RDTO: '16.66',
        HUMEDAD: '50.2',
        ACIDEZ: '0.17',
        TICKET: '995'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6921.0',
        RDTO: '21.85',
        HUMEDAD: '46.85',
        ACIDEZ: '0.17',
        TICKET: '996'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2367.0',
        RDTO: '15.19',
        HUMEDAD: '54.04',
        ACIDEZ: '0.21',
        TICKET: '997'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4182.0',
        RDTO: '20.51',
        HUMEDAD: '46.1',
        ACIDEZ: '0.11',
        TICKET: '998'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '768.0',
        RDTO: '20.12',
        HUMEDAD: '51.96',
        ACIDEZ: '0.19',
        TICKET: '999'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6908.0',
        RDTO: '20.12',
        HUMEDAD: '51.96',
        ACIDEZ: '0.19',
        TICKET: '1000'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3422.0',
        RDTO: '19.34',
        HUMEDAD: '51.82',
        ACIDEZ: '0.21',
        TICKET: '1001'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1141.0',
        RDTO: '19.34',
        HUMEDAD: '51.82',
        ACIDEZ: '0.21',
        TICKET: '1002'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2559.0',
        RDTO: '22.86',
        HUMEDAD: '46.05',
        ACIDEZ: '0.15',
        TICKET: '1003'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3473.0',
        RDTO: '19.85',
        HUMEDAD: '51.07',
        ACIDEZ: '0.16',
        TICKET: '1004'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2207.0',
        RDTO: '21.12',
        HUMEDAD: '50.51',
        ACIDEZ: '0.15',
        TICKET: '1005'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2741.0',
        RDTO: '18.99',
        HUMEDAD: '49.17',
        ACIDEZ: '0.18',
        TICKET: '1006'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4562.0',
        RDTO: '22.95',
        HUMEDAD: '48.54',
        ACIDEZ: '0.16',
        TICKET: '1007'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '914.0',
        RDTO: '18.9',
        HUMEDAD: '53.85',
        ACIDEZ: '0.27',
        TICKET: '1008'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '8085.0',
        RDTO: '20.22',
        HUMEDAD: '49.14',
        ACIDEZ: '0.12',
        TICKET: '1009'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4365.0',
        RDTO: '21.42',
        HUMEDAD: '48.84',
        ACIDEZ: '0.08',
        TICKET: '1010'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '432.0',
        RDTO: '18.5',
        HUMEDAD: '48.76',
        ACIDEZ: '0.28',
        TICKET: '1011'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '9979.0',
        RDTO: '22.08',
        HUMEDAD: '50.3',
        ACIDEZ: '0.14',
        TICKET: '1012'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '852.0',
        RDTO: '18.05',
        HUMEDAD: '53.64',
        ACIDEZ: '0.2',
        TICKET: '1013'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5126.0',
        RDTO: '20.36',
        HUMEDAD: '52.99',
        ACIDEZ: '0.19',
        TICKET: '1014'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4391.0',
        RDTO: '19.25',
        HUMEDAD: '55.02',
        ACIDEZ: '0.19',
        TICKET: '1015'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '750.0',
        RDTO: '21.08',
        HUMEDAD: '49.45',
        ACIDEZ: '0.21',
        TICKET: '1016'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '447.0',
        RDTO: '22.28',
        HUMEDAD: '46.4',
        ACIDEZ: '0.21',
        TICKET: '1017'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '433.0',
        RDTO: '19.93',
        HUMEDAD: '51.0',
        ACIDEZ: '0.25',
        TICKET: '1018'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '328.0',
        RDTO: '20.28',
        HUMEDAD: '49.15',
        ACIDEZ: '0.25',
        TICKET: '1019'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '444.0',
        RDTO: '20.56',
        HUMEDAD: '48.08',
        ACIDEZ: '0.25',
        TICKET: '1020'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '934.0',
        RDTO: '21.85',
        HUMEDAD: '46.86',
        ACIDEZ: '0.25',
        TICKET: '1021'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '364.0',
        RDTO: '19.43',
        HUMEDAD: '53.5',
        ACIDEZ: '0.35',
        TICKET: '1022'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6091.0',
        RDTO: '22.36',
        HUMEDAD: '49.31',
        ACIDEZ: '0.2',
        TICKET: '1023'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2018.0',
        RDTO: '20.48',
        HUMEDAD: '49.36',
        ACIDEZ: '0.2',
        TICKET: '1024'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '515.0',
        RDTO: '20.97',
        HUMEDAD: '46.55',
        ACIDEZ: '0.19',
        TICKET: '1025'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '416.0',
        RDTO: '21.14',
        HUMEDAD: '48.86',
        ACIDEZ: '0.15',
        TICKET: '1026'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '697.0',
        RDTO: '18.78',
        HUMEDAD: '47.71',
        ACIDEZ: '0.19',
        TICKET: '1027'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '682.0',
        RDTO: '21.93',
        HUMEDAD: '45.59',
        ACIDEZ: '0.21',
        TICKET: '1028'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1127.0',
        RDTO: '21.77',
        HUMEDAD: '48.73',
        ACIDEZ: '0.2',
        TICKET: '1029'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1681.0',
        RDTO: '19.0',
        HUMEDAD: '47.53',
        ACIDEZ: '0.13',
        TICKET: '1030'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2488.0',
        RDTO: '15.38',
        HUMEDAD: '54.86',
        ACIDEZ: '0.21',
        TICKET: '1031'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '878.0',
        RDTO: '22.13',
        HUMEDAD: '47.48',
        ACIDEZ: '0.2',
        TICKET: '1032'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1218.0',
        RDTO: '20.73',
        HUMEDAD: '49.53',
        ACIDEZ: '0.21',
        TICKET: '1033'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '852.0',
        RDTO: '18.54',
        HUMEDAD: '52.36',
        ACIDEZ: '0.24',
        TICKET: '1034'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '201.0',
        RDTO: '20.29',
        HUMEDAD: '52.57',
        ACIDEZ: '0.35',
        TICKET: '1035'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1172.0',
        RDTO: '23.23',
        HUMEDAD: '48.22',
        ACIDEZ: '0.23',
        TICKET: '1036'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '606.0',
        RDTO: '21.7',
        HUMEDAD: '48.88',
        ACIDEZ: '0.25',
        TICKET: '1037'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '785.0',
        RDTO: '19.07',
        HUMEDAD: '53.83',
        ACIDEZ: '0.41',
        TICKET: '1038'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2531.0',
        RDTO: '18.63',
        HUMEDAD: '49.12',
        ACIDEZ: '0.16',
        TICKET: '1039'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4220.0',
        RDTO: '22.27',
        HUMEDAD: '45.46',
        ACIDEZ: '0.18',
        TICKET: '1040'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '830.0',
        RDTO: '23.67',
        HUMEDAD: '44.78',
        ACIDEZ: '0.16',
        TICKET: '1041'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1459.0',
        RDTO: '21.67',
        HUMEDAD: '45.82',
        ACIDEZ: '0.2',
        TICKET: '1042'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '258.0',
        RDTO: '22.17',
        HUMEDAD: '44.74',
        ACIDEZ: '0.29',
        TICKET: '1043'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2334.0',
        RDTO: '19.63',
        HUMEDAD: '50.07',
        ACIDEZ: '0.24',
        TICKET: '1044'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2334.0',
        RDTO: '19.63',
        HUMEDAD: '50.07',
        ACIDEZ: '0.24',
        TICKET: '1045'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1968.0',
        RDTO: '20.51',
        HUMEDAD: '49.75',
        ACIDEZ: '0.24',
        TICKET: '1046'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '793.0',
        RDTO: '19.08',
        HUMEDAD: '52.88',
        ACIDEZ: '0.2',
        TICKET: '1047'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1021.0',
        RDTO: '21.09',
        HUMEDAD: '49.16',
        ACIDEZ: '0.19',
        TICKET: '1048'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4085.0',
        RDTO: '21.09',
        HUMEDAD: '49.16',
        ACIDEZ: '0.19',
        TICKET: '1049'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2066.0',
        RDTO: '20.26',
        HUMEDAD: '46.95',
        ACIDEZ: '0.17',
        TICKET: '1050'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3389.0',
        RDTO: '22.31',
        HUMEDAD: '49.91',
        ACIDEZ: '0.16',
        TICKET: '1051'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3817.0',
        RDTO: '19.52',
        HUMEDAD: '53.45',
        ACIDEZ: '0.18',
        TICKET: '1066'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6170.0',
        RDTO: '20.47',
        HUMEDAD: '51.71',
        ACIDEZ: '0.17',
        TICKET: '1067'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '351.0',
        RDTO: '18.81',
        HUMEDAD: '47.94',
        ACIDEZ: '0.05',
        TICKET: '1068'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6132.0',
        RDTO: '19.35',
        HUMEDAD: '45.92',
        ACIDEZ: '0.17',
        TICKET: '1052'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3771.0',
        RDTO: '21.59',
        HUMEDAD: '45.74',
        ACIDEZ: '0.18',
        TICKET: '1053'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '871.0',
        RDTO: '20.0',
        HUMEDAD: '51.69',
        ACIDEZ: '0.22',
        TICKET: '1054'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '7842.0',
        RDTO: '20.0',
        HUMEDAD: '51.69',
        ACIDEZ: '0.22',
        TICKET: '1055'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2227.0',
        RDTO: '21.64',
        HUMEDAD: '50.37',
        ACIDEZ: '0.33',
        TICKET: '1056'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3309.0',
        RDTO: '17.87',
        HUMEDAD: '52.4',
        ACIDEZ: '0.21',
        TICKET: '1057'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1103.0',
        RDTO: '17.87',
        HUMEDAD: '52.4',
        ACIDEZ: '0.21',
        TICKET: '1058'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3492.0',
        RDTO: '17.78',
        HUMEDAD: '48.63',
        ACIDEZ: '0.18',
        TICKET: '1059'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6394.0',
        RDTO: '21.8',
        HUMEDAD: '49.03',
        ACIDEZ: '0.13',
        TICKET: '1060'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '8358.0',
        RDTO: '20.41',
        HUMEDAD: '48.87',
        ACIDEZ: '0.17',
        TICKET: '1061'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '473.0',
        RDTO: '21.23',
        HUMEDAD: '47.61',
        ACIDEZ: '0.26',
        TICKET: '1121'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '852.0',
        RDTO: '21.23',
        HUMEDAD: '47.69',
        ACIDEZ: '0.29',
        TICKET: '1122'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1131.0',
        RDTO: '20.68',
        HUMEDAD: '47.89',
        ACIDEZ: '0.32',
        TICKET: '1123'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '465.0',
        RDTO: '21.83',
        HUMEDAD: '45.15',
        ACIDEZ: '0.26',
        TICKET: '1124'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '471.0',
        RDTO: '18.21',
        HUMEDAD: '50.41',
        ACIDEZ: '0.38',
        TICKET: '1125'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1925.0',
        RDTO: '19.74',
        HUMEDAD: '46.98',
        ACIDEZ: '0.14',
        TICKET: '1062'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '9962.0',
        RDTO: '22.58',
        HUMEDAD: '49.86',
        ACIDEZ: '0.12',
        TICKET: '1063'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1292.0',
        RDTO: '23.62',
        HUMEDAD: '45.86',
        ACIDEZ: '0.16',
        TICKET: '1064'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '493.0',
        RDTO: '20.49',
        HUMEDAD: '47.34',
        ACIDEZ: '0.16',
        TICKET: '1065'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '98.0',
        RDTO: '19.05',
        HUMEDAD: '46.94',
        ACIDEZ: '0.23',
        TICKET: '1126'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1689.0',
        RDTO: '21.7',
        HUMEDAD: '47.98',
        ACIDEZ: '0.27',
        TICKET: '1153'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1314.0',
        RDTO: '21.69',
        HUMEDAD: '46.18',
        ACIDEZ: '0.3',
        TICKET: '1127'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '774.0',
        RDTO: '22.9',
        HUMEDAD: '47.01',
        ACIDEZ: '0.12',
        TICKET: '1069'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1708.0',
        RDTO: '20.21',
        HUMEDAD: '50.97',
        ACIDEZ: '0.32',
        TICKET: '1070'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '337.0',
        RDTO: '19.51',
        HUMEDAD: '50.25',
        ACIDEZ: '0.23',
        TICKET: '1071'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '531.0',
        RDTO: '23.29',
        HUMEDAD: '44.79',
        ACIDEZ: '0.11',
        TICKET: '1072'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '594.0',
        RDTO: '22.76',
        HUMEDAD: '46.14',
        ACIDEZ: '0.22',
        TICKET: '1073'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '373.0',
        RDTO: '23.72',
        HUMEDAD: '46.29',
        ACIDEZ: '0.13',
        TICKET: '1074'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1554.0',
        RDTO: '19.37',
        HUMEDAD: '46.85',
        ACIDEZ: '0.13',
        TICKET: '1075'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '310.0',
        RDTO: '19.02',
        HUMEDAD: '53.24',
        ACIDEZ: '0.35',
        TICKET: '1076'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '494.0',
        RDTO: '20.38',
        HUMEDAD: '46.74',
        ACIDEZ: '0.21',
        TICKET: '1077'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '793.0',
        RDTO: '21.4',
        HUMEDAD: '50.12',
        ACIDEZ: '0.28',
        TICKET: '1078'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '451.0',
        RDTO: '23.02',
        HUMEDAD: '46.18',
        ACIDEZ: '0.16',
        TICKET: '1079'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6103.0',
        RDTO: '21.91',
        HUMEDAD: '49.05',
        ACIDEZ: '0.24',
        TICKET: '1080'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '456.0',
        RDTO: '21.25',
        HUMEDAD: '45.89',
        ACIDEZ: '0.18',
        TICKET: '1081'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '843.0',
        RDTO: '23.01',
        HUMEDAD: '46.83',
        ACIDEZ: '0.17',
        TICKET: '1082'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '310.0',
        RDTO: '21.77',
        HUMEDAD: '46.48',
        ACIDEZ: '0.17',
        TICKET: '1083'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1413.0',
        RDTO: '19.69',
        HUMEDAD: '50.74',
        ACIDEZ: '0.46',
        TICKET: '1084'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1171.0',
        RDTO: '22.31',
        HUMEDAD: '48.05',
        ACIDEZ: '0.17',
        TICKET: '1085'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '298.0',
        RDTO: '23.09',
        HUMEDAD: '44.58',
        ACIDEZ: '0.22',
        TICKET: '1086'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1440.0',
        RDTO: '20.55',
        HUMEDAD: '48.1',
        ACIDEZ: '0.27',
        TICKET: '1087'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '622.0',
        RDTO: '22.27',
        HUMEDAD: '46.37',
        ACIDEZ: '0.18',
        TICKET: '1088'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '404.0',
        RDTO: '21.15',
        HUMEDAD: '51.22',
        ACIDEZ: '0.31',
        TICKET: '1089'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1454.0',
        RDTO: '23.49',
        HUMEDAD: '46.29',
        ACIDEZ: '0.18',
        TICKET: '1090'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1435.0',
        RDTO: '22.9',
        HUMEDAD: '45.99',
        ACIDEZ: '0.18',
        TICKET: '1091'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '743.0',
        RDTO: '22.94',
        HUMEDAD: '47.83',
        ACIDEZ: '0.31',
        TICKET: '1092'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1071.0',
        RDTO: '22.57',
        HUMEDAD: '47.32',
        ACIDEZ: '0.31',
        TICKET: '1093'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1807.0',
        RDTO: '20.93',
        HUMEDAD: '46.67',
        ACIDEZ: '0.18',
        TICKET: '1094'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1095.0',
        RDTO: '18.59',
        HUMEDAD: '50.77',
        ACIDEZ: '0.35',
        TICKET: '1095'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3652.0',
        RDTO: '22.59',
        HUMEDAD: '45.39',
        ACIDEZ: '0.14',
        TICKET: '1096'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '992.0',
        RDTO: '22.15',
        HUMEDAD: '45.46',
        ACIDEZ: '0.23',
        TICKET: '1097'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2318.0',
        RDTO: '18.04',
        HUMEDAD: '48.49',
        ACIDEZ: '0.21',
        TICKET: '1098'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1091.0',
        RDTO: '21.87',
        HUMEDAD: '47.41',
        ACIDEZ: '0.19',
        TICKET: '1099'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6024.0',
        RDTO: '21.91',
        HUMEDAD: '46.35',
        ACIDEZ: '0.23',
        TICKET: '1100'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2365.0',
        RDTO: '21.46',
        HUMEDAD: '49.85',
        ACIDEZ: '0.17',
        TICKET: '1101'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4144.0',
        RDTO: '20.72',
        HUMEDAD: '46.57',
        ACIDEZ: '0.2',
        TICKET: '1102'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '656.0',
        RDTO: '20.32',
        HUMEDAD: '51.97',
        ACIDEZ: '0.4',
        TICKET: '1103'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5900.0',
        RDTO: '20.32',
        HUMEDAD: '51.97',
        ACIDEZ: '0.4',
        TICKET: '1104'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2610.0',
        RDTO: '20.3',
        HUMEDAD: '50.79',
        ACIDEZ: '0.3',
        TICKET: '1105'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3483.0',
        RDTO: '15.88',
        HUMEDAD: '51.3',
        ACIDEZ: '0.24',
        TICKET: '1106'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4074.0',
        RDTO: '19.22',
        HUMEDAD: '53.12',
        ACIDEZ: '0.23',
        TICKET: '1107'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1358.0',
        RDTO: '19.22',
        HUMEDAD: '53.12',
        ACIDEZ: '0.23',
        TICKET: '1108'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2838.0',
        RDTO: '20.77',
        HUMEDAD: '48.37',
        ACIDEZ: '0.18',
        TICKET: '1109'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2838.0',
        RDTO: '20.77',
        HUMEDAD: '48.37',
        ACIDEZ: '0.18',
        TICKET: '1110'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5020.0',
        RDTO: '22.13',
        HUMEDAD: '48.86',
        ACIDEZ: '0.11',
        TICKET: '1111'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4983.0',
        RDTO: '22.89',
        HUMEDAD: '44.72',
        ACIDEZ: '0.16',
        TICKET: '1112'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '605.0',
        RDTO: '22.07',
        HUMEDAD: '45.34',
        ACIDEZ: '0.17',
        TICKET: '1113'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '10057.0',
        RDTO: '19.37',
        HUMEDAD: '50.62',
        ACIDEZ: '0.21',
        TICKET: '1114'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '9952.0',
        RDTO: '19.71',
        HUMEDAD: '52.8',
        ACIDEZ: '0.21',
        TICKET: '1115'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '9493.0',
        RDTO: '20.03',
        HUMEDAD: '50.97',
        ACIDEZ: '0.29',
        TICKET: '1116'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2373.0',
        RDTO: '20.03',
        HUMEDAD: '50.97',
        ACIDEZ: '0.29',
        TICKET: '1117'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3926.0',
        RDTO: '18.99',
        HUMEDAD: '53.33',
        ACIDEZ: '0.11',
        TICKET: '1118'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '493.0',
        RDTO: '22.76',
        HUMEDAD: '48.47',
        ACIDEZ: '0.24',
        TICKET: '1119'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '11326.0',
        RDTO: '20.8',
        HUMEDAD: '49.06',
        ACIDEZ: '0.18',
        TICKET: '1120'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1013.0',
        RDTO: '21.66',
        HUMEDAD: '46.24',
        ACIDEZ: '0.25',
        TICKET: '1128'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2028.0',
        RDTO: '23.52',
        HUMEDAD: '47.67',
        ACIDEZ: '0.48',
        TICKET: '1129'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '251.0',
        RDTO: '19.94',
        HUMEDAD: '50.16',
        ACIDEZ: '0.28',
        TICKET: '1130'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '934.0',
        RDTO: '21.41',
        HUMEDAD: '46.53',
        ACIDEZ: '0.35',
        TICKET: '1131'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1288.0',
        RDTO: '22.03',
        HUMEDAD: '45.38',
        ACIDEZ: '0.31',
        TICKET: '1132'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1580.0',
        RDTO: '21.96',
        HUMEDAD: '46.74',
        ACIDEZ: '0.35',
        TICKET: '1133'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1315.0',
        RDTO: '18.06',
        HUMEDAD: '50.86',
        ACIDEZ: '0.35',
        TICKET: '1134'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '510.0',
        RDTO: '20.52',
        HUMEDAD: '45.54',
        ACIDEZ: '0.29',
        TICKET: '1135'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '527.0',
        RDTO: '20.93',
        HUMEDAD: '46.17',
        ACIDEZ: '0.23',
        TICKET: '1136'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5860.0',
        RDTO: '21.28',
        HUMEDAD: '47.46',
        ACIDEZ: '0.37',
        TICKET: '1137'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '526.0',
        RDTO: '21.68',
        HUMEDAD: '44.77',
        ACIDEZ: '0.27',
        TICKET: '1138'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1957.0',
        RDTO: '20.97',
        HUMEDAD: '48.22',
        ACIDEZ: '0.4',
        TICKET: '1139'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1488.0',
        RDTO: '20.86',
        HUMEDAD: '46.14',
        ACIDEZ: '0.33',
        TICKET: '1140'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3692.0',
        RDTO: '20.37',
        HUMEDAD: '50.31',
        ACIDEZ: '0.29',
        TICKET: '1141'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3920.0',
        RDTO: '21.46',
        HUMEDAD: '45.88',
        ACIDEZ: '0.22',
        TICKET: '1142'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4335.0',
        RDTO: '21.66',
        HUMEDAD: '46.14',
        ACIDEZ: '0.29',
        TICKET: '1143'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '766.0',
        RDTO: '22.23',
        HUMEDAD: '44.96',
        ACIDEZ: '0.26',
        TICKET: '1144'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1116.0',
        RDTO: '21.9',
        HUMEDAD: '46.86',
        ACIDEZ: '0.25',
        TICKET: '1145'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1483.0',
        RDTO: '21.55',
        HUMEDAD: '46.49',
        ACIDEZ: '0.3',
        TICKET: '1146'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1137.0',
        RDTO: '15.93',
        HUMEDAD: '48.3',
        ACIDEZ: '0.25',
        TICKET: '1147'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '699.0',
        RDTO: '17.72',
        HUMEDAD: '51.36',
        ACIDEZ: '0.26',
        TICKET: '1148'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3918.0',
        RDTO: '19.74',
        HUMEDAD: '46.2',
        ACIDEZ: '0.26',
        TICKET: '1149'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '544.0',
        RDTO: '15.23',
        HUMEDAD: '47.36',
        ACIDEZ: '0.18',
        TICKET: '1150'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '991.0',
        RDTO: '23.21',
        HUMEDAD: '44.54',
        ACIDEZ: '0.35',
        TICKET: '1151'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2209.0',
        RDTO: '21.64',
        HUMEDAD: '44.36',
        ACIDEZ: '0.18',
        TICKET: '1152'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4468.0',
        RDTO: '23.18',
        HUMEDAD: '44.17',
        ACIDEZ: '0.28',
        TICKET: '1154'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4573.0',
        RDTO: '20.27',
        HUMEDAD: '45.64',
        ACIDEZ: '0.26',
        TICKET: '1155'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2793.0',
        RDTO: '21.16',
        HUMEDAD: '48.39',
        ACIDEZ: '0.27',
        TICKET: '1159'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5366.0',
        RDTO: '23.65',
        HUMEDAD: '44.7',
        ACIDEZ: '0.27',
        TICKET: '1156'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '693.0',
        RDTO: '19.71',
        HUMEDAD: '49.85',
        ACIDEZ: '0.27',
        TICKET: '1157'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6239.0',
        RDTO: '19.71',
        HUMEDAD: '49.85',
        ACIDEZ: '0.27',
        TICKET: '1158'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3895.0',
        RDTO: '19.09',
        HUMEDAD: '46.62',
        ACIDEZ: '0.23',
        TICKET: '1160'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2021.0',
        RDTO: '22.37',
        HUMEDAD: '47.46',
        ACIDEZ: '0.27',
        TICKET: '1161'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '674.0',
        RDTO: '22.37',
        HUMEDAD: '47.46',
        ACIDEZ: '0.27',
        TICKET: '1162'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '446.0',
        RDTO: '22.32',
        HUMEDAD: '45.79',
        ACIDEZ: '0.38',
        TICKET: '1163'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '7813.0',
        RDTO: '22.61',
        HUMEDAD: '46.81',
        ACIDEZ: '0.28',
        TICKET: '1164'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1206.0',
        RDTO: '21.17',
        HUMEDAD: '45.17',
        ACIDEZ: '0.26',
        TICKET: '1165'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '7524.0',
        RDTO: '22.18',
        HUMEDAD: '47.26',
        ACIDEZ: '0.26',
        TICKET: '1166'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5602.0',
        RDTO: '23.2',
        HUMEDAD: '46.17',
        ACIDEZ: '0.28',
        TICKET: '1167'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '7520.0',
        RDTO: '21.5',
        HUMEDAD: '48.06',
        ACIDEZ: '0.26',
        TICKET: '1168'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1975.0',
        RDTO: '21.58',
        HUMEDAD: '46.9',
        ACIDEZ: '0.26',
        TICKET: '1169'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1229.0',
        RDTO: '18.91',
        HUMEDAD: '50.04',
        ACIDEZ: '0.37',
        TICKET: '1170'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '8985.0',
        RDTO: '21.97',
        HUMEDAD: '47.67',
        ACIDEZ: '0.31',
        TICKET: '1171'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '527.0',
        RDTO: '22.54',
        HUMEDAD: '49.0',
        ACIDEZ: '0.37',
        TICKET: '1172'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2097.0',
        RDTO: '19.78',
        HUMEDAD: '51.56',
        ACIDEZ: '0.27',
        TICKET: '1173'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '300.0',
        RDTO: '23.4',
        HUMEDAD: '47.51',
        ACIDEZ: '0.57',
        TICKET: '1174'
    },
    {
        DIA: '26',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6454.0',
        RDTO: '20.41',
        HUMEDAD: '52.4',
        ACIDEZ: '0.36',
        TICKET: '1175'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '594.0',
        RDTO: '23.21',
        HUMEDAD: '44.73',
        ACIDEZ: '0.28',
        TICKET: '1176'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1382.0',
        RDTO: '18.97',
        HUMEDAD: '45.56',
        ACIDEZ: '0.25',
        TICKET: '1177'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '362.0',
        RDTO: '23.36',
        HUMEDAD: '47.07',
        ACIDEZ: '0.33',
        TICKET: '1178'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1155.0',
        RDTO: '18.36',
        HUMEDAD: '50.44',
        ACIDEZ: '0.27',
        TICKET: '1179'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1088.0',
        RDTO: '20.84',
        HUMEDAD: '45.48',
        ACIDEZ: '0.3',
        TICKET: '1180'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3175.0',
        RDTO: '22.29',
        HUMEDAD: '47.61',
        ACIDEZ: '0.27',
        TICKET: '1181'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6685.0',
        RDTO: '22.14',
        HUMEDAD: '46.98',
        ACIDEZ: '0.42',
        TICKET: '1182'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '500.0',
        RDTO: '23.22',
        HUMEDAD: '44.21',
        ACIDEZ: '0.34',
        TICKET: '1183'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '210.0',
        RDTO: '22.76',
        HUMEDAD: '45.53',
        ACIDEZ: '0.3',
        TICKET: '1184'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1074.0',
        RDTO: '22.15',
        HUMEDAD: '46.32',
        ACIDEZ: '0.28',
        TICKET: '1185'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '860.0',
        RDTO: '19.3',
        HUMEDAD: '49.89',
        ACIDEZ: '0.31',
        TICKET: '1186'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '696.0',
        RDTO: '23.15',
        HUMEDAD: '45.43',
        ACIDEZ: '0.28',
        TICKET: '1187'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1058.0',
        RDTO: '19.24',
        HUMEDAD: '47.81',
        ACIDEZ: '0.27',
        TICKET: '1188'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1015.0',
        RDTO: '23.45',
        HUMEDAD: '45.5',
        ACIDEZ: '0.26',
        TICKET: '1189'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1867.0',
        RDTO: '22.28',
        HUMEDAD: '46.76',
        ACIDEZ: '0.31',
        TICKET: '1190'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '820.0',
        RDTO: '21.66',
        HUMEDAD: '47.7',
        ACIDEZ: '0.29',
        TICKET: '1191'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2008.0',
        RDTO: '21.67',
        HUMEDAD: '45.61',
        ACIDEZ: '0.38',
        TICKET: '1192'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5514.0',
        RDTO: '22.17',
        HUMEDAD: '46.41',
        ACIDEZ: '0.33',
        TICKET: '1193'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3882.0',
        RDTO: '24.66',
        HUMEDAD: '44.48',
        ACIDEZ: '0.26',
        TICKET: '1194'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1432.0',
        RDTO: '20.83',
        HUMEDAD: '48.09',
        ACIDEZ: '0.27',
        TICKET: '1195'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '477.0',
        RDTO: '20.83',
        HUMEDAD: '48.09',
        ACIDEZ: '0.27',
        TICKET: '1196'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '550.0',
        RDTO: '22.77',
        HUMEDAD: '45.69',
        ACIDEZ: '0.4',
        TICKET: '1197'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1940.0',
        RDTO: '22.35',
        HUMEDAD: '44.53',
        ACIDEZ: '0.25',
        TICKET: '1198'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4917.0',
        RDTO: '20.79',
        HUMEDAD: '45.11',
        ACIDEZ: '0.26',
        TICKET: '1199'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1345.0',
        RDTO: '19.86',
        HUMEDAD: '45.74',
        ACIDEZ: '0.26',
        TICKET: '1200'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1681.0',
        RDTO: '17.91',
        HUMEDAD: '47.09',
        ACIDEZ: '0.26',
        TICKET: '1201'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '7961.0',
        RDTO: '20.12',
        HUMEDAD: '47.78',
        ACIDEZ: '0.29',
        TICKET: '1207'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2238.0',
        RDTO: '21.66',
        HUMEDAD: '46.03',
        ACIDEZ: '0.26',
        TICKET: '1202'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3456.0',
        RDTO: '19.33',
        HUMEDAD: '46.41',
        ACIDEZ: '0.26',
        TICKET: '1203'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1057.0',
        RDTO: '18.63',
        HUMEDAD: '45.64',
        ACIDEZ: '0.19',
        TICKET: '1218'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '8195.0',
        RDTO: '20.35',
        HUMEDAD: '48.27',
        ACIDEZ: '0.32',
        TICKET: '1204'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4556.0',
        RDTO: '21.19',
        HUMEDAD: '46.65',
        ACIDEZ: '0.31',
        TICKET: '1205'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6499.0',
        RDTO: '22.85',
        HUMEDAD: '46.14',
        ACIDEZ: '0.26',
        TICKET: '1206'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4691.0',
        RDTO: '14.87',
        HUMEDAD: '50.37',
        ACIDEZ: '0.26',
        TICKET: '1208'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5915.0',
        RDTO: '22.13',
        HUMEDAD: '46.69',
        ACIDEZ: '0.27',
        TICKET: '1209'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '8834.0',
        RDTO: '24.21',
        HUMEDAD: '45.6',
        ACIDEZ: '0.26',
        TICKET: '1210'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4598.0',
        RDTO: '23.35',
        HUMEDAD: '43.58',
        ACIDEZ: '0.26',
        TICKET: '1211'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3383.0',
        RDTO: '18.41',
        HUMEDAD: '51.53',
        ACIDEZ: '0.26',
        TICKET: '1212'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '657.0',
        RDTO: '18.96',
        HUMEDAD: '46.87',
        ACIDEZ: '0.11',
        TICKET: '1213'
    },
    {
        DIA: '27',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6947.0',
        RDTO: '21.2',
        HUMEDAD: '48.16',
        ACIDEZ: '0.23',
        TICKET: '1214'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '497.0',
        RDTO: '22.04',
        HUMEDAD: '44.63',
        ACIDEZ: '0.17',
        TICKET: '1219'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '782.0',
        RDTO: '21.27',
        HUMEDAD: '45.03',
        ACIDEZ: '0.18',
        TICKET: '1220'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '648.0',
        RDTO: '16.57',
        HUMEDAD: '46.41',
        ACIDEZ: '0.14',
        TICKET: '1221'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6784.0',
        RDTO: '23.99',
        HUMEDAD: '45.71',
        ACIDEZ: '0.16',
        TICKET: '1222'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '648.0',
        RDTO: '21.47',
        HUMEDAD: '45.26',
        ACIDEZ: '0.2',
        TICKET: '1223'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '715.0',
        RDTO: '19.58',
        HUMEDAD: '47.39',
        ACIDEZ: '0.15',
        TICKET: '1224'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '548.0',
        RDTO: '24.41',
        HUMEDAD: '45.7',
        ACIDEZ: '0.16',
        TICKET: '1225'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '243.0',
        RDTO: '21.61',
        HUMEDAD: '47.08',
        ACIDEZ: '0.22',
        TICKET: '1226'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1614.0',
        RDTO: '19.77',
        HUMEDAD: '47.29',
        ACIDEZ: '0.21',
        TICKET: '1227'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '861.0',
        RDTO: '19.71',
        HUMEDAD: '48.82',
        ACIDEZ: '0.25',
        TICKET: '1228'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '426.0',
        RDTO: '18.29',
        HUMEDAD: '46.57',
        ACIDEZ: '0.15',
        TICKET: '1229'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '891.0',
        RDTO: '22.15',
        HUMEDAD: '44.37',
        ACIDEZ: '0.19',
        TICKET: '1215'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '864.0',
        RDTO: '19.22',
        HUMEDAD: '50.3',
        ACIDEZ: '0.19',
        TICKET: '1216'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1000.0',
        RDTO: '18.74',
        HUMEDAD: '46.93',
        ACIDEZ: '0.16',
        TICKET: '1217'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '812.0',
        RDTO: '21.71',
        HUMEDAD: '44.9',
        ACIDEZ: '0.11',
        TICKET: '1230'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5786.0',
        RDTO: '21.82',
        HUMEDAD: '46.24',
        ACIDEZ: '0.17',
        TICKET: '1231'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1207.0',
        RDTO: '20.95',
        HUMEDAD: '46.72',
        ACIDEZ: '0.19',
        TICKET: '1232'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1957.0',
        RDTO: '22.08',
        HUMEDAD: '46.95',
        ACIDEZ: '0.21',
        TICKET: '1233'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '561.0',
        RDTO: '22.91',
        HUMEDAD: '43.64',
        ACIDEZ: '0.35',
        TICKET: '1234'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1826.0',
        RDTO: '23.02',
        HUMEDAD: '44.09',
        ACIDEZ: '0.19',
        TICKET: '1235'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4118.0',
        RDTO: '20.8',
        HUMEDAD: '45.39',
        ACIDEZ: '0.16',
        TICKET: '1236'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '8715.0',
        RDTO: '21.8',
        HUMEDAD: '46.18',
        ACIDEZ: '0.21',
        TICKET: '1237'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4641.0',
        RDTO: '21.76',
        HUMEDAD: '46.39',
        ACIDEZ: '0.18',
        TICKET: '1238'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1164.0',
        RDTO: '18.77',
        HUMEDAD: '47.08',
        ACIDEZ: '0.23',
        TICKET: '1239'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1892.0',
        RDTO: '21.07',
        HUMEDAD: '45.91',
        ACIDEZ: '0.16',
        TICKET: '1240'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2198.0',
        RDTO: '21.24',
        HUMEDAD: '46.82',
        ACIDEZ: '0.16',
        TICKET: '1241'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4478.0',
        RDTO: '21.77',
        HUMEDAD: '46.28',
        ACIDEZ: '0.17',
        TICKET: '1242'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3548.0',
        RDTO: '20.86',
        HUMEDAD: '49.17',
        ACIDEZ: '0.18',
        TICKET: '1243'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1762.0',
        RDTO: '21.49',
        HUMEDAD: '45.21',
        ACIDEZ: '0.15',
        TICKET: '1244'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3927.0',
        RDTO: '22.14',
        HUMEDAD: '44.9',
        ACIDEZ: '0.17',
        TICKET: '1245'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '9006.0',
        RDTO: '20.63',
        HUMEDAD: '47.04',
        ACIDEZ: '0.27',
        TICKET: '1246'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6240.0',
        RDTO: '22.47',
        HUMEDAD: '45.41',
        ACIDEZ: '0.15',
        TICKET: '1247'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6727.0',
        RDTO: '22.31',
        HUMEDAD: '46.68',
        ACIDEZ: '0.17',
        TICKET: '1248'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5085.0',
        RDTO: '18.0',
        HUMEDAD: '50.3',
        ACIDEZ: '0.17',
        TICKET: '1249'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1006.0',
        RDTO: '23.56',
        HUMEDAD: '45.39',
        ACIDEZ: '0.18',
        TICKET: '1250'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '8374.0',
        RDTO: '23.59',
        HUMEDAD: '47.13',
        ACIDEZ: '0.21',
        TICKET: '1251'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2667.0',
        RDTO: '22.89',
        HUMEDAD: '47.76',
        ACIDEZ: '0.21',
        TICKET: '1252'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '709.0',
        RDTO: '22.08',
        HUMEDAD: '44.58',
        ACIDEZ: '0.17',
        TICKET: '1253'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '421.0',
        RDTO: '22.76',
        HUMEDAD: '44.46',
        ACIDEZ: '0.2',
        TICKET: '1254'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3577.0',
        RDTO: '17.94',
        HUMEDAD: '48.99',
        ACIDEZ: '0.21',
        TICKET: '1256'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '721.0',
        RDTO: '22.78',
        HUMEDAD: '44.79',
        ACIDEZ: '0.25',
        TICKET: '1259'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '18620.0',
        RDTO: '20.67',
        HUMEDAD: '47.2',
        ACIDEZ: '0.21',
        TICKET: '1257'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '12950.0',
        RDTO: '19.34',
        HUMEDAD: '50.37',
        ACIDEZ: '0.23',
        TICKET: '1258'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '678.0',
        RDTO: '21.95',
        HUMEDAD: '45.6',
        ACIDEZ: '0.38',
        TICKET: '1260'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1104.0',
        RDTO: '22.7',
        HUMEDAD: '45.74',
        ACIDEZ: '0.29',
        TICKET: '1261'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2499.0',
        RDTO: '21.6',
        HUMEDAD: '47.56',
        ACIDEZ: '0.39',
        TICKET: '1262'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '201.0',
        RDTO: '19.63',
        HUMEDAD: '46.39',
        ACIDEZ: '0.18',
        TICKET: '1263'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4717.0',
        RDTO: '22.63',
        HUMEDAD: '48.01',
        ACIDEZ: '0.36',
        TICKET: '1264'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3263.0',
        RDTO: '21.39',
        HUMEDAD: '47.31',
        ACIDEZ: '0.2',
        TICKET: '1282'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3703.0',
        RDTO: '22.71',
        HUMEDAD: '47.1',
        ACIDEZ: '0.17',
        TICKET: '1283'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4797.0',
        RDTO: '23.23',
        HUMEDAD: '47.61',
        ACIDEZ: '0.3',
        TICKET: '1284'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '10506.0',
        RDTO: '21.26',
        HUMEDAD: '44.82',
        ACIDEZ: '0.17',
        TICKET: '1285'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4817.0',
        RDTO: '21.6',
        HUMEDAD: '47.46',
        ACIDEZ: '0.17',
        TICKET: '1286'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '8196.0',
        RDTO: '19.06',
        HUMEDAD: '50.17',
        ACIDEZ: '0.17',
        TICKET: '1287'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '478.0',
        RDTO: '21.28',
        HUMEDAD: '44.09',
        ACIDEZ: '0.2',
        TICKET: '1288'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '10702.0',
        RDTO: '20.48',
        HUMEDAD: '47.99',
        ACIDEZ: '0.21',
        TICKET: '1289'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1864.0',
        RDTO: '24.26',
        HUMEDAD: '45.9',
        ACIDEZ: '0.29',
        TICKET: '1265'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '531.0',
        RDTO: '23.15',
        HUMEDAD: '45.05',
        ACIDEZ: '0.32',
        TICKET: '1266'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '801.0',
        RDTO: '23.44',
        HUMEDAD: '45.16',
        ACIDEZ: '0.29',
        TICKET: '1267'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '733.0',
        RDTO: '20.71',
        HUMEDAD: '44.85',
        ACIDEZ: '0.29',
        TICKET: '1268'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1154.0',
        RDTO: '20.67',
        HUMEDAD: '46.77',
        ACIDEZ: '0.16',
        TICKET: '1269'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1132.0',
        RDTO: '24.7',
        HUMEDAD: '46.53',
        ACIDEZ: '0.25',
        TICKET: '1270'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '930.0',
        RDTO: '19.14',
        HUMEDAD: '47.75',
        ACIDEZ: '0.23',
        TICKET: '1271'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1760.0',
        RDTO: '22.07',
        HUMEDAD: '46.33',
        ACIDEZ: '0.15',
        TICKET: '1272'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1912.0',
        RDTO: '21.56',
        HUMEDAD: '47.99',
        ACIDEZ: '0.25',
        TICKET: '1273'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1428.0',
        RDTO: '21.39',
        HUMEDAD: '46.8',
        ACIDEZ: '0.35',
        TICKET: '1274'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '896.0',
        RDTO: '21.54',
        HUMEDAD: '46.78',
        ACIDEZ: '0.23',
        TICKET: '1275'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1680.0',
        RDTO: '22.7',
        HUMEDAD: '45.18',
        ACIDEZ: '0.18',
        TICKET: '1276'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '5047.0',
        RDTO: '21.48',
        HUMEDAD: '46.37',
        ACIDEZ: '0.25',
        TICKET: '1277'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2137.0',
        RDTO: '21.84',
        HUMEDAD: '47.64',
        ACIDEZ: '0.17',
        TICKET: '1278'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '999.0',
        RDTO: '22.79',
        HUMEDAD: '46.48',
        ACIDEZ: '0.2',
        TICKET: '1279'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3890.0',
        RDTO: '22.78',
        HUMEDAD: '45.61',
        ACIDEZ: '0.19',
        TICKET: '1280'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '7070.0',
        RDTO: '20.21',
        HUMEDAD: '44.67',
        ACIDEZ: '0.16',
        TICKET: '1281'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '6960.0',
        RDTO: '19.35',
        HUMEDAD: '51.71',
        ACIDEZ: '0.36',
        TICKET: '1334'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '724.0',
        RDTO: '21.72',
        HUMEDAD: '44.51',
        ACIDEZ: '0.15',
        TICKET: '1335'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '816.0',
        RDTO: '21.49',
        HUMEDAD: '45.9',
        ACIDEZ: '0.26',
        TICKET: '1336'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3140.0',
        RDTO: '22.3',
        HUMEDAD: '45.31',
        ACIDEZ: '0.16',
        TICKET: '1337'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '876.0',
        RDTO: '20.38',
        HUMEDAD: '46.87',
        ACIDEZ: '0.21',
        TICKET: '1338'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '805.0',
        RDTO: '17.99',
        HUMEDAD: '47.03',
        ACIDEZ: '0.31',
        TICKET: '1339'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '226.0',
        RDTO: '15.36',
        HUMEDAD: '49.5',
        ACIDEZ: '0.17',
        TICKET: '1340'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '298.0',
        RDTO: '22.97',
        HUMEDAD: '47.16',
        ACIDEZ: '0.18',
        TICKET: '1290'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1235.0',
        RDTO: '21.66',
        HUMEDAD: '46.82',
        ACIDEZ: '0.17',
        TICKET: '1291'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '875.0',
        RDTO: '21.03',
        HUMEDAD: '47.2',
        ACIDEZ: '0.24',
        TICKET: '1292'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '744.0',
        RDTO: '17.81',
        HUMEDAD: '48.4',
        ACIDEZ: '0.19',
        TICKET: '1293'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '448.0',
        RDTO: '20.9',
        HUMEDAD: '45.35',
        ACIDEZ: '0.2',
        TICKET: '1294'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4288.0',
        RDTO: '22.56',
        HUMEDAD: '47.53',
        ACIDEZ: '0.2',
        TICKET: '1295'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '940.0',
        RDTO: '22.3',
        HUMEDAD: '45.84',
        ACIDEZ: '0.16',
        TICKET: '1296'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '466.0',
        RDTO: '23.25',
        HUMEDAD: '46.82',
        ACIDEZ: '0.2',
        TICKET: '1297'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '880.0',
        RDTO: '19.86',
        HUMEDAD: '46.31',
        ACIDEZ: '0.3',
        TICKET: '1298'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2914.0',
        RDTO: '23.25',
        HUMEDAD: '46.46',
        ACIDEZ: '0.21',
        TICKET: '1299'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '487.0',
        RDTO: '22.07',
        HUMEDAD: '45.93',
        ACIDEZ: '0.16',
        TICKET: '1300'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1126.0',
        RDTO: '21.65',
        HUMEDAD: '47.82',
        ACIDEZ: '0.24',
        TICKET: '1301'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '282.0',
        RDTO: '21.65',
        HUMEDAD: '47.82',
        ACIDEZ: '0.24',
        TICKET: '1302'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '752.0',
        RDTO: '20.09',
        HUMEDAD: '48.83',
        ACIDEZ: '0.4',
        TICKET: '1303'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '584.0',
        RDTO: '21.65',
        HUMEDAD: '43.69',
        ACIDEZ: '0.13',
        TICKET: '1304'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '430.0',
        RDTO: '22.69',
        HUMEDAD: '44.78',
        ACIDEZ: '0.18',
        TICKET: '1305'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '804.0',
        RDTO: '23.74',
        HUMEDAD: '45.22',
        ACIDEZ: '0.16',
        TICKET: '1306'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1203.0',
        RDTO: '20.45',
        HUMEDAD: '46.88',
        ACIDEZ: '0.15',
        TICKET: '1307'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1954.0',
        RDTO: '21.99',
        HUMEDAD: '48.03',
        ACIDEZ: '0.25',
        TICKET: '1308'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '527.0',
        RDTO: '21.89',
        HUMEDAD: '48.81',
        ACIDEZ: '0.29',
        TICKET: '1309'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '654.0',
        RDTO: '19.01',
        HUMEDAD: '48.45',
        ACIDEZ: '0.16',
        TICKET: '1310'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1609.0',
        RDTO: '21.67',
        HUMEDAD: '47.03',
        ACIDEZ: '0.25',
        TICKET: '1311'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2024.0',
        RDTO: '21.32',
        HUMEDAD: '47.96',
        ACIDEZ: '0.17',
        TICKET: '1312'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3256.0',
        RDTO: '21.4',
        HUMEDAD: '47.2',
        ACIDEZ: '0.35',
        TICKET: '1313'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3921.0',
        RDTO: '23.03',
        HUMEDAD: '47.64',
        ACIDEZ: '0.27',
        TICKET: '1314'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4031.0',
        RDTO: '20.9',
        HUMEDAD: '48.01',
        ACIDEZ: '0.26',
        TICKET: '1315'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '942.0',
        RDTO: '17.79',
        HUMEDAD: '48.82',
        ACIDEZ: '0.32',
        TICKET: '1316'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2387.0',
        RDTO: '22.05',
        HUMEDAD: '47.86',
        ACIDEZ: '0.27',
        TICKET: '1317'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4092.0',
        RDTO: '24.72',
        HUMEDAD: '43.48',
        ACIDEZ: '0.27',
        TICKET: '1318'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '6339.0',
        RDTO: '20.98',
        HUMEDAD: '47.11',
        ACIDEZ: '0.24',
        TICKET: '1319'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '11725.0',
        RDTO: '19.6',
        HUMEDAD: '48.82',
        ACIDEZ: '0.36',
        TICKET: '1320'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '4164.0',
        RDTO: '20.77',
        HUMEDAD: '48.42',
        ACIDEZ: '0.27',
        TICKET: '1321'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '3990.0',
        RDTO: '20.97',
        HUMEDAD: '48.55',
        ACIDEZ: '0.27',
        TICKET: '1322'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5063.0',
        RDTO: '22.1',
        HUMEDAD: '43.85',
        ACIDEZ: '0.16',
        TICKET: '1341'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '7127.0',
        RDTO: '21.49',
        HUMEDAD: '46.66',
        ACIDEZ: '0.26',
        TICKET: '1323'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '7740.0',
        RDTO: '21.71',
        HUMEDAD: '47.94',
        ACIDEZ: '0.33',
        TICKET: '1324'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '485.0',
        RDTO: '19.87',
        HUMEDAD: '47.12',
        ACIDEZ: '0.36',
        TICKET: '1325'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '787.0',
        RDTO: '19.43',
        HUMEDAD: '47.76',
        ACIDEZ: '0.25',
        TICKET: '1326'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '7416.0',
        RDTO: '20.97',
        HUMEDAD: '48.06',
        ACIDEZ: '0.36',
        TICKET: '1327'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1854.0',
        RDTO: '20.97',
        HUMEDAD: '48.06',
        ACIDEZ: '0.36',
        TICKET: '1328'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '391.0',
        RDTO: '22.18',
        HUMEDAD: '45.32',
        ACIDEZ: '0.26',
        TICKET: '1329'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '1239.0',
        RDTO: '20.13',
        HUMEDAD: '46.27',
        ACIDEZ: '0.26',
        TICKET: '1330'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '240.0',
        RDTO: '20.87',
        HUMEDAD: '45.66',
        ACIDEZ: '0.26',
        TICKET: '1331'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '9264.0',
        RDTO: '22.36',
        HUMEDAD: '47.33',
        ACIDEZ: '0.26',
        TICKET: '1332'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2016',
        KGSACEITUNA: '2713.0',
        RDTO: '16.68',
        HUMEDAD: '50.66',
        ACIDEZ: '0.23',
        TICKET: '1333'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1554.0',
        RDTO: '24.35',
        HUMEDAD: '44.41',
        ACIDEZ: '0.17',
        TICKET: '1342'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1207.0',
        RDTO: '20.25',
        HUMEDAD: '47.97',
        ACIDEZ: '0.29',
        TICKET: '1343'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '835.0',
        RDTO: '19.66',
        HUMEDAD: '46.56',
        ACIDEZ: '0.15',
        TICKET: '1344'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '886.0',
        RDTO: '19.26',
        HUMEDAD: '46.01',
        ACIDEZ: '0.15',
        TICKET: '1345'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '578.0',
        RDTO: '20.14',
        HUMEDAD: '44.01',
        ACIDEZ: '0.13',
        TICKET: '1346'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '8915.0',
        RDTO: '21.38',
        HUMEDAD: '45.45',
        ACIDEZ: '0.2',
        TICKET: '1347'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3583.0',
        RDTO: '20.4',
        HUMEDAD: '44.21',
        ACIDEZ: '0.17',
        TICKET: '1348'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '660.0',
        RDTO: '24.76',
        HUMEDAD: '44.28',
        ACIDEZ: '0.31',
        TICKET: '1349'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '523.0',
        RDTO: '22.32',
        HUMEDAD: '48.47',
        ACIDEZ: '0.26',
        TICKET: '1350'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1523.0',
        RDTO: '16.87',
        HUMEDAD: '48.34',
        ACIDEZ: '0.15',
        TICKET: '1351'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '968.0',
        RDTO: '19.69',
        HUMEDAD: '47.37',
        ACIDEZ: '0.17',
        TICKET: '1352'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '899.0',
        RDTO: '19.46',
        HUMEDAD: '47.05',
        ACIDEZ: '0.16',
        TICKET: '1353'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2555.0',
        RDTO: '23.75',
        HUMEDAD: '44.82',
        ACIDEZ: '0.17',
        TICKET: '1354'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1390.0',
        RDTO: '22.93',
        HUMEDAD: '45.27',
        ACIDEZ: '0.22',
        TICKET: '1355'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1792.0',
        RDTO: '23.77',
        HUMEDAD: '47.0',
        ACIDEZ: '0.32',
        TICKET: '1356'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4675.0',
        RDTO: '22.38',
        HUMEDAD: '46.2',
        ACIDEZ: '0.22',
        TICKET: '1357'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1558.0',
        RDTO: '22.38',
        HUMEDAD: '46.2',
        ACIDEZ: '0.2',
        TICKET: '1358'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1812.0',
        RDTO: '22.05',
        HUMEDAD: '46.12',
        ACIDEZ: '0.17',
        TICKET: '1359'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1069.0',
        RDTO: '18.47',
        HUMEDAD: '45.54',
        ACIDEZ: '0.15',
        TICKET: '1360'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4719.0',
        RDTO: '22.23',
        HUMEDAD: '45.29',
        ACIDEZ: '0.23',
        TICKET: '1361'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4460.0',
        RDTO: '22.67',
        HUMEDAD: '44.64',
        ACIDEZ: '0.27',
        TICKET: '1362'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2022.0',
        RDTO: '21.54',
        HUMEDAD: '45.03',
        ACIDEZ: '0.16',
        TICKET: '1363'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5052.0',
        RDTO: '21.53',
        HUMEDAD: '47.76',
        ACIDEZ: '0.18',
        TICKET: '1364'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4993.0',
        RDTO: '22.44',
        HUMEDAD: '47.34',
        ACIDEZ: '0.27',
        TICKET: '1365'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4712.0',
        RDTO: '23.52',
        HUMEDAD: '46.76',
        ACIDEZ: '0.19',
        TICKET: '1366'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '11564.0',
        RDTO: '21.31',
        HUMEDAD: '46.94',
        ACIDEZ: '0.32',
        TICKET: '1367'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1640.0',
        RDTO: '17.76',
        HUMEDAD: '48.31',
        ACIDEZ: '0.16',
        TICKET: '1368'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4254.0',
        RDTO: '22.93',
        HUMEDAD: '45.78',
        ACIDEZ: '0.15',
        TICKET: '1369'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3745.0',
        RDTO: '21.18',
        HUMEDAD: '46.32',
        ACIDEZ: '0.13',
        TICKET: '1370'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '7553.0',
        RDTO: '21.5',
        HUMEDAD: '45.06',
        ACIDEZ: '0.15',
        TICKET: '1371'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4424.0',
        RDTO: '19.46',
        HUMEDAD: '45.34',
        ACIDEZ: '0.16',
        TICKET: '1383'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '797.0',
        RDTO: '22.88',
        HUMEDAD: '45.68',
        ACIDEZ: '0.16',
        TICKET: '1372'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5623.0',
        RDTO: '23.05',
        HUMEDAD: '47.22',
        ACIDEZ: '0.17',
        TICKET: '1373'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4255.0',
        RDTO: '21.47',
        HUMEDAD: '47.43',
        ACIDEZ: '0.19',
        TICKET: '1374'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '6559.0',
        RDTO: '20.24',
        HUMEDAD: '47.55',
        ACIDEZ: '0.17',
        TICKET: '1375'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '410.0',
        RDTO: '22.61',
        HUMEDAD: '46.65',
        ACIDEZ: '0.26',
        TICKET: '1376'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '11525.0',
        RDTO: '22.0',
        HUMEDAD: '47.91',
        ACIDEZ: '0.25',
        TICKET: '1377'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '181.0',
        RDTO: '21.67',
        HUMEDAD: '43.67',
        ACIDEZ: '0.14',
        TICKET: '1384'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '503.0',
        RDTO: '17.57',
        HUMEDAD: '48.97',
        ACIDEZ: '0.24',
        TICKET: '1385'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '215.0',
        RDTO: '19.02',
        HUMEDAD: '46.15',
        ACIDEZ: '0.14',
        TICKET: '1386'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '823.0',
        RDTO: '20.42',
        HUMEDAD: '46.6',
        ACIDEZ: '0.28',
        TICKET: '1387'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1410.0',
        RDTO: '24.38',
        HUMEDAD: '44.22',
        ACIDEZ: '0.15',
        TICKET: '1388'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4064.0',
        RDTO: '20.43',
        HUMEDAD: '45.91',
        ACIDEZ: '0.19',
        TICKET: '1389'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '463.0',
        RDTO: '22.41',
        HUMEDAD: '45.57',
        ACIDEZ: '0.16',
        TICKET: '1390'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1565.0',
        RDTO: '21.65',
        HUMEDAD: '44.39',
        ACIDEZ: '0.17',
        TICKET: '1391'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '903.0',
        RDTO: '23.47',
        HUMEDAD: '44.39',
        ACIDEZ: '0.15',
        TICKET: '1392'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '784.0',
        RDTO: '22.39',
        HUMEDAD: '45.61',
        ACIDEZ: '0.13',
        TICKET: '1378'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1563.0',
        RDTO: '21.17',
        HUMEDAD: '45.34',
        ACIDEZ: '0.19',
        TICKET: '1379'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '967.0',
        RDTO: '20.37',
        HUMEDAD: '43.65',
        ACIDEZ: '0.14',
        TICKET: '1380'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '714.0',
        RDTO: '20.68',
        HUMEDAD: '45.37',
        ACIDEZ: '0.24',
        TICKET: '1381'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2706.0',
        RDTO: '20.46',
        HUMEDAD: '45.7',
        ACIDEZ: '0.29',
        TICKET: '1382'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '723.0',
        RDTO: '25.81',
        HUMEDAD: '42.79',
        ACIDEZ: '0.17',
        TICKET: '1393'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1190.0',
        RDTO: '19.93',
        HUMEDAD: '44.74',
        ACIDEZ: '0.17',
        TICKET: '1394'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2321.0',
        RDTO: '22.95',
        HUMEDAD: '45.67',
        ACIDEZ: '0.14',
        TICKET: '1395'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1858.0',
        RDTO: '22.0',
        HUMEDAD: '47.34',
        ACIDEZ: '0.24',
        TICKET: '1396'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4332.0',
        RDTO: '19.8',
        HUMEDAD: '47.92',
        ACIDEZ: '0.16',
        TICKET: '1397'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4170.0',
        RDTO: '22.35',
        HUMEDAD: '42.29',
        ACIDEZ: '0.18',
        TICKET: '1398'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3929.0',
        RDTO: '22.95',
        HUMEDAD: '46.88',
        ACIDEZ: '0.18',
        TICKET: '1399'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3667.0',
        RDTO: '22.54',
        HUMEDAD: '45.27',
        ACIDEZ: '0.18',
        TICKET: '1400'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3324.0',
        RDTO: '18.78',
        HUMEDAD: '48.48',
        ACIDEZ: '0.12',
        TICKET: '1401'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5957.0',
        RDTO: '22.53',
        HUMEDAD: '46.42',
        ACIDEZ: '0.15',
        TICKET: '1402'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5828.0',
        RDTO: '21.92',
        HUMEDAD: '48.29',
        ACIDEZ: '0.17',
        TICKET: '1403'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '780.0',
        RDTO: '22.76',
        HUMEDAD: '46.61',
        ACIDEZ: '0.31',
        TICKET: '1409'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1116.0',
        RDTO: '20.3',
        HUMEDAD: '44.54',
        ACIDEZ: '0.28',
        TICKET: '1410'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3126.0',
        RDTO: '17.76',
        HUMEDAD: '47.66',
        ACIDEZ: '0.16',
        TICKET: '1404'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3732.0',
        RDTO: '21.06',
        HUMEDAD: '45.68',
        ACIDEZ: '0.22',
        TICKET: '1405'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '8056.0',
        RDTO: '22.79',
        HUMEDAD: '46.66',
        ACIDEZ: '0.18',
        TICKET: '1406'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '8553.0',
        RDTO: '20.21',
        HUMEDAD: '48.43',
        ACIDEZ: '0.35',
        TICKET: '1407'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '10438.0',
        RDTO: '22.17',
        HUMEDAD: '47.3',
        ACIDEZ: '0.15',
        TICKET: '1408'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5029.0',
        RDTO: '21.06',
        HUMEDAD: '46.55',
        ACIDEZ: '0.31',
        TICKET: '1411'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '642.0',
        RDTO: '19.88',
        HUMEDAD: '47.66',
        ACIDEZ: '0.31',
        TICKET: '1412'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '554.0',
        RDTO: '21.11',
        HUMEDAD: '47.88',
        ACIDEZ: '0.31',
        TICKET: '1413'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3899.0',
        RDTO: '20.98',
        HUMEDAD: '46.16',
        ACIDEZ: '0.33',
        TICKET: '1414'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '437.0',
        RDTO: '21.31',
        HUMEDAD: '45.01',
        ACIDEZ: '0.3',
        TICKET: '1415'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '519.0',
        RDTO: '20.93',
        HUMEDAD: '48.5',
        ACIDEZ: '0.31',
        TICKET: '1416'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '774.0',
        RDTO: '21.51',
        HUMEDAD: '47.26',
        ACIDEZ: '0.32',
        TICKET: '1417'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1001.0',
        RDTO: '22.14',
        HUMEDAD: '44.38',
        ACIDEZ: '0.31',
        TICKET: '1418'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1385.0',
        RDTO: '23.63',
        HUMEDAD: '44.83',
        ACIDEZ: '0.31',
        TICKET: '1419'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1844.0',
        RDTO: '21.93',
        HUMEDAD: '47.26',
        ACIDEZ: '0.36',
        TICKET: '1420'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2018.0',
        RDTO: '20.47',
        HUMEDAD: '47.87',
        ACIDEZ: '0.32',
        TICKET: '1421'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1144.0',
        RDTO: '19.64',
        HUMEDAD: '45.23',
        ACIDEZ: '0.34',
        TICKET: '1422'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5048.0',
        RDTO: '20.63',
        HUMEDAD: '47.27',
        ACIDEZ: '0.32',
        TICKET: '1423'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2539.0',
        RDTO: '20.9',
        HUMEDAD: '46.92',
        ACIDEZ: '0.16',
        TICKET: '1527'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4262.0',
        RDTO: '22.75',
        HUMEDAD: '43.88',
        ACIDEZ: '0.36',
        TICKET: '1424'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4118.0',
        RDTO: '23.16',
        HUMEDAD: '45.84',
        ACIDEZ: '0.32',
        TICKET: '1425'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3635.0',
        RDTO: '20.66',
        HUMEDAD: '47.72',
        ACIDEZ: '0.32',
        TICKET: '1426'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5407.0',
        RDTO: '24.37',
        HUMEDAD: '44.38',
        ACIDEZ: '0.34',
        TICKET: '1427'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2836.0',
        RDTO: '21.43',
        HUMEDAD: '48.02',
        ACIDEZ: '0.32',
        TICKET: '1428'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '6638.0',
        RDTO: '22.85',
        HUMEDAD: '47.16',
        ACIDEZ: '0.31',
        TICKET: '1429'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3441.0',
        RDTO: '21.59',
        HUMEDAD: '45.5',
        ACIDEZ: '0.35',
        TICKET: '1430'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5408.0',
        RDTO: '22.5',
        HUMEDAD: '47.17',
        ACIDEZ: '0.34',
        TICKET: '1431'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3174.0',
        RDTO: '22.57',
        HUMEDAD: '47.67',
        ACIDEZ: '0.31',
        TICKET: '1432'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '325.0',
        RDTO: '18.01',
        HUMEDAD: '47.73',
        ACIDEZ: '0.31',
        TICKET: '1433'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '7450.0',
        RDTO: '18.04',
        HUMEDAD: '51.44',
        ACIDEZ: '0.52',
        TICKET: '1434'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1137.0',
        RDTO: '22.23',
        HUMEDAD: '47.47',
        ACIDEZ: '0.18',
        TICKET: '1494'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '957.0',
        RDTO: '21.59',
        HUMEDAD: '45.5',
        ACIDEZ: '0.35',
        TICKET: '1435'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1181.0',
        RDTO: '19.41',
        HUMEDAD: '47.37',
        ACIDEZ: '0.19',
        TICKET: '1495'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '240.0',
        RDTO: '21.23',
        HUMEDAD: '45.68',
        ACIDEZ: '0.31',
        TICKET: '1436'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1118.0',
        RDTO: '20.78',
        HUMEDAD: '45.05',
        ACIDEZ: '0.2',
        TICKET: '1496'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '10793.0',
        RDTO: '22.61',
        HUMEDAD: '47.06',
        ACIDEZ: '0.31',
        TICKET: '1437'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '326.0',
        RDTO: '21.03',
        HUMEDAD: '45.65',
        ACIDEZ: '0.34',
        TICKET: '1497'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '618.0',
        RDTO: '21.71',
        HUMEDAD: '46.01',
        ACIDEZ: '0.41',
        TICKET: '1498'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '939.0',
        RDTO: '21.13',
        HUMEDAD: '45.31',
        ACIDEZ: '0.49',
        TICKET: '1438'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4755.0',
        RDTO: '20.96',
        HUMEDAD: '48.58',
        ACIDEZ: '0.44',
        TICKET: '1439'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2665.0',
        RDTO: '22.75',
        HUMEDAD: '47.07',
        ACIDEZ: '0.41',
        TICKET: '1440'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1330.0',
        RDTO: '17.03',
        HUMEDAD: '49.79',
        ACIDEZ: '0.46',
        TICKET: '1441'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '529.0',
        RDTO: '21.02',
        HUMEDAD: '44.89',
        ACIDEZ: '0.39',
        TICKET: '1442'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '636.0',
        RDTO: '19.37',
        HUMEDAD: '49.52',
        ACIDEZ: '0.36',
        TICKET: '1443'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '902.0',
        RDTO: '19.68',
        HUMEDAD: '47.38',
        ACIDEZ: '0.6',
        TICKET: '1444'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '972.0',
        RDTO: '23.18',
        HUMEDAD: '46.89',
        ACIDEZ: '0.37',
        TICKET: '1445'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '732.0',
        RDTO: '19.87',
        HUMEDAD: '48.54',
        ACIDEZ: '0.48',
        TICKET: '1446'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '331.0',
        RDTO: '22.48',
        HUMEDAD: '45.52',
        ACIDEZ: '0.33',
        TICKET: '1447'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4104.0',
        RDTO: '19.97',
        HUMEDAD: '48.03',
        ACIDEZ: '0.56',
        TICKET: '1448'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2064.0',
        RDTO: '22.07',
        HUMEDAD: '46.93',
        ACIDEZ: '0.36',
        TICKET: '1449'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1161.0',
        RDTO: '21.53',
        HUMEDAD: '44.93',
        ACIDEZ: '0.35',
        TICKET: '1450'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1947.0',
        RDTO: '23.04',
        HUMEDAD: '46.96',
        ACIDEZ: '0.58',
        TICKET: '1451'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1895.0',
        RDTO: '25.49',
        HUMEDAD: '45.14',
        ACIDEZ: '0.41',
        TICKET: '1452'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1903.0',
        RDTO: '19.88',
        HUMEDAD: '48.62',
        ACIDEZ: '0.39',
        TICKET: '1453'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '845.0',
        RDTO: '19.65',
        HUMEDAD: '49.75',
        ACIDEZ: '0.34',
        TICKET: '1454'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2774.0',
        RDTO: '20.18',
        HUMEDAD: '48.19',
        ACIDEZ: '0.48',
        TICKET: '1455'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5193.0',
        RDTO: '19.6',
        HUMEDAD: '49.95',
        ACIDEZ: '0.37',
        TICKET: '1456'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2682.0',
        RDTO: '17.41',
        HUMEDAD: '50.66',
        ACIDEZ: '0.33',
        TICKET: '1457'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4349.0',
        RDTO: '22.48',
        HUMEDAD: '45.01',
        ACIDEZ: '0.36',
        TICKET: '1458'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3404.0',
        RDTO: '20.58',
        HUMEDAD: '47.74',
        ACIDEZ: '0.35',
        TICKET: '1459'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5911.0',
        RDTO: '20.98',
        HUMEDAD: '47.81',
        ACIDEZ: '0.31',
        TICKET: '1460'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3195.0',
        RDTO: '20.4',
        HUMEDAD: '47.96',
        ACIDEZ: '0.34',
        TICKET: '1461'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3177.0',
        RDTO: '17.8',
        HUMEDAD: '51.75',
        ACIDEZ: '0.32',
        TICKET: '1462'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '7765.0',
        RDTO: '23.49',
        HUMEDAD: '45.99',
        ACIDEZ: '0.32',
        TICKET: '1463'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '9379.0',
        RDTO: '22.12',
        HUMEDAD: '47.28',
        ACIDEZ: '0.32',
        TICKET: '1464'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '9478.0',
        RDTO: '17.55',
        HUMEDAD: '53.05',
        ACIDEZ: '0.46',
        TICKET: '1465'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2928.0',
        RDTO: '19.27',
        HUMEDAD: '48.26',
        ACIDEZ: '0.23',
        TICKET: '1466'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1333.0',
        RDTO: '20.93',
        HUMEDAD: '46.73',
        ACIDEZ: '0.23',
        TICKET: '1467'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1626.0',
        RDTO: '21.49',
        HUMEDAD: '46.57',
        ACIDEZ: '0.16',
        TICKET: '1468'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '808.0',
        RDTO: '17.05',
        HUMEDAD: '49.63',
        ACIDEZ: '0.04',
        TICKET: '1469'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1218.0',
        RDTO: '20.88',
        HUMEDAD: '46.99',
        ACIDEZ: '0.3',
        TICKET: '1470'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1200.0',
        RDTO: '20.38',
        HUMEDAD: '47.54',
        ACIDEZ: '0.14',
        TICKET: '1471'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1986.0',
        RDTO: '21.67',
        HUMEDAD: '47.1',
        ACIDEZ: '0.26',
        TICKET: '1472'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '742.0',
        RDTO: '19.41',
        HUMEDAD: '47.95',
        ACIDEZ: '0.24',
        TICKET: '1473'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '889.0',
        RDTO: '20.47',
        HUMEDAD: '50.2',
        ACIDEZ: '0.18',
        TICKET: '1474'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '486.0',
        RDTO: '19.42',
        HUMEDAD: '48.38',
        ACIDEZ: '0.16',
        TICKET: '1475'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4805.0',
        RDTO: '22.83',
        HUMEDAD: '47.18',
        ACIDEZ: '0.28',
        TICKET: '1476'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1644.0',
        RDTO: '18.95',
        HUMEDAD: '48.12',
        ACIDEZ: '0.18',
        TICKET: '1477'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1415.0',
        RDTO: '20.54',
        HUMEDAD: '47.05',
        ACIDEZ: '0.34',
        TICKET: '1478'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4437.0',
        RDTO: '17.51',
        HUMEDAD: '48.8',
        ACIDEZ: '0.15',
        TICKET: '1479'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3872.0',
        RDTO: '23.44',
        HUMEDAD: '45.33',
        ACIDEZ: '0.16',
        TICKET: '1480'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2925.0',
        RDTO: '23.43',
        HUMEDAD: '46.6',
        ACIDEZ: '0.16',
        TICKET: '1481'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2739.0',
        RDTO: '21.36',
        HUMEDAD: '47.66',
        ACIDEZ: '0.2',
        TICKET: '1482'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '11250.0',
        RDTO: '20.77',
        HUMEDAD: '47.36',
        ACIDEZ: '0.26',
        TICKET: '1483'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '6069.0',
        RDTO: '23.32',
        HUMEDAD: '46.35',
        ACIDEZ: '0.14',
        TICKET: '1484'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2846.0',
        RDTO: '21.96',
        HUMEDAD: '46.32',
        ACIDEZ: '0.23',
        TICKET: '1485'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5193.0',
        RDTO: '20.82',
        HUMEDAD: '46.7',
        ACIDEZ: '0.13',
        TICKET: '1486'
    },
    {
        DIA: '6',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4425.0',
        RDTO: '23.29',
        HUMEDAD: '46.33',
        ACIDEZ: '0.23',
        TICKET: '1487'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5362.0',
        RDTO: '19.57',
        HUMEDAD: '47.04',
        ACIDEZ: '0.2',
        TICKET: '1499'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4138.0',
        RDTO: '21.24',
        HUMEDAD: '46.95',
        ACIDEZ: '0.3',
        TICKET: '1500'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1001.0',
        RDTO: '23.44',
        HUMEDAD: '45.36',
        ACIDEZ: '0.22',
        TICKET: '1501'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1159.0',
        RDTO: '25.73',
        HUMEDAD: '43.84',
        ACIDEZ: '0.26',
        TICKET: '1502'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1823.0',
        RDTO: '23.07',
        HUMEDAD: '45.84',
        ACIDEZ: '0.43',
        TICKET: '1503'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2568.0',
        RDTO: '23.23',
        HUMEDAD: '45.7',
        ACIDEZ: '0.15',
        TICKET: '1504'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4006.0',
        RDTO: '24.99',
        HUMEDAD: '42.59',
        ACIDEZ: '0.15',
        TICKET: '1509'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1117.0',
        RDTO: '27.72',
        HUMEDAD: '39.66',
        ACIDEZ: '0.19',
        TICKET: '1505'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '921.0',
        RDTO: '21.25',
        HUMEDAD: '46.81',
        ACIDEZ: '0.18',
        TICKET: '1506'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5058.0',
        RDTO: '21.8',
        HUMEDAD: '45.12',
        ACIDEZ: '0.16',
        TICKET: '1507'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2884.0',
        RDTO: '23.6',
        HUMEDAD: '45.31',
        ACIDEZ: '0.15',
        TICKET: '1508'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4100.0',
        RDTO: '22.65',
        HUMEDAD: '45.91',
        ACIDEZ: '0.16',
        TICKET: '1510'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1848.0',
        RDTO: '20.59',
        HUMEDAD: '44.33',
        ACIDEZ: '0.17',
        TICKET: '1511'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2632.0',
        RDTO: '20.7',
        HUMEDAD: '48.9',
        ACIDEZ: '0.16',
        TICKET: '1512'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3718.0',
        RDTO: '22.43',
        HUMEDAD: '46.17',
        ACIDEZ: '0.18',
        TICKET: '1513'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '472.0',
        RDTO: '22.36',
        HUMEDAD: '45.74',
        ACIDEZ: '0.25',
        TICKET: '1488'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '422.0',
        RDTO: '22.78',
        HUMEDAD: '43.13',
        ACIDEZ: '0.29',
        TICKET: '1489'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1290.0',
        RDTO: '22.67',
        HUMEDAD: '45.68',
        ACIDEZ: '0.26',
        TICKET: '1490'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5019.0',
        RDTO: '21.59',
        HUMEDAD: '48.39',
        ACIDEZ: '0.38',
        TICKET: '1491'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '737.0',
        RDTO: '18.51',
        HUMEDAD: '53.55',
        ACIDEZ: '0.31',
        TICKET: '1492'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '689.0',
        RDTO: '20.38',
        HUMEDAD: '47.52',
        ACIDEZ: '0.4',
        TICKET: '1493'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '11943.0',
        RDTO: '22.09',
        HUMEDAD: '46.5',
        ACIDEZ: '0.17',
        TICKET: '1514'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2810.0',
        RDTO: '19.67',
        HUMEDAD: '46.63',
        ACIDEZ: '0.16',
        TICKET: '1515'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '9161.0',
        RDTO: '17.46',
        HUMEDAD: '51.6',
        ACIDEZ: '0.33',
        TICKET: '1516'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '6040.0',
        RDTO: '22.41',
        HUMEDAD: '46.37',
        ACIDEZ: '0.17',
        TICKET: '1517'
    },
    {
        DIA: '23',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1109.0',
        RDTO: '19.5',
        HUMEDAD: '45.86',
        ACIDEZ: '0.12',
        TICKET: '1728'
    },
    {
        DIA: '23',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1431.0',
        RDTO: '24.57',
        HUMEDAD: '40.79',
        ACIDEZ: '0.12',
        TICKET: '1729'
    },
    {
        DIA: '23',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1357.0',
        RDTO: '25.0',
        HUMEDAD: '42.49',
        ACIDEZ: '0.04',
        TICKET: '1730'
    },
    {
        DIA: '23',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5034.0',
        RDTO: '25.77',
        HUMEDAD: '42.41',
        ACIDEZ: '0.1',
        TICKET: '1731'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5055.0',
        RDTO: '22.43',
        HUMEDAD: '45.28',
        ACIDEZ: '0.32',
        TICKET: '1518'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1436.0',
        RDTO: '20.43',
        HUMEDAD: '44.94',
        ACIDEZ: '0.15',
        TICKET: '1519'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1595.0',
        RDTO: '20.61',
        HUMEDAD: '47.44',
        ACIDEZ: '0.14',
        TICKET: '1520'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '415.0',
        RDTO: '21.88',
        HUMEDAD: '45.72',
        ACIDEZ: '0.15',
        TICKET: '1521'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4091.0',
        RDTO: '22.53',
        HUMEDAD: '45.7',
        ACIDEZ: '0.23',
        TICKET: '1522'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '947.0',
        RDTO: '24.28',
        HUMEDAD: '45.76',
        ACIDEZ: '0.22',
        TICKET: '1523'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '713.0',
        RDTO: '22.98',
        HUMEDAD: '43.29',
        ACIDEZ: '0.23',
        TICKET: '1524'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4538.0',
        RDTO: '26.15',
        HUMEDAD: '42.96',
        ACIDEZ: '0.21',
        TICKET: '1525'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1870.0',
        RDTO: '22.91',
        HUMEDAD: '46.15',
        ACIDEZ: '0.22',
        TICKET: '1526'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1553.0',
        RDTO: '18.84',
        HUMEDAD: '47.72',
        ACIDEZ: '0.16',
        TICKET: '1528'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '950.0',
        RDTO: '25.66',
        HUMEDAD: '44.6',
        ACIDEZ: '0.26',
        TICKET: '1529'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5431.0',
        RDTO: '22.01',
        HUMEDAD: '45.2',
        ACIDEZ: '0.15',
        TICKET: '1530'
    },
    {
        DIA: '23',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '890.0',
        RDTO: '25.79',
        HUMEDAD: '43.46',
        ACIDEZ: '0.1',
        TICKET: '1732'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '6107.0',
        RDTO: '19.82',
        HUMEDAD: '46.21',
        ACIDEZ: '0.16',
        TICKET: '1531'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '10282.0',
        RDTO: '22.01',
        HUMEDAD: '45.55',
        ACIDEZ: '0.21',
        TICKET: '1532'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '576.0',
        RDTO: '20.09',
        HUMEDAD: '46.95',
        ACIDEZ: '0.18',
        TICKET: '1533'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '466.0',
        RDTO: '22.81',
        HUMEDAD: '47.59',
        ACIDEZ: '0.25',
        TICKET: '1534'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5816.0',
        RDTO: '22.77',
        HUMEDAD: '45.6',
        ACIDEZ: '0.14',
        TICKET: '1535'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2422.0',
        RDTO: '21.62',
        HUMEDAD: '47.72',
        ACIDEZ: '0.16',
        TICKET: '1536'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1660.0',
        RDTO: '24.86',
        HUMEDAD: '45.0',
        ACIDEZ: '0.16',
        TICKET: '1537'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5541.0',
        RDTO: '20.61',
        HUMEDAD: '45.57',
        ACIDEZ: '0.23',
        TICKET: '1538'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2178.0',
        RDTO: '18.69',
        HUMEDAD: '48.36',
        ACIDEZ: '0.19',
        TICKET: '1539'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5671.0',
        RDTO: '18.72',
        HUMEDAD: '51.8',
        ACIDEZ: '0.28',
        TICKET: '1540'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3804.0',
        RDTO: '22.13',
        HUMEDAD: '45.41',
        ACIDEZ: '0.19',
        TICKET: '1541'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '8858.0',
        RDTO: '22.62',
        HUMEDAD: '46.77',
        ACIDEZ: '0.23',
        TICKET: '1542'
    },
    {
        DIA: '23',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '9974.0',
        RDTO: '21.1',
        HUMEDAD: '43.96',
        ACIDEZ: '0.19',
        TICKET: '1733'
    },
    {
        DIA: '23',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2052.0',
        RDTO: '23.23',
        HUMEDAD: '43.67',
        ACIDEZ: '0.14',
        TICKET: '1734'
    },
    {
        DIA: '23',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '7017.0',
        RDTO: '24.36',
        HUMEDAD: '43.53',
        ACIDEZ: '0.17',
        TICKET: '1735'
    },
    {
        DIA: '23',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '169.0',
        RDTO: '21.14',
        HUMEDAD: '46.33',
        ACIDEZ: '0.14',
        TICKET: '1736'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4646.0',
        RDTO: '22.88',
        HUMEDAD: '44.62',
        ACIDEZ: '0.3',
        TICKET: '1543'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2697.0',
        RDTO: '22.58',
        HUMEDAD: '45.62',
        ACIDEZ: '0.31',
        TICKET: '1544'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '907.0',
        RDTO: '21.3',
        HUMEDAD: '48.55',
        ACIDEZ: '0.36',
        TICKET: '1545'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '664.0',
        RDTO: '21.57',
        HUMEDAD: '45.24',
        ACIDEZ: '0.44',
        TICKET: '1546'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1583.0',
        RDTO: '21.13',
        HUMEDAD: '44.96',
        ACIDEZ: '0.29',
        TICKET: '1547'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1570.0',
        RDTO: '22.89',
        HUMEDAD: '45.7',
        ACIDEZ: '0.41',
        TICKET: '1548'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3754.0',
        RDTO: '22.68',
        HUMEDAD: '43.8',
        ACIDEZ: '0.31',
        TICKET: '1549'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1403.0',
        RDTO: '20.65',
        HUMEDAD: '46.9',
        ACIDEZ: '0.33',
        TICKET: '1550'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '6256.0',
        RDTO: '22.58',
        HUMEDAD: '45.12',
        ACIDEZ: '0.29',
        TICKET: '1551'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3980.0',
        RDTO: '24.41',
        HUMEDAD: '43.86',
        ACIDEZ: '0.33',
        TICKET: '1552'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1345.0',
        RDTO: '25.19',
        HUMEDAD: '46.46',
        ACIDEZ: '0.38',
        TICKET: '1553'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5884.0',
        RDTO: '22.14',
        HUMEDAD: '45.98',
        ACIDEZ: '0.48',
        TICKET: '1554'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3863.0',
        RDTO: '21.64',
        HUMEDAD: '45.68',
        ACIDEZ: '0.3',
        TICKET: '1555'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '6456.0',
        RDTO: '22.3',
        HUMEDAD: '46.04',
        ACIDEZ: '0.36',
        TICKET: '1556'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4922.0',
        RDTO: '23.12',
        HUMEDAD: '47.56',
        ACIDEZ: '0.44',
        TICKET: '1557'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4718.0',
        RDTO: '19.25',
        HUMEDAD: '48.64',
        ACIDEZ: '0.33',
        TICKET: '1558'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2575.0',
        RDTO: '19.93',
        HUMEDAD: '49.06',
        ACIDEZ: '0.33',
        TICKET: '1559'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3401.0',
        RDTO: '23.37',
        HUMEDAD: '45.01',
        ACIDEZ: '0.32',
        TICKET: '1560'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2095.0',
        RDTO: '17.21',
        HUMEDAD: '48.92',
        ACIDEZ: '0.39',
        TICKET: '1561'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '681.0',
        RDTO: '18.64',
        HUMEDAD: '45.32',
        ACIDEZ: '0.11',
        TICKET: '1562'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5064.0',
        RDTO: '22.77',
        HUMEDAD: '44.49',
        ACIDEZ: '0.31',
        TICKET: '1563'
    },
    {
        DIA: '23',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2488.0',
        RDTO: '24.11',
        HUMEDAD: '42.71',
        ACIDEZ: '0.07',
        TICKET: '1737'
    },
    {
        DIA: '23',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3225.0',
        RDTO: '21.52',
        HUMEDAD: '51.31',
        ACIDEZ: '0.21',
        TICKET: '1738'
    },
    {
        DIA: '24',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1561.0',
        RDTO: '21.88',
        HUMEDAD: '45.73',
        ACIDEZ: '0.03',
        TICKET: '1739'
    },
    {
        DIA: '24',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1545.0',
        RDTO: '20.54',
        HUMEDAD: '47.39',
        ACIDEZ: '0.16',
        TICKET: '1740'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '908.0',
        RDTO: '24.68',
        HUMEDAD: '44.49',
        ACIDEZ: '0.17',
        TICKET: '1564'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4578.0',
        RDTO: '22.63',
        HUMEDAD: '46.2',
        ACIDEZ: '0.27',
        TICKET: '1565'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '409.0',
        RDTO: '25.8',
        HUMEDAD: '46.39',
        ACIDEZ: '0.23',
        TICKET: '1566'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4389.0',
        RDTO: '21.61',
        HUMEDAD: '44.82',
        ACIDEZ: '0.17',
        TICKET: '1567'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '778.0',
        RDTO: '23.06',
        HUMEDAD: '45.04',
        ACIDEZ: '0.23',
        TICKET: '1568'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1051.0',
        RDTO: '22.45',
        HUMEDAD: '44.0',
        ACIDEZ: '0.16',
        TICKET: '1569'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1131.0',
        RDTO: '23.69',
        HUMEDAD: '45.8',
        ACIDEZ: '0.18',
        TICKET: '1570'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3516.0',
        RDTO: '22.81',
        HUMEDAD: '45.65',
        ACIDEZ: '0.3',
        TICKET: '1571'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4327.0',
        RDTO: '22.35',
        HUMEDAD: '45.92',
        ACIDEZ: '0.16',
        TICKET: '1572'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1664.0',
        RDTO: '21.8',
        HUMEDAD: '45.31',
        ACIDEZ: '0.26',
        TICKET: '1573'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4199.0',
        RDTO: '22.84',
        HUMEDAD: '45.55',
        ACIDEZ: '0.22',
        TICKET: '1574'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '6211.0',
        RDTO: '22.51',
        HUMEDAD: '44.23',
        ACIDEZ: '0.29',
        TICKET: '1575'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1627.0',
        RDTO: '23.65',
        HUMEDAD: '45.95',
        ACIDEZ: '0.24',
        TICKET: '1576'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5582.0',
        RDTO: '22.28',
        HUMEDAD: '45.85',
        ACIDEZ: '0.14',
        TICKET: '1577'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2487.0',
        RDTO: '17.86',
        HUMEDAD: '50.76',
        ACIDEZ: '0.18',
        TICKET: '1578'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2904.0',
        RDTO: '24.45',
        HUMEDAD: '45.53',
        ACIDEZ: '0.16',
        TICKET: '1579'
    },
    {
        DIA: '24',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1594.0',
        RDTO: '26.13',
        HUMEDAD: '42.32',
        ACIDEZ: '0.09',
        TICKET: '1741'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2930.0',
        RDTO: '24.0',
        HUMEDAD: '43.54',
        ACIDEZ: '0.26',
        TICKET: '1580'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1755.0',
        RDTO: '24.95',
        HUMEDAD: '47.84',
        ACIDEZ: '0.21',
        TICKET: '1581'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2107.0',
        RDTO: '19.62',
        HUMEDAD: '49.07',
        ACIDEZ: '0.17',
        TICKET: '1582'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3719.0',
        RDTO: '20.19',
        HUMEDAD: '46.33',
        ACIDEZ: '0.16',
        TICKET: '1583'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2804.0',
        RDTO: '19.89',
        HUMEDAD: '47.74',
        ACIDEZ: '0.32',
        TICKET: '1584'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '577.0',
        RDTO: '21.33',
        HUMEDAD: '46.05',
        ACIDEZ: '0.41',
        TICKET: '1585'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4989.0',
        RDTO: '22.84',
        HUMEDAD: '48.33',
        ACIDEZ: '0.38',
        TICKET: '1586'
    },
    {
        DIA: '24',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1927.0',
        RDTO: '19.69',
        HUMEDAD: '47.13',
        ACIDEZ: '0.22',
        TICKET: '1742'
    },
    {
        DIA: '24',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3797.0',
        RDTO: '26.2',
        HUMEDAD: '43.33',
        ACIDEZ: '0.12',
        TICKET: '1743'
    },
    {
        DIA: '24',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4271.0',
        RDTO: '24.51',
        HUMEDAD: '44.67',
        ACIDEZ: '0.19',
        TICKET: '1744'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3634.0',
        RDTO: '21.94',
        HUMEDAD: '46.37',
        ACIDEZ: '0.3',
        TICKET: '1587'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '309.0',
        RDTO: '20.89',
        HUMEDAD: '45.71',
        ACIDEZ: '0.26',
        TICKET: '1588'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '173.0',
        RDTO: '24.16',
        HUMEDAD: '47.34',
        ACIDEZ: '0.31',
        TICKET: '1589'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1217.0',
        RDTO: '22.09',
        HUMEDAD: '45.93',
        ACIDEZ: '0.17',
        TICKET: '1590'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1687.0',
        RDTO: '24.27',
        HUMEDAD: '45.91',
        ACIDEZ: '0.23',
        TICKET: '1591'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1271.0',
        RDTO: '21.21',
        HUMEDAD: '48.05',
        ACIDEZ: '0.16',
        TICKET: '1592'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '563.0',
        RDTO: '24.01',
        HUMEDAD: '45.38',
        ACIDEZ: '0.16',
        TICKET: '1593'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4935.0',
        RDTO: '21.78',
        HUMEDAD: '48.07',
        ACIDEZ: '0.47',
        TICKET: '1594'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1999.0',
        RDTO: '22.07',
        HUMEDAD: '45.63',
        ACIDEZ: '0.43',
        TICKET: '1595'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1409.0',
        RDTO: '25.65',
        HUMEDAD: '45.16',
        ACIDEZ: '0.35',
        TICKET: '1596'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '6588.0',
        RDTO: '19.91',
        HUMEDAD: '47.02',
        ACIDEZ: '0.42',
        TICKET: '1597'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3995.0',
        RDTO: '25.21',
        HUMEDAD: '44.88',
        ACIDEZ: '0.42',
        TICKET: '1598'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3455.0',
        RDTO: '23.57',
        HUMEDAD: '46.57',
        ACIDEZ: '0.38',
        TICKET: '1599'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1302.0',
        RDTO: '19.64',
        HUMEDAD: '50.2',
        ACIDEZ: '0.47',
        TICKET: '1600'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5131.0',
        RDTO: '21.8',
        HUMEDAD: '46.27',
        ACIDEZ: '0.38',
        TICKET: '1601'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '7427.0',
        RDTO: '20.08',
        HUMEDAD: '46.3',
        ACIDEZ: '0.34',
        TICKET: '1602'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4614.0',
        RDTO: '20.33',
        HUMEDAD: '47.35',
        ACIDEZ: '0.36',
        TICKET: '1603'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1319.0',
        RDTO: '21.83',
        HUMEDAD: '51.44',
        ACIDEZ: '0.64',
        TICKET: '1604'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1269.0',
        RDTO: '18.97',
        HUMEDAD: '49.4',
        ACIDEZ: '0.49',
        TICKET: '1605'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2798.0',
        RDTO: '22.16',
        HUMEDAD: '47.92',
        ACIDEZ: '0.31',
        TICKET: '1606'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '336.0',
        RDTO: '22.16',
        HUMEDAD: '45.31',
        ACIDEZ: '0.48',
        TICKET: '1607'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2496.0',
        RDTO: '21.53',
        HUMEDAD: '46.26',
        ACIDEZ: '0.34',
        TICKET: '1608'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1119.0',
        RDTO: '23.73',
        HUMEDAD: '48.21',
        ACIDEZ: '0.47',
        TICKET: '1609'
    },
    {
        DIA: '24',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5293.0',
        RDTO: '25.72',
        HUMEDAD: '42.86',
        ACIDEZ: '0.01',
        TICKET: '1745'
    },
    {
        DIA: '24',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '9624.0',
        RDTO: '22.43',
        HUMEDAD: '44.89',
        ACIDEZ: '0.2',
        TICKET: '1746'
    },
    {
        DIA: '24',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '7383.0',
        RDTO: '25.93',
        HUMEDAD: '42.19',
        ACIDEZ: '0.11',
        TICKET: '1747'
    },
    {
        DIA: '24',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4080.0',
        RDTO: '22.86',
        HUMEDAD: '45.94',
        ACIDEZ: '0.22',
        TICKET: '1748'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '624.0',
        RDTO: '19.79',
        HUMEDAD: '47.54',
        ACIDEZ: '0.31',
        TICKET: '1610'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4807.0',
        RDTO: '22.2',
        HUMEDAD: '47.14',
        ACIDEZ: '0.53',
        TICKET: '1611'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3338.0',
        RDTO: '20.98',
        HUMEDAD: '46.84',
        ACIDEZ: '0.25',
        TICKET: '1612'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1131.0',
        RDTO: '19.76',
        HUMEDAD: '46.67',
        ACIDEZ: '0.28',
        TICKET: '1613'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '934.0',
        RDTO: '23.41',
        HUMEDAD: '49.37',
        ACIDEZ: '0.38',
        TICKET: '1614'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1988.0',
        RDTO: '19.85',
        HUMEDAD: '47.32',
        ACIDEZ: '0.31',
        TICKET: '1615'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1344.0',
        RDTO: '20.95',
        HUMEDAD: '46.22',
        ACIDEZ: '0.3',
        TICKET: '1616'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1715.0',
        RDTO: '24.05',
        HUMEDAD: '45.61',
        ACIDEZ: '0.32',
        TICKET: '1617'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4184.0',
        RDTO: '24.11',
        HUMEDAD: '45.49',
        ACIDEZ: '0.31',
        TICKET: '1618'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3678.0',
        RDTO: '23.1',
        HUMEDAD: '46.88',
        ACIDEZ: '0.31',
        TICKET: '1619'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2313.0',
        RDTO: '20.73',
        HUMEDAD: '48.11',
        ACIDEZ: '0.45',
        TICKET: '1620'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '6057.0',
        RDTO: '21.23',
        HUMEDAD: '46.18',
        ACIDEZ: '0.26',
        TICKET: '1621'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3747.0',
        RDTO: '15.91',
        HUMEDAD: '51.33',
        ACIDEZ: '0.36',
        TICKET: '1622'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '9482.0',
        RDTO: '19.77',
        HUMEDAD: '47.58',
        ACIDEZ: '0.33',
        TICKET: '1623'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1117.0',
        RDTO: '17.54',
        HUMEDAD: '49.29',
        ACIDEZ: '0.27',
        TICKET: '1624'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3244.0',
        RDTO: '21.46',
        HUMEDAD: '46.96',
        ACIDEZ: '0.35',
        TICKET: '1625'
    },
    {
        DIA: '25',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3717.0',
        RDTO: '22.89',
        HUMEDAD: '44.86',
        ACIDEZ: '0.17',
        TICKET: '1749'
    },
    {
        DIA: '25',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '681.0',
        RDTO: '21.58',
        HUMEDAD: '46.97',
        ACIDEZ: '0.11',
        TICKET: '1750'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4955.0',
        RDTO: '20.99',
        HUMEDAD: '47.62',
        ACIDEZ: '0.2',
        TICKET: '1626'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2161.0',
        RDTO: '20.11',
        HUMEDAD: '47.24',
        ACIDEZ: '0.2',
        TICKET: '1627'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '932.0',
        RDTO: '19.85',
        HUMEDAD: '50.99',
        ACIDEZ: '0.21',
        TICKET: '1628'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4437.0',
        RDTO: '21.26',
        HUMEDAD: '46.74',
        ACIDEZ: '0.21',
        TICKET: '1629'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1876.0',
        RDTO: '22.47',
        HUMEDAD: '45.68',
        ACIDEZ: '0.1',
        TICKET: '1630'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '919.0',
        RDTO: '24.2',
        HUMEDAD: '45.11',
        ACIDEZ: '0.09',
        TICKET: '1631'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4424.0',
        RDTO: '25.21',
        HUMEDAD: '43.01',
        ACIDEZ: '0.16',
        TICKET: '1632'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2508.0',
        RDTO: '23.79',
        HUMEDAD: '46.26',
        ACIDEZ: '0.1',
        TICKET: '1633'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1969.0',
        RDTO: '24.61',
        HUMEDAD: '44.58',
        ACIDEZ: '0.25',
        TICKET: '1634'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '6368.0',
        RDTO: '21.72',
        HUMEDAD: '46.96',
        ACIDEZ: '0.17',
        TICKET: '1635'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3106.0',
        RDTO: '22.41',
        HUMEDAD: '46.21',
        ACIDEZ: '0.17',
        TICKET: '1636'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '8828.0',
        RDTO: '22.17',
        HUMEDAD: '45.94',
        ACIDEZ: '0.25',
        TICKET: '1637'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2801.0',
        RDTO: '20.07',
        HUMEDAD: '47.73',
        ACIDEZ: '0.22',
        TICKET: '1638'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '426.0',
        RDTO: '22.3',
        HUMEDAD: '49.65',
        ACIDEZ: '0.31',
        TICKET: '1639'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2774.0',
        RDTO: '20.69',
        HUMEDAD: '47.6',
        ACIDEZ: '0.21',
        TICKET: '1640'
    },
    {
        DIA: '25',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1252.0',
        RDTO: '25.34',
        HUMEDAD: '42.6',
        ACIDEZ: '0.16',
        TICKET: '1751'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1385.0',
        RDTO: '19.4',
        HUMEDAD: '48.7',
        ACIDEZ: '0.21',
        TICKET: '1641'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '6048.0',
        RDTO: '19.82',
        HUMEDAD: '47.62',
        ACIDEZ: '0.19',
        TICKET: '1642'
    },
    {
        DIA: '14',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1079.0',
        RDTO: '16.83',
        HUMEDAD: '50.31',
        ACIDEZ: '0.16',
        TICKET: '1643'
    },
    {
        DIA: '25',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1861.0',
        RDTO: '24.5',
        HUMEDAD: '42.56',
        ACIDEZ: '0.16',
        TICKET: '1752'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '900.0',
        RDTO: '22.03',
        HUMEDAD: '44.4',
        ACIDEZ: '0.25',
        TICKET: '1644'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3789.0',
        RDTO: '25.72',
        HUMEDAD: '44.6',
        ACIDEZ: '0.16',
        TICKET: '1645'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1021.0',
        RDTO: '21.55',
        HUMEDAD: '45.22',
        ACIDEZ: '0.33',
        TICKET: '1646'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1076.0',
        RDTO: '26.91',
        HUMEDAD: '43.21',
        ACIDEZ: '0.17',
        TICKET: '1647'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1428.0',
        RDTO: '25.51',
        HUMEDAD: '42.3',
        ACIDEZ: '0.37',
        TICKET: '1648'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3601.0',
        RDTO: '24.34',
        HUMEDAD: '43.32',
        ACIDEZ: '0.18',
        TICKET: '1649'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3337.0',
        RDTO: '22.97',
        HUMEDAD: '45.14',
        ACIDEZ: '0.15',
        TICKET: '1650'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3368.0',
        RDTO: '19.62',
        HUMEDAD: '47.23',
        ACIDEZ: '0.14',
        TICKET: '1651'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '8113.0',
        RDTO: '24.81',
        HUMEDAD: '45.01',
        ACIDEZ: '0.25',
        TICKET: '1652'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '6918.0',
        RDTO: '21.16',
        HUMEDAD: '43.83',
        ACIDEZ: '0.17',
        TICKET: '1653'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2147.0',
        RDTO: '23.27',
        HUMEDAD: '44.73',
        ACIDEZ: '0.18',
        TICKET: '1654'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '7744.0',
        RDTO: '21.76',
        HUMEDAD: '44.86',
        ACIDEZ: '0.2',
        TICKET: '1655'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1294.0',
        RDTO: '20.72',
        HUMEDAD: '47.55',
        ACIDEZ: '0.18',
        TICKET: '1656'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1931.0',
        RDTO: '20.65',
        HUMEDAD: '47.08',
        ACIDEZ: '0.13',
        TICKET: '1657'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2683.0',
        RDTO: '24.51',
        HUMEDAD: '45.19',
        ACIDEZ: '0.18',
        TICKET: '1658'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1195.0',
        RDTO: '27.57',
        HUMEDAD: '42.57',
        ACIDEZ: '0.2',
        TICKET: '1659'
    },
    {
        DIA: '25',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5327.0',
        RDTO: '22.69',
        HUMEDAD: '42.85',
        ACIDEZ: '0.13',
        TICKET: '1753'
    },
    {
        DIA: '25',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2918.0',
        RDTO: '19.75',
        HUMEDAD: '46.96',
        ACIDEZ: '0.19',
        TICKET: '1754'
    },
    {
        DIA: '25',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '10337.0',
        RDTO: '23.8',
        HUMEDAD: '44.91',
        ACIDEZ: '0.13',
        TICKET: '1755'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1366.0',
        RDTO: '21.3',
        HUMEDAD: '48.36',
        ACIDEZ: '0.29',
        TICKET: '1660'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '7290.0',
        RDTO: '21.63',
        HUMEDAD: '44.5',
        ACIDEZ: '0.29',
        TICKET: '1661'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '820.0',
        RDTO: '24.79',
        HUMEDAD: '43.88',
        ACIDEZ: '0.09',
        TICKET: '1662'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4048.0',
        RDTO: '24.38',
        HUMEDAD: '43.67',
        ACIDEZ: '0.12',
        TICKET: '1663'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4043.0',
        RDTO: '24.48',
        HUMEDAD: '43.33',
        ACIDEZ: '0.2',
        TICKET: '1664'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3302.0',
        RDTO: '21.85',
        HUMEDAD: '44.98',
        ACIDEZ: '0.21',
        TICKET: '1665'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3710.0',
        RDTO: '24.07',
        HUMEDAD: '45.01',
        ACIDEZ: '0.18',
        TICKET: '1666'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3268.0',
        RDTO: '29.58',
        HUMEDAD: '40.28',
        ACIDEZ: '0.23',
        TICKET: '1667'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '9364.0',
        RDTO: '21.39',
        HUMEDAD: '44.05',
        ACIDEZ: '0.19',
        TICKET: '1668'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2681.0',
        RDTO: '23.78',
        HUMEDAD: '45.04',
        ACIDEZ: '0.24',
        TICKET: '1669'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2406.0',
        RDTO: '24.26',
        HUMEDAD: '44.77',
        ACIDEZ: '0.26',
        TICKET: '1670'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2828.0',
        RDTO: '26.39',
        HUMEDAD: '43.7',
        ACIDEZ: '0.22',
        TICKET: '1671'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3323.0',
        RDTO: '20.88',
        HUMEDAD: '47.01',
        ACIDEZ: '0.18',
        TICKET: '1672'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2420.0',
        RDTO: '19.57',
        HUMEDAD: '46.66',
        ACIDEZ: '0.22',
        TICKET: '1673'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '8986.0',
        RDTO: '21.39',
        HUMEDAD: '45.33',
        ACIDEZ: '0.18',
        TICKET: '1674'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '699.0',
        RDTO: '27.81',
        HUMEDAD: '44.86',
        ACIDEZ: '0.19',
        TICKET: '1675'
    },
    {
        DIA: '26',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '916.0',
        RDTO: '22.27',
        HUMEDAD: '44.61',
        ACIDEZ: '0.21',
        TICKET: '1757'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '883.0',
        RDTO: '27.45',
        HUMEDAD: '42.41',
        ACIDEZ: '0.12',
        TICKET: '1676'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1515.0',
        RDTO: '26.16',
        HUMEDAD: '43.94',
        ACIDEZ: '0.2',
        TICKET: '1677'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3753.0',
        RDTO: '28.84',
        HUMEDAD: '40.98',
        ACIDEZ: '0.16',
        TICKET: '1678'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2345.0',
        RDTO: '20.49',
        HUMEDAD: '46.78',
        ACIDEZ: '0.12',
        TICKET: '1679'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2550.0',
        RDTO: '19.29',
        HUMEDAD: '44.84',
        ACIDEZ: '0.18',
        TICKET: '1680'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '6412.0',
        RDTO: '24.22',
        HUMEDAD: '42.4',
        ACIDEZ: '0.16',
        TICKET: '1681'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4745.0',
        RDTO: '23.67',
        HUMEDAD: '44.43',
        ACIDEZ: '0.26',
        TICKET: '1682'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2984.0',
        RDTO: '24.61',
        HUMEDAD: '42.54',
        ACIDEZ: '0.16',
        TICKET: '1683'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1594.0',
        RDTO: '18.47',
        HUMEDAD: '47.06',
        ACIDEZ: '0.2',
        TICKET: '1684'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '6067.0',
        RDTO: '26.4',
        HUMEDAD: '44.78',
        ACIDEZ: '0.23',
        TICKET: '1685'
    },
    {
        DIA: '26',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '7098.0',
        RDTO: '23.08',
        HUMEDAD: '43.89',
        ACIDEZ: '0.23',
        TICKET: '1758'
    },
    {
        DIA: '25',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5699.0',
        RDTO: '22.69',
        HUMEDAD: '44.57',
        ACIDEZ: '0.17',
        TICKET: '1756'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2253.0',
        RDTO: '24.08',
        HUMEDAD: '49.55',
        ACIDEZ: '0.3',
        TICKET: '1686'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '274.0',
        RDTO: '24.6',
        HUMEDAD: '43.29',
        ACIDEZ: '0.12',
        TICKET: '1687'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1861.0',
        RDTO: '23.5',
        HUMEDAD: '43.95',
        ACIDEZ: '0.16',
        TICKET: '1688'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1634.0',
        RDTO: '24.95',
        HUMEDAD: '42.48',
        ACIDEZ: '0.09',
        TICKET: '1689'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2140.0',
        RDTO: '21.99',
        HUMEDAD: '46.07',
        ACIDEZ: '0.29',
        TICKET: '1690'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '595.0',
        RDTO: '25.34',
        HUMEDAD: '42.19',
        ACIDEZ: '0.16',
        TICKET: '1691'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3216.0',
        RDTO: '25.55',
        HUMEDAD: '44.18',
        ACIDEZ: '0.16',
        TICKET: '1692'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3074.0',
        RDTO: '24.59',
        HUMEDAD: '42.83',
        ACIDEZ: '0.16',
        TICKET: '1693'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '222.0',
        RDTO: '21.01',
        HUMEDAD: '46.94',
        ACIDEZ: '0.16',
        TICKET: '1694'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1567.0',
        RDTO: '27.36',
        HUMEDAD: '40.96',
        ACIDEZ: '0.15',
        TICKET: '1695'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '6045.0',
        RDTO: '21.9',
        HUMEDAD: '43.05',
        ACIDEZ: '0.25',
        TICKET: '1696'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '751.0',
        RDTO: '27.12',
        HUMEDAD: '41.67',
        ACIDEZ: '0.13',
        TICKET: '1697'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1367.0',
        RDTO: '20.79',
        HUMEDAD: '44.75',
        ACIDEZ: '0.16',
        TICKET: '1698'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5673.0',
        RDTO: '28.62',
        HUMEDAD: '41.06',
        ACIDEZ: '0.18',
        TICKET: '1699'
    },
    {
        DIA: '26',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1625.0',
        RDTO: '22.9',
        HUMEDAD: '42.88',
        ACIDEZ: '0.18',
        TICKET: '1759'
    },
    {
        DIA: '26',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5147.0',
        RDTO: '25.35',
        HUMEDAD: '41.81',
        ACIDEZ: '0.12',
        TICKET: '1760'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1792.0',
        RDTO: '24.41',
        HUMEDAD: '40.82',
        ACIDEZ: '0.22',
        TICKET: '1700'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5666.0',
        RDTO: '25.5',
        HUMEDAD: '45.81',
        ACIDEZ: '0.25',
        TICKET: '1701'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4310.0',
        RDTO: '24.73',
        HUMEDAD: '43.56',
        ACIDEZ: '0.32',
        TICKET: '1702'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '447.0',
        RDTO: '23.25',
        HUMEDAD: '47.52',
        ACIDEZ: '0.22',
        TICKET: '1703'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1075.0',
        RDTO: '24.05',
        HUMEDAD: '44.25',
        ACIDEZ: '0.1',
        TICKET: '1704'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1834.0',
        RDTO: '21.55',
        HUMEDAD: '43.87',
        ACIDEZ: '0.07',
        TICKET: '1705'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '598.0',
        RDTO: '21.34',
        HUMEDAD: '48.15',
        ACIDEZ: '0.25',
        TICKET: '1706'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3861.0',
        RDTO: '24.88',
        HUMEDAD: '41.05',
        ACIDEZ: '0.12',
        TICKET: '1707'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4510.0',
        RDTO: '24.46',
        HUMEDAD: '44.29',
        ACIDEZ: '0.09',
        TICKET: '1708'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4850.0',
        RDTO: '18.05',
        HUMEDAD: '45.05',
        ACIDEZ: '0.1',
        TICKET: '1709'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2942.0',
        RDTO: '25.93',
        HUMEDAD: '44.43',
        ACIDEZ: '0.18',
        TICKET: '1710'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1403.0',
        RDTO: '20.76',
        HUMEDAD: '46.31',
        ACIDEZ: '0.05',
        TICKET: '1711'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4914.0',
        RDTO: '22.94',
        HUMEDAD: '46.62',
        ACIDEZ: '0.19',
        TICKET: '1712'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '8078.0',
        RDTO: '22.61',
        HUMEDAD: '49.16',
        ACIDEZ: '0.2',
        TICKET: '1713'
    },
    {
        DIA: '26',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1940.0',
        RDTO: '23.46',
        HUMEDAD: '43.15',
        ACIDEZ: '0.21',
        TICKET: '1761'
    },
    {
        DIA: '28',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '341.0',
        RDTO: '20.16',
        HUMEDAD: '44.84',
        ACIDEZ: '0.27',
        TICKET: '1762'
    },
    {
        DIA: '28',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5136.0',
        RDTO: '25.06',
        HUMEDAD: '42.43',
        ACIDEZ: '0.15',
        TICKET: '1763'
    },
    {
        DIA: '21',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '53.0',
        RDTO: '26.55',
        HUMEDAD: '43.25',
        ACIDEZ: '0.13',
        TICKET: '1714'
    },
    {
        DIA: '21',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2696.0',
        RDTO: '24.61',
        HUMEDAD: '40.7',
        ACIDEZ: '0.18',
        TICKET: '1715'
    },
    {
        DIA: '21',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1262.0',
        RDTO: '24.34',
        HUMEDAD: '42.39',
        ACIDEZ: '0.04',
        TICKET: '1716'
    },
    {
        DIA: '21',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2749.0',
        RDTO: '21.89',
        HUMEDAD: '44.46',
        ACIDEZ: '0.19',
        TICKET: '1717'
    },
    {
        DIA: '21',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4378.0',
        RDTO: '25.79',
        HUMEDAD: '40.68',
        ACIDEZ: '0.02',
        TICKET: '1718'
    },
    {
        DIA: '21',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5624.0',
        RDTO: '24.96',
        HUMEDAD: '43.8',
        ACIDEZ: '0.12',
        TICKET: '1719'
    },
    {
        DIA: '21',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '8520.0',
        RDTO: '24.8',
        HUMEDAD: '43.41',
        ACIDEZ: '0.23',
        TICKET: '1720'
    },
    {
        DIA: '21',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3056.0',
        RDTO: '25.25',
        HUMEDAD: '43.55',
        ACIDEZ: '0.19',
        TICKET: '1721'
    },
    {
        DIA: '21',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4805.0',
        RDTO: '21.62',
        HUMEDAD: '43.58',
        ACIDEZ: '0.18',
        TICKET: '1722'
    },
    {
        DIA: '21',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '3351.0',
        RDTO: '17.38',
        HUMEDAD: '47.8',
        ACIDEZ: '0.28',
        TICKET: '1723'
    },
    {
        DIA: '21',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '5083.0',
        RDTO: '24.99',
        HUMEDAD: '42.61',
        ACIDEZ: '0.17',
        TICKET: '1724'
    },
    {
        DIA: '21',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1703.0',
        RDTO: '21.2',
        HUMEDAD: '45.89',
        ACIDEZ: '0.17',
        TICKET: '1725'
    },
    {
        DIA: '21',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1167.0',
        RDTO: '21.49',
        HUMEDAD: '51.47',
        ACIDEZ: '0.18',
        TICKET: '1726'
    },
    {
        DIA: '23',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '796.0',
        RDTO: '22.97',
        HUMEDAD: '41.65',
        ACIDEZ: '0.17',
        TICKET: '1727'
    },
    {
        DIA: '29',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '7193.0',
        RDTO: '19.55',
        HUMEDAD: '46.22',
        ACIDEZ: '0.14',
        TICKET: '1764'
    },
    {
        DIA: '30',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '774.0',
        RDTO: '18.93',
        HUMEDAD: '46.38',
        ACIDEZ: '0.19',
        TICKET: '1765'
    },
    {
        DIA: '30',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2130.0',
        RDTO: '25.92',
        HUMEDAD: '42.95',
        ACIDEZ: '0.1',
        TICKET: '1766'
    },
    {
        DIA: '30',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '305.0',
        RDTO: '20.55',
        HUMEDAD: '48.43',
        ACIDEZ: '0.22',
        TICKET: '1767'
    },
    {
        DIA: '30',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1362.0',
        RDTO: '21.84',
        HUMEDAD: '45.42',
        ACIDEZ: '0.18',
        TICKET: '1768'
    },
    {
        DIA: '30',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '1640.0',
        RDTO: '26.33',
        HUMEDAD: '42.48',
        ACIDEZ: '0.02',
        TICKET: '1769'
    },
    {
        DIA: '30',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '8440.0',
        RDTO: '23.0',
        HUMEDAD: '44.81',
        ACIDEZ: '0.13',
        TICKET: '1770'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '465.0',
        RDTO: '17.66',
        HUMEDAD: '51.37',
        ACIDEZ: '0.1',
        TICKET: '1'
    },
    {
        DIA: '31',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '504.0',
        RDTO: '22.29',
        HUMEDAD: '45.44',
        ACIDEZ: '0.06',
        TICKET: '1771'
    },
    {
        DIA: '31',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '521.0',
        RDTO: '16.48',
        HUMEDAD: '47.8',
        ACIDEZ: '0.25',
        TICKET: '1772'
    },
    {
        DIA: '31',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '4313.0',
        RDTO: '22.21',
        HUMEDAD: '46.4',
        ACIDEZ: '0.14',
        TICKET: '1773'
    },
    {
        DIA: '31',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '2378.0',
        RDTO: '24.91',
        HUMEDAD: '42.31',
        ACIDEZ: '0.09',
        TICKET: '1774'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '329.0',
        RDTO: '18.38',
        HUMEDAD: '49.2',
        ACIDEZ: '0.23',
        TICKET: '2'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1532.0',
        RDTO: '22.94',
        HUMEDAD: '50.16',
        ACIDEZ: '0.27',
        TICKET: '9'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '664.0',
        RDTO: '17.04',
        HUMEDAD: '52.79',
        ACIDEZ: '0.24',
        TICKET: '10'
    },
    {
        DIA: '31',
        MES: '1',
        ANYO: '2017',
        KGSACEITUNA: '267.0',
        RDTO: '22.74',
        HUMEDAD: '45.8',
        ACIDEZ: '0.06',
        TICKET: '1775'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1992.0',
        RDTO: '24.01',
        HUMEDAD: '44.82',
        ACIDEZ: '0.25',
        TICKET: '3'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1610.0',
        RDTO: '18.13',
        HUMEDAD: '51.82',
        ACIDEZ: '0.21',
        TICKET: '4'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '778.0',
        RDTO: '23.48',
        HUMEDAD: '47.67',
        ACIDEZ: '0.25',
        TICKET: '5'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '922.0',
        RDTO: '25.25',
        HUMEDAD: '45.67',
        ACIDEZ: '0.22',
        TICKET: '6'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1682.0',
        RDTO: '22.36',
        HUMEDAD: '50.4',
        ACIDEZ: '0.19',
        TICKET: '7'
    },
    {
        DIA: '2',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2947.0',
        RDTO: '22.13',
        HUMEDAD: '52.78',
        ACIDEZ: '0.26',
        TICKET: '8'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '784.0',
        RDTO: '23.21',
        HUMEDAD: '48.81',
        ACIDEZ: '0.23',
        TICKET: '11'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1260.0',
        RDTO: '24.92',
        HUMEDAD: '45.7',
        ACIDEZ: '0.25',
        TICKET: '12'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1822.0',
        RDTO: '13.2',
        HUMEDAD: '53.26',
        ACIDEZ: '0.15',
        TICKET: '13'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1881.0',
        RDTO: '24.04',
        HUMEDAD: '50.11',
        ACIDEZ: '0.22',
        TICKET: '14'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '427.0',
        RDTO: '14.45',
        HUMEDAD: '54.29',
        ACIDEZ: '0.08',
        TICKET: '15'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '5256.0',
        RDTO: '18.65',
        HUMEDAD: '49.82',
        ACIDEZ: '0.22',
        TICKET: '16'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '451.0',
        RDTO: '26.37',
        HUMEDAD: '43.21',
        ACIDEZ: '0.19',
        TICKET: '17'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '815.0',
        RDTO: '25.36',
        HUMEDAD: '43.11',
        ACIDEZ: '0.2',
        TICKET: '18'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3473.0',
        RDTO: '19.39',
        HUMEDAD: '56.74',
        ACIDEZ: '0.21',
        TICKET: '19'
    },
    {
        DIA: '3',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2317.0',
        RDTO: '22.16',
        HUMEDAD: '50.95',
        ACIDEZ: '0.16',
        TICKET: '20'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '477.0',
        RDTO: '23.66',
        HUMEDAD: '48.31',
        ACIDEZ: '0.46',
        TICKET: '22'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '916.0',
        RDTO: '19.44',
        HUMEDAD: '49.69',
        ACIDEZ: '0.3',
        TICKET: '21'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '435.0',
        RDTO: '18.17',
        HUMEDAD: '55.4',
        ACIDEZ: '0.34',
        TICKET: '23'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1076.0',
        RDTO: '20.86',
        HUMEDAD: '52.88',
        ACIDEZ: '0.17',
        TICKET: '24'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1253.0',
        RDTO: '18.51',
        HUMEDAD: '52.13',
        ACIDEZ: '0.38',
        TICKET: '25'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1505.0',
        RDTO: '21.32',
        HUMEDAD: '52.84',
        ACIDEZ: '0.17',
        TICKET: '26'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1248.0',
        RDTO: '27.22',
        HUMEDAD: '46.77',
        ACIDEZ: '0.26',
        TICKET: '27'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1927.0',
        RDTO: '17.5',
        HUMEDAD: '53.5',
        ACIDEZ: '0.34',
        TICKET: '28'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '411.0',
        RDTO: '19.33',
        HUMEDAD: '54.72',
        ACIDEZ: '0.36',
        TICKET: '29'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2354.0',
        RDTO: '23.74',
        HUMEDAD: '51.27',
        ACIDEZ: '0.32',
        TICKET: '30'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2739.0',
        RDTO: '20.39',
        HUMEDAD: '56.07',
        ACIDEZ: '0.25',
        TICKET: '31'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '263.0',
        RDTO: '29.53',
        HUMEDAD: '41.45',
        ACIDEZ: '0.85',
        TICKET: '32'
    },
    {
        DIA: '6',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2386.0',
        RDTO: '19.56',
        HUMEDAD: '56.25',
        ACIDEZ: '0.25',
        TICKET: '33'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1976.0',
        RDTO: '23.66',
        HUMEDAD: '49.59',
        ACIDEZ: '0.21',
        TICKET: '41'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2343.0',
        RDTO: '20.48',
        HUMEDAD: '54.48',
        ACIDEZ: '0.31',
        TICKET: '42'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '570.0',
        RDTO: '22.5',
        HUMEDAD: '51.02',
        ACIDEZ: '0.41',
        TICKET: '34'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '890.0',
        RDTO: '22.91',
        HUMEDAD: '50.56',
        ACIDEZ: '0.23',
        TICKET: '35'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '336.0',
        RDTO: '19.37',
        HUMEDAD: '50.14',
        ACIDEZ: '0.38',
        TICKET: '36'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '336.0',
        RDTO: '18.4',
        HUMEDAD: '54.94',
        ACIDEZ: '0.31',
        TICKET: '37'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '315.0',
        RDTO: '18.4',
        HUMEDAD: '54.94',
        ACIDEZ: '0.31',
        TICKET: '38'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2466.0',
        RDTO: '23.94',
        HUMEDAD: '52.72',
        ACIDEZ: '0.31',
        TICKET: '39'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3690.0',
        RDTO: '18.8',
        HUMEDAD: '51.12',
        ACIDEZ: '0.31',
        TICKET: '40'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2929.0',
        RDTO: '15.82',
        HUMEDAD: '55.37',
        ACIDEZ: '0.37',
        TICKET: '43'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '530.0',
        RDTO: '28.6',
        HUMEDAD: '44.99',
        ACIDEZ: '0.23',
        TICKET: '44'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1672.0',
        RDTO: '15.23',
        HUMEDAD: '54.14',
        ACIDEZ: '0.21',
        TICKET: '45'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2286.0',
        RDTO: '18.39',
        HUMEDAD: '58.07',
        ACIDEZ: '0.4',
        TICKET: '46'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '497.0',
        RDTO: '18.99',
        HUMEDAD: '53.75',
        ACIDEZ: '0.32',
        TICKET: '47'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '491.0',
        RDTO: '26.21',
        HUMEDAD: '48.39',
        ACIDEZ: '0.48',
        TICKET: '48'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2472.0',
        RDTO: '22.63',
        HUMEDAD: '51.62',
        ACIDEZ: '0.25',
        TICKET: '49'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '738.0',
        RDTO: '24.06',
        HUMEDAD: '45.47',
        ACIDEZ: '0.2',
        TICKET: '50'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4144.0',
        RDTO: '21.85',
        HUMEDAD: '51.83',
        ACIDEZ: '0.2',
        TICKET: '51'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '805.0',
        RDTO: '26.99',
        HUMEDAD: '42.1',
        ACIDEZ: '0.45',
        TICKET: '54'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '722.0',
        RDTO: '25.42',
        HUMEDAD: '46.07',
        ACIDEZ: '0.34',
        TICKET: '52'
    },
    {
        DIA: '7',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1636.0',
        RDTO: '22.05',
        HUMEDAD: '54.36',
        ACIDEZ: '0.27',
        TICKET: '53'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '667.0',
        RDTO: '27.51',
        HUMEDAD: '42.49',
        ACIDEZ: '0.25',
        TICKET: '55'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '305.0',
        RDTO: '23.8',
        HUMEDAD: '50.63',
        ACIDEZ: '0.23',
        TICKET: '56'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '403.0',
        RDTO: '20.45',
        HUMEDAD: '49.87',
        ACIDEZ: '0.34',
        TICKET: '57'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '403.0',
        RDTO: '20.45',
        HUMEDAD: '49.87',
        ACIDEZ: '0.34',
        TICKET: '58'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '848.0',
        RDTO: '19.53',
        HUMEDAD: '48.24',
        ACIDEZ: '0.27',
        TICKET: '59'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '366.0',
        RDTO: '31.43',
        HUMEDAD: '43.58',
        ACIDEZ: '0.26',
        TICKET: '60'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3486.0',
        RDTO: '19.14',
        HUMEDAD: '50.03',
        ACIDEZ: '0.27',
        TICKET: '61'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '429.0',
        RDTO: '23.4',
        HUMEDAD: '52.35',
        ACIDEZ: '0.23',
        TICKET: '62'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2852.0',
        RDTO: '22.76',
        HUMEDAD: '52.83',
        ACIDEZ: '0.23',
        TICKET: '63'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1755.0',
        RDTO: '15.82',
        HUMEDAD: '55.65',
        ACIDEZ: '0.23',
        TICKET: '64'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2095.0',
        RDTO: '18.84',
        HUMEDAD: '54.06',
        ACIDEZ: '0.19',
        TICKET: '65'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1456.0',
        RDTO: '25.11',
        HUMEDAD: '48.38',
        ACIDEZ: '0.21',
        TICKET: '66'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2764.0',
        RDTO: '18.33',
        HUMEDAD: '53.2',
        ACIDEZ: '0.23',
        TICKET: '67'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2677.0',
        RDTO: '17.58',
        HUMEDAD: '58.67',
        ACIDEZ: '0.27',
        TICKET: '68'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '643.0',
        RDTO: '20.67',
        HUMEDAD: '55.06',
        ACIDEZ: '0.45',
        TICKET: '69'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1577.0',
        RDTO: '20.99',
        HUMEDAD: '52.79',
        ACIDEZ: '0.32',
        TICKET: '70'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2526.0',
        RDTO: '21.74',
        HUMEDAD: '53.1',
        ACIDEZ: '0.29',
        TICKET: '71'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '431.0',
        RDTO: '21.79',
        HUMEDAD: '47.14',
        ACIDEZ: '0.2',
        TICKET: '72'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4923.0',
        RDTO: '19.97',
        HUMEDAD: '53.27',
        ACIDEZ: '0.16',
        TICKET: '73'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3407.0',
        RDTO: '18.93',
        HUMEDAD: '50.63',
        ACIDEZ: '0.13',
        TICKET: '74'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '612.0',
        RDTO: '23.0',
        HUMEDAD: '48.1',
        ACIDEZ: '0.42',
        TICKET: '75'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '483.0',
        RDTO: '27.89',
        HUMEDAD: '40.88',
        ACIDEZ: '0.36',
        TICKET: '76'
    },
    {
        DIA: '8',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '904.0',
        RDTO: '21.99',
        HUMEDAD: '45.6',
        ACIDEZ: '0.2',
        TICKET: '77'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1124.0',
        RDTO: '21.4',
        HUMEDAD: '52.58',
        ACIDEZ: '0.24',
        TICKET: '78'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2992.0',
        RDTO: '16.86',
        HUMEDAD: '54.01',
        ACIDEZ: '0.28',
        TICKET: '88'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '800.0',
        RDTO: '23.41',
        HUMEDAD: '47.29',
        ACIDEZ: '0.49',
        TICKET: '79'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '814.0',
        RDTO: '23.94',
        HUMEDAD: '45.94',
        ACIDEZ: '0.44',
        TICKET: '80'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3400.0',
        RDTO: '18.89',
        HUMEDAD: '50.54',
        ACIDEZ: '0.24',
        TICKET: '81'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1903.0',
        RDTO: '21.57',
        HUMEDAD: '50.25',
        ACIDEZ: '0.28',
        TICKET: '82'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '304.0',
        RDTO: '20.07',
        HUMEDAD: '53.52',
        ACIDEZ: '0.31',
        TICKET: '83'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1603.0',
        RDTO: '24.07',
        HUMEDAD: '49.68',
        ACIDEZ: '0.26',
        TICKET: '84'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1467.0',
        RDTO: '18.98',
        HUMEDAD: '54.78',
        ACIDEZ: '0.42',
        TICKET: '85'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1092.0',
        RDTO: '21.59',
        HUMEDAD: '47.79',
        ACIDEZ: '0.23',
        TICKET: '86'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '567.0',
        RDTO: '25.77',
        HUMEDAD: '46.74',
        ACIDEZ: '0.26',
        TICKET: '87'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1681.0',
        RDTO: '22.16',
        HUMEDAD: '52.52',
        ACIDEZ: '0.25',
        TICKET: '96'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2260.0',
        RDTO: '19.57',
        HUMEDAD: '58.0',
        ACIDEZ: '0.27',
        TICKET: '89'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3141.0',
        RDTO: '20.34',
        HUMEDAD: '53.66',
        ACIDEZ: '0.31',
        TICKET: '90'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '413.0',
        RDTO: '22.7',
        HUMEDAD: '49.48',
        ACIDEZ: '0.49',
        TICKET: '91'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2660.0',
        RDTO: '21.19',
        HUMEDAD: '53.25',
        ACIDEZ: '0.31',
        TICKET: '92'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4342.0',
        RDTO: '19.97',
        HUMEDAD: '54.8',
        ACIDEZ: '0.16',
        TICKET: '93'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '942.0',
        RDTO: '24.06',
        HUMEDAD: '47.07',
        ACIDEZ: '0.26',
        TICKET: '94'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '5037.0',
        RDTO: '18.25',
        HUMEDAD: '51.91',
        ACIDEZ: '0.23',
        TICKET: '95'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '831.0',
        RDTO: '24.53',
        HUMEDAD: '47.47',
        ACIDEZ: '0.3',
        TICKET: '97'
    },
    {
        DIA: '9',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '990.0',
        RDTO: '23.08',
        HUMEDAD: '48.46',
        ACIDEZ: '0.45',
        TICKET: '98'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '304.0',
        RDTO: '20.83',
        HUMEDAD: '46.76',
        ACIDEZ: '0.25',
        TICKET: '99'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '103.0',
        RDTO: '20.56',
        HUMEDAD: '53.35',
        ACIDEZ: '0.37',
        TICKET: '100'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '559.0',
        RDTO: '22.68',
        HUMEDAD: '47.4',
        ACIDEZ: '0.36',
        TICKET: '101'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '517.0',
        RDTO: '20.39',
        HUMEDAD: '48.33',
        ACIDEZ: '0.2',
        TICKET: '102'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '646.0',
        RDTO: '23.39',
        HUMEDAD: '45.76',
        ACIDEZ: '0.29',
        TICKET: '103'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '422.0',
        RDTO: '22.13',
        HUMEDAD: '48.5',
        ACIDEZ: '0.37',
        TICKET: '104'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '422.0',
        RDTO: '22.13',
        HUMEDAD: '48.5',
        ACIDEZ: '0.37',
        TICKET: '105'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '469.0',
        RDTO: '20.74',
        HUMEDAD: '50.86',
        ACIDEZ: '0.3',
        TICKET: '106'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1421.0',
        RDTO: '20.19',
        HUMEDAD: '50.13',
        ACIDEZ: '0.22',
        TICKET: '107'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3020.0',
        RDTO: '17.45',
        HUMEDAD: '51.78',
        ACIDEZ: '0.24',
        TICKET: '108'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '613.0',
        RDTO: '19.32',
        HUMEDAD: '54.7',
        ACIDEZ: '0.39',
        TICKET: '109'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '363.0',
        RDTO: '23.52',
        HUMEDAD: '51.92',
        ACIDEZ: '0.28',
        TICKET: '127'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '679.0',
        RDTO: '20.41',
        HUMEDAD: '49.27',
        ACIDEZ: '0.32',
        TICKET: '110'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '387.0',
        RDTO: '15.68',
        HUMEDAD: '55.21',
        ACIDEZ: '0.23',
        TICKET: '111'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1408.0',
        RDTO: '23.33',
        HUMEDAD: '50.23',
        ACIDEZ: '0.2',
        TICKET: '112'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '693.0',
        RDTO: '22.91',
        HUMEDAD: '51.57',
        ACIDEZ: '0.31',
        TICKET: '113'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '354.0',
        RDTO: '27.54',
        HUMEDAD: '44.62',
        ACIDEZ: '0.21',
        TICKET: '114'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1348.0',
        RDTO: '21.6',
        HUMEDAD: '51.19',
        ACIDEZ: '0.23',
        TICKET: '115'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3517.0',
        RDTO: '15.6',
        HUMEDAD: '52.78',
        ACIDEZ: '0.31',
        TICKET: '116'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '5512.0',
        RDTO: '20.25',
        HUMEDAD: '51.54',
        ACIDEZ: '0.29',
        TICKET: '117'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2925.0',
        RDTO: '20.36',
        HUMEDAD: '52.58',
        ACIDEZ: '0.32',
        TICKET: '118'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1715.0',
        RDTO: '20.42',
        HUMEDAD: '50.94',
        ACIDEZ: '0.25',
        TICKET: '119'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4529.0',
        RDTO: '20.38',
        HUMEDAD: '53.98',
        ACIDEZ: '0.22',
        TICKET: '120'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '544.0',
        RDTO: '24.48',
        HUMEDAD: '45.41',
        ACIDEZ: '0.21',
        TICKET: '121'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '6126.0',
        RDTO: '21.03',
        HUMEDAD: '53.65',
        ACIDEZ: '0.32',
        TICKET: '122'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '706.0',
        RDTO: '24.53',
        HUMEDAD: '46.27',
        ACIDEZ: '0.21',
        TICKET: '123'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3946.0',
        RDTO: '17.92',
        HUMEDAD: '50.74',
        ACIDEZ: '0.2',
        TICKET: '124'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '8775.0',
        RDTO: '18.17',
        HUMEDAD: '51.87',
        ACIDEZ: '0.39',
        TICKET: '125'
    },
    {
        DIA: '10',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1216.0',
        RDTO: '23.65',
        HUMEDAD: '44.62',
        ACIDEZ: '0.29',
        TICKET: '126'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '502.0',
        RDTO: '28.09',
        HUMEDAD: '42.73',
        ACIDEZ: '0.27',
        TICKET: '128'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '380.0',
        RDTO: '23.65',
        HUMEDAD: '45.39',
        ACIDEZ: '0.29',
        TICKET: '129'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '380.0',
        RDTO: '23.63',
        HUMEDAD: '45.39',
        ACIDEZ: '0.29',
        TICKET: '130'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1559.0',
        RDTO: '20.44',
        HUMEDAD: '49.5',
        ACIDEZ: '0.27',
        TICKET: '131'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '669.0',
        RDTO: '18.08',
        HUMEDAD: '57.88',
        ACIDEZ: '0.64',
        TICKET: '132'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1260.0',
        RDTO: '24.8',
        HUMEDAD: '43.86',
        ACIDEZ: '0.33',
        TICKET: '133'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1043.0',
        RDTO: '18.34',
        HUMEDAD: '51.12',
        ACIDEZ: '0.36',
        TICKET: '134'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '900.0',
        RDTO: '23.4',
        HUMEDAD: '51.99',
        ACIDEZ: '0.29',
        TICKET: '135'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3099.0',
        RDTO: '18.52',
        HUMEDAD: '50.92',
        ACIDEZ: '0.43',
        TICKET: '136'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '632.0',
        RDTO: '18.04',
        HUMEDAD: '53.65',
        ACIDEZ: '0.29',
        TICKET: '137'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1120.0',
        RDTO: '22.74',
        HUMEDAD: '49.63',
        ACIDEZ: '0.27',
        TICKET: '138'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '462.0',
        RDTO: '23.24',
        HUMEDAD: '46.61',
        ACIDEZ: '0.5',
        TICKET: '139'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '869.0',
        RDTO: '21.86',
        HUMEDAD: '49.45',
        ACIDEZ: '0.26',
        TICKET: '140'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2290.0',
        RDTO: '19.4',
        HUMEDAD: '53.15',
        ACIDEZ: '0.31',
        TICKET: '141'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1362.0',
        RDTO: '25.73',
        HUMEDAD: '47.82',
        ACIDEZ: '0.26',
        TICKET: '142'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '318.0',
        RDTO: '26.72',
        HUMEDAD: '44.16',
        ACIDEZ: '0.24',
        TICKET: '143'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2406.0',
        RDTO: '23.33',
        HUMEDAD: '47.29',
        ACIDEZ: '0.26',
        TICKET: '144'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3063.0',
        RDTO: '14.55',
        HUMEDAD: '56.35',
        ACIDEZ: '0.27',
        TICKET: '145'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1000.0',
        RDTO: '25.54',
        HUMEDAD: '44.55',
        ACIDEZ: '0.26',
        TICKET: '146'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1049.0',
        RDTO: '23.87',
        HUMEDAD: '47.52',
        ACIDEZ: '0.27',
        TICKET: '147'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4575.0',
        RDTO: '17.53',
        HUMEDAD: '52.93',
        ACIDEZ: '0.25',
        TICKET: '148'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4301.0',
        RDTO: '22.94',
        HUMEDAD: '51.81',
        ACIDEZ: '0.26',
        TICKET: '149'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '650.0',
        RDTO: '22.07',
        HUMEDAD: '49.12',
        ACIDEZ: '0.36',
        TICKET: '150'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3675.0',
        RDTO: '20.71',
        HUMEDAD: '54.69',
        ACIDEZ: '0.25',
        TICKET: '151'
    },
    {
        DIA: '11',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '8686.0',
        RDTO: '19.31',
        HUMEDAD: '50.68',
        ACIDEZ: '0.32',
        TICKET: '152'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '736.0',
        RDTO: '22.51',
        HUMEDAD: '51.25',
        ACIDEZ: '0.25',
        TICKET: '154'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '502.0',
        RDTO: '26.84',
        HUMEDAD: '48.61',
        ACIDEZ: '0.22',
        TICKET: '155'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '366.0',
        RDTO: '20.99',
        HUMEDAD: '49.45',
        ACIDEZ: '0.42',
        TICKET: '156'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '366.0',
        RDTO: '20.99',
        HUMEDAD: '49.45',
        ACIDEZ: '0.42',
        TICKET: '157'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1620.0',
        RDTO: '20.99',
        HUMEDAD: '49.45',
        ACIDEZ: '0.42',
        TICKET: '158'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '817.0',
        RDTO: '22.34',
        HUMEDAD: '50.3',
        ACIDEZ: '0.23',
        TICKET: '159'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1199.0',
        RDTO: '19.43',
        HUMEDAD: '52.32',
        ACIDEZ: '0.45',
        TICKET: '160'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1399.0',
        RDTO: '21.86',
        HUMEDAD: '49.91',
        ACIDEZ: '0.22',
        TICKET: '161'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '998.0',
        RDTO: '27.17',
        HUMEDAD: '47.19',
        ACIDEZ: '0.23',
        TICKET: '162'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '243.0',
        RDTO: '21.35',
        HUMEDAD: '46.88',
        ACIDEZ: '0.17',
        TICKET: '153'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '865.0',
        RDTO: '21.64',
        HUMEDAD: '48.85',
        ACIDEZ: '0.24',
        TICKET: '163'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2102.0',
        RDTO: '17.04',
        HUMEDAD: '52.71',
        ACIDEZ: '0.25',
        TICKET: '164'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '420.0',
        RDTO: '22.59',
        HUMEDAD: '46.95',
        ACIDEZ: '0.42',
        TICKET: '165'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '961.0',
        RDTO: '24.95',
        HUMEDAD: '50.37',
        ACIDEZ: '0.23',
        TICKET: '166'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1714.0',
        RDTO: '16.83',
        HUMEDAD: '55.25',
        ACIDEZ: '0.21',
        TICKET: '167'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '277.0',
        RDTO: '24.79',
        HUMEDAD: '48.86',
        ACIDEZ: '0.22',
        TICKET: '168'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '8062.0',
        RDTO: '15.68',
        HUMEDAD: '54.7',
        ACIDEZ: '0.22',
        TICKET: '185'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1270.0',
        RDTO: '22.0',
        HUMEDAD: '47.12',
        ACIDEZ: '0.23',
        TICKET: '169'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1893.0',
        RDTO: '21.13',
        HUMEDAD: '46.01',
        ACIDEZ: '0.26',
        TICKET: '170'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2636.0',
        RDTO: '17.47',
        HUMEDAD: '52.25',
        ACIDEZ: '0.26',
        TICKET: '171'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1073.0',
        RDTO: '21.42',
        HUMEDAD: '49.81',
        ACIDEZ: '0.45',
        TICKET: '172'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1150.0',
        RDTO: '21.91',
        HUMEDAD: '50.1',
        ACIDEZ: '0.37',
        TICKET: '173'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1220.0',
        RDTO: '20.11',
        HUMEDAD: '52.12',
        ACIDEZ: '0.55',
        TICKET: '174'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '149.0',
        RDTO: '24.42',
        HUMEDAD: '45.92',
        ACIDEZ: '0.52',
        TICKET: '175'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3635.0',
        RDTO: '18.16',
        HUMEDAD: '52.2',
        ACIDEZ: '0.37',
        TICKET: '176'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4762.0',
        RDTO: '22.78',
        HUMEDAD: '51.26',
        ACIDEZ: '0.23',
        TICKET: '177'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '5010.0',
        RDTO: '20.81',
        HUMEDAD: '52.31',
        ACIDEZ: '0.21',
        TICKET: '178'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2759.0',
        RDTO: '22.99',
        HUMEDAD: '52.28',
        ACIDEZ: '0.22',
        TICKET: '179'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '267.0',
        RDTO: '26.02',
        HUMEDAD: '47.82',
        ACIDEZ: '0.21',
        TICKET: '180'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '8406.0',
        RDTO: '15.1',
        HUMEDAD: '55.2',
        ACIDEZ: '0.28',
        TICKET: '186'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '838.0',
        RDTO: '15.23',
        HUMEDAD: '54.87',
        ACIDEZ: '0.22',
        TICKET: '187'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '775.0',
        RDTO: '15.59',
        HUMEDAD: '54.55',
        ACIDEZ: '0.21',
        TICKET: '188'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '758.0',
        RDTO: '16.95',
        HUMEDAD: '53.62',
        ACIDEZ: '0.2',
        TICKET: '189'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '199.0',
        RDTO: '16.85',
        HUMEDAD: '54.0',
        ACIDEZ: '0.23',
        TICKET: '190'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '266.0',
        RDTO: '16.74',
        HUMEDAD: '53.99',
        ACIDEZ: '0.21',
        TICKET: '191'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '203.0',
        RDTO: '16.72',
        HUMEDAD: '53.27',
        ACIDEZ: '0.19',
        TICKET: '192'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3861.0',
        RDTO: '22.03',
        HUMEDAD: '47.3',
        ACIDEZ: '0.2',
        TICKET: '181'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2301.0',
        RDTO: '15.52',
        HUMEDAD: '55.18',
        ACIDEZ: '0.17',
        TICKET: '182'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '9272.0',
        RDTO: '19.5',
        HUMEDAD: '49.89',
        ACIDEZ: '0.32',
        TICKET: '183'
    },
    {
        DIA: '13',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2813.0',
        RDTO: '26.57',
        HUMEDAD: '45.42',
        ACIDEZ: '0.26',
        TICKET: '184'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '364.0',
        RDTO: '20.51',
        HUMEDAD: '48.24',
        ACIDEZ: '0.4',
        TICKET: '193'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '364.0',
        RDTO: '20.51',
        HUMEDAD: '48.24',
        ACIDEZ: '0.4',
        TICKET: '194'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1470.0',
        RDTO: '22.23',
        HUMEDAD: '49.41',
        ACIDEZ: '0.27',
        TICKET: '195'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1084.0',
        RDTO: '18.74',
        HUMEDAD: '53.21',
        ACIDEZ: '0.37',
        TICKET: '196'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '305.0',
        RDTO: '25.14',
        HUMEDAD: '44.03',
        ACIDEZ: '0.36',
        TICKET: '197'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '384.0',
        RDTO: '21.97',
        HUMEDAD: '50.43',
        ACIDEZ: '0.46',
        TICKET: '198'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '539.0',
        RDTO: '27.09',
        HUMEDAD: '40.42',
        ACIDEZ: '0.3',
        TICKET: '199'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '793.0',
        RDTO: '20.39',
        HUMEDAD: '48.85',
        ACIDEZ: '0.32',
        TICKET: '200'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1723.0',
        RDTO: '20.19',
        HUMEDAD: '52.17',
        ACIDEZ: '0.26',
        TICKET: '201'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2308.0',
        RDTO: '17.34',
        HUMEDAD: '52.89',
        ACIDEZ: '0.31',
        TICKET: '202'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '940.0',
        RDTO: '24.6',
        HUMEDAD: '49.63',
        ACIDEZ: '0.27',
        TICKET: '203'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1388.0',
        RDTO: '22.97',
        HUMEDAD: '48.87',
        ACIDEZ: '0.25',
        TICKET: '204'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1309.0',
        RDTO: '21.17',
        HUMEDAD: '50.51',
        ACIDEZ: '0.42',
        TICKET: '205'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4004.0',
        RDTO: '18.21',
        HUMEDAD: '50.25',
        ACIDEZ: '0.14',
        TICKET: '206'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4605.0',
        RDTO: '20.45',
        HUMEDAD: '48.7',
        ACIDEZ: '0.29',
        TICKET: '207'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1229.0',
        RDTO: '22.98',
        HUMEDAD: '49.3',
        ACIDEZ: '0.27',
        TICKET: '208'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4076.0',
        RDTO: '21.07',
        HUMEDAD: '51.16',
        ACIDEZ: '0.21',
        TICKET: '209'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '5722.0',
        RDTO: '17.02',
        HUMEDAD: '54.49',
        ACIDEZ: '0.23',
        TICKET: '210'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3244.0',
        RDTO: '19.78',
        HUMEDAD: '51.58',
        ACIDEZ: '0.35',
        TICKET: '216'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '373.0',
        RDTO: '22.42',
        HUMEDAD: '47.68',
        ACIDEZ: '0.29',
        TICKET: '217'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1891.0',
        RDTO: '20.79',
        HUMEDAD: '51.44',
        ACIDEZ: '0.28',
        TICKET: '218'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1751.0',
        RDTO: '23.45',
        HUMEDAD: '47.27',
        ACIDEZ: '0.23',
        TICKET: '1293'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1094.0',
        RDTO: '18.53',
        HUMEDAD: '53.47',
        ACIDEZ: '0.46',
        TICKET: '219'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '904.0',
        RDTO: '20.8',
        HUMEDAD: '50.31',
        ACIDEZ: '0.26',
        TICKET: '220'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1060.0',
        RDTO: '24.31',
        HUMEDAD: '50.0',
        ACIDEZ: '0.27',
        TICKET: '221'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1886.0',
        RDTO: '20.53',
        HUMEDAD: '49.43',
        ACIDEZ: '0.24',
        TICKET: '222'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '490.0',
        RDTO: '20.09',
        HUMEDAD: '52.89',
        ACIDEZ: '0.25',
        TICKET: '223'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1921.0',
        RDTO: '19.98',
        HUMEDAD: '51.67',
        ACIDEZ: '0.26',
        TICKET: '224'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1005.0',
        RDTO: '23.68',
        HUMEDAD: '47.11',
        ACIDEZ: '0.27',
        TICKET: '225'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '530.0',
        RDTO: '26.01',
        HUMEDAD: '43.43',
        ACIDEZ: '0.25',
        TICKET: '226'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1960.0',
        RDTO: '17.28',
        HUMEDAD: '54.99',
        ACIDEZ: '0.3',
        TICKET: '359'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4998.0',
        RDTO: '22.01',
        HUMEDAD: '54.2',
        ACIDEZ: '0.27',
        TICKET: '211'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '5932.0',
        RDTO: '15.97',
        HUMEDAD: '59.67',
        ACIDEZ: '0.36',
        TICKET: '212'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '9097.0',
        RDTO: '18.74',
        HUMEDAD: '51.81',
        ACIDEZ: '0.4',
        TICKET: '213'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '662.0',
        RDTO: '22.15',
        HUMEDAD: '52.09',
        ACIDEZ: '0.24',
        TICKET: '214'
    },
    {
        DIA: '14',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1033.0',
        RDTO: '21.22',
        HUMEDAD: '50.56',
        ACIDEZ: '0.33',
        TICKET: '215'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1143.0',
        RDTO: '19.36',
        HUMEDAD: '49.65',
        ACIDEZ: '0.4',
        TICKET: '227'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1045.0',
        RDTO: '24.49',
        HUMEDAD: '47.81',
        ACIDEZ: '0.27',
        TICKET: '228'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3850.0',
        RDTO: '18.23',
        HUMEDAD: '50.56',
        ACIDEZ: '0.2',
        TICKET: '229'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1380.0',
        RDTO: '22.37',
        HUMEDAD: '50.6',
        ACIDEZ: '0.51',
        TICKET: '230'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2424.0',
        RDTO: '20.07',
        HUMEDAD: '50.88',
        ACIDEZ: '0.38',
        TICKET: '231'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3401.0',
        RDTO: '21.75',
        HUMEDAD: '47.47',
        ACIDEZ: '0.27',
        TICKET: '232'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '5648.0',
        RDTO: '22.41',
        HUMEDAD: '51.7',
        ACIDEZ: '0.27',
        TICKET: '233'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3183.0',
        RDTO: '20.28',
        HUMEDAD: '49.66',
        ACIDEZ: '0.07',
        TICKET: '234'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '796.0',
        RDTO: '20.28',
        HUMEDAD: '49.66',
        ACIDEZ: '0.07',
        TICKET: '235'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4843.0',
        RDTO: '17.13',
        HUMEDAD: '58.21',
        ACIDEZ: '0.37',
        TICKET: '236'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '6852.0',
        RDTO: '20.14',
        HUMEDAD: '50.47',
        ACIDEZ: '0.46',
        TICKET: '237'
    },
    {
        DIA: '15',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '609.0',
        RDTO: '21.61',
        HUMEDAD: '49.79',
        ACIDEZ: '0.44',
        TICKET: '238'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '680.0',
        RDTO: '22.03',
        HUMEDAD: '47.15',
        ACIDEZ: '0.16',
        TICKET: '239'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '307.0',
        RDTO: '23.76',
        HUMEDAD: '47.62',
        ACIDEZ: '0.4',
        TICKET: '240'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2063.0',
        RDTO: '21.62',
        HUMEDAD: '46.74',
        ACIDEZ: '0.18',
        TICKET: '241'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '516.0',
        RDTO: '21.62',
        HUMEDAD: '46.74',
        ACIDEZ: '0.18',
        TICKET: '242'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '589.0',
        RDTO: '18.69',
        HUMEDAD: '53.94',
        ACIDEZ: '0.35',
        TICKET: '243'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '685.0',
        RDTO: '20.03',
        HUMEDAD: '49.71',
        ACIDEZ: '0.2',
        TICKET: '244'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '787.0',
        RDTO: '25.73',
        HUMEDAD: '44.51',
        ACIDEZ: '0.41',
        TICKET: '245'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '874.0',
        RDTO: '18.57',
        HUMEDAD: '52.96',
        ACIDEZ: '0.24',
        TICKET: '246'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '427.0',
        RDTO: '23.91',
        HUMEDAD: '46.31',
        ACIDEZ: '0.38',
        TICKET: '247'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2005.0',
        RDTO: '20.02',
        HUMEDAD: '46.86',
        ACIDEZ: '0.27',
        TICKET: '248'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '620.0',
        RDTO: '19.68',
        HUMEDAD: '53.39',
        ACIDEZ: '0.46',
        TICKET: '249'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4353.0',
        RDTO: '18.61',
        HUMEDAD: '48.93',
        ACIDEZ: '0.06',
        TICKET: '250'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '619.0',
        RDTO: '23.29',
        HUMEDAD: '48.1',
        ACIDEZ: '0.16',
        TICKET: '251'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '398.0',
        RDTO: '21.38',
        HUMEDAD: '48.98',
        ACIDEZ: '0.21',
        TICKET: '252'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1028.0',
        RDTO: '23.95',
        HUMEDAD: '50.88',
        ACIDEZ: '0.18',
        TICKET: '253'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3074.0',
        RDTO: '16.47',
        HUMEDAD: '54.01',
        ACIDEZ: '0.17',
        TICKET: '264'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1429.0',
        RDTO: '20.35',
        HUMEDAD: '51.65',
        ACIDEZ: '0.18',
        TICKET: '254'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1814.0',
        RDTO: '22.57',
        HUMEDAD: '48.41',
        ACIDEZ: '0.16',
        TICKET: '255'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1286.0',
        RDTO: '20.76',
        HUMEDAD: '50.67',
        ACIDEZ: '0.23',
        TICKET: '256'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3450.0',
        RDTO: '17.9',
        HUMEDAD: '49.45',
        ACIDEZ: '0.16',
        TICKET: '257'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4879.0',
        RDTO: '18.75',
        HUMEDAD: '54.97',
        ACIDEZ: '0.16',
        TICKET: '258'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3695.0',
        RDTO: '23.96',
        HUMEDAD: '47.92',
        ACIDEZ: '0.25',
        TICKET: '259'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '924.0',
        RDTO: '23.96',
        HUMEDAD: '47.92',
        ACIDEZ: '0.25',
        TICKET: '260'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2048.0',
        RDTO: '21.64',
        HUMEDAD: '51.05',
        ACIDEZ: '0.17',
        TICKET: '261'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '5126.0',
        RDTO: '18.93',
        HUMEDAD: '54.89',
        ACIDEZ: '0.42',
        TICKET: '262'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '10105.0',
        RDTO: '16.49',
        HUMEDAD: '53.58',
        ACIDEZ: '0.35',
        TICKET: '263'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3039.0',
        RDTO: '16.05',
        HUMEDAD: '54.51',
        ACIDEZ: '0.16',
        TICKET: '265'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3069.0',
        RDTO: '16.11',
        HUMEDAD: '54.24',
        ACIDEZ: '0.15',
        TICKET: '266'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '449.0',
        RDTO: '23.47',
        HUMEDAD: '47.51',
        ACIDEZ: '0.22',
        TICKET: '267'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '808.0',
        RDTO: '23.38',
        HUMEDAD: '45.84',
        ACIDEZ: '0.28',
        TICKET: '268'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '201.0',
        RDTO: '18.58',
        HUMEDAD: '55.6',
        ACIDEZ: '0.28',
        TICKET: '269'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '754.0',
        RDTO: '20.12',
        HUMEDAD: '52.04',
        ACIDEZ: '0.23',
        TICKET: '270'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '499.0',
        RDTO: '22.24',
        HUMEDAD: '46.24',
        ACIDEZ: '0.18',
        TICKET: '271'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '518.0',
        RDTO: '26.09',
        HUMEDAD: '43.7',
        ACIDEZ: '0.24',
        TICKET: '272'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1257.0',
        RDTO: '19.3',
        HUMEDAD: '50.28',
        ACIDEZ: '0.18',
        TICKET: '273'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1084.0',
        RDTO: '23.06',
        HUMEDAD: '46.51',
        ACIDEZ: '0.49',
        TICKET: '274'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2686.0',
        RDTO: '14.93',
        HUMEDAD: '55.34',
        ACIDEZ: '0.25',
        TICKET: '275'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4065.0',
        RDTO: '25.32',
        HUMEDAD: '45.01',
        ACIDEZ: '0.16',
        TICKET: '276'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '719.0',
        RDTO: '22.97',
        HUMEDAD: '48.24',
        ACIDEZ: '0.28',
        TICKET: '277'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1451.0',
        RDTO: '20.03',
        HUMEDAD: '50.87',
        ACIDEZ: '0.15',
        TICKET: '278'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1206.0',
        RDTO: '22.21',
        HUMEDAD: '49.33',
        ACIDEZ: '0.24',
        TICKET: '279'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '830.0',
        RDTO: '20.89',
        HUMEDAD: '48.79',
        ACIDEZ: '0.43',
        TICKET: '280'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3321.0',
        RDTO: '20.89',
        HUMEDAD: '48.79',
        ACIDEZ: '0.43',
        TICKET: '281'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '772.0',
        RDTO: '24.53',
        HUMEDAD: '46.88',
        ACIDEZ: '0.17',
        TICKET: '282'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1430.0',
        RDTO: '21.83',
        HUMEDAD: '47.11',
        ACIDEZ: '0.22',
        TICKET: '283'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1836.0',
        RDTO: '21.35',
        HUMEDAD: '51.08',
        ACIDEZ: '0.16',
        TICKET: '284'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3238.0',
        RDTO: '21.29',
        HUMEDAD: '47.45',
        ACIDEZ: '0.15',
        TICKET: '285'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '809.0',
        RDTO: '21.29',
        HUMEDAD: '47.45',
        ACIDEZ: '0.15',
        TICKET: '286'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1196.0',
        RDTO: '23.34',
        HUMEDAD: '50.11',
        ACIDEZ: '0.17',
        TICKET: '287'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '8395.0',
        RDTO: '19.79',
        HUMEDAD: '52.6',
        ACIDEZ: '0.31',
        TICKET: '288'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '600.0',
        RDTO: '22.36',
        HUMEDAD: '48.29',
        ACIDEZ: '0.23',
        TICKET: '293'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '7788.0',
        RDTO: '15.76',
        HUMEDAD: '52.51',
        ACIDEZ: '0.12',
        TICKET: '294'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '994.0',
        RDTO: '20.18',
        HUMEDAD: '51.18',
        ACIDEZ: '0.28',
        TICKET: '295'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '703.0',
        RDTO: '19.36',
        HUMEDAD: '50.79',
        ACIDEZ: '0.22',
        TICKET: '296'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '650.0',
        RDTO: '19.48',
        HUMEDAD: '52.1',
        ACIDEZ: '0.32',
        TICKET: '297'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '5389.0',
        RDTO: '19.3',
        HUMEDAD: '54.79',
        ACIDEZ: '0.32',
        TICKET: '289'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3695.0',
        RDTO: '19.24',
        HUMEDAD: '49.53',
        ACIDEZ: '0.16',
        TICKET: '290'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '179.0',
        RDTO: '26.96',
        HUMEDAD: '39.55',
        ACIDEZ: '0.17',
        TICKET: '291'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '6566.0',
        RDTO: '19.81',
        HUMEDAD: '51.93',
        ACIDEZ: '0.12',
        TICKET: '292'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1016.0',
        RDTO: '19.39',
        HUMEDAD: '48.74',
        ACIDEZ: '0.26',
        TICKET: '298'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '890.0',
        RDTO: '21.27',
        HUMEDAD: '46.5',
        ACIDEZ: '0.27',
        TICKET: '299'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '727.0',
        RDTO: '22.82',
        HUMEDAD: '45.57',
        ACIDEZ: '0.33',
        TICKET: '300'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '710.0',
        RDTO: '23.17',
        HUMEDAD: '48.38',
        ACIDEZ: '0.31',
        TICKET: '301'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '432.0',
        RDTO: '18.98',
        HUMEDAD: '51.46',
        ACIDEZ: '0.25',
        TICKET: '302'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1003.0',
        RDTO: '21.21',
        HUMEDAD: '48.96',
        ACIDEZ: '0.32',
        TICKET: '303'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1133.0',
        RDTO: '20.94',
        HUMEDAD: '47.92',
        ACIDEZ: '0.16',
        TICKET: '304'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '533.0',
        RDTO: '20.16',
        HUMEDAD: '48.33',
        ACIDEZ: '0.24',
        TICKET: '305'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2879.0',
        RDTO: '17.48',
        HUMEDAD: '54.15',
        ACIDEZ: '0.25',
        TICKET: '306'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '770.0',
        RDTO: '24.53',
        HUMEDAD: '45.08',
        ACIDEZ: '0.17',
        TICKET: '307'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3300.0',
        RDTO: '26.15',
        HUMEDAD: '42.29',
        ACIDEZ: '0.16',
        TICKET: '308'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1548.0',
        RDTO: '21.36',
        HUMEDAD: '50.41',
        ACIDEZ: '0.3',
        TICKET: '309'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1285.0',
        RDTO: '22.02',
        HUMEDAD: '49.51',
        ACIDEZ: '0.25',
        TICKET: '310'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1582.0',
        RDTO: '21.33',
        HUMEDAD: '49.63',
        ACIDEZ: '0.15',
        TICKET: '311'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2282.0',
        RDTO: '20.71',
        HUMEDAD: '45.67',
        ACIDEZ: '0.14',
        TICKET: '312'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '571.0',
        RDTO: '20.71',
        HUMEDAD: '45.67',
        ACIDEZ: '0.14',
        TICKET: '313'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4057.0',
        RDTO: '22.79',
        HUMEDAD: '47.51',
        ACIDEZ: '0.22',
        TICKET: '314'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1014.0',
        RDTO: '22.79',
        HUMEDAD: '47.51',
        ACIDEZ: '0.22',
        TICKET: '315'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '7818.0',
        RDTO: '19.4',
        HUMEDAD: '52.68',
        ACIDEZ: '0.37',
        TICKET: '316'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3927.0',
        RDTO: '16.45',
        HUMEDAD: '58.2',
        ACIDEZ: '0.26',
        TICKET: '317'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1037.0',
        RDTO: '16.31',
        HUMEDAD: '52.28',
        ACIDEZ: '0.16',
        TICKET: '318'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '262.0',
        RDTO: '21.08',
        HUMEDAD: '48.86',
        ACIDEZ: '0.29',
        TICKET: '323'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '282.0',
        RDTO: '24.1',
        HUMEDAD: '49.37',
        ACIDEZ: '0.25',
        TICKET: '324'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '643.0',
        RDTO: '17.87',
        HUMEDAD: '50.54',
        ACIDEZ: '0.18',
        TICKET: '325'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1300.0',
        RDTO: '19.47',
        HUMEDAD: '49.35',
        ACIDEZ: '0.21',
        TICKET: '326'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1465.0',
        RDTO: '21.16',
        HUMEDAD: '48.14',
        ACIDEZ: '0.24',
        TICKET: '327'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '699.0',
        RDTO: '23.2',
        HUMEDAD: '45.31',
        ACIDEZ: '0.35',
        TICKET: '328'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2111.0',
        RDTO: '15.66',
        HUMEDAD: '54.24',
        ACIDEZ: '0.26',
        TICKET: '329'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '969.0',
        RDTO: '21.15',
        HUMEDAD: '48.4',
        ACIDEZ: '0.25',
        TICKET: '330'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '510.0',
        RDTO: '19.62',
        HUMEDAD: '49.54',
        ACIDEZ: '0.26',
        TICKET: '331'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2519.0',
        RDTO: '20.03',
        HUMEDAD: '50.56',
        ACIDEZ: '0.3',
        TICKET: '332'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1268.0',
        RDTO: '22.65',
        HUMEDAD: '49.13',
        ACIDEZ: '0.26',
        TICKET: '333'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3833.0',
        RDTO: '23.22',
        HUMEDAD: '46.59',
        ACIDEZ: '0.19',
        TICKET: '334'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4063.0',
        RDTO: '22.48',
        HUMEDAD: '53.56',
        ACIDEZ: '0.29',
        TICKET: '319'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1915.0',
        RDTO: '21.33',
        HUMEDAD: '47.12',
        ACIDEZ: '0.2',
        TICKET: '320'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '417.0',
        RDTO: '21.57',
        HUMEDAD: '44.3',
        ACIDEZ: '0.14',
        TICKET: '321'
    },
    {
        DIA: '18',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '201.0',
        RDTO: '26.31',
        HUMEDAD: '47.11',
        ACIDEZ: '0.26',
        TICKET: '322'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '142.0',
        RDTO: '21.09',
        HUMEDAD: '47.49',
        ACIDEZ: '0.43',
        TICKET: '335'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1404.0',
        RDTO: '17.31',
        HUMEDAD: '57.51',
        ACIDEZ: '0.3',
        TICKET: '336'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1186.0',
        RDTO: '20.27',
        HUMEDAD: '51.38',
        ACIDEZ: '0.18',
        TICKET: '337'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '873.0',
        RDTO: '25.87',
        HUMEDAD: '46.21',
        ACIDEZ: '0.34',
        TICKET: '338'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '6396.0',
        RDTO: '22.1',
        HUMEDAD: '48.86',
        ACIDEZ: '0.21',
        TICKET: '339'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1599.0',
        RDTO: '22.1',
        HUMEDAD: '48.86',
        ACIDEZ: '0.21',
        TICKET: '340'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '8942.0',
        RDTO: '19.32',
        HUMEDAD: '52.76',
        ACIDEZ: '0.28',
        TICKET: '341'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '195.0',
        RDTO: '23.19',
        HUMEDAD: '46.99',
        ACIDEZ: '0.29',
        TICKET: '342'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '503.0',
        RDTO: '26.32',
        HUMEDAD: '42.34',
        ACIDEZ: '0.18',
        TICKET: '350'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '666.0',
        RDTO: '18.04',
        HUMEDAD: '52.1',
        ACIDEZ: '0.2',
        TICKET: '351'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1450.0',
        RDTO: '20.19',
        HUMEDAD: '49.53',
        ACIDEZ: '0.23',
        TICKET: '352'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1357.0',
        RDTO: '21.8',
        HUMEDAD: '46.29',
        ACIDEZ: '0.19',
        TICKET: '353'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '436.0',
        RDTO: '18.28',
        HUMEDAD: '48.54',
        ACIDEZ: '0.3',
        TICKET: '343'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '7445.0',
        RDTO: '18.14',
        HUMEDAD: '55.25',
        ACIDEZ: '0.3',
        TICKET: '344'
    },
    {
        DIA: '20',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '234.0',
        RDTO: '27.93',
        HUMEDAD: '44.57',
        ACIDEZ: '0.17',
        TICKET: '345'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '508.0',
        RDTO: '21.3',
        HUMEDAD: '49.45',
        ACIDEZ: '0.32',
        TICKET: '346'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '582.0',
        RDTO: '21.52',
        HUMEDAD: '46.52',
        ACIDEZ: '0.17',
        TICKET: '347'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1527.0',
        RDTO: '16.0',
        HUMEDAD: '53.04',
        ACIDEZ: '0.18',
        TICKET: '348'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '660.0',
        RDTO: '20.63',
        HUMEDAD: '46.82',
        ACIDEZ: '0.18',
        TICKET: '349'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3068.0',
        RDTO: '22.18',
        HUMEDAD: '45.7',
        ACIDEZ: '0.36',
        TICKET: '354'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '696.0',
        RDTO: '18.58',
        HUMEDAD: '50.62',
        ACIDEZ: '0.17',
        TICKET: '355'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '686.0',
        RDTO: '22.81',
        HUMEDAD: '46.28',
        ACIDEZ: '0.34',
        TICKET: '356'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3285.0',
        RDTO: '20.99',
        HUMEDAD: '48.54',
        ACIDEZ: '0.22',
        TICKET: '357'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '5872.0',
        RDTO: '29.74',
        HUMEDAD: '41.92',
        ACIDEZ: '0.17',
        TICKET: '358'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1620.0',
        RDTO: '18.61',
        HUMEDAD: '51.98',
        ACIDEZ: '0.18',
        TICKET: '360'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1070.0',
        RDTO: '19.53',
        HUMEDAD: '51.58',
        ACIDEZ: '0.47',
        TICKET: '361'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1222.0',
        RDTO: '23.73',
        HUMEDAD: '47.71',
        ACIDEZ: '0.47',
        TICKET: '362'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '305.0',
        RDTO: '22.56',
        HUMEDAD: '45.66',
        ACIDEZ: '0.2',
        TICKET: '363'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2348.0',
        RDTO: '20.23',
        HUMEDAD: '48.55',
        ACIDEZ: '0.41',
        TICKET: '364'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2089.0',
        RDTO: '20.12',
        HUMEDAD: '50.61',
        ACIDEZ: '0.21',
        TICKET: '365'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2089.0',
        RDTO: '20.12',
        HUMEDAD: '50.61',
        ACIDEZ: '0.21',
        TICKET: '366'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '590.0',
        RDTO: '21.7',
        HUMEDAD: '48.63',
        ACIDEZ: '0.16',
        TICKET: '374'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '717.0',
        RDTO: '25.33',
        HUMEDAD: '42.93',
        ACIDEZ: '0.22',
        TICKET: '367'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2784.0',
        RDTO: '25.24',
        HUMEDAD: '48.89',
        ACIDEZ: '0.17',
        TICKET: '368'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '5181.0',
        RDTO: '22.23',
        HUMEDAD: '52.94',
        ACIDEZ: '0.17',
        TICKET: '369'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '9770.0',
        RDTO: '19.27',
        HUMEDAD: '52.04',
        ACIDEZ: '0.21',
        TICKET: '370'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1618.0',
        RDTO: '19.82',
        HUMEDAD: '55.11',
        ACIDEZ: '0.18',
        TICKET: '371'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '655.0',
        RDTO: '23.68',
        HUMEDAD: '46.04',
        ACIDEZ: '0.23',
        TICKET: '372'
    },
    {
        DIA: '21',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3208.0',
        RDTO: '18.16',
        HUMEDAD: '56.5',
        ACIDEZ: '0.39',
        TICKET: '373'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '809.0',
        RDTO: '20.61',
        HUMEDAD: '49.16',
        ACIDEZ: '0.27',
        TICKET: '375'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '599.0',
        RDTO: '21.25',
        HUMEDAD: '47.45',
        ACIDEZ: '0.18',
        TICKET: '376'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '630.0',
        RDTO: '21.93',
        HUMEDAD: '43.67',
        ACIDEZ: '0.18',
        TICKET: '377'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1296.0',
        RDTO: '20.31',
        HUMEDAD: '48.35',
        ACIDEZ: '0.19',
        TICKET: '378'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '923.0',
        RDTO: '22.79',
        HUMEDAD: '44.35',
        ACIDEZ: '0.16',
        TICKET: '379'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1562.0',
        RDTO: '20.9',
        HUMEDAD: '44.6',
        ACIDEZ: '0.17',
        TICKET: '380'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '558.0',
        RDTO: '23.24',
        HUMEDAD: '45.34',
        ACIDEZ: '0.17',
        TICKET: '381'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1760.0',
        RDTO: '19.1',
        HUMEDAD: '50.22',
        ACIDEZ: '0.18',
        TICKET: '382'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '606.0',
        RDTO: '19.5',
        HUMEDAD: '48.45',
        ACIDEZ: '0.22',
        TICKET: '383'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4234.0',
        RDTO: '17.54',
        HUMEDAD: '56.28',
        ACIDEZ: '0.48',
        TICKET: '384'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1059.0',
        RDTO: '17.54',
        HUMEDAD: '56.28',
        ACIDEZ: '0.48',
        TICKET: '385'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '7035.0',
        RDTO: '19.39',
        HUMEDAD: '49.76',
        ACIDEZ: '0.17',
        TICKET: '386'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '731.0',
        RDTO: '18.35',
        HUMEDAD: '51.35',
        ACIDEZ: '0.2',
        TICKET: '387'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1483.0',
        RDTO: '19.3',
        HUMEDAD: '51.51',
        ACIDEZ: '0.52',
        TICKET: '388'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '5342.0',
        RDTO: '28.19',
        HUMEDAD: '41.53',
        ACIDEZ: '0.17',
        TICKET: '389'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1015.0',
        RDTO: '21.46',
        HUMEDAD: '50.73',
        ACIDEZ: '0.33',
        TICKET: '390'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '650.0',
        RDTO: '22.1',
        HUMEDAD: '45.47',
        ACIDEZ: '0.18',
        TICKET: '391'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1044.0',
        RDTO: '19.23',
        HUMEDAD: '51.13',
        ACIDEZ: '0.17',
        TICKET: '392'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '994.0',
        RDTO: '24.75',
        HUMEDAD: '42.92',
        ACIDEZ: '0.17',
        TICKET: '393'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1864.0',
        RDTO: '20.64',
        HUMEDAD: '48.69',
        ACIDEZ: '0.18',
        TICKET: '394'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1864.0',
        RDTO: '20.64',
        HUMEDAD: '49.69',
        ACIDEZ: '0.18',
        TICKET: '395'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1123.0',
        RDTO: '22.03',
        HUMEDAD: '43.9',
        ACIDEZ: '0.17',
        TICKET: '396'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3304.0',
        RDTO: '19.72',
        HUMEDAD: '53.6',
        ACIDEZ: '0.25',
        TICKET: '397'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '732.0',
        RDTO: '22.0',
        HUMEDAD: '47.98',
        ACIDEZ: '0.28',
        TICKET: '398'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '5527.0',
        RDTO: '18.14',
        HUMEDAD: '50.92',
        ACIDEZ: '0.17',
        TICKET: '399'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '839.0',
        RDTO: '20.74',
        HUMEDAD: '48.3',
        ACIDEZ: '0.18',
        TICKET: '400'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2528.0',
        RDTO: '19.32',
        HUMEDAD: '53.28',
        ACIDEZ: '0.37',
        TICKET: '401'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1431.0',
        RDTO: '21.36',
        HUMEDAD: '52.83',
        ACIDEZ: '0.25',
        TICKET: '402'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1246.0',
        RDTO: '21.49',
        HUMEDAD: '49.07',
        ACIDEZ: '0.3',
        TICKET: '403'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '302.0',
        RDTO: '19.16',
        HUMEDAD: '50.3',
        ACIDEZ: '0.29',
        TICKET: '404'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '302.0',
        RDTO: '19.16',
        HUMEDAD: '50.3',
        ACIDEZ: '0.29',
        TICKET: '405'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '813.0',
        RDTO: '22.54',
        HUMEDAD: '49.22',
        ACIDEZ: '0.2',
        TICKET: '406'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '615.0',
        RDTO: '22.71',
        HUMEDAD: '47.2',
        ACIDEZ: '0.27',
        TICKET: '407'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '813.0',
        RDTO: '21.97',
        HUMEDAD: '44.34',
        ACIDEZ: '0.18',
        TICKET: '408'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '642.0',
        RDTO: '22.78',
        HUMEDAD: '47.17',
        ACIDEZ: '0.23',
        TICKET: '409'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1414.0',
        RDTO: '20.95',
        HUMEDAD: '48.05',
        ACIDEZ: '0.23',
        TICKET: '410'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1895.0',
        RDTO: '20.28',
        HUMEDAD: '45.95',
        ACIDEZ: '0.47',
        TICKET: '411'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '524.0',
        RDTO: '23.77',
        HUMEDAD: '44.03',
        ACIDEZ: '0.22',
        TICKET: '412'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1332.0',
        RDTO: '20.12',
        HUMEDAD: '51.23',
        ACIDEZ: '0.19',
        TICKET: '413'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '668.0',
        RDTO: '19.79',
        HUMEDAD: '48.99',
        ACIDEZ: '0.43',
        TICKET: '414'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1681.0',
        RDTO: '21.69',
        HUMEDAD: '46.74',
        ACIDEZ: '0.32',
        TICKET: '415'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1938.0',
        RDTO: '19.23',
        HUMEDAD: '48.93',
        ACIDEZ: '0.36',
        TICKET: '416'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3138.0',
        RDTO: '18.79',
        HUMEDAD: '50.68',
        ACIDEZ: '0.24',
        TICKET: '417'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '784.0',
        RDTO: '18.79',
        HUMEDAD: '50.68',
        ACIDEZ: '0.24',
        TICKET: '418'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1175.0',
        RDTO: '24.8',
        HUMEDAD: '43.77',
        ACIDEZ: '0.26',
        TICKET: '421'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1590.0',
        RDTO: '24.8',
        HUMEDAD: '43.77',
        ACIDEZ: '0.26',
        TICKET: '422'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1251.0',
        RDTO: '23.82',
        HUMEDAD: '47.97',
        ACIDEZ: '0.2',
        TICKET: '419'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4953.0',
        RDTO: '26.16',
        HUMEDAD: '43.75',
        ACIDEZ: '0.25',
        TICKET: '420'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1590.0',
        RDTO: '20.99',
        HUMEDAD: '48.48',
        ACIDEZ: '0.27',
        TICKET: '423'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '808.0',
        RDTO: '24.42',
        HUMEDAD: '45.47',
        ACIDEZ: '0.41',
        TICKET: '424'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '5443.0',
        RDTO: '21.22',
        HUMEDAD: '47.03',
        ACIDEZ: '0.21',
        TICKET: '425'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3869.0',
        RDTO: '17.42',
        HUMEDAD: '51.89',
        ACIDEZ: '0.21',
        TICKET: '426'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2204.0',
        RDTO: '21.35',
        HUMEDAD: '47.82',
        ACIDEZ: '0.2',
        TICKET: '427'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1740.0',
        RDTO: '18.93',
        HUMEDAD: '53.34',
        ACIDEZ: '0.25',
        TICKET: '428'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '7376.0',
        RDTO: '21.74',
        HUMEDAD: '52.02',
        ACIDEZ: '0.28',
        TICKET: '429'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1089.0',
        RDTO: '20.84',
        HUMEDAD: '51.87',
        ACIDEZ: '0.19',
        TICKET: '430'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '282.0',
        RDTO: '21.11',
        HUMEDAD: '51.5',
        ACIDEZ: '0.43',
        TICKET: '431'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1257.0',
        RDTO: '21.45',
        HUMEDAD: '52.4',
        ACIDEZ: '0.17',
        TICKET: '432'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '723.0',
        RDTO: '22.85',
        HUMEDAD: '46.32',
        ACIDEZ: '0.18',
        TICKET: '433'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '755.0',
        RDTO: '18.76',
        HUMEDAD: '55.2',
        ACIDEZ: '0.19',
        TICKET: '434'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1168.0',
        RDTO: '23.88',
        HUMEDAD: '44.55',
        ACIDEZ: '0.17',
        TICKET: '435'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1476.0',
        RDTO: '20.68',
        HUMEDAD: '49.3',
        ACIDEZ: '0.23',
        TICKET: '436'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '820.0',
        RDTO: '24.16',
        HUMEDAD: '44.58',
        ACIDEZ: '0.18',
        TICKET: '437'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '644.0',
        RDTO: '19.98',
        HUMEDAD: '46.87',
        ACIDEZ: '0.22',
        TICKET: '438'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2232.0',
        RDTO: '22.55',
        HUMEDAD: '44.33',
        ACIDEZ: '0.17',
        TICKET: '439'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1213.0',
        RDTO: '19.49',
        HUMEDAD: '47.46',
        ACIDEZ: '0.11',
        TICKET: '440'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2685.0',
        RDTO: '19.49',
        HUMEDAD: '47.56',
        ACIDEZ: '0.16',
        TICKET: '441'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1261.0',
        RDTO: '24.31',
        HUMEDAD: '46.75',
        ACIDEZ: '0.17',
        TICKET: '442'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2268.0',
        RDTO: '21.97',
        HUMEDAD: '48.28',
        ACIDEZ: '0.19',
        TICKET: '443'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3908.0',
        RDTO: '21.03',
        HUMEDAD: '46.43',
        ACIDEZ: '0.16',
        TICKET: '444'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '452.0',
        RDTO: '24.36',
        HUMEDAD: '46.8',
        ACIDEZ: '0.18',
        TICKET: '1294'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '827.0',
        RDTO: '25.61',
        HUMEDAD: '41.4',
        ACIDEZ: '0.17',
        TICKET: '445'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4780.0',
        RDTO: '20.98',
        HUMEDAD: '47.47',
        ACIDEZ: '0.26',
        TICKET: '446'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1924.0',
        RDTO: '21.31',
        HUMEDAD: '51.33',
        ACIDEZ: '0.29',
        TICKET: '447'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1903.0',
        RDTO: '19.49',
        HUMEDAD: '51.55',
        ACIDEZ: '0.27',
        TICKET: '448'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1903.0',
        RDTO: '19.49',
        HUMEDAD: '51.55',
        ACIDEZ: '0.27',
        TICKET: '449'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '6366.0',
        RDTO: '18.94',
        HUMEDAD: '50.75',
        ACIDEZ: '0.17',
        TICKET: '450'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4310.0',
        RDTO: '18.73',
        HUMEDAD: '51.42',
        ACIDEZ: '0.17',
        TICKET: '451'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '503.0',
        RDTO: '22.83',
        HUMEDAD: '49.75',
        ACIDEZ: '0.16',
        TICKET: '452'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '858.0',
        RDTO: '21.55',
        HUMEDAD: '47.89',
        ACIDEZ: '0.26',
        TICKET: '453'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '901.0',
        RDTO: '22.41',
        HUMEDAD: '48.73',
        ACIDEZ: '0.16',
        TICKET: '456'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '853.0',
        RDTO: '24.2',
        HUMEDAD: '46.1',
        ACIDEZ: '0.3',
        TICKET: '457'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '150.0',
        RDTO: '17.2',
        HUMEDAD: '46.6',
        ACIDEZ: '0.1',
        TICKET: '458'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '332.0',
        RDTO: '18.7',
        HUMEDAD: '51.1',
        ACIDEZ: '0.3',
        TICKET: '459'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '332.0',
        RDTO: '18.7',
        HUMEDAD: '51.1',
        ACIDEZ: '0.3',
        TICKET: '460'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1200.0',
        RDTO: '20.83',
        HUMEDAD: '49.83',
        ACIDEZ: '0.31',
        TICKET: '454'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2515.0',
        RDTO: '20.79',
        HUMEDAD: '48.94',
        ACIDEZ: '0.54',
        TICKET: '455'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1052.0',
        RDTO: '22.1',
        HUMEDAD: '47.2',
        ACIDEZ: '0.3',
        TICKET: '461'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1371.0',
        RDTO: '21.4',
        HUMEDAD: '47.7',
        ACIDEZ: '0.3',
        TICKET: '462'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '870.0',
        RDTO: '27.3',
        HUMEDAD: '41.8',
        ACIDEZ: '0.3',
        TICKET: '463'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '648.0',
        RDTO: '22.4',
        HUMEDAD: '45.4',
        ACIDEZ: '0.2',
        TICKET: '464'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '602.0',
        RDTO: '23.2',
        HUMEDAD: '48.2',
        ACIDEZ: '0.2',
        TICKET: '465'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '972.0',
        RDTO: '17.7',
        HUMEDAD: '54.9',
        ACIDEZ: '0.3',
        TICKET: '466'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2048.0',
        RDTO: '19.6',
        HUMEDAD: '47.7',
        ACIDEZ: '0.3',
        TICKET: '467'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1540.0',
        RDTO: '18.0',
        HUMEDAD: '45.5',
        ACIDEZ: '0.3',
        TICKET: '468'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '511.0',
        RDTO: '28.7',
        HUMEDAD: '37.3',
        ACIDEZ: '0.2',
        TICKET: '469'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3342.0',
        RDTO: '19.9',
        HUMEDAD: '50.8',
        ACIDEZ: '0.2',
        TICKET: '470'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '990.0',
        RDTO: '24.4',
        HUMEDAD: '44.2',
        ACIDEZ: '0.2',
        TICKET: '471'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1598.0',
        RDTO: '23.4',
        HUMEDAD: '45.2',
        ACIDEZ: '0.2',
        TICKET: '472'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1313.0',
        RDTO: '23.5',
        HUMEDAD: '46.5',
        ACIDEZ: '0.5',
        TICKET: '473'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3027.0',
        RDTO: '21.7',
        HUMEDAD: '47.7',
        ACIDEZ: '0.3',
        TICKET: '474'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '647.0',
        RDTO: '20.8',
        HUMEDAD: '47.5',
        ACIDEZ: '0.2',
        TICKET: '475'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1944.0',
        RDTO: '20.0',
        HUMEDAD: '51.1',
        ACIDEZ: '0.4',
        TICKET: '476'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '706.0',
        RDTO: '23.8',
        HUMEDAD: '44.9',
        ACIDEZ: '0.2',
        TICKET: '477'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1393.0',
        RDTO: '20.9',
        HUMEDAD: '47.6',
        ACIDEZ: '0.2',
        TICKET: '478'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1599.0',
        RDTO: '21.8',
        HUMEDAD: '48.3',
        ACIDEZ: '0.4',
        TICKET: '479'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1310.0',
        RDTO: '24.4',
        HUMEDAD: '46.7',
        ACIDEZ: '0.3',
        TICKET: '480'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4931.0',
        RDTO: '19.3',
        HUMEDAD: '52.5',
        ACIDEZ: '0.2',
        TICKET: '481'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '616.0',
        RDTO: '19.3',
        HUMEDAD: '52.5',
        ACIDEZ: '0.2',
        TICKET: '482'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '616.0',
        RDTO: '19.3',
        HUMEDAD: '52.5',
        ACIDEZ: '0.2',
        TICKET: '483'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2508.0',
        RDTO: '20.1',
        HUMEDAD: '51.8',
        ACIDEZ: '0.3',
        TICKET: '484'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2508.0',
        RDTO: '20.1',
        HUMEDAD: '51.8',
        ACIDEZ: '0.3',
        TICKET: '485'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1124.0',
        RDTO: '26.4',
        HUMEDAD: '42.2',
        ACIDEZ: '0.2',
        TICKET: '486'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2003.0',
        RDTO: '22.9',
        HUMEDAD: '50.4',
        ACIDEZ: '0.4',
        TICKET: '487'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '748.0',
        RDTO: '21.1',
        HUMEDAD: '46.9',
        ACIDEZ: '0.2',
        TICKET: '488'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1184.0',
        RDTO: '18.2',
        HUMEDAD: '52.4',
        ACIDEZ: '0.1',
        TICKET: '489'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '789.0',
        RDTO: '23.8',
        HUMEDAD: '43.7',
        ACIDEZ: '0.2',
        TICKET: '490'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '7012.0',
        RDTO: '20.7',
        HUMEDAD: '48.7',
        ACIDEZ: '0.2',
        TICKET: '491'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '591.0',
        RDTO: '23.1',
        HUMEDAD: '46.3',
        ACIDEZ: '0.1',
        TICKET: '492'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '677.0',
        RDTO: '23.0',
        HUMEDAD: '48.1',
        ACIDEZ: '0.2',
        TICKET: '505'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '395.0',
        RDTO: '21.3',
        HUMEDAD: '48.1',
        ACIDEZ: '0.3',
        TICKET: '506'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '395.0',
        RDTO: '21.3',
        HUMEDAD: '48.1',
        ACIDEZ: '0.3',
        TICKET: '507'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '592.0',
        RDTO: '19.3',
        HUMEDAD: '52.0',
        ACIDEZ: '0.2',
        TICKET: '508'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1703.0',
        RDTO: '23.2',
        HUMEDAD: '48.2',
        ACIDEZ: '0.2',
        TICKET: '493'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3413.0',
        RDTO: '18.5',
        HUMEDAD: '52.7',
        ACIDEZ: '0.3',
        TICKET: '494'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '596.0',
        RDTO: '20.4',
        HUMEDAD: '50.8',
        ACIDEZ: '0.4',
        TICKET: '495'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '5245.0',
        RDTO: '20.1',
        HUMEDAD: '50.0',
        ACIDEZ: '0.1',
        TICKET: '496'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1408.0',
        RDTO: '19.0',
        HUMEDAD: '49.8',
        ACIDEZ: '0.2',
        TICKET: '497'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '51.0',
        RDTO: '28.3',
        HUMEDAD: '41.6',
        ACIDEZ: '0.4',
        TICKET: '498'
    },
    {
        DIA: '25',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4215.0',
        RDTO: '21.5',
        HUMEDAD: '48.3',
        ACIDEZ: '0.1',
        TICKET: '499'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '802.0',
        RDTO: '20.1',
        HUMEDAD: '49.0',
        ACIDEZ: '0.1',
        TICKET: '500'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1456.0',
        RDTO: '18.2',
        HUMEDAD: '54.2',
        ACIDEZ: '0.3',
        TICKET: '501'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3467.0',
        RDTO: '20.9',
        HUMEDAD: '45.5',
        ACIDEZ: '0.3',
        TICKET: '502'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '506.0',
        RDTO: '19.5',
        HUMEDAD: '49.4',
        ACIDEZ: '0.3',
        TICKET: '503'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3255.0',
        RDTO: '20.4',
        HUMEDAD: '49.4',
        ACIDEZ: '0.1',
        TICKET: '504'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '966.0',
        RDTO: '27.1',
        HUMEDAD: '39.9',
        ACIDEZ: '0.1',
        TICKET: '509'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '471.0',
        RDTO: '22.8',
        HUMEDAD: '45.0',
        ACIDEZ: '0.1',
        TICKET: '510'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1398.0',
        RDTO: '20.5',
        HUMEDAD: '49.6',
        ACIDEZ: '0.3',
        TICKET: '511'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2058.0',
        RDTO: '19.1',
        HUMEDAD: '52.1',
        ACIDEZ: '0.4',
        TICKET: '512'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1004.0',
        RDTO: '19.9',
        HUMEDAD: '49.2',
        ACIDEZ: '0.2',
        TICKET: '513'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1312.0',
        RDTO: '22.3',
        HUMEDAD: '46.2',
        ACIDEZ: '0.3',
        TICKET: '514'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1438.0',
        RDTO: '24.0',
        HUMEDAD: '47.9',
        ACIDEZ: '0.2',
        TICKET: '515'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1380.0',
        RDTO: '21.8',
        HUMEDAD: '47.2',
        ACIDEZ: '0.2',
        TICKET: '516'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '556.0',
        RDTO: '21.5',
        HUMEDAD: '47.8',
        ACIDEZ: '0.2',
        TICKET: '517'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1300.0',
        RDTO: '19.6',
        HUMEDAD: '50.3',
        ACIDEZ: '0.1',
        TICKET: '518'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1300.0',
        RDTO: '19.6',
        HUMEDAD: '50.3',
        ACIDEZ: '0.1',
        TICKET: '519'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1159.0',
        RDTO: '23.1',
        HUMEDAD: '45.0',
        ACIDEZ: '0.1',
        TICKET: '520'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '715.0',
        RDTO: '22.8',
        HUMEDAD: '47.4',
        ACIDEZ: '0.3',
        TICKET: '521'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '914.0',
        RDTO: '21.3',
        HUMEDAD: '49.3',
        ACIDEZ: '0.3',
        TICKET: '522'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4927.0',
        RDTO: '19.0',
        HUMEDAD: '50.9',
        ACIDEZ: '0.2',
        TICKET: '523'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '616.0',
        RDTO: '19.0',
        HUMEDAD: '50.9',
        ACIDEZ: '0.2',
        TICKET: '524'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '616.0',
        RDTO: '19.0',
        HUMEDAD: '50.9',
        ACIDEZ: '0.2',
        TICKET: '525'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1632.0',
        RDTO: '22.8',
        HUMEDAD: '49.7',
        ACIDEZ: '0.2',
        TICKET: '526'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2613.0',
        RDTO: '19.6',
        HUMEDAD: '50.0',
        ACIDEZ: '0.1',
        TICKET: '527'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '400.0',
        RDTO: '22.2',
        HUMEDAD: '48.8',
        ACIDEZ: '0.4',
        TICKET: '528'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4558.0',
        RDTO: '20.5',
        HUMEDAD: '50.7',
        ACIDEZ: '0.2',
        TICKET: '529'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1620.0',
        RDTO: '19.4',
        HUMEDAD: '52.9',
        ACIDEZ: '0.1',
        TICKET: '530'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4089.0',
        RDTO: '18.3',
        HUMEDAD: '51.9',
        ACIDEZ: '0.4',
        TICKET: '531'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2131.0',
        RDTO: '22.8',
        HUMEDAD: '48.5',
        ACIDEZ: '0.1',
        TICKET: '532'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '999.0',
        RDTO: '20.7',
        HUMEDAD: '49.3',
        ACIDEZ: '0.3',
        TICKET: '533'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3565.0',
        RDTO: '21.7',
        HUMEDAD: '49.7',
        ACIDEZ: '0.4',
        TICKET: '534'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1452.0',
        RDTO: '19.8',
        HUMEDAD: '48.6',
        ACIDEZ: '0.2',
        TICKET: '535'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '440.0',
        RDTO: '22.1',
        HUMEDAD: '48.1',
        ACIDEZ: '0.3',
        TICKET: '536'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '383.0',
        RDTO: '23.2',
        HUMEDAD: '47.1',
        ACIDEZ: '0.3',
        TICKET: '537'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '437.0',
        RDTO: '19.7',
        HUMEDAD: '50.7',
        ACIDEZ: '0.2',
        TICKET: '538'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '708.0',
        RDTO: '26.5',
        HUMEDAD: '41.8',
        ACIDEZ: '0.1',
        TICKET: '539'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3423.0',
        RDTO: '20.1',
        HUMEDAD: '50.1',
        ACIDEZ: '0.2',
        TICKET: '540'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2032.0',
        RDTO: '22.5',
        HUMEDAD: '43.7',
        ACIDEZ: '0.1',
        TICKET: '541'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '390.0',
        RDTO: '21.9',
        HUMEDAD: '46.5',
        ACIDEZ: '0.1',
        TICKET: '542'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '390.0',
        RDTO: '21.9',
        HUMEDAD: '46.5',
        ACIDEZ: '0.1',
        TICKET: '543'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1975.0',
        RDTO: '17.9',
        HUMEDAD: '54.1',
        ACIDEZ: '0.3',
        TICKET: '544'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1200.0',
        RDTO: '20.7',
        HUMEDAD: '46.3',
        ACIDEZ: '0.1',
        TICKET: '545'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1000.0',
        RDTO: '21.2',
        HUMEDAD: '46.7',
        ACIDEZ: '0.1',
        TICKET: '546'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1636.0',
        RDTO: '20.4',
        HUMEDAD: '48.4',
        ACIDEZ: '0.1',
        TICKET: '547'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1044.0',
        RDTO: '23.5',
        HUMEDAD: '45.1',
        ACIDEZ: '0.1',
        TICKET: '548'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '483.0',
        RDTO: '18.3',
        HUMEDAD: '52.4',
        ACIDEZ: '0.1',
        TICKET: '549'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1942.0',
        RDTO: '19.6',
        HUMEDAD: '50.7',
        ACIDEZ: '0.2',
        TICKET: '550'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '270.0',
        RDTO: '19.7',
        HUMEDAD: '52.1',
        ACIDEZ: '0.4',
        TICKET: '551'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '875.0',
        RDTO: '21.2',
        HUMEDAD: '48.8',
        ACIDEZ: '0.2',
        TICKET: '552'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1904.0',
        RDTO: '24.8',
        HUMEDAD: '48.3',
        ACIDEZ: '0.1',
        TICKET: '553'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '868.0',
        RDTO: '22.7',
        HUMEDAD: '47.8',
        ACIDEZ: '0.1',
        TICKET: '554'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1244.0',
        RDTO: '22.0',
        HUMEDAD: '45.9',
        ACIDEZ: '0.1',
        TICKET: '555'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '2153.0',
        RDTO: '21.4',
        HUMEDAD: '46.3',
        ACIDEZ: '0.1',
        TICKET: '556'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3812.0',
        RDTO: '19.9',
        HUMEDAD: '50.5',
        ACIDEZ: '0.0',
        TICKET: '557'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '5213.0',
        RDTO: '19.3',
        HUMEDAD: '51.9',
        ACIDEZ: '0.2',
        TICKET: '558'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '652.0',
        RDTO: '19.3',
        HUMEDAD: '51.9',
        ACIDEZ: '0.2',
        TICKET: '559'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '652.0',
        RDTO: '19.3',
        HUMEDAD: '51.9',
        ACIDEZ: '0.2',
        TICKET: '560'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1445.0',
        RDTO: '21.8',
        HUMEDAD: '51.3',
        ACIDEZ: '0.1',
        TICKET: '561'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1192.0',
        RDTO: '21.9',
        HUMEDAD: '46.1',
        ACIDEZ: '0.1',
        TICKET: '562'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1598.0',
        RDTO: '22.2',
        HUMEDAD: '48.6',
        ACIDEZ: '0.1',
        TICKET: '563'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1462.0',
        RDTO: '19.7',
        HUMEDAD: '51.0',
        ACIDEZ: '0.1',
        TICKET: '564'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1462.0',
        RDTO: '19.7',
        HUMEDAD: '51.0',
        ACIDEZ: '0.1',
        TICKET: '565'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '1671.0',
        RDTO: '19.8',
        HUMEDAD: '53.4',
        ACIDEZ: '0.1',
        TICKET: '566'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '3163.0',
        RDTO: '21.9',
        HUMEDAD: '50.4',
        ACIDEZ: '0.1',
        TICKET: '567'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '6403.0',
        RDTO: '21.1',
        HUMEDAD: '50.7',
        ACIDEZ: '0.1',
        TICKET: '568'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '734.0',
        RDTO: '21.8',
        HUMEDAD: '49.5',
        ACIDEZ: '0.1',
        TICKET: '569'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '4280.0',
        RDTO: '22.0',
        HUMEDAD: '49.0',
        ACIDEZ: '0.1',
        TICKET: '570'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '475.0',
        RDTO: '21.1',
        HUMEDAD: '46.0',
        ACIDEZ: '0.1',
        TICKET: '571'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '572.0',
        RDTO: '20.0',
        HUMEDAD: '49.1',
        ACIDEZ: '0.1',
        TICKET: '572'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2035.0',
        RDTO: '20.39',
        HUMEDAD: '49.04',
        ACIDEZ: '0.18',
        TICKET: '1295'
    },
    {
        DIA: '30',
        MES: '11',
        ANYO: '2017',
        KGSACEITUNA: '294.0',
        RDTO: '21.7',
        HUMEDAD: '48.0',
        ACIDEZ: '0.3',
        TICKET: '573'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '433.0',
        RDTO: '18.5',
        HUMEDAD: '51.8',
        ACIDEZ: '0.3',
        TICKET: '574'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '110.0',
        RDTO: '22.5',
        HUMEDAD: '47.6',
        ACIDEZ: '0.3',
        TICKET: '575'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '422.0',
        RDTO: '24.5',
        HUMEDAD: '45.3',
        ACIDEZ: '0.1',
        TICKET: '576'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '422.0',
        RDTO: '24.5',
        HUMEDAD: '45.3',
        ACIDEZ: '0.1',
        TICKET: '577'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1475.0',
        RDTO: '21.8',
        HUMEDAD: '48.4',
        ACIDEZ: '0.3',
        TICKET: '578'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1327.0',
        RDTO: '20.3',
        HUMEDAD: '49.6',
        ACIDEZ: '0.2',
        TICKET: '579'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '615.0',
        RDTO: '16.6',
        HUMEDAD: '53.3',
        ACIDEZ: '0.2',
        TICKET: '580'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '634.0',
        RDTO: '21.5',
        HUMEDAD: '48.5',
        ACIDEZ: '0.2',
        TICKET: '581'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '907.0',
        RDTO: '23.1',
        HUMEDAD: '48.7',
        ACIDEZ: '0.2',
        TICKET: '582'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '699.0',
        RDTO: '21.2',
        HUMEDAD: '47.5',
        ACIDEZ: '0.1',
        TICKET: '583'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '847.0',
        RDTO: '21.9',
        HUMEDAD: '49.4',
        ACIDEZ: '0.3',
        TICKET: '584'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3494.0',
        RDTO: '20.3',
        HUMEDAD: '50.1',
        ACIDEZ: '0.3',
        TICKET: '585'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '873.0',
        RDTO: '20.3',
        HUMEDAD: '50.1',
        ACIDEZ: '0.3',
        TICKET: '586'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1276.0',
        RDTO: '21.1',
        HUMEDAD: '50.4',
        ACIDEZ: '0.2',
        TICKET: '587'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1731.0',
        RDTO: '19.6',
        HUMEDAD: '51.9',
        ACIDEZ: '0.3',
        TICKET: '588'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2211.0',
        RDTO: '21.1',
        HUMEDAD: '51.8',
        ACIDEZ: '0.3',
        TICKET: '589'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1470.0',
        RDTO: '25.5',
        HUMEDAD: '44.9',
        ACIDEZ: '0.2',
        TICKET: '590'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '707.0',
        RDTO: '23.3',
        HUMEDAD: '47.8',
        ACIDEZ: '0.2',
        TICKET: '591'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '234.0',
        RDTO: '22.6',
        HUMEDAD: '47.9',
        ACIDEZ: '0.4',
        TICKET: '592'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1267.0',
        RDTO: '23.1',
        HUMEDAD: '47.6',
        ACIDEZ: '0.1',
        TICKET: '593'
    },
    {
        DIA: '1',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4401.0',
        RDTO: '20.9',
        HUMEDAD: '50.6',
        ACIDEZ: '0.2',
        TICKET: '594'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '625.0',
        RDTO: '21.3',
        HUMEDAD: '52.4',
        ACIDEZ: '0.2',
        TICKET: '595'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '158.0',
        RDTO: '23.4',
        HUMEDAD: '46.2',
        ACIDEZ: '0.1',
        TICKET: '596'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '158.0',
        RDTO: '23.4',
        HUMEDAD: '46.2',
        ACIDEZ: '0.1',
        TICKET: '597'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '968.0',
        RDTO: '18.2',
        HUMEDAD: '52.8',
        ACIDEZ: '0.3',
        TICKET: '598'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '584.0',
        RDTO: '19.8',
        HUMEDAD: '51.4',
        ACIDEZ: '0.3',
        TICKET: '599'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '555.0',
        RDTO: '21.3',
        HUMEDAD: '47.3',
        ACIDEZ: '0.2',
        TICKET: '600'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '959.0',
        RDTO: '20.5',
        HUMEDAD: '48.5',
        ACIDEZ: '0.2',
        TICKET: '601'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1392.0',
        RDTO: '21.0',
        HUMEDAD: '49.3',
        ACIDEZ: '0.1',
        TICKET: '602'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '420.0',
        RDTO: '23.2',
        HUMEDAD: '44.3',
        ACIDEZ: '0.1',
        TICKET: '603'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3139.0',
        RDTO: '19.5',
        HUMEDAD: '52.6',
        ACIDEZ: '0.5',
        TICKET: '604'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '960.0',
        RDTO: '17.5',
        HUMEDAD: '50.7',
        ACIDEZ: '0.1',
        TICKET: '605'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '300.0',
        RDTO: '22.2',
        HUMEDAD: '48.4',
        ACIDEZ: '0.1',
        TICKET: '606'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '757.0',
        RDTO: '20.7',
        HUMEDAD: '47.0',
        ACIDEZ: '0.1',
        TICKET: '607'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '826.0',
        RDTO: '18.1',
        HUMEDAD: '53.0',
        ACIDEZ: '0.2',
        TICKET: '608'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '465.0',
        RDTO: '26.3',
        HUMEDAD: '41.6',
        ACIDEZ: '0.2',
        TICKET: '609'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1493.0',
        RDTO: '20.8',
        HUMEDAD: '49.4',
        ACIDEZ: '0.2',
        TICKET: '610'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '393.0',
        RDTO: '21.6',
        HUMEDAD: '49.0',
        ACIDEZ: '0.2',
        TICKET: '611'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1668.0',
        RDTO: '19.6',
        HUMEDAD: '51.9',
        ACIDEZ: '0.3',
        TICKET: '612'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1651.0',
        RDTO: '19.6',
        HUMEDAD: '51.6',
        ACIDEZ: '0.3',
        TICKET: '613'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '721.0',
        RDTO: '21.7',
        HUMEDAD: '50.1',
        ACIDEZ: '0.2',
        TICKET: '614'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3177.0',
        RDTO: '20.4',
        HUMEDAD: '51.6',
        ACIDEZ: '0.4',
        TICKET: '615'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1287.0',
        RDTO: '23.0',
        HUMEDAD: '49.2',
        ACIDEZ: '0.2',
        TICKET: '616'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '743.0',
        RDTO: '17.6',
        HUMEDAD: '51.7',
        ACIDEZ: '0.4',
        TICKET: '617'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '763.0',
        RDTO: '20.2',
        HUMEDAD: '51.8',
        ACIDEZ: '0.3',
        TICKET: '618'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '6102.0',
        RDTO: '20.2',
        HUMEDAD: '51.8',
        ACIDEZ: '0.3',
        TICKET: '619'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '763.0',
        RDTO: '20.2',
        HUMEDAD: '51.8',
        ACIDEZ: '0.3',
        TICKET: '620'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4539.0',
        RDTO: '19.7',
        HUMEDAD: '52.2',
        ACIDEZ: '0.2',
        TICKET: '621'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2085.0',
        RDTO: '21.3',
        HUMEDAD: '54.6',
        ACIDEZ: '0.4',
        TICKET: '622'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '875.0',
        RDTO: '22.5',
        HUMEDAD: '44.5',
        ACIDEZ: '0.2',
        TICKET: '623'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1260.0',
        RDTO: '20.1',
        HUMEDAD: '52.5',
        ACIDEZ: '0.3',
        TICKET: '624'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '750.0',
        RDTO: '19.8',
        HUMEDAD: '50.1',
        ACIDEZ: '0.3',
        TICKET: '625'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '518.0',
        RDTO: '19.1',
        HUMEDAD: '51.9',
        ACIDEZ: '0.3',
        TICKET: '630'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '9259.0',
        RDTO: '22.0',
        HUMEDAD: '53.8',
        ACIDEZ: '0.1',
        TICKET: '631'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '608.0',
        RDTO: '22.6',
        HUMEDAD: '46.6',
        ACIDEZ: '0.1',
        TICKET: '632'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1270.0',
        RDTO: '19.2',
        HUMEDAD: '49.3',
        ACIDEZ: '0.1',
        TICKET: '633'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '448.0',
        RDTO: '23.6',
        HUMEDAD: '46.7',
        ACIDEZ: '0.3',
        TICKET: '634'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '634.0',
        RDTO: '22.4',
        HUMEDAD: '46.0',
        ACIDEZ: '0.1',
        TICKET: '635'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '966.0',
        RDTO: '19.6',
        HUMEDAD: '51.9',
        ACIDEZ: '0.2',
        TICKET: '636'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '683.0',
        RDTO: '21.0',
        HUMEDAD: '52.7',
        ACIDEZ: '0.2',
        TICKET: '637'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '366.0',
        RDTO: '21.5',
        HUMEDAD: '48.4',
        ACIDEZ: '0.1',
        TICKET: '638'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '729.0',
        RDTO: '17.1',
        HUMEDAD: '52.7',
        ACIDEZ: '0.1',
        TICKET: '639'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '501.0',
        RDTO: '23.5',
        HUMEDAD: '47.0',
        ACIDEZ: '0.1',
        TICKET: '640'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '769.0',
        RDTO: '19.3',
        HUMEDAD: '50.1',
        ACIDEZ: '0.1',
        TICKET: '641'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1143.0',
        RDTO: '22.3',
        HUMEDAD: '47.8',
        ACIDEZ: '0.2',
        TICKET: '642'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5648.0',
        RDTO: '15.7',
        HUMEDAD: '59.4',
        ACIDEZ: '0.3',
        TICKET: '626'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3277.0',
        RDTO: '21.9',
        HUMEDAD: '51.2',
        ACIDEZ: '0.2',
        TICKET: '627'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1719.0',
        RDTO: '20.3',
        HUMEDAD: '50.0',
        ACIDEZ: '0.1',
        TICKET: '628'
    },
    {
        DIA: '2',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2279.0',
        RDTO: '19.9',
        HUMEDAD: '49.4',
        ACIDEZ: '0.1',
        TICKET: '629'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1231.0',
        RDTO: '18.0',
        HUMEDAD: '53.4',
        ACIDEZ: '0.2',
        TICKET: '643'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1247.0',
        RDTO: '20.2',
        HUMEDAD: '48.6',
        ACIDEZ: '0.2',
        TICKET: '644'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1102.0',
        RDTO: '22.6',
        HUMEDAD: '49.8',
        ACIDEZ: '0.1',
        TICKET: '645'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4932.0',
        RDTO: '21.9',
        HUMEDAD: '50.0',
        ACIDEZ: '0.3',
        TICKET: '646'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2217.0',
        RDTO: '19.0',
        HUMEDAD: '54.6',
        ACIDEZ: '0.3',
        TICKET: '647'
    },
    {
        DIA: '3',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '16920.0',
        RDTO: '15.5',
        HUMEDAD: '58.5',
        ACIDEZ: '0.2',
        TICKET: '648'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '450.0',
        RDTO: '21.1',
        HUMEDAD: '50.8',
        ACIDEZ: '0.3',
        TICKET: '649'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '320.0',
        RDTO: '20.9',
        HUMEDAD: '47.0',
        ACIDEZ: '0.2',
        TICKET: '650'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '320.0',
        RDTO: '20.9',
        HUMEDAD: '47.0',
        ACIDEZ: '0.2',
        TICKET: '651'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1133.0',
        RDTO: '21.0',
        HUMEDAD: '49.1',
        ACIDEZ: '0.2',
        TICKET: '652'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '381.0',
        RDTO: '18.7',
        HUMEDAD: '53.4',
        ACIDEZ: '0.3',
        TICKET: '653'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1556.0',
        RDTO: '20.1',
        HUMEDAD: '47.8',
        ACIDEZ: '0.1',
        TICKET: '654'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '705.0',
        RDTO: '22.7',
        HUMEDAD: '46.3',
        ACIDEZ: '0.2',
        TICKET: '655'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1438.0',
        RDTO: '20.7',
        HUMEDAD: '47.9',
        ACIDEZ: '0.2',
        TICKET: '656'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1351.0',
        RDTO: '20.2',
        HUMEDAD: '50.5',
        ACIDEZ: '0.3',
        TICKET: '657'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1452.0',
        RDTO: '22.8',
        HUMEDAD: '46.6',
        ACIDEZ: '0.2',
        TICKET: '658'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1746.0',
        RDTO: '22.6',
        HUMEDAD: '48.1',
        ACIDEZ: '0.3',
        TICKET: '659'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3565.0',
        RDTO: '22.5',
        HUMEDAD: '46.6',
        ACIDEZ: '0.2',
        TICKET: '660'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1496.0',
        RDTO: '20.1',
        HUMEDAD: '46.7',
        ACIDEZ: '0.1',
        TICKET: '661'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1005.0',
        RDTO: '21.2',
        HUMEDAD: '49.7',
        ACIDEZ: '0.1',
        TICKET: '662'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5810.0',
        RDTO: '19.8',
        HUMEDAD: '51.6',
        ACIDEZ: '0.2',
        TICKET: '663'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '726.0',
        RDTO: '19.8',
        HUMEDAD: '51.6',
        ACIDEZ: '0.2',
        TICKET: '664'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '726.0',
        RDTO: '19.8',
        HUMEDAD: '51.6',
        ACIDEZ: '0.2',
        TICKET: '665'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1430.0',
        RDTO: '20.0',
        HUMEDAD: '50.5',
        ACIDEZ: '0.1',
        TICKET: '666'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1430.0',
        RDTO: '20.0',
        HUMEDAD: '50.5',
        ACIDEZ: '0.1',
        TICKET: '667'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '642.0',
        RDTO: '19.1',
        HUMEDAD: '53.0',
        ACIDEZ: '0.2',
        TICKET: '668'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '8951.0',
        RDTO: '15.6',
        HUMEDAD: '57.3',
        ACIDEZ: '0.1',
        TICKET: '669'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '961.0',
        RDTO: '25.2',
        HUMEDAD: '44.0',
        ACIDEZ: '0.1',
        TICKET: '670'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '794.0',
        RDTO: '20.4',
        HUMEDAD: '48.9',
        ACIDEZ: '0.2',
        TICKET: '671'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2304.0',
        RDTO: '15.8',
        HUMEDAD: '54.7',
        ACIDEZ: '0.1',
        TICKET: '672'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1659.0',
        RDTO: '20.8',
        HUMEDAD: '48.3',
        ACIDEZ: '0.1',
        TICKET: '673'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3423.0',
        RDTO: '21.9',
        HUMEDAD: '50.6',
        ACIDEZ: '0.2',
        TICKET: '674'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5115.0',
        RDTO: '21.5',
        HUMEDAD: '49.9',
        ACIDEZ: '0.1',
        TICKET: '675'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '7251.0',
        RDTO: '22.4',
        HUMEDAD: '52.4',
        ACIDEZ: '0.1',
        TICKET: '676'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5328.0',
        RDTO: '21.2',
        HUMEDAD: '49.9',
        ACIDEZ: '0.1',
        TICKET: '677'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '781.0',
        RDTO: '18.1',
        HUMEDAD: '52.9',
        ACIDEZ: '0.1',
        TICKET: '678'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '489.0',
        RDTO: '20.3',
        HUMEDAD: '45.8',
        ACIDEZ: '0.1',
        TICKET: '679'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3315.0',
        RDTO: '20.3',
        HUMEDAD: '50.7',
        ACIDEZ: '0.1',
        TICKET: '680'
    },
    {
        DIA: '4',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5439.0',
        RDTO: '21.3',
        HUMEDAD: '48.0',
        ACIDEZ: '0.2',
        TICKET: '681'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '828.0',
        RDTO: '21.9',
        HUMEDAD: '49.8',
        ACIDEZ: '0.4',
        TICKET: '682'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '588.0',
        RDTO: '21.4',
        HUMEDAD: '49.5',
        ACIDEZ: '0.4',
        TICKET: '685'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '273.0',
        RDTO: '24.5',
        HUMEDAD: '44.1',
        ACIDEZ: '0.2',
        TICKET: '686'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '273.0',
        RDTO: '24.5',
        HUMEDAD: '44.1',
        ACIDEZ: '0.2',
        TICKET: '687'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1243.0',
        RDTO: '24.1',
        HUMEDAD: '50.1',
        ACIDEZ: '0.4',
        TICKET: '688'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1207.0',
        RDTO: '20.1',
        HUMEDAD: '50.6',
        ACIDEZ: '0.3',
        TICKET: '689'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1468.0',
        RDTO: '19.2',
        HUMEDAD: '48.0',
        ACIDEZ: '0.2',
        TICKET: '690'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1448.0',
        RDTO: '18.6',
        HUMEDAD: '48.6',
        ACIDEZ: '0.2',
        TICKET: '691'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1698.0',
        RDTO: '21.4',
        HUMEDAD: '46.6',
        ACIDEZ: '0.2',
        TICKET: '692'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3403.0',
        RDTO: '20.3',
        HUMEDAD: '53.6',
        ACIDEZ: '0.4',
        TICKET: '693'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4230.0',
        RDTO: '22.1',
        HUMEDAD: '47.1',
        ACIDEZ: '0.2',
        TICKET: '694'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '639.0',
        RDTO: '27.2',
        HUMEDAD: '42.6',
        ACIDEZ: '0.3',
        TICKET: '695'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '558.0',
        RDTO: '20.9',
        HUMEDAD: '47.7',
        ACIDEZ: '0.2',
        TICKET: '683'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '152.0',
        RDTO: '23.6',
        HUMEDAD: '45.1',
        ACIDEZ: '0.2',
        TICKET: '684'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4423.0',
        RDTO: '21.7',
        HUMEDAD: '47.4',
        ACIDEZ: '0.2',
        TICKET: '696'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '802.0',
        RDTO: '22.6',
        HUMEDAD: '46.6',
        ACIDEZ: '0.2',
        TICKET: '697'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1445.0',
        RDTO: '21.9',
        HUMEDAD: '49.7',
        ACIDEZ: '0.4',
        TICKET: '698'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '619.0',
        RDTO: '20.0',
        HUMEDAD: '49.9',
        ACIDEZ: '0.2',
        TICKET: '699'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4955.0',
        RDTO: '20.0',
        HUMEDAD: '49.9',
        ACIDEZ: '0.2',
        TICKET: '700'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '619.0',
        RDTO: '20.0',
        HUMEDAD: '49.9',
        ACIDEZ: '0.2',
        TICKET: '701'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1000.0',
        RDTO: '19.8',
        HUMEDAD: '50.1',
        ACIDEZ: '0.2',
        TICKET: '702'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '772.0',
        RDTO: '20.4',
        HUMEDAD: '48.9',
        ACIDEZ: '0.3',
        TICKET: '712'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '501.0',
        RDTO: '21.4',
        HUMEDAD: '47.9',
        ACIDEZ: '0.2',
        TICKET: '713'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1622.0',
        RDTO: '20.2',
        HUMEDAD: '50.3',
        ACIDEZ: '0.3',
        TICKET: '714'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '956.0',
        RDTO: '20.0',
        HUMEDAD: '50.8',
        ACIDEZ: '0.2',
        TICKET: '715'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2036.0',
        RDTO: '19.8',
        HUMEDAD: '50.1',
        ACIDEZ: '0.2',
        TICKET: '703'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2036.0',
        RDTO: '20.9',
        HUMEDAD: '49.6',
        ACIDEZ: '0.3',
        TICKET: '704'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5031.0',
        RDTO: '20.0',
        HUMEDAD: '50.1',
        ACIDEZ: '0.2',
        TICKET: '705'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '15622.0',
        RDTO: '16.3',
        HUMEDAD: '57.4',
        ACIDEZ: '0.2',
        TICKET: '706'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2065.0',
        RDTO: '22.2',
        HUMEDAD: '47.5',
        ACIDEZ: '0.2',
        TICKET: '707'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4225.0',
        RDTO: '22.2',
        HUMEDAD: '50.5',
        ACIDEZ: '0.3',
        TICKET: '708'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '796.0',
        RDTO: '20.9',
        HUMEDAD: '47.7',
        ACIDEZ: '0.3',
        TICKET: '709'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '8153.0',
        RDTO: '23.4',
        HUMEDAD: '52.2',
        ACIDEZ: '0.3',
        TICKET: '710'
    },
    {
        DIA: '5',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2813.0',
        RDTO: '21.9',
        HUMEDAD: '48.0',
        ACIDEZ: '0.2',
        TICKET: '711'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '302.0',
        RDTO: '20.0',
        HUMEDAD: '51.4',
        ACIDEZ: '0.1',
        TICKET: '716'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '213.0',
        RDTO: '23.7',
        HUMEDAD: '44.4',
        ACIDEZ: '0.1',
        TICKET: '717'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '213.0',
        RDTO: '23.7',
        HUMEDAD: '44.4',
        ACIDEZ: '0.1',
        TICKET: '718'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '519.0',
        RDTO: '19.7',
        HUMEDAD: '47.8',
        ACIDEZ: '0.1',
        TICKET: '719'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1581.0',
        RDTO: '23.13',
        HUMEDAD: '48.11',
        ACIDEZ: '0.2',
        TICKET: '1296'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1097.0',
        RDTO: '23.1',
        HUMEDAD: '45.4',
        ACIDEZ: '0.1',
        TICKET: '720'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1550.0',
        RDTO: '18.8',
        HUMEDAD: '49.1',
        ACIDEZ: '0.1',
        TICKET: '721'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '427.0',
        RDTO: '22.2',
        HUMEDAD: '47.1',
        ACIDEZ: '0.1',
        TICKET: '722'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '724.0',
        RDTO: '22.0',
        HUMEDAD: '48.7',
        ACIDEZ: '0.1',
        TICKET: '723'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1314.0',
        RDTO: '20.5',
        HUMEDAD: '51.6',
        ACIDEZ: '0.2',
        TICKET: '724'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1525.0',
        RDTO: '20.1',
        HUMEDAD: '46.6',
        ACIDEZ: '0.1',
        TICKET: '725'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '800.0',
        RDTO: '22.1',
        HUMEDAD: '46.4',
        ACIDEZ: '0.1',
        TICKET: '726'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '826.0',
        RDTO: '19.0',
        HUMEDAD: '54.2',
        ACIDEZ: '0.4',
        TICKET: '727'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1128.0',
        RDTO: '19.4',
        HUMEDAD: '51.8',
        ACIDEZ: '0.2',
        TICKET: '728'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1196.0',
        RDTO: '21.6',
        HUMEDAD: '49.8',
        ACIDEZ: '0.2',
        TICKET: '729'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3690.0',
        RDTO: '22.2',
        HUMEDAD: '44.9',
        ACIDEZ: '0.1',
        TICKET: '730'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3203.0',
        RDTO: '20.2',
        HUMEDAD: '48.0',
        ACIDEZ: '0.1',
        TICKET: '731'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2735.0',
        RDTO: '18.8',
        HUMEDAD: '53.2',
        ACIDEZ: '0.4',
        TICKET: '732'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '867.0',
        RDTO: '23.4',
        HUMEDAD: '46.9',
        ACIDEZ: '0.1',
        TICKET: '733'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4912.0',
        RDTO: '22.3',
        HUMEDAD: '49.0',
        ACIDEZ: '0.1',
        TICKET: '734'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1294.0',
        RDTO: '19.2',
        HUMEDAD: '51.9',
        ACIDEZ: '0.2',
        TICKET: '735'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '978.0',
        RDTO: '18.5',
        HUMEDAD: '50.9',
        ACIDEZ: '0.1',
        TICKET: '736'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '886.0',
        RDTO: '22.0',
        HUMEDAD: '47.2',
        ACIDEZ: '0.1',
        TICKET: '737'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1413.0',
        RDTO: '22.0',
        HUMEDAD: '49.4',
        ACIDEZ: '0.1',
        TICKET: '738'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '725.0',
        RDTO: '26.6',
        HUMEDAD: '41.5',
        ACIDEZ: '0.1',
        TICKET: '739'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '7616.0',
        RDTO: '19.8',
        HUMEDAD: '49.9',
        ACIDEZ: '0.2',
        TICKET: '740'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2008.0',
        RDTO: '20.4',
        HUMEDAD: '50.3',
        ACIDEZ: '0.1',
        TICKET: '741'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2008.0',
        RDTO: '20.4',
        HUMEDAD: '50.3',
        ACIDEZ: '0.1',
        TICKET: '742'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1837.0',
        RDTO: '18.0',
        HUMEDAD: '52.0',
        ACIDEZ: '0.1',
        TICKET: '743'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1125.0',
        RDTO: '21.4',
        HUMEDAD: '48.4',
        ACIDEZ: '0.1',
        TICKET: '744'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5694.0',
        RDTO: '22.8',
        HUMEDAD: '47.5',
        ACIDEZ: '0.2',
        TICKET: '750'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1575.0',
        RDTO: '20.7',
        HUMEDAD: '47.4',
        ACIDEZ: '0.1',
        TICKET: '751'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '331.0',
        RDTO: '20.8',
        HUMEDAD: '48.8',
        ACIDEZ: '0.1',
        TICKET: '752'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '688.0',
        RDTO: '20.4',
        HUMEDAD: '50.7',
        ACIDEZ: '0.3',
        TICKET: '753'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '694.0',
        RDTO: '19.7',
        HUMEDAD: '50.3',
        ACIDEZ: '0.2',
        TICKET: '754'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1040.0',
        RDTO: '20.0',
        HUMEDAD: '48.5',
        ACIDEZ: '0.1',
        TICKET: '755'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '436.0',
        RDTO: '21.5',
        HUMEDAD: '48.0',
        ACIDEZ: '0.1',
        TICKET: '756'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '11461.0',
        RDTO: '16.4',
        HUMEDAD: '55.8',
        ACIDEZ: '0.1',
        TICKET: '757'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '792.0',
        RDTO: '20.7',
        HUMEDAD: '52.2',
        ACIDEZ: '0.4',
        TICKET: '758'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '17726.0',
        RDTO: '16.1',
        HUMEDAD: '55.6',
        ACIDEZ: '0.2',
        TICKET: '745'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '693.0',
        RDTO: '26.7',
        HUMEDAD: '43.1',
        ACIDEZ: '0.1',
        TICKET: '759'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1653.0',
        RDTO: '21.1',
        HUMEDAD: '46.9',
        ACIDEZ: '0.1',
        TICKET: '746'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3809.0',
        RDTO: '21.2',
        HUMEDAD: '49.4',
        ACIDEZ: '0.1',
        TICKET: '747'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '988.0',
        RDTO: '17.5',
        HUMEDAD: '50.9',
        ACIDEZ: '0.2',
        TICKET: '748'
    },
    {
        DIA: '6',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4242.0',
        RDTO: '20.6',
        HUMEDAD: '49.3',
        ACIDEZ: '0.1',
        TICKET: '749'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3323.0',
        RDTO: '22.9',
        HUMEDAD: '44.5',
        ACIDEZ: '0.1',
        TICKET: '760'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1378.0',
        RDTO: '20.1',
        HUMEDAD: '49.4',
        ACIDEZ: '0.1',
        TICKET: '761'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1406.0',
        RDTO: '18.7',
        HUMEDAD: '53.2',
        ACIDEZ: '0.2',
        TICKET: '868'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '789.0',
        RDTO: '20.5',
        HUMEDAD: '47.3',
        ACIDEZ: '0.1',
        TICKET: '762'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3532.0',
        RDTO: '20.2',
        HUMEDAD: '47.7',
        ACIDEZ: '0.1',
        TICKET: '763'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '600.0',
        RDTO: '20.2',
        HUMEDAD: '47.5',
        ACIDEZ: '0.1',
        TICKET: '764'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2098.0',
        RDTO: '18.8',
        HUMEDAD: '52.5',
        ACIDEZ: '0.3',
        TICKET: '765'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4962.0',
        RDTO: '20.3',
        HUMEDAD: '48.2',
        ACIDEZ: '0.1',
        TICKET: '766'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1482.0',
        RDTO: '21.0',
        HUMEDAD: '50.3',
        ACIDEZ: '0.1',
        TICKET: '767'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '913.0',
        RDTO: '23.9',
        HUMEDAD: '48.4',
        ACIDEZ: '0.1',
        TICKET: '768'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '8723.0',
        RDTO: '19.3',
        HUMEDAD: '49.6',
        ACIDEZ: '0.2',
        TICKET: '769'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '641.0',
        RDTO: '19.4',
        HUMEDAD: '49.0',
        ACIDEZ: '0.1',
        TICKET: '770'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3611.0',
        RDTO: '21.3',
        HUMEDAD: '49.0',
        ACIDEZ: '0.1',
        TICKET: '771'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '11142.0',
        RDTO: '21.6',
        HUMEDAD: '49.4',
        ACIDEZ: '0.2',
        TICKET: '772'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2512.0',
        RDTO: '20.7',
        HUMEDAD: '48.8',
        ACIDEZ: '0.2',
        TICKET: '773'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2512.0',
        RDTO: '20.7',
        HUMEDAD: '48.8',
        ACIDEZ: '0.2',
        TICKET: '774'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1092.0',
        RDTO: '22.2',
        HUMEDAD: '47.4',
        ACIDEZ: '0.1',
        TICKET: '775'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3087.0',
        RDTO: '22.5',
        HUMEDAD: '49.0',
        ACIDEZ: '0.1',
        TICKET: '776'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1063.0',
        RDTO: '19.0',
        HUMEDAD: '49.0',
        ACIDEZ: '0.1',
        TICKET: '777'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2421.0',
        RDTO: '20.8',
        HUMEDAD: '48.3',
        ACIDEZ: '0.1',
        TICKET: '778'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1195.0',
        RDTO: '21.2',
        HUMEDAD: '49.4',
        ACIDEZ: '0.1',
        TICKET: '779'
    },
    {
        DIA: '7',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '7367.0',
        RDTO: '22.8',
        HUMEDAD: '51.7',
        ACIDEZ: '0.2',
        TICKET: '780'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '708.0',
        RDTO: '23.5',
        HUMEDAD: '46.7',
        ACIDEZ: '0.3',
        TICKET: '781'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1149.0',
        RDTO: '23.5',
        HUMEDAD: '46.7',
        ACIDEZ: '0.2',
        TICKET: '782'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '235.0',
        RDTO: '23.4',
        HUMEDAD: '47.4',
        ACIDEZ: '0.1',
        TICKET: '783'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '586.0',
        RDTO: '20.2',
        HUMEDAD: '50.5',
        ACIDEZ: '0.2',
        TICKET: '784'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '732.0',
        RDTO: '23.7',
        HUMEDAD: '45.4',
        ACIDEZ: '0.3',
        TICKET: '785'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '521.0',
        RDTO: '24.6',
        HUMEDAD: '44.9',
        ACIDEZ: '0.2',
        TICKET: '822'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '719.0',
        RDTO: '21.1',
        HUMEDAD: '50.6',
        ACIDEZ: '0.4',
        TICKET: '786'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '194.0',
        RDTO: '24.3',
        HUMEDAD: '46.2',
        ACIDEZ: '0.2',
        TICKET: '787'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '566.0',
        RDTO: '24.8',
        HUMEDAD: '45.6',
        ACIDEZ: '0.4',
        TICKET: '788'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '992.0',
        RDTO: '20.2',
        HUMEDAD: '51.6',
        ACIDEZ: '0.2',
        TICKET: '789'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '283.0',
        RDTO: '19.6',
        HUMEDAD: '50.5',
        ACIDEZ: '0.2',
        TICKET: '790'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '8296.0',
        RDTO: '20.6',
        HUMEDAD: '48.4',
        ACIDEZ: '0.2',
        TICKET: '791'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1305.0',
        RDTO: '20.4',
        HUMEDAD: '50.9',
        ACIDEZ: '0.3',
        TICKET: '792'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '989.0',
        RDTO: '19.3',
        HUMEDAD: '51.0',
        ACIDEZ: '0.2',
        TICKET: '793'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1202.0',
        RDTO: '15.5',
        HUMEDAD: '51.8',
        ACIDEZ: '0.1',
        TICKET: '794'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1752.0',
        RDTO: '20.3',
        HUMEDAD: '52.2',
        ACIDEZ: '0.3',
        TICKET: '795'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '593.0',
        RDTO: '19.4',
        HUMEDAD: '51.8',
        ACIDEZ: '0.4',
        TICKET: '796'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '707.0',
        RDTO: '22.2',
        HUMEDAD: '47.2',
        ACIDEZ: '0.1',
        TICKET: '797'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '547.0',
        RDTO: '21.2',
        HUMEDAD: '46.2',
        ACIDEZ: '0.1',
        TICKET: '798'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4109.0',
        RDTO: '22.3',
        HUMEDAD: '47.5',
        ACIDEZ: '0.2',
        TICKET: '799'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1166.0',
        RDTO: '20.8',
        HUMEDAD: '48.7',
        ACIDEZ: '0.2',
        TICKET: '800'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3104.0',
        RDTO: '19.0',
        HUMEDAD: '51.7',
        ACIDEZ: '0.1',
        TICKET: '801'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3502.0',
        RDTO: '22.6',
        HUMEDAD: '46.5',
        ACIDEZ: '0.2',
        TICKET: '802'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3158.0',
        RDTO: '18.9',
        HUMEDAD: '54.8',
        ACIDEZ: '0.2',
        TICKET: '803'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '942.0',
        RDTO: '24.2',
        HUMEDAD: '44.9',
        ACIDEZ: '0.3',
        TICKET: '804'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '842.0',
        RDTO: '18.3',
        HUMEDAD: '49.4',
        ACIDEZ: '0.1',
        TICKET: '805'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1359.0',
        RDTO: '19.3',
        HUMEDAD: '51.2',
        ACIDEZ: '0.2',
        TICKET: '806'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1022.0',
        RDTO: '23.9',
        HUMEDAD: '44.4',
        ACIDEZ: '0.1',
        TICKET: '807'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1486.0',
        RDTO: '15.7',
        HUMEDAD: '51.0',
        ACIDEZ: '0.1',
        TICKET: '808'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4132.0',
        RDTO: '21.3',
        HUMEDAD: '47.9',
        ACIDEZ: '0.2',
        TICKET: '823'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2548.0',
        RDTO: '21.3',
        HUMEDAD: '49.3',
        ACIDEZ: '0.3',
        TICKET: '809'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '6332.0',
        RDTO: '18.7',
        HUMEDAD: '48.7',
        ACIDEZ: '0.1',
        TICKET: '810'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1792.0',
        RDTO: '18.2',
        HUMEDAD: '50.7',
        ACIDEZ: '0.3',
        TICKET: '811'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2128.0',
        RDTO: '21.8',
        HUMEDAD: '49.3',
        ACIDEZ: '0.3',
        TICKET: '812'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1174.0',
        RDTO: '20.4',
        HUMEDAD: '51.3',
        ACIDEZ: '0.3',
        TICKET: '813'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '920.0',
        RDTO: '18.8',
        HUMEDAD: '48.2',
        ACIDEZ: '0.1',
        TICKET: '814'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1272.0',
        RDTO: '19.6',
        HUMEDAD: '55.7',
        ACIDEZ: '0.2',
        TICKET: '815'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4159.0',
        RDTO: '21.5',
        HUMEDAD: '49.0',
        ACIDEZ: '0.2',
        TICKET: '816'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4202.0',
        RDTO: '18.0',
        HUMEDAD: '50.2',
        ACIDEZ: '0.2',
        TICKET: '817'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '8259.0',
        RDTO: '19.0',
        HUMEDAD: '52.3',
        ACIDEZ: '0.1',
        TICKET: '818'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5839.0',
        RDTO: '20.3',
        HUMEDAD: '51.0',
        ACIDEZ: '0.2',
        TICKET: '819'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2163.0',
        RDTO: '23.7',
        HUMEDAD: '47.2',
        ACIDEZ: '0.2',
        TICKET: '820'
    },
    {
        DIA: '8',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '6740.0',
        RDTO: '20.3',
        HUMEDAD: '51.5',
        ACIDEZ: '0.1',
        TICKET: '821'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '661.0',
        RDTO: '22.3',
        HUMEDAD: '47.1',
        ACIDEZ: '0.3',
        TICKET: '832'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '290.0',
        RDTO: '21.0',
        HUMEDAD: '49.1',
        ACIDEZ: '0.2',
        TICKET: '833'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '945.0',
        RDTO: '21.0',
        HUMEDAD: '51.6',
        ACIDEZ: '0.5',
        TICKET: '834'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '839.0',
        RDTO: '19.8',
        HUMEDAD: '51.2',
        ACIDEZ: '0.3',
        TICKET: '835'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1370.0',
        RDTO: '19.0',
        HUMEDAD: '52.8',
        ACIDEZ: '0.3',
        TICKET: '836'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '967.0',
        RDTO: '25.1',
        HUMEDAD: '43.9',
        ACIDEZ: '0.3',
        TICKET: '837'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1255.0',
        RDTO: '24.3',
        HUMEDAD: '45.2',
        ACIDEZ: '0.3',
        TICKET: '838'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1674.0',
        RDTO: '20.7',
        HUMEDAD: '52.1',
        ACIDEZ: '0.4',
        TICKET: '839'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1442.0',
        RDTO: '21.6',
        HUMEDAD: '48.8',
        ACIDEZ: '0.3',
        TICKET: '840'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '235.0',
        RDTO: '19.7',
        HUMEDAD: '50.7',
        ACIDEZ: '0.2',
        TICKET: '824'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3399.0',
        RDTO: '21.1',
        HUMEDAD: '49.2',
        ACIDEZ: '0.3',
        TICKET: '825'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '834.0',
        RDTO: '22.7',
        HUMEDAD: '45.0',
        ACIDEZ: '0.2',
        TICKET: '826'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '238.0',
        RDTO: '17.8',
        HUMEDAD: '49.1',
        ACIDEZ: '0.2',
        TICKET: '827'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '805.0',
        RDTO: '23.3',
        HUMEDAD: '45.3',
        ACIDEZ: '0.2',
        TICKET: '828'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1716.0',
        RDTO: '19.6',
        HUMEDAD: '50.9',
        ACIDEZ: '0.3',
        TICKET: '829'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1224.0',
        RDTO: '19.4',
        HUMEDAD: '50.4',
        ACIDEZ: '0.2',
        TICKET: '830'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '476.0',
        RDTO: '19.8',
        HUMEDAD: '47.6',
        ACIDEZ: '0.2',
        TICKET: '831'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '653.0',
        RDTO: '21.3',
        HUMEDAD: '48.5',
        ACIDEZ: '0.3',
        TICKET: '841'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '822.0',
        RDTO: '21.5',
        HUMEDAD: '52.5',
        ACIDEZ: '0.6',
        TICKET: '842'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2271.0',
        RDTO: '21.8',
        HUMEDAD: '48.6',
        ACIDEZ: '0.3',
        TICKET: '843'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2114.0',
        RDTO: '22.2',
        HUMEDAD: '48.8',
        ACIDEZ: '0.3',
        TICKET: '844'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1447.0',
        RDTO: '20.4',
        HUMEDAD: '50.5',
        ACIDEZ: '0.4',
        TICKET: '845'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '716.0',
        RDTO: '21.8',
        HUMEDAD: '48.3',
        ACIDEZ: '0.4',
        TICKET: '846'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '619.0',
        RDTO: '18.2',
        HUMEDAD: '52.3',
        ACIDEZ: '0.3',
        TICKET: '847'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1393.0',
        RDTO: '20.0',
        HUMEDAD: '50.8',
        ACIDEZ: '0.3',
        TICKET: '848'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4457.0',
        RDTO: '23.6',
        HUMEDAD: '45.9',
        ACIDEZ: '0.3',
        TICKET: '849'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1406.0',
        RDTO: '21.1',
        HUMEDAD: '50.6',
        ACIDEZ: '0.3',
        TICKET: '850'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '880.0',
        RDTO: '25.3',
        HUMEDAD: '44.8',
        ACIDEZ: '0.3',
        TICKET: '851'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2115.0',
        RDTO: '19.2',
        HUMEDAD: '51.8',
        ACIDEZ: '0.2',
        TICKET: '852'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4477.0',
        RDTO: '21.4',
        HUMEDAD: '50.7',
        ACIDEZ: '0.3',
        TICKET: '853'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1225.0',
        RDTO: '18.2',
        HUMEDAD: '58.5',
        ACIDEZ: '0.3',
        TICKET: '854'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4858.0',
        RDTO: '18.6',
        HUMEDAD: '53.4',
        ACIDEZ: '0.4',
        TICKET: '855'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '6114.0',
        RDTO: '21.8',
        HUMEDAD: '49.9',
        ACIDEZ: '0.3',
        TICKET: '856'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4647.0',
        RDTO: '20.1',
        HUMEDAD: '49.8',
        ACIDEZ: '0.2',
        TICKET: '857'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '9190.0',
        RDTO: '19.4',
        HUMEDAD: '50.8',
        ACIDEZ: '0.2',
        TICKET: '858'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2856.0',
        RDTO: '19.6',
        HUMEDAD: '50.8',
        ACIDEZ: '0.2',
        TICKET: '859'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3130.0',
        RDTO: '18.0',
        HUMEDAD: '51.1',
        ACIDEZ: '0.2',
        TICKET: '860'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '8722.0',
        RDTO: '20.2',
        HUMEDAD: '52.7',
        ACIDEZ: '0.2',
        TICKET: '861'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2697.0',
        RDTO: '23.7',
        HUMEDAD: '47.2',
        ACIDEZ: '0.2',
        TICKET: '862'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '6644.0',
        RDTO: '20.5',
        HUMEDAD: '50.9',
        ACIDEZ: '0.2',
        TICKET: '863'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1175.0',
        RDTO: '19.6',
        HUMEDAD: '51.2',
        ACIDEZ: '0.2',
        TICKET: '864'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3613.0',
        RDTO: '20.3',
        HUMEDAD: '48.7',
        ACIDEZ: '0.2',
        TICKET: '865'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3366.0',
        RDTO: '23.5',
        HUMEDAD: '47.9',
        ACIDEZ: '0.2',
        TICKET: '866'
    },
    {
        DIA: '9',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '12159.0',
        RDTO: '20.3',
        HUMEDAD: '53.3',
        ACIDEZ: '0.2',
        TICKET: '867'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2074.0',
        RDTO: '22.0',
        HUMEDAD: '47.4',
        ACIDEZ: '0.2',
        TICKET: '869'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '6939.0',
        RDTO: '20.1',
        HUMEDAD: '50.9',
        ACIDEZ: '0.2',
        TICKET: '870'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '867.0',
        RDTO: '26.77',
        HUMEDAD: '46.22',
        ACIDEZ: '0.23',
        TICKET: '1297'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '6080.0',
        RDTO: '20.9',
        HUMEDAD: '49.1',
        ACIDEZ: '0.2',
        TICKET: '871'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2852.0',
        RDTO: '20.9',
        HUMEDAD: '50.1',
        ACIDEZ: '0.1',
        TICKET: '872'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '556.0',
        RDTO: '21.4',
        HUMEDAD: '47.2',
        ACIDEZ: '0.1',
        TICKET: '873'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1016.0',
        RDTO: '15.7',
        HUMEDAD: '51.1',
        ACIDEZ: '0.2',
        TICKET: '874'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '698.0',
        RDTO: '24.05',
        HUMEDAD: '48.62',
        ACIDEZ: '0.32',
        TICKET: '1298'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '372.0',
        RDTO: '19.0',
        HUMEDAD: '54.9',
        ACIDEZ: '0.3',
        TICKET: '875'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '544.0',
        RDTO: '18.9',
        HUMEDAD: '51.7',
        ACIDEZ: '0.1',
        TICKET: '876'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '497.0',
        RDTO: '17.3',
        HUMEDAD: '56.7',
        ACIDEZ: '0.2',
        TICKET: '877'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '367.0',
        RDTO: '17.6',
        HUMEDAD: '48.7',
        ACIDEZ: '0.3',
        TICKET: '878'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '859.0',
        RDTO: '23.6',
        HUMEDAD: '46.0',
        ACIDEZ: '0.1',
        TICKET: '879'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1198.0',
        RDTO: '20.7',
        HUMEDAD: '49.2',
        ACIDEZ: '0.1',
        TICKET: '880'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1050.0',
        RDTO: '23.8',
        HUMEDAD: '44.0',
        ACIDEZ: '0.1',
        TICKET: '881'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '416.0',
        RDTO: '16.0',
        HUMEDAD: '53.2',
        ACIDEZ: '0.1',
        TICKET: '882'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1998.0',
        RDTO: '24.6',
        HUMEDAD: '44.3',
        ACIDEZ: '0.1',
        TICKET: '883'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '479.0',
        RDTO: '17.9',
        HUMEDAD: '55.4',
        ACIDEZ: '0.4',
        TICKET: '884'
    },
    {
        DIA: '12',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '91.0',
        RDTO: '21.3',
        HUMEDAD: '50.9',
        ACIDEZ: '0.2',
        TICKET: '885'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '962.0',
        RDTO: '21.7',
        HUMEDAD: '49.7',
        ACIDEZ: '0.2',
        TICKET: '886'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3312.0',
        RDTO: '21.9',
        HUMEDAD: '50.4',
        ACIDEZ: '0.3',
        TICKET: '887'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '905.0',
        RDTO: '18.5',
        HUMEDAD: '53.7',
        ACIDEZ: '0.3',
        TICKET: '888'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '176.0',
        RDTO: '22.9',
        HUMEDAD: '46.9',
        ACIDEZ: '0.3',
        TICKET: '889'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '269.0',
        RDTO: '23.0',
        HUMEDAD: '48.3',
        ACIDEZ: '0.2',
        TICKET: '890'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '404.0',
        RDTO: '22.1',
        HUMEDAD: '47.7',
        ACIDEZ: '0.2',
        TICKET: '891'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2609.0',
        RDTO: '22.1',
        HUMEDAD: '46.8',
        ACIDEZ: '0.2',
        TICKET: '892'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '570.0',
        RDTO: '21.0',
        HUMEDAD: '48.8',
        ACIDEZ: '0.2',
        TICKET: '893'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3816.0',
        RDTO: '23.8',
        HUMEDAD: '46.4',
        ACIDEZ: '0.2',
        TICKET: '894'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '274.0',
        RDTO: '20.9',
        HUMEDAD: '48.5',
        ACIDEZ: '0.2',
        TICKET: '895'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1184.0',
        RDTO: '21.4',
        HUMEDAD: '47.8',
        ACIDEZ: '0.2',
        TICKET: '896'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '79.0',
        RDTO: '19.0',
        HUMEDAD: '52.6',
        ACIDEZ: '0.4',
        TICKET: '897'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1011.0',
        RDTO: '23.5',
        HUMEDAD: '45.7',
        ACIDEZ: '0.2',
        TICKET: '898'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '806.0',
        RDTO: '19.6',
        HUMEDAD: '51.8',
        ACIDEZ: '0.2',
        TICKET: '899'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3853.0',
        RDTO: '22.5',
        HUMEDAD: '48.7',
        ACIDEZ: '0.2',
        TICKET: '900'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1064.0',
        RDTO: '22.7',
        HUMEDAD: '47.0',
        ACIDEZ: '0.2',
        TICKET: '901'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '772.0',
        RDTO: '20.0',
        HUMEDAD: '52.0',
        ACIDEZ: '0.3',
        TICKET: '902'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1415.0',
        RDTO: '20.7',
        HUMEDAD: '51.2',
        ACIDEZ: '0.2',
        TICKET: '903'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '333.0',
        RDTO: '20.64',
        HUMEDAD: '51.3',
        ACIDEZ: '0.32',
        TICKET: '904'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '800.0',
        RDTO: '20.64',
        HUMEDAD: '51.3',
        ACIDEZ: '0.32',
        TICKET: '905'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4055.0',
        RDTO: '22.2',
        HUMEDAD: '46.2',
        ACIDEZ: '0.2',
        TICKET: '906'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '824.0',
        RDTO: '22.2',
        HUMEDAD: '49.4',
        ACIDEZ: '0.2',
        TICKET: '907'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '972.0',
        RDTO: '25.3',
        HUMEDAD: '44.5',
        ACIDEZ: '0.2',
        TICKET: '908'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1618.0',
        RDTO: '21.6',
        HUMEDAD: '49.1',
        ACIDEZ: '0.1',
        TICKET: '918'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1093.0',
        RDTO: '22.6',
        HUMEDAD: '45.1',
        ACIDEZ: '0.1',
        TICKET: '919'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1178.0',
        RDTO: '14.0',
        HUMEDAD: '51.6',
        ACIDEZ: '0.1',
        TICKET: '920'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '432.0',
        RDTO: '18.8',
        HUMEDAD: '49.6',
        ACIDEZ: '0.1',
        TICKET: '923'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3777.0',
        RDTO: '21.3',
        HUMEDAD: '47.8',
        ACIDEZ: '0.2',
        TICKET: '921'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '199.0',
        RDTO: '23.0',
        HUMEDAD: '46.0',
        ACIDEZ: '0.1',
        TICKET: '922'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '564.0',
        RDTO: '23.5',
        HUMEDAD: '44.6',
        ACIDEZ: '0.1',
        TICKET: '924'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1842.0',
        RDTO: '22.6',
        HUMEDAD: '45.7',
        ACIDEZ: '0.1',
        TICKET: '925'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1175.0',
        RDTO: '19.3',
        HUMEDAD: '50.5',
        ACIDEZ: '0.1',
        TICKET: '926'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1404.0',
        RDTO: '20.2',
        HUMEDAD: '51.8',
        ACIDEZ: '0.3',
        TICKET: '909'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '715.0',
        RDTO: '21.1',
        HUMEDAD: '48.4',
        ACIDEZ: '0.1',
        TICKET: '910'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '6435.0',
        RDTO: '21.1',
        HUMEDAD: '48.4',
        ACIDEZ: '0.1',
        TICKET: '911'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2840.0',
        RDTO: '19.0',
        HUMEDAD: '54.0',
        ACIDEZ: '0.2',
        TICKET: '912'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2099.0',
        RDTO: '22.7',
        HUMEDAD: '46.8',
        ACIDEZ: '0.1',
        TICKET: '913'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '952.0',
        RDTO: '19.8',
        HUMEDAD: '50.7',
        ACIDEZ: '0.1',
        TICKET: '914'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2453.0',
        RDTO: '23.4',
        HUMEDAD: '44.9',
        ACIDEZ: '0.1',
        TICKET: '915'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4083.0',
        RDTO: '22.4',
        HUMEDAD: '46.3',
        ACIDEZ: '0.1',
        TICKET: '916'
    },
    {
        DIA: '13',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3126.0',
        RDTO: '22.3',
        HUMEDAD: '47.7',
        ACIDEZ: '0.1',
        TICKET: '917'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1124.0',
        RDTO: '21.7',
        HUMEDAD: '46.5',
        ACIDEZ: '0.1',
        TICKET: '927'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1528.0',
        RDTO: '21.0',
        HUMEDAD: '52.1',
        ACIDEZ: '0.2',
        TICKET: '928'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2781.0',
        RDTO: '22.6',
        HUMEDAD: '47.4',
        ACIDEZ: '0.1',
        TICKET: '929'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '568.0',
        RDTO: '19.1',
        HUMEDAD: '50.1',
        ACIDEZ: '0.1',
        TICKET: '930'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '799.0',
        RDTO: '22.6',
        HUMEDAD: '47.5',
        ACIDEZ: '0.1',
        TICKET: '931'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1250.0',
        RDTO: '20.1',
        HUMEDAD: '52.7',
        ACIDEZ: '0.1',
        TICKET: '932'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1059.0',
        RDTO: '23.2',
        HUMEDAD: '45.5',
        ACIDEZ: '0.1',
        TICKET: '933'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '526.0',
        RDTO: '21.2',
        HUMEDAD: '50.9',
        ACIDEZ: '0.1',
        TICKET: '934'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4780.0',
        RDTO: '22.9',
        HUMEDAD: '46.2',
        ACIDEZ: '0.1',
        TICKET: '935'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1056.0',
        RDTO: '20.9',
        HUMEDAD: '49.6',
        ACIDEZ: '0.1',
        TICKET: '936'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '560.0',
        RDTO: '22.1',
        HUMEDAD: '45.9',
        ACIDEZ: '0.1',
        TICKET: '937'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5040.0',
        RDTO: '22.1',
        HUMEDAD: '45.9',
        ACIDEZ: '0.1',
        TICKET: '938'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '909.0',
        RDTO: '19.8',
        HUMEDAD: '48.7',
        ACIDEZ: '0.2',
        TICKET: '939'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4945.0',
        RDTO: '21.7',
        HUMEDAD: '49.8',
        ACIDEZ: '0.2',
        TICKET: '941'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '799.0',
        RDTO: '24.0',
        HUMEDAD: '44.5',
        ACIDEZ: '0.1',
        TICKET: '940'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5136.0',
        RDTO: '20.1',
        HUMEDAD: '51.9',
        ACIDEZ: '0.2',
        TICKET: '942'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3046.0',
        RDTO: '22.8',
        HUMEDAD: '47.6',
        ACIDEZ: '0.1',
        TICKET: '943'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1804.0',
        RDTO: '21.7',
        HUMEDAD: '52.0',
        ACIDEZ: '0.3',
        TICKET: '944'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4303.0',
        RDTO: '19.8',
        HUMEDAD: '49.3',
        ACIDEZ: '0.1',
        TICKET: '945'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2446.0',
        RDTO: '24.7',
        HUMEDAD: '43.9',
        ACIDEZ: '0.1',
        TICKET: '946'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4519.0',
        RDTO: '20.5',
        HUMEDAD: '46.5',
        ACIDEZ: '0.1',
        TICKET: '947'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3218.0',
        RDTO: '23.2',
        HUMEDAD: '47.5',
        ACIDEZ: '0.1',
        TICKET: '948'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '6585.0',
        RDTO: '23.2',
        HUMEDAD: '46.1',
        ACIDEZ: '0.1',
        TICKET: '949'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '434.0',
        RDTO: '21.3',
        HUMEDAD: '47.2',
        ACIDEZ: '0.1',
        TICKET: '950'
    },
    {
        DIA: '14',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '11940.0',
        RDTO: '22.7',
        HUMEDAD: '51.2',
        ACIDEZ: '0.1',
        TICKET: '951'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '560.0',
        RDTO: '15.2',
        HUMEDAD: '51.4',
        ACIDEZ: '0.1',
        TICKET: '952'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1451.0',
        RDTO: '22.4',
        HUMEDAD: '47.3',
        ACIDEZ: '0.1',
        TICKET: '953'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3242.0',
        RDTO: '20.5',
        HUMEDAD: '51.4',
        ACIDEZ: '0.1',
        TICKET: '954'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '785.0',
        RDTO: '23.5',
        HUMEDAD: '44.9',
        ACIDEZ: '0.2',
        TICKET: '955'
    },
    {
        DIA: '15',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '509.0',
        RDTO: '20.4',
        HUMEDAD: '49.8',
        ACIDEZ: '0.2',
        TICKET: '956'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '726.0',
        RDTO: '21.2',
        HUMEDAD: '51.0',
        ACIDEZ: '0.2',
        TICKET: '957'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '249.0',
        RDTO: '22.9',
        HUMEDAD: '47.0',
        ACIDEZ: '0.2',
        TICKET: '958'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '845.0',
        RDTO: '17.4',
        HUMEDAD: '52.1',
        ACIDEZ: '0.1',
        TICKET: '959'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1215.0',
        RDTO: '22.7',
        HUMEDAD: '47.9',
        ACIDEZ: '0.2',
        TICKET: '960'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '509.0',
        RDTO: '23.6',
        HUMEDAD: '46.0',
        ACIDEZ: '0.3',
        TICKET: '961'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '860.0',
        RDTO: '23.9',
        HUMEDAD: '46.0',
        ACIDEZ: '0.2',
        TICKET: '962'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3231.0',
        RDTO: '21.5',
        HUMEDAD: '49.2',
        ACIDEZ: '0.2',
        TICKET: '963'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '928.0',
        RDTO: '24.0',
        HUMEDAD: '47.5',
        ACIDEZ: '0.2',
        TICKET: '964'
    },
    {
        DIA: '16',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1433.0',
        RDTO: '20.2',
        HUMEDAD: '51.5',
        ACIDEZ: '0.3',
        TICKET: '965'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1139.0',
        RDTO: '20.8',
        HUMEDAD: '51.2',
        ACIDEZ: '0.3',
        TICKET: '966'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '7649.0',
        RDTO: '20.6',
        HUMEDAD: '50.3',
        ACIDEZ: '0.3',
        TICKET: '967'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '620.0',
        RDTO: '21.1',
        HUMEDAD: '47.1',
        ACIDEZ: '0.2',
        TICKET: '968'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1404.0',
        RDTO: '21.2',
        HUMEDAD: '50.2',
        ACIDEZ: '0.3',
        TICKET: '969'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '487.0',
        RDTO: '22.5',
        HUMEDAD: '47.5',
        ACIDEZ: '0.3',
        TICKET: '970'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '257.0',
        RDTO: '24.8',
        HUMEDAD: '48.5',
        ACIDEZ: '0.4',
        TICKET: '971'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1444.0',
        RDTO: '18.0',
        HUMEDAD: '52.7',
        ACIDEZ: '0.3',
        TICKET: '972'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '462.0',
        RDTO: '22.6',
        HUMEDAD: '45.8',
        ACIDEZ: '0.2',
        TICKET: '973'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1186.0',
        RDTO: '22.7',
        HUMEDAD: '48.3',
        ACIDEZ: '0.3',
        TICKET: '974'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1850.0',
        RDTO: '22.0',
        HUMEDAD: '51.0',
        ACIDEZ: '0.4',
        TICKET: '975'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '870.0',
        RDTO: '21.4',
        HUMEDAD: '47.7',
        ACIDEZ: '0.2',
        TICKET: '976'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '838.0',
        RDTO: '22.4',
        HUMEDAD: '48.1',
        ACIDEZ: '0.2',
        TICKET: '977'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4334.0',
        RDTO: '21.1',
        HUMEDAD: '49.6',
        ACIDEZ: '0.2',
        TICKET: '978'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1084.0',
        RDTO: '21.1',
        HUMEDAD: '49.6',
        ACIDEZ: '0.2',
        TICKET: '979'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '515.0',
        RDTO: '22.8',
        HUMEDAD: '48.5',
        ACIDEZ: '0.3',
        TICKET: '980'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2467.0',
        RDTO: '23.9',
        HUMEDAD: '45.6',
        ACIDEZ: '0.2',
        TICKET: '981'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '621.0',
        RDTO: '24.9',
        HUMEDAD: '45.5',
        ACIDEZ: '0.1',
        TICKET: '982'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1706.0',
        RDTO: '22.6',
        HUMEDAD: '49.9',
        ACIDEZ: '0.4',
        TICKET: '983'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '804.0',
        RDTO: '22.1',
        HUMEDAD: '49.2',
        ACIDEZ: '0.3',
        TICKET: '984'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '7233.0',
        RDTO: '22.1',
        HUMEDAD: '49.2',
        ACIDEZ: '0.3',
        TICKET: '985'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1601.0',
        RDTO: '21.3',
        HUMEDAD: '50.7',
        ACIDEZ: '0.3',
        TICKET: '986'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1883.0',
        RDTO: '23.5',
        HUMEDAD: '50.2',
        ACIDEZ: '0.3',
        TICKET: '987'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1796.0',
        RDTO: '22.8',
        HUMEDAD: '46.1',
        ACIDEZ: '0.2',
        TICKET: '988'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5623.0',
        RDTO: '21.3',
        HUMEDAD: '49.8',
        ACIDEZ: '0.2',
        TICKET: '989'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3623.0',
        RDTO: '22.5',
        HUMEDAD: '49.3',
        ACIDEZ: '0.2',
        TICKET: '990'
    },
    {
        DIA: '17',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '8463.0',
        RDTO: '20.7',
        HUMEDAD: '49.7',
        ACIDEZ: '0.2',
        TICKET: '991'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '448.0',
        RDTO: '23.8',
        HUMEDAD: '45.0',
        ACIDEZ: '0.2',
        TICKET: '992'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '175.0',
        RDTO: '24.4',
        HUMEDAD: '45.8',
        ACIDEZ: '0.3',
        TICKET: '993'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '424.0',
        RDTO: '20.2',
        HUMEDAD: '50.3',
        ACIDEZ: '0.3',
        TICKET: '994'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '332.0',
        RDTO: '23.2',
        HUMEDAD: '46.6',
        ACIDEZ: '0.3',
        TICKET: '995'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '696.0',
        RDTO: '22.5',
        HUMEDAD: '47.3',
        ACIDEZ: '0.4',
        TICKET: '996'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '687.0',
        RDTO: '24.4',
        HUMEDAD: '46.7',
        ACIDEZ: '0.2',
        TICKET: '997'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '226.0',
        RDTO: '17.9',
        HUMEDAD: '53.0',
        ACIDEZ: '0.3',
        TICKET: '998'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1131.0',
        RDTO: '23.0',
        HUMEDAD: '47.4',
        ACIDEZ: '0.3',
        TICKET: '999'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1300.0',
        RDTO: '22.6',
        HUMEDAD: '49.8',
        ACIDEZ: '0.3',
        TICKET: '1000'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '814.0',
        RDTO: '21.5',
        HUMEDAD: '52.3',
        ACIDEZ: '0.3',
        TICKET: '1001'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1012.0',
        RDTO: '22.4',
        HUMEDAD: '49.6',
        ACIDEZ: '0.5',
        TICKET: '1002'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1333.0',
        RDTO: '25.3',
        HUMEDAD: '43.5',
        ACIDEZ: '0.2',
        TICKET: '1003'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '430.0',
        RDTO: '24.2',
        HUMEDAD: '46.8',
        ACIDEZ: '0.2',
        TICKET: '1004'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2290.0',
        RDTO: '24.9',
        HUMEDAD: '45.7',
        ACIDEZ: '0.2',
        TICKET: '1005'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1668.0',
        RDTO: '24.8',
        HUMEDAD: '44.2',
        ACIDEZ: '0.2',
        TICKET: '1006'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '923.0',
        RDTO: '23.4',
        HUMEDAD: '45.8',
        ACIDEZ: '0.2',
        TICKET: '1007'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1560.0',
        RDTO: '22.7',
        HUMEDAD: '48.6',
        ACIDEZ: '0.4',
        TICKET: '1008'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '868.0',
        RDTO: '23.4',
        HUMEDAD: '47.3',
        ACIDEZ: '0.3',
        TICKET: '1009'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '7816.0',
        RDTO: '23.4',
        HUMEDAD: '47.3',
        ACIDEZ: '0.3',
        TICKET: '1010'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3300.0',
        RDTO: '20.8',
        HUMEDAD: '47.6',
        ACIDEZ: '0.1',
        TICKET: '1011'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5436.0',
        RDTO: '20.0',
        HUMEDAD: '48.2',
        ACIDEZ: '0.2',
        TICKET: '1012'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2512.0',
        RDTO: '21.1',
        HUMEDAD: '45.3',
        ACIDEZ: '0.1',
        TICKET: '1013'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '7164.0',
        RDTO: '21.6',
        HUMEDAD: '48.8',
        ACIDEZ: '0.3',
        TICKET: '1014'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '655.0',
        RDTO: '27.4',
        HUMEDAD: '47.2',
        ACIDEZ: '0.2',
        TICKET: '1015'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '6060.0',
        RDTO: '22.2',
        HUMEDAD: '48.0',
        ACIDEZ: '0.2',
        TICKET: '1016'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '446.0',
        RDTO: '23.6',
        HUMEDAD: '45.9',
        ACIDEZ: '0.2',
        TICKET: '1017'
    },
    {
        DIA: '18',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2551.0',
        RDTO: '22.5',
        HUMEDAD: '48.0',
        ACIDEZ: '0.2',
        TICKET: '1018'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '588.0',
        RDTO: '22.5',
        HUMEDAD: '47.9',
        ACIDEZ: '0.2',
        TICKET: '1019'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '204.0',
        RDTO: '24.2',
        HUMEDAD: '44.9',
        ACIDEZ: '0.1',
        TICKET: '1020'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '357.0',
        RDTO: '20.4',
        HUMEDAD: '49.2',
        ACIDEZ: '0.1',
        TICKET: '1021'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '651.0',
        RDTO: '22.8',
        HUMEDAD: '46.4',
        ACIDEZ: '0.1',
        TICKET: '1022'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '665.0',
        RDTO: '24.1',
        HUMEDAD: '46.7',
        ACIDEZ: '0.0',
        TICKET: '1023'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '631.0',
        RDTO: '22.6',
        HUMEDAD: '47.6',
        ACIDEZ: '0.0',
        TICKET: '1024'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1278.0',
        RDTO: '24.4',
        HUMEDAD: '48.1',
        ACIDEZ: '0.1',
        TICKET: '1025'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1235.0',
        RDTO: '21.7',
        HUMEDAD: '50.1',
        ACIDEZ: '0.3',
        TICKET: '1026'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '193.0',
        RDTO: '23.9',
        HUMEDAD: '47.1',
        ACIDEZ: '0.1',
        TICKET: '1027'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '571.0',
        RDTO: '24.4',
        HUMEDAD: '44.0',
        ACIDEZ: '0.1',
        TICKET: '1028'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '955.0',
        RDTO: '23.5',
        HUMEDAD: '48.6',
        ACIDEZ: '0.2',
        TICKET: '1029'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1339.0',
        RDTO: '28.7',
        HUMEDAD: '43.7',
        ACIDEZ: '0.2',
        TICKET: '1030'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '562.0',
        RDTO: '21.6',
        HUMEDAD: '49.9',
        ACIDEZ: '0.1',
        TICKET: '1031'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2133.0',
        RDTO: '21.0',
        HUMEDAD: '49.1',
        ACIDEZ: '0.2',
        TICKET: '1032'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1420.0',
        RDTO: '28.5',
        HUMEDAD: '43.1',
        ACIDEZ: '0.2',
        TICKET: '1033'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2905.0',
        RDTO: '23.8',
        HUMEDAD: '46.2',
        ACIDEZ: '0.1',
        TICKET: '1034'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '506.0',
        RDTO: '23.1',
        HUMEDAD: '47.6',
        ACIDEZ: '0.3',
        TICKET: '1035'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4551.0',
        RDTO: '23.1',
        HUMEDAD: '47.6',
        ACIDEZ: '0.3',
        TICKET: '1036'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1750.0',
        RDTO: '21.2',
        HUMEDAD: '48.9',
        ACIDEZ: '0.2',
        TICKET: '1037'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '341.0',
        RDTO: '20.8',
        HUMEDAD: '50.2',
        ACIDEZ: '0.3',
        TICKET: '1038'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3330.0',
        RDTO: '21.5',
        HUMEDAD: '46.6',
        ACIDEZ: '0.1',
        TICKET: '1039'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4546.0',
        RDTO: '22.6',
        HUMEDAD: '47.4',
        ACIDEZ: '0.1',
        TICKET: '1040'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '7296.0',
        RDTO: '22.0',
        HUMEDAD: '49.7',
        ACIDEZ: '0.1',
        TICKET: '1041'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1810.0',
        RDTO: '23.4',
        HUMEDAD: '49.1',
        ACIDEZ: '0.3',
        TICKET: '1042'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2248.0',
        RDTO: '24.4',
        HUMEDAD: '45.3',
        ACIDEZ: '0.1',
        TICKET: '1043'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4871.0',
        RDTO: '21.8',
        HUMEDAD: '48.1',
        ACIDEZ: '0.1',
        TICKET: '1044'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '11760.0',
        RDTO: '24.2',
        HUMEDAD: '50.5',
        ACIDEZ: '0.2',
        TICKET: '1045'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1746.0',
        RDTO: '22.5',
        HUMEDAD: '48.1',
        ACIDEZ: '0.1',
        TICKET: '1046'
    },
    {
        DIA: '19',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '546.0',
        RDTO: '21.4',
        HUMEDAD: '46.8',
        ACIDEZ: '0.1',
        TICKET: '1047'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '492.0',
        RDTO: '25.3',
        HUMEDAD: '42.9',
        ACIDEZ: '0.1',
        TICKET: '1048'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '364.0',
        RDTO: '20.9',
        HUMEDAD: '47.3',
        ACIDEZ: '0.1',
        TICKET: '1049'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '6405.0',
        RDTO: '23.2',
        HUMEDAD: '48.6',
        ACIDEZ: '0.2',
        TICKET: '1070'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '129.0',
        RDTO: '22.0',
        HUMEDAD: '45.0',
        ACIDEZ: '0.1',
        TICKET: '1071'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '809.0',
        RDTO: '23.1',
        HUMEDAD: '47.0',
        ACIDEZ: '0.1',
        TICKET: '1050'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '493.0',
        RDTO: '22.7',
        HUMEDAD: '46.2',
        ACIDEZ: '0.1',
        TICKET: '1051'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '918.0',
        RDTO: '24.0',
        HUMEDAD: '44.8',
        ACIDEZ: '0.1',
        TICKET: '1052'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '264.0',
        RDTO: '16.8',
        HUMEDAD: '53.7',
        ACIDEZ: '0.1',
        TICKET: '1053'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1087.0',
        RDTO: '22.2',
        HUMEDAD: '48.0',
        ACIDEZ: '0.1',
        TICKET: '1054'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '891.0',
        RDTO: '21.8',
        HUMEDAD: '50.1',
        ACIDEZ: '0.2',
        TICKET: '1055'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1259.0',
        RDTO: '23.1',
        HUMEDAD: '47.2',
        ACIDEZ: '0.1',
        TICKET: '1056'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1356.0',
        RDTO: '24.9',
        HUMEDAD: '42.2',
        ACIDEZ: '0.1',
        TICKET: '1057'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '622.0',
        RDTO: '23.3',
        HUMEDAD: '44.8',
        ACIDEZ: '0.1',
        TICKET: '1058'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '798.0',
        RDTO: '26.4',
        HUMEDAD: '41.1',
        ACIDEZ: '0.1',
        TICKET: '1059'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '691.0',
        RDTO: '20.5',
        HUMEDAD: '49.0',
        ACIDEZ: '0.1',
        TICKET: '1060'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3032.0',
        RDTO: '23.7',
        HUMEDAD: '46.2',
        ACIDEZ: '0.1',
        TICKET: '1061'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1246.0',
        RDTO: '20.7',
        HUMEDAD: '48.5',
        ACIDEZ: '0.2',
        TICKET: '1062'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4866.0',
        RDTO: '22.0',
        HUMEDAD: '48.6',
        ACIDEZ: '0.1',
        TICKET: '1063'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '858.0',
        RDTO: '22.9',
        HUMEDAD: '46.9',
        ACIDEZ: '0.2',
        TICKET: '1064'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '7719.0',
        RDTO: '22.9',
        HUMEDAD: '46.9',
        ACIDEZ: '0.2',
        TICKET: '1065'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2741.0',
        RDTO: '22.7',
        HUMEDAD: '47.8',
        ACIDEZ: '0.1',
        TICKET: '1066'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1432.0',
        RDTO: '23.0',
        HUMEDAD: '50.2',
        ACIDEZ: '0.2',
        TICKET: '1067'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '6906.0',
        RDTO: '22.6',
        HUMEDAD: '47.1',
        ACIDEZ: '0.1',
        TICKET: '1068'
    },
    {
        DIA: '20',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3565.0',
        RDTO: '25.0',
        HUMEDAD: '43.6',
        ACIDEZ: '0.1',
        TICKET: '1069'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '258.0',
        RDTO: '16.7',
        HUMEDAD: '52.6',
        ACIDEZ: '0.1',
        TICKET: '1072'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '434.0',
        RDTO: '23.8',
        HUMEDAD: '44.0',
        ACIDEZ: '0.1',
        TICKET: '1073'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '562.0',
        RDTO: '22.7',
        HUMEDAD: '44.1',
        ACIDEZ: '0.1',
        TICKET: '1074'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1021.0',
        RDTO: '23.1',
        HUMEDAD: '44.4',
        ACIDEZ: '0.1',
        TICKET: '1075'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '685.0',
        RDTO: '23.4',
        HUMEDAD: '42.8',
        ACIDEZ: '0.1',
        TICKET: '1076'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1343.0',
        RDTO: '21.7',
        HUMEDAD: '49.6',
        ACIDEZ: '0.2',
        TICKET: '1077'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '391.0',
        RDTO: '18.9',
        HUMEDAD: '49.6',
        ACIDEZ: '0.1',
        TICKET: '1078'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2677.0',
        RDTO: '24.4',
        HUMEDAD: '46.3',
        ACIDEZ: '0.2',
        TICKET: '1079'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1615.0',
        RDTO: '23.6',
        HUMEDAD: '45.9',
        ACIDEZ: '0.1',
        TICKET: '1080'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '768.0',
        RDTO: '22.0',
        HUMEDAD: '46.5',
        ACIDEZ: '0.1',
        TICKET: '1081'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1404.0',
        RDTO: '23.5',
        HUMEDAD: '44.2',
        ACIDEZ: '0.1',
        TICKET: '1082'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5719.0',
        RDTO: '23.7',
        HUMEDAD: '47.0',
        ACIDEZ: '0.2',
        TICKET: '1083'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2994.0',
        RDTO: '24.6',
        HUMEDAD: '43.0',
        ACIDEZ: '0.1',
        TICKET: '1084'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '800.0',
        RDTO: '25.0',
        HUMEDAD: '43.0',
        ACIDEZ: '0.1',
        TICKET: '1085'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '6080.0',
        RDTO: '21.7',
        HUMEDAD: '47.0',
        ACIDEZ: '0.1',
        TICKET: '1086'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5830.0',
        RDTO: '22.4',
        HUMEDAD: '46.4',
        ACIDEZ: '0.1',
        TICKET: '1087'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1679.0',
        RDTO: '23.1',
        HUMEDAD: '49.3',
        ACIDEZ: '0.2',
        TICKET: '1088'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5560.0',
        RDTO: '21.0',
        HUMEDAD: '49.8',
        ACIDEZ: '0.1',
        TICKET: '1089'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4709.0',
        RDTO: '19.1',
        HUMEDAD: '51.0',
        ACIDEZ: '0.2',
        TICKET: '1090'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '215.0',
        RDTO: '20.8',
        HUMEDAD: '45.2',
        ACIDEZ: '0.1',
        TICKET: '1091'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '11131.0',
        RDTO: '23.8',
        HUMEDAD: '50.9',
        ACIDEZ: '0.2',
        TICKET: '1092'
    },
    {
        DIA: '21',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '7911.0',
        RDTO: '21.9',
        HUMEDAD: '49.4',
        ACIDEZ: '0.2',
        TICKET: '1093'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '928.0',
        RDTO: '21.3',
        HUMEDAD: '48.8',
        ACIDEZ: '0.2',
        TICKET: '1094'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '780.0',
        RDTO: '21.0',
        HUMEDAD: '44.4',
        ACIDEZ: '0.2',
        TICKET: '1095'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '755.0',
        RDTO: '22.1',
        HUMEDAD: '45.1',
        ACIDEZ: '0.2',
        TICKET: '1096'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '532.0',
        RDTO: '22.5',
        HUMEDAD: '47.8',
        ACIDEZ: '0.2',
        TICKET: '1097'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '108.0',
        RDTO: '22.2',
        HUMEDAD: '48.8',
        ACIDEZ: '0.3',
        TICKET: '1098'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '669.0',
        RDTO: '24.25',
        HUMEDAD: '43.95',
        ACIDEZ: '0.29',
        TICKET: '1099'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '570.0',
        RDTO: '26.6',
        HUMEDAD: '44.1',
        ACIDEZ: '0.2',
        TICKET: '1100'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '243.0',
        RDTO: '20.2',
        HUMEDAD: '51.2',
        ACIDEZ: '0.2',
        TICKET: '1101'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1059.0',
        RDTO: '22.7',
        HUMEDAD: '48.6',
        ACIDEZ: '0.3',
        TICKET: '1102'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1073.0',
        RDTO: '20.8',
        HUMEDAD: '44.8',
        ACIDEZ: '0.2',
        TICKET: '1103'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '900.0',
        RDTO: '23.6',
        HUMEDAD: '45.1',
        ACIDEZ: '0.2',
        TICKET: '1104'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1010.0',
        RDTO: '26.1',
        HUMEDAD: '42.4',
        ACIDEZ: '0.2',
        TICKET: '1105'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '786.0',
        RDTO: '23.7',
        HUMEDAD: '44.8',
        ACIDEZ: '0.3',
        TICKET: '1106'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '307.0',
        RDTO: '15.7',
        HUMEDAD: '50.7',
        ACIDEZ: '0.2',
        TICKET: '1107'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '956.0',
        RDTO: '25.7',
        HUMEDAD: '42.6',
        ACIDEZ: '0.2',
        TICKET: '1108'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '949.0',
        RDTO: '21.5',
        HUMEDAD: '47.2',
        ACIDEZ: '0.2',
        TICKET: '1109'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1652.0',
        RDTO: '23.6',
        HUMEDAD: '46.0',
        ACIDEZ: '0.2',
        TICKET: '1110'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3840.0',
        RDTO: '24.0',
        HUMEDAD: '45.7',
        ACIDEZ: '0.2',
        TICKET: '1111'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1038.0',
        RDTO: '24.5',
        HUMEDAD: '48.2',
        ACIDEZ: '0.3',
        TICKET: '1112'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '6698.0',
        RDTO: '24.8',
        HUMEDAD: '44.6',
        ACIDEZ: '0.2',
        TICKET: '1113'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4337.0',
        RDTO: '22.1',
        HUMEDAD: '45.7',
        ACIDEZ: '0.3',
        TICKET: '1114'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2284.0',
        RDTO: '19.3',
        HUMEDAD: '47.8',
        ACIDEZ: '0.2',
        TICKET: '1115'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5675.0',
        RDTO: '22.7',
        HUMEDAD: '48.0',
        ACIDEZ: '0.2',
        TICKET: '1116'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1114.0',
        RDTO: '16.57',
        HUMEDAD: '50.98',
        ACIDEZ: '0.21',
        TICKET: '1117'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '7187.0',
        RDTO: '21.9',
        HUMEDAD: '51.2',
        ACIDEZ: '0.3',
        TICKET: '1118'
    },
    {
        DIA: '22',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '6819.0',
        RDTO: '18.2',
        HUMEDAD: '50.6',
        ACIDEZ: '0.2',
        TICKET: '1119'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1573.0',
        RDTO: '23.8',
        HUMEDAD: '43.6',
        ACIDEZ: '0.2',
        TICKET: '1151'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '358.0',
        RDTO: '22.3',
        HUMEDAD: '49.6',
        ACIDEZ: '0.2',
        TICKET: '1152'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '376.0',
        RDTO: '24.6',
        HUMEDAD: '47.0',
        ACIDEZ: '0.2',
        TICKET: '1149'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1499.0',
        RDTO: '21.1',
        HUMEDAD: '48.0',
        ACIDEZ: '0.2',
        TICKET: '1150'
    },
    {
        DIA: '28',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '7339.0',
        RDTO: '23.1',
        HUMEDAD: '45.7',
        ACIDEZ: '0.2',
        TICKET: '1153'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '377.0',
        RDTO: '16.7',
        HUMEDAD: '50.9',
        ACIDEZ: '0.2',
        TICKET: '1154'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '3070.0',
        RDTO: '22.58',
        HUMEDAD: '49.37',
        ACIDEZ: '0.24',
        TICKET: '1299'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '466.0',
        RDTO: '19.9',
        HUMEDAD: '45.9',
        ACIDEZ: '0.1',
        TICKET: '1120'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '183.0',
        RDTO: '24.8',
        HUMEDAD: '46.2',
        ACIDEZ: '0.1',
        TICKET: '1121'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '518.0',
        RDTO: '22.0',
        HUMEDAD: '49.4',
        ACIDEZ: '0.2',
        TICKET: '1122'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '767.0',
        RDTO: '23.0',
        HUMEDAD: '43.2',
        ACIDEZ: '0.1',
        TICKET: '1123'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '594.0',
        RDTO: '25.1',
        HUMEDAD: '43.7',
        ACIDEZ: '0.1',
        TICKET: '1124'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3046.0',
        RDTO: '21.8',
        HUMEDAD: '45.9',
        ACIDEZ: '0.1',
        TICKET: '1125'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1583.0',
        RDTO: '23.4',
        HUMEDAD: '45.9',
        ACIDEZ: '0.2',
        TICKET: '1126'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '891.0',
        RDTO: '22.7',
        HUMEDAD: '44.0',
        ACIDEZ: '0.1',
        TICKET: '1127'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '968.0',
        RDTO: '20.8',
        HUMEDAD: '47.9',
        ACIDEZ: '0.2',
        TICKET: '1128'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '946.0',
        RDTO: '21.2',
        HUMEDAD: '49.6',
        ACIDEZ: '0.1',
        TICKET: '1129'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '452.0',
        RDTO: '20.0',
        HUMEDAD: '52.1',
        ACIDEZ: '0.2',
        TICKET: '1130'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1741.0',
        RDTO: '23.1',
        HUMEDAD: '46.2',
        ACIDEZ: '0.1',
        TICKET: '1131'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '418.0',
        RDTO: '24.6',
        HUMEDAD: '44.4',
        ACIDEZ: '0.2',
        TICKET: '1132'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1360.0',
        RDTO: '22.6',
        HUMEDAD: '45.1',
        ACIDEZ: '0.1',
        TICKET: '1133'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1612.0',
        RDTO: '24.4',
        HUMEDAD: '43.5',
        ACIDEZ: '0.1',
        TICKET: '1134'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '995.0',
        RDTO: '24.0',
        HUMEDAD: '43.7',
        ACIDEZ: '0.1',
        TICKET: '1135'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3696.0',
        RDTO: '23.4',
        HUMEDAD: '46.4',
        ACIDEZ: '0.1',
        TICKET: '1136'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1355.0',
        RDTO: '23.5',
        HUMEDAD: '47.7',
        ACIDEZ: '0.2',
        TICKET: '1137'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1891.0',
        RDTO: '23.6',
        HUMEDAD: '46.3',
        ACIDEZ: '0.1',
        TICKET: '1138'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5326.0',
        RDTO: '23.1',
        HUMEDAD: '46.0',
        ACIDEZ: '0.1',
        TICKET: '1139'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '7480.0',
        RDTO: '22.9',
        HUMEDAD: '45.4',
        ACIDEZ: '0.3',
        TICKET: '1140'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5899.0',
        RDTO: '23.2',
        HUMEDAD: '43.5',
        ACIDEZ: '0.1',
        TICKET: '1141'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3891.0',
        RDTO: '18.0',
        HUMEDAD: '48.8',
        ACIDEZ: '0.1',
        TICKET: '1142'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '268.0',
        RDTO: '20.2',
        HUMEDAD: '46.1',
        ACIDEZ: '0.1',
        TICKET: '1143'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5840.0',
        RDTO: '22.6',
        HUMEDAD: '47.8',
        ACIDEZ: '0.1',
        TICKET: '1144'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '989.0',
        RDTO: '17.6',
        HUMEDAD: '49.5',
        ACIDEZ: '0.1',
        TICKET: '1145'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1556.0',
        RDTO: '20.9',
        HUMEDAD: '51.4',
        ACIDEZ: '0.1',
        TICKET: '1146'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '11618.0',
        RDTO: '22.0',
        HUMEDAD: '49.6',
        ACIDEZ: '0.3',
        TICKET: '1147'
    },
    {
        DIA: '23',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5424.0',
        RDTO: '22.9',
        HUMEDAD: '47.3',
        ACIDEZ: '0.2',
        TICKET: '1148'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '6086.0',
        RDTO: '18.6',
        HUMEDAD: '51.5',
        ACIDEZ: '0.2',
        TICKET: '1155'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '564.0',
        RDTO: '20.3',
        HUMEDAD: '48.8',
        ACIDEZ: '0.2',
        TICKET: '1156'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1610.0',
        RDTO: '22.0',
        HUMEDAD: '51.3',
        ACIDEZ: '0.2',
        TICKET: '1157'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '488.0',
        RDTO: '24.6',
        HUMEDAD: '45.7',
        ACIDEZ: '0.2',
        TICKET: '1158'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4239.0',
        RDTO: '21.9',
        HUMEDAD: '47.6',
        ACIDEZ: '0.2',
        TICKET: '1159'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5210.0',
        RDTO: '21.9',
        HUMEDAD: '49.6',
        ACIDEZ: '0.3',
        TICKET: '1160'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4015.0',
        RDTO: '21.8',
        HUMEDAD: '49.7',
        ACIDEZ: '0.2',
        TICKET: '1161'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '296.0',
        RDTO: '21.8',
        HUMEDAD: '50.7',
        ACIDEZ: '0.2',
        TICKET: '1162'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1190.0',
        RDTO: '20.4',
        HUMEDAD: '47.6',
        ACIDEZ: '0.2',
        TICKET: '1163'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '12405.0',
        RDTO: '21.0',
        HUMEDAD: '51.9',
        ACIDEZ: '0.3',
        TICKET: '1164'
    },
    {
        DIA: '29',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3912.0',
        RDTO: '22.9',
        HUMEDAD: '48.5',
        ACIDEZ: '0.2',
        TICKET: '1165'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1254.0',
        RDTO: '22.5',
        HUMEDAD: '49.4',
        ACIDEZ: '0.3',
        TICKET: '1178'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '505.0',
        RDTO: '22.3',
        HUMEDAD: '47.9',
        ACIDEZ: '0.2',
        TICKET: '1166'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1396.0',
        RDTO: '24.1',
        HUMEDAD: '45.8',
        ACIDEZ: '0.2',
        TICKET: '1167'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '776.0',
        RDTO: '25.1',
        HUMEDAD: '45.9',
        ACIDEZ: '0.2',
        TICKET: '1168'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4409.0',
        RDTO: '21.5',
        HUMEDAD: '48.3',
        ACIDEZ: '0.2',
        TICKET: '1169'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '828.0',
        RDTO: '18.6',
        HUMEDAD: '50.5',
        ACIDEZ: '0.2',
        TICKET: '1170'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '458.0',
        RDTO: '21.6',
        HUMEDAD: '47.0',
        ACIDEZ: '0.2',
        TICKET: '1171'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1975.0',
        RDTO: '21.4',
        HUMEDAD: '50.2',
        ACIDEZ: '0.2',
        TICKET: '1172'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '1090.0',
        RDTO: '21.4',
        HUMEDAD: '50.7',
        ACIDEZ: '0.2',
        TICKET: '1173'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '779.0',
        RDTO: '24.5',
        HUMEDAD: '46.2',
        ACIDEZ: '0.3',
        TICKET: '1174'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2173.0',
        RDTO: '23.2',
        HUMEDAD: '45.5',
        ACIDEZ: '0.2',
        TICKET: '1175'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '451.0',
        RDTO: '23.2',
        HUMEDAD: '47.9',
        ACIDEZ: '0.2',
        TICKET: '1176'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '954.0',
        RDTO: '24.8',
        HUMEDAD: '44.0',
        ACIDEZ: '0.2',
        TICKET: '1177'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4222.0',
        RDTO: '21.7',
        HUMEDAD: '50.5',
        ACIDEZ: '0.5',
        TICKET: '1179'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '3022.0',
        RDTO: '21.7',
        HUMEDAD: '49.4',
        ACIDEZ: '0.2',
        TICKET: '1180'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2315.0',
        RDTO: '19.9',
        HUMEDAD: '50.4',
        ACIDEZ: '0.2',
        TICKET: '1181'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '2558.0',
        RDTO: '19.6',
        HUMEDAD: '51.0',
        ACIDEZ: '0.2',
        TICKET: '1182'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '120.0',
        RDTO: '25.2',
        HUMEDAD: '45.4',
        ACIDEZ: '0.2',
        TICKET: '1187'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '4197.0',
        RDTO: '19.7',
        HUMEDAD: '51.2',
        ACIDEZ: '0.2',
        TICKET: '1188'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '589.0',
        RDTO: '24.7',
        HUMEDAD: '46.6',
        ACIDEZ: '0.1',
        TICKET: '1189'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '809.0',
        RDTO: '20.3',
        HUMEDAD: '51.6',
        ACIDEZ: '0.2',
        TICKET: '1190'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '352.0',
        RDTO: '19.6',
        HUMEDAD: '51.8',
        ACIDEZ: '0.2',
        TICKET: '1191'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '535.0',
        RDTO: '22.3',
        HUMEDAD: '49.2',
        ACIDEZ: '0.2',
        TICKET: '1192'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '319.0',
        RDTO: '22.2',
        HUMEDAD: '50.6',
        ACIDEZ: '0.1',
        TICKET: '1193'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2017.0',
        RDTO: '23.7',
        HUMEDAD: '47.8',
        ACIDEZ: '0.2',
        TICKET: '1194'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '8971.0',
        RDTO: '22.3',
        HUMEDAD: '47.6',
        ACIDEZ: '0.2',
        TICKET: '1183'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '7919.0',
        RDTO: '20.2',
        HUMEDAD: '53.7',
        ACIDEZ: '0.2',
        TICKET: '1184'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '4146.0',
        RDTO: '18.3',
        HUMEDAD: '51.3',
        ACIDEZ: '0.2',
        TICKET: '1185'
    },
    {
        DIA: '30',
        MES: '12',
        ANYO: '2017',
        KGSACEITUNA: '5451.0',
        RDTO: '22.0',
        HUMEDAD: '49.2',
        ACIDEZ: '0.2',
        TICKET: '1186'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '863.0',
        RDTO: '24.0',
        HUMEDAD: '44.6',
        ACIDEZ: '0.1',
        TICKET: '1195'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '510.0',
        RDTO: '24.5',
        HUMEDAD: '46.5',
        ACIDEZ: '0.1',
        TICKET: '1196'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '5091.0',
        RDTO: '24.3',
        HUMEDAD: '44.9',
        ACIDEZ: '0.2',
        TICKET: '1197'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '5200.0',
        RDTO: '23.3',
        HUMEDAD: '49.0',
        ACIDEZ: '0.2',
        TICKET: '1198'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '6008.0',
        RDTO: '22.4',
        HUMEDAD: '51.2',
        ACIDEZ: '0.4',
        TICKET: '1199'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '888.0',
        RDTO: '25.0',
        HUMEDAD: '44.8',
        ACIDEZ: '0.1',
        TICKET: '1212'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2896.0',
        RDTO: '24.1',
        HUMEDAD: '46.0',
        ACIDEZ: '0.2',
        TICKET: '1213'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2100.0',
        RDTO: '24.3',
        HUMEDAD: '44.7',
        ACIDEZ: '0.1',
        TICKET: '1214'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '503.0',
        RDTO: '20.2',
        HUMEDAD: '51.0',
        ACIDEZ: '0.2',
        TICKET: '1215'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '4249.0',
        RDTO: '20.5',
        HUMEDAD: '49.8',
        ACIDEZ: '0.2',
        TICKET: '1200'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1362.0',
        RDTO: '23.5',
        HUMEDAD: '47.8',
        ACIDEZ: '0.2',
        TICKET: '1201'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '6829.0',
        RDTO: '21.8',
        HUMEDAD: '47.5',
        ACIDEZ: '0.2',
        TICKET: '1202'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2132.0',
        RDTO: '22.9',
        HUMEDAD: '49.5',
        ACIDEZ: '0.2',
        TICKET: '1203'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '3503.0',
        RDTO: '23.5',
        HUMEDAD: '46.1',
        ACIDEZ: '0.2',
        TICKET: '1204'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '367.0',
        RDTO: '21.0',
        HUMEDAD: '51.4',
        ACIDEZ: '0.1',
        TICKET: '1205'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1434.0',
        RDTO: '19.7',
        HUMEDAD: '50.3',
        ACIDEZ: '0.2',
        TICKET: '1206'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2541.0',
        RDTO: '20.4',
        HUMEDAD: '50.1',
        ACIDEZ: '0.1',
        TICKET: '1207'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '7663.0',
        RDTO: '22.6',
        HUMEDAD: '47.7',
        ACIDEZ: '0.1',
        TICKET: '1208'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '10037.0',
        RDTO: '22.9',
        HUMEDAD: '48.9',
        ACIDEZ: '0.2',
        TICKET: '1209'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1442.0',
        RDTO: '23.9',
        HUMEDAD: '46.6',
        ACIDEZ: '0.1',
        TICKET: '1210'
    },
    {
        DIA: '2',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '14061.0',
        RDTO: '22.6',
        HUMEDAD: '49.1',
        ACIDEZ: '0.1',
        TICKET: '1211'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '782.0',
        RDTO: '22.6',
        HUMEDAD: '46.0',
        ACIDEZ: '0.1',
        TICKET: '1216'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '334.0',
        RDTO: '23.9',
        HUMEDAD: '47.8',
        ACIDEZ: '0.1',
        TICKET: '1217'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '912.0',
        RDTO: '21.9',
        HUMEDAD: '47.6',
        ACIDEZ: '0.2',
        TICKET: '1218'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1098.0',
        RDTO: '25.2',
        HUMEDAD: '45.6',
        ACIDEZ: '0.1',
        TICKET: '1219'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '936.0',
        RDTO: '21.9',
        HUMEDAD: '49.7',
        ACIDEZ: '0.2',
        TICKET: '1220'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '455.0',
        RDTO: '20.4',
        HUMEDAD: '49.7',
        ACIDEZ: '0.1',
        TICKET: '1221'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2141.0',
        RDTO: '23.8',
        HUMEDAD: '45.6',
        ACIDEZ: '0.1',
        TICKET: '1222'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '888.0',
        RDTO: '23.7',
        HUMEDAD: '46.7',
        ACIDEZ: '0.1',
        TICKET: '1223'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '801.0',
        RDTO: '20.3',
        HUMEDAD: '51.0',
        ACIDEZ: '0.3',
        TICKET: '1224'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2943.0',
        RDTO: '23.2',
        HUMEDAD: '47.7',
        ACIDEZ: '0.2',
        TICKET: '1225'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1274.0',
        RDTO: '25.9',
        HUMEDAD: '42.9',
        ACIDEZ: '0.2',
        TICKET: '1226'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '3246.0',
        RDTO: '23.6',
        HUMEDAD: '47.0',
        ACIDEZ: '0.1',
        TICKET: '1227'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1272.0',
        RDTO: '22.1',
        HUMEDAD: '49.0',
        ACIDEZ: '0.2',
        TICKET: '1228'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '3953.0',
        RDTO: '21.9',
        HUMEDAD: '50.6',
        ACIDEZ: '0.4',
        TICKET: '1229'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '945.0',
        RDTO: '22.5',
        HUMEDAD: '47.0',
        ACIDEZ: '0.2',
        TICKET: '1230'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '4502.0',
        RDTO: '24.6',
        HUMEDAD: '46.2',
        ACIDEZ: '0.1',
        TICKET: '1231'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '5766.0',
        RDTO: '24.6',
        HUMEDAD: '44.5',
        ACIDEZ: '0.2',
        TICKET: '1232'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '3969.0',
        RDTO: '20.9',
        HUMEDAD: '50.5',
        ACIDEZ: '0.3',
        TICKET: '1233'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1936.0',
        RDTO: '16.7',
        HUMEDAD: '49.5',
        ACIDEZ: '0.1',
        TICKET: '1234'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1859.0',
        RDTO: '22.2',
        HUMEDAD: '48.1',
        ACIDEZ: '0.1',
        TICKET: '1235'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '217.0',
        RDTO: '25.9',
        HUMEDAD: '45.6',
        ACIDEZ: '0.1',
        TICKET: '1238'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '4186.0',
        RDTO: '23.3',
        HUMEDAD: '48.3',
        ACIDEZ: '0.5',
        TICKET: '1239'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '510.0',
        RDTO: '23.1',
        HUMEDAD: '47.5',
        ACIDEZ: '0.1',
        TICKET: '1240'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1046.0',
        RDTO: '23.8',
        HUMEDAD: '47.0',
        ACIDEZ: '0.1',
        TICKET: '1241'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '6701.0',
        RDTO: '22.3',
        HUMEDAD: '50.2',
        ACIDEZ: '0.3',
        TICKET: '1236'
    },
    {
        DIA: '3',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '12145.0',
        RDTO: '20.9',
        HUMEDAD: '52.2',
        ACIDEZ: '0.2',
        TICKET: '1237'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '962.0',
        RDTO: '22.3',
        HUMEDAD: '49.6',
        ACIDEZ: '0.2',
        TICKET: '1242'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '462.0',
        RDTO: '22.2',
        HUMEDAD: '47.7',
        ACIDEZ: '0.1',
        TICKET: '1243'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '627.0',
        RDTO: '22.7',
        HUMEDAD: '50.0',
        ACIDEZ: '0.2',
        TICKET: '1244'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '590.0',
        RDTO: '22.4',
        HUMEDAD: '50.9',
        ACIDEZ: '0.1',
        TICKET: '1245'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '601.0',
        RDTO: '22.2',
        HUMEDAD: '45.9',
        ACIDEZ: '0.1',
        TICKET: '1246'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '591.0',
        RDTO: '22.4',
        HUMEDAD: '47.9',
        ACIDEZ: '0.1',
        TICKET: '1247'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1985.0',
        RDTO: '23.8',
        HUMEDAD: '46.0',
        ACIDEZ: '0.1',
        TICKET: '1248'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '789.0',
        RDTO: '22.5',
        HUMEDAD: '45.7',
        ACIDEZ: '0.1',
        TICKET: '1249'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1393.0',
        RDTO: '27.3',
        HUMEDAD: '41.9',
        ACIDEZ: '0.1',
        TICKET: '1250'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '5349.0',
        RDTO: '22.9',
        HUMEDAD: '47.7',
        ACIDEZ: '0.3',
        TICKET: '1251'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '3023.0',
        RDTO: '23.2',
        HUMEDAD: '47.5',
        ACIDEZ: '0.1',
        TICKET: '1252'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1679.0',
        RDTO: '23.8',
        HUMEDAD: '48.0',
        ACIDEZ: '0.3',
        TICKET: '1253'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1159.0',
        RDTO: '25.2',
        HUMEDAD: '44.0',
        ACIDEZ: '0.2',
        TICKET: '1254'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2138.0',
        RDTO: '22.7',
        HUMEDAD: '47.2',
        ACIDEZ: '0.1',
        TICKET: '1255'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '4823.0',
        RDTO: '23.7',
        HUMEDAD: '45.3',
        ACIDEZ: '0.2',
        TICKET: '1256'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2159.0',
        RDTO: '24.2',
        HUMEDAD: '46.8',
        ACIDEZ: '0.8',
        TICKET: '1257'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '5730.0',
        RDTO: '21.6',
        HUMEDAD: '49.1',
        ACIDEZ: '0.3',
        TICKET: '1258'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '178.0',
        RDTO: '22.3',
        HUMEDAD: '51.5',
        ACIDEZ: '0.2',
        TICKET: '1264'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '4320.0',
        RDTO: '22.3',
        HUMEDAD: '49.8',
        ACIDEZ: '0.2',
        TICKET: '1265'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '555.0',
        RDTO: '21.0',
        HUMEDAD: '51.0',
        ACIDEZ: '0.2',
        TICKET: '1266'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2232.0',
        RDTO: '21.5',
        HUMEDAD: '48.5',
        ACIDEZ: '0.2',
        TICKET: '1267'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '538.0',
        RDTO: '18.2',
        HUMEDAD: '54.2',
        ACIDEZ: '0.2',
        TICKET: '1268'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '663.0',
        RDTO: '17.8',
        HUMEDAD: '52.5',
        ACIDEZ: '0.2',
        TICKET: '1269'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '3132.0',
        RDTO: '26.1',
        HUMEDAD: '44.3',
        ACIDEZ: '0.2',
        TICKET: '1270'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2617.0',
        RDTO: '21.7',
        HUMEDAD: '50.0',
        ACIDEZ: '0.3',
        TICKET: '1271'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1335.0',
        RDTO: '24.9',
        HUMEDAD: '47.0',
        ACIDEZ: '0.3',
        TICKET: '1272'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2185.0',
        RDTO: '17.4',
        HUMEDAD: '51.2',
        ACIDEZ: '0.1',
        TICKET: '1259'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1065.0',
        RDTO: '20.9',
        HUMEDAD: '48.3',
        ACIDEZ: '0.2',
        TICKET: '1260'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1332.0',
        RDTO: '21.3',
        HUMEDAD: '50.3',
        ACIDEZ: '0.2',
        TICKET: '1261'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '7010.0',
        RDTO: '22.2',
        HUMEDAD: '49.9',
        ACIDEZ: '0.2',
        TICKET: '1262'
    },
    {
        DIA: '4',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '11400.0',
        RDTO: '22.1',
        HUMEDAD: '51.5',
        ACIDEZ: '0.3',
        TICKET: '1263'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '338.0',
        RDTO: '20.31',
        HUMEDAD: '49.11',
        ACIDEZ: '0.45',
        TICKET: '1281'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1078.0',
        RDTO: '21.8',
        HUMEDAD: '49.9',
        ACIDEZ: '0.5',
        TICKET: '1273'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '7459.0',
        RDTO: '23.4',
        HUMEDAD: '49.0',
        ACIDEZ: '0.3',
        TICKET: '1274'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '4713.0',
        RDTO: '21.5',
        HUMEDAD: '49.5',
        ACIDEZ: '0.3',
        TICKET: '1275'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2857.0',
        RDTO: '21.4',
        HUMEDAD: '49.3',
        ACIDEZ: '0.2',
        TICKET: '1276'
    },
    {
        DIA: '5',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '991.0',
        RDTO: '19.8',
        HUMEDAD: '49.5',
        ACIDEZ: '0.2',
        TICKET: '1277'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '441.0',
        RDTO: '21.3',
        HUMEDAD: '48.9',
        ACIDEZ: '0.0',
        TICKET: '1279'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '7871.0',
        RDTO: '23.3',
        HUMEDAD: '48.0',
        ACIDEZ: '0.2',
        TICKET: '1280'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '143.0',
        RDTO: '24.2',
        HUMEDAD: '45.28',
        ACIDEZ: '0.27',
        TICKET: '1282'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2109.0',
        RDTO: '23.18',
        HUMEDAD: '47.35',
        ACIDEZ: '0.26',
        TICKET: '1283'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2478.0',
        RDTO: '20.42',
        HUMEDAD: '48.07',
        ACIDEZ: '0.25',
        TICKET: '1284'
    },
    {
        DIA: '7',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '222.0',
        RDTO: '23.2',
        HUMEDAD: '47.2',
        ACIDEZ: '1.6',
        TICKET: '1278'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '268.0',
        RDTO: '24.38',
        HUMEDAD: '48.24',
        ACIDEZ: '0.29',
        TICKET: '1285'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '148.0',
        RDTO: '23.31',
        HUMEDAD: '44.76',
        ACIDEZ: '0.26',
        TICKET: '1286'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '3999.0',
        RDTO: '23.58',
        HUMEDAD: '49.69',
        ACIDEZ: '0.36',
        TICKET: '1287'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '718.0',
        RDTO: '21.66',
        HUMEDAD: '49.31',
        ACIDEZ: '0.26',
        TICKET: '1288'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '3281.0',
        RDTO: '21.66',
        HUMEDAD: '49.31',
        ACIDEZ: '0.26',
        TICKET: '1289'
    },
    {
        DIA: '9',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '234.0',
        RDTO: '26.12',
        HUMEDAD: '42.85',
        ACIDEZ: '1.03',
        TICKET: '1290'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2101.0',
        RDTO: '22.45',
        HUMEDAD: '48.46',
        ACIDEZ: '0.21',
        TICKET: '1291'
    },
    {
        DIA: '10',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '272.0',
        RDTO: '24.65',
        HUMEDAD: '47.85',
        ACIDEZ: '0.25',
        TICKET: '1292'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1024.0',
        RDTO: '22.58',
        HUMEDAD: '49.37',
        ACIDEZ: '0.24',
        TICKET: '1300'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '4512.0',
        RDTO: '21.38',
        HUMEDAD: '51.46',
        ACIDEZ: '0.33',
        TICKET: '1301'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '698.0',
        RDTO: '18.5',
        HUMEDAD: '51.04',
        ACIDEZ: '0.24',
        TICKET: '1302'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '4961.0',
        RDTO: '22.21',
        HUMEDAD: '47.93',
        ACIDEZ: '0.2',
        TICKET: '1303'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '633.0',
        RDTO: '23.13',
        HUMEDAD: '48.11',
        ACIDEZ: '0.2',
        TICKET: '1304'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '948.0',
        RDTO: '23.13',
        HUMEDAD: '48.11',
        ACIDEZ: '0.2',
        TICKET: '1305'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '5948.0',
        RDTO: '23.33',
        HUMEDAD: '47.38',
        ACIDEZ: '0.22',
        TICKET: '1306'
    },
    {
        DIA: '11',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1982.0',
        RDTO: '23.33',
        HUMEDAD: '47.38',
        ACIDEZ: '0.22',
        TICKET: '1307'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '3790.0',
        RDTO: '22.24',
        HUMEDAD: '48.32',
        ACIDEZ: '0.28',
        TICKET: '1309'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '41.0',
        RDTO: '18.8',
        HUMEDAD: '51.39',
        ACIDEZ: '0.25',
        TICKET: '1308'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '499.0',
        RDTO: '22.35',
        HUMEDAD: '49.1',
        ACIDEZ: '0.17',
        TICKET: '1310'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1970.0',
        RDTO: '24.29',
        HUMEDAD: '47.12',
        ACIDEZ: '0.21',
        TICKET: '1311'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '492.0',
        RDTO: '24.29',
        HUMEDAD: '47.12',
        ACIDEZ: '0.21',
        TICKET: '1312'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2814.0',
        RDTO: '23.38',
        HUMEDAD: '48.16',
        ACIDEZ: '0.24',
        TICKET: '1313'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '377.0',
        RDTO: '23.48',
        HUMEDAD: '45.08',
        ACIDEZ: '0.16',
        TICKET: '1314'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '732.0',
        RDTO: '23.54',
        HUMEDAD: '44.67',
        ACIDEZ: '0.25',
        TICKET: '1315'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '351.0',
        RDTO: '25.97',
        HUMEDAD: '45.46',
        ACIDEZ: '0.2',
        TICKET: '1316'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1916.0',
        RDTO: '22.06',
        HUMEDAD: '46.79',
        ACIDEZ: '0.15',
        TICKET: '1317'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '998.0',
        RDTO: '25.02',
        HUMEDAD: '47.23',
        ACIDEZ: '0.24',
        TICKET: '1318'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2739.0',
        RDTO: '24.67',
        HUMEDAD: '47.28',
        ACIDEZ: '0.35',
        TICKET: '1319'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2093.0',
        RDTO: '18.97',
        HUMEDAD: '50.94',
        ACIDEZ: '0.18',
        TICKET: '1320'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '8564.0',
        RDTO: '23.14',
        HUMEDAD: '46.58',
        ACIDEZ: '0.23',
        TICKET: '1321'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2366.0',
        RDTO: '23.15',
        HUMEDAD: '47.01',
        ACIDEZ: '0.3',
        TICKET: '1322'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1420.0',
        RDTO: '23.15',
        HUMEDAD: '47.01',
        ACIDEZ: '0.3',
        TICKET: '1323'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '947.0',
        RDTO: '23.15',
        HUMEDAD: '47.01',
        ACIDEZ: '0.3',
        TICKET: '1324'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '949.0',
        RDTO: '22.79',
        HUMEDAD: '48.95',
        ACIDEZ: '0.23',
        TICKET: '1325'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2846.0',
        RDTO: '22.79',
        HUMEDAD: '48.95',
        ACIDEZ: '0.23',
        TICKET: '1326'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '738.0',
        RDTO: '21.47',
        HUMEDAD: '47.65',
        ACIDEZ: '0.25',
        TICKET: '1327'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '331.0',
        RDTO: '21.53',
        HUMEDAD: '47.2',
        ACIDEZ: '0.15',
        TICKET: '1328'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '7536.0',
        RDTO: '22.74',
        HUMEDAD: '46.94',
        ACIDEZ: '0.17',
        TICKET: '1329'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2831.0',
        RDTO: '21.58',
        HUMEDAD: '45.95',
        ACIDEZ: '0.25',
        TICKET: '1330'
    },
    {
        DIA: '12',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1966.0',
        RDTO: '23.03',
        HUMEDAD: '46.0',
        ACIDEZ: '0.13',
        TICKET: '1331'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2893.0',
        RDTO: '23.5',
        HUMEDAD: '46.74',
        ACIDEZ: '0.31',
        TICKET: '1336'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '224.0',
        RDTO: '23.66',
        HUMEDAD: '47.81',
        ACIDEZ: '0.28',
        TICKET: '1337'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '134.0',
        RDTO: '23.66',
        HUMEDAD: '47.81',
        ACIDEZ: '0.28',
        TICKET: '1338'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '90.0',
        RDTO: '23.66',
        HUMEDAD: '47.81',
        ACIDEZ: '0.28',
        TICKET: '1339'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '914.0',
        RDTO: '25.04',
        HUMEDAD: '44.63',
        ACIDEZ: '0.18',
        TICKET: '1341'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1523.0',
        RDTO: '21.79',
        HUMEDAD: '45.51',
        ACIDEZ: '0.11',
        TICKET: '1342'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '134.0',
        RDTO: '22.98',
        HUMEDAD: '46.47',
        ACIDEZ: '0.3',
        TICKET: '1340'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '546.0',
        RDTO: '25.6',
        HUMEDAD: '41.79',
        ACIDEZ: '0.15',
        TICKET: '1343'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2321.0',
        RDTO: '22.98',
        HUMEDAD: '46.47',
        ACIDEZ: '0.28',
        TICKET: '1348'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '686.0',
        RDTO: '21.03',
        HUMEDAD: '44.89',
        ACIDEZ: '0.16',
        TICKET: '1344'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '847.0',
        RDTO: '21.72',
        HUMEDAD: '46.31',
        ACIDEZ: '0.3',
        TICKET: '1345'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1733.0',
        RDTO: '17.96',
        HUMEDAD: '49.45',
        ACIDEZ: '0.16',
        TICKET: '1346'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2187.0',
        RDTO: '18.34',
        HUMEDAD: '47.46',
        ACIDEZ: '0.3',
        TICKET: '1347'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '190.0',
        RDTO: '24.63',
        HUMEDAD: '45.98',
        ACIDEZ: '0.21',
        TICKET: '1332'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '4075.0',
        RDTO: '24.53',
        HUMEDAD: '46.66',
        ACIDEZ: '0.34',
        TICKET: '1333'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2619.0',
        RDTO: '22.45',
        HUMEDAD: '47.52',
        ACIDEZ: '0.27',
        TICKET: '1334'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '580.0',
        RDTO: '22.92',
        HUMEDAD: '44.29',
        ACIDEZ: '0.19',
        TICKET: '1335'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '774.0',
        RDTO: '22.98',
        HUMEDAD: '46.47',
        ACIDEZ: '0.28',
        TICKET: '1349'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2396.0',
        RDTO: '22.96',
        HUMEDAD: '47.64',
        ACIDEZ: '0.26',
        TICKET: '1350'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '10409.0',
        RDTO: '22.91',
        HUMEDAD: '46.23',
        ACIDEZ: '0.3',
        TICKET: '1351'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '8360.0',
        RDTO: '23.17',
        HUMEDAD: '45.63',
        ACIDEZ: '0.29',
        TICKET: '1352'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1982.0',
        RDTO: '24.88',
        HUMEDAD: '44.31',
        ACIDEZ: '0.22',
        TICKET: '1353'
    },
    {
        DIA: '13',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1963.0',
        RDTO: '22.17',
        HUMEDAD: '46.45',
        ACIDEZ: '0.2',
        TICKET: '1354'
    },
    {
        DIA: '15',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '116.0',
        RDTO: '22.37',
        HUMEDAD: '44.98',
        ACIDEZ: '0.25',
        TICKET: '1355'
    },
    {
        DIA: '15',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '4517.0',
        RDTO: '23.21',
        HUMEDAD: '46.23',
        ACIDEZ: '0.24',
        TICKET: '1356'
    },
    {
        DIA: '15',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1835.0',
        RDTO: '24.11',
        HUMEDAD: '46.23',
        ACIDEZ: '0.26',
        TICKET: '1357'
    },
    {
        DIA: '15',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '612.0',
        RDTO: '24.11',
        HUMEDAD: '46.23',
        ACIDEZ: '0.26',
        TICKET: '1358'
    },
    {
        DIA: '15',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2458.0',
        RDTO: '24.26',
        HUMEDAD: '44.12',
        ACIDEZ: '0.24',
        TICKET: '1359'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '3990.0',
        RDTO: '22.83',
        HUMEDAD: '47.64',
        ACIDEZ: '0.27',
        TICKET: '1360'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '797.0',
        RDTO: '17.62',
        HUMEDAD: '51.92',
        ACIDEZ: '0.18',
        TICKET: '1361'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '134.0',
        RDTO: '24.37',
        HUMEDAD: '49.01',
        ACIDEZ: '0.41',
        TICKET: '1362'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '80.0',
        RDTO: '24.37',
        HUMEDAD: '49.01',
        ACIDEZ: '0.41',
        TICKET: '1363'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '54.0',
        RDTO: '24.37',
        HUMEDAD: '49.01',
        ACIDEZ: '0.41',
        TICKET: '1364'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '101.0',
        RDTO: '21.32',
        HUMEDAD: '48.76',
        ACIDEZ: '0.33',
        TICKET: '1365'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '3543.0',
        RDTO: '24.4',
        HUMEDAD: '47.02',
        ACIDEZ: '0.32',
        TICKET: '1368'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '520.0',
        RDTO: '23.25',
        HUMEDAD: '50.19',
        ACIDEZ: '0.38',
        TICKET: '1366'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '628.0',
        RDTO: '26.2',
        HUMEDAD: '43.41',
        ACIDEZ: '0.2',
        TICKET: '1367'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1308.0',
        RDTO: '25.49',
        HUMEDAD: '45.0',
        ACIDEZ: '0.17',
        TICKET: '1369'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '598.0',
        RDTO: '22.89',
        HUMEDAD: '43.55',
        ACIDEZ: '0.28',
        TICKET: '1370'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '3047.0',
        RDTO: '20.66',
        HUMEDAD: '48.86',
        ACIDEZ: '0.3',
        TICKET: '1378'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '3963.0',
        RDTO: '25.67',
        HUMEDAD: '42.09',
        ACIDEZ: '0.25',
        TICKET: '1379'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '4353.0',
        RDTO: '21.99',
        HUMEDAD: '46.73',
        ACIDEZ: '0.17',
        TICKET: '1371'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '9115.0',
        RDTO: '21.75',
        HUMEDAD: '46.46',
        ACIDEZ: '0.22',
        TICKET: '1372'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '8008.0',
        RDTO: '22.78',
        HUMEDAD: '45.75',
        ACIDEZ: '0.18',
        TICKET: '1373'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1348.0',
        RDTO: '23.32',
        HUMEDAD: '47.91',
        ACIDEZ: '0.24',
        TICKET: '1374'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '4605.0',
        RDTO: '23.5',
        HUMEDAD: '45.38',
        ACIDEZ: '0.28',
        TICKET: '1375'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '4429.0',
        RDTO: '19.49',
        HUMEDAD: '47.37',
        ACIDEZ: '0.15',
        TICKET: '1376'
    },
    {
        DIA: '16',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '5946.0',
        RDTO: '23.1',
        HUMEDAD: '46.77',
        ACIDEZ: '0.17',
        TICKET: '1377'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '600.0',
        RDTO: '26.36',
        HUMEDAD: '41.36',
        ACIDEZ: '0.3',
        TICKET: '1380'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '552.0',
        RDTO: '24.69',
        HUMEDAD: '43.18',
        ACIDEZ: '0.15',
        TICKET: '1381'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1484.0',
        RDTO: '26.75',
        HUMEDAD: '43.6',
        ACIDEZ: '0.2',
        TICKET: '1382'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '4747.0',
        RDTO: '23.51',
        HUMEDAD: '44.96',
        ACIDEZ: '0.3',
        TICKET: '1383'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '8794.0',
        RDTO: '23.32',
        HUMEDAD: '45.97',
        ACIDEZ: '0.42',
        TICKET: '1384'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1717.0',
        RDTO: '24.89',
        HUMEDAD: '44.26',
        ACIDEZ: '0.25',
        TICKET: '1385'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '6408.0',
        RDTO: '24.3',
        HUMEDAD: '45.69',
        ACIDEZ: '0.2',
        TICKET: '1386'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '797.0',
        RDTO: '23.3',
        HUMEDAD: '44.65',
        ACIDEZ: '0.16',
        TICKET: '1387'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1764.0',
        RDTO: '20.37',
        HUMEDAD: '44.71',
        ACIDEZ: '0.2',
        TICKET: '1388'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1650.0',
        RDTO: '27.16',
        HUMEDAD: '43.88',
        ACIDEZ: '0.19',
        TICKET: '1389'
    },
    {
        DIA: '17',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '5084.0',
        RDTO: '23.47',
        HUMEDAD: '46.37',
        ACIDEZ: '0.2',
        TICKET: '1390'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '4900.0',
        RDTO: '25.13',
        HUMEDAD: '44.77',
        ACIDEZ: '0.3',
        TICKET: '1391'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2503.0',
        RDTO: '21.3',
        HUMEDAD: '46.4',
        ACIDEZ: '0.24',
        TICKET: '1392'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '757.0',
        RDTO: '25.21',
        HUMEDAD: '45.37',
        ACIDEZ: '0.32',
        TICKET: '1393'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1161.0',
        RDTO: '20.47',
        HUMEDAD: '45.92',
        ACIDEZ: '0.24',
        TICKET: '1394'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '792.0',
        RDTO: '26.71',
        HUMEDAD: '45.18',
        ACIDEZ: '0.42',
        TICKET: '1395'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '745.0',
        RDTO: '26.24',
        HUMEDAD: '41.26',
        ACIDEZ: '0.2',
        TICKET: '1396'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1011.0',
        RDTO: '26.76',
        HUMEDAD: '42.65',
        ACIDEZ: '0.26',
        TICKET: '1397'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '726.0',
        RDTO: '26.18',
        HUMEDAD: '44.77',
        ACIDEZ: '0.36',
        TICKET: '1398'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '186.0',
        RDTO: '24.21',
        HUMEDAD: '42.65',
        ACIDEZ: '0.25',
        TICKET: '1399'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '5718.0',
        RDTO: '23.42',
        HUMEDAD: '44.91',
        ACIDEZ: '0.22',
        TICKET: '1400'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '3591.0',
        RDTO: '23.79',
        HUMEDAD: '45.83',
        ACIDEZ: '0.38',
        TICKET: '1401'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '280.0',
        RDTO: '24.9',
        HUMEDAD: '43.32',
        ACIDEZ: '0.24',
        TICKET: '1405'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '596.0',
        RDTO: '26.7',
        HUMEDAD: '39.87',
        ACIDEZ: '0.24',
        TICKET: '1406'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '793.0',
        RDTO: '24.88',
        HUMEDAD: '43.96',
        ACIDEZ: '0.25',
        TICKET: '1407'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1409.0',
        RDTO: '20.34',
        HUMEDAD: '45.81',
        ACIDEZ: '0.12',
        TICKET: '1408'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1436.0',
        RDTO: '23.17',
        HUMEDAD: '46.67',
        ACIDEZ: '0.19',
        TICKET: '1409'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1777.0',
        RDTO: '23.85',
        HUMEDAD: '45.35',
        ACIDEZ: '0.26',
        TICKET: '1402'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '959.0',
        RDTO: '26.13',
        HUMEDAD: '43.18',
        ACIDEZ: '0.26',
        TICKET: '1403'
    },
    {
        DIA: '18',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2725.0',
        RDTO: '21.71',
        HUMEDAD: '46.51',
        ACIDEZ: '0.23',
        TICKET: '1404'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '8271.0',
        RDTO: '21.81',
        HUMEDAD: '46.36',
        ACIDEZ: '0.24',
        TICKET: '1410'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1347.0',
        RDTO: '27.64',
        HUMEDAD: '39.06',
        ACIDEZ: '0.24',
        TICKET: '1411'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '3931.0',
        RDTO: '23.72',
        HUMEDAD: '45.96',
        ACIDEZ: '0.23',
        TICKET: '1412'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1313.0',
        RDTO: '25.23',
        HUMEDAD: '43.28',
        ACIDEZ: '0.25',
        TICKET: '1413'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '5254.0',
        RDTO: '25.23',
        HUMEDAD: '43.28',
        ACIDEZ: '0.25',
        TICKET: '1414'
    },
    {
        DIA: '19',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '181.0',
        RDTO: '24.13',
        HUMEDAD: '47.42',
        ACIDEZ: '0.28',
        TICKET: '1415'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '3462.0',
        RDTO: '24.25',
        HUMEDAD: '43.67',
        ACIDEZ: '0.24',
        TICKET: '1416'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '340.0',
        RDTO: '23.1',
        HUMEDAD: '46.95',
        ACIDEZ: '0.26',
        TICKET: '1417'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '645.0',
        RDTO: '26.3',
        HUMEDAD: '41.58',
        ACIDEZ: '0.25',
        TICKET: '1418'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '3015.0',
        RDTO: '19.66',
        HUMEDAD: '48.36',
        ACIDEZ: '0.27',
        TICKET: '1419'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1260.0',
        RDTO: '19.52',
        HUMEDAD: '45.94',
        ACIDEZ: '0.32',
        TICKET: '1420'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '540.0',
        RDTO: '26.15',
        HUMEDAD: '43.81',
        ACIDEZ: '0.25',
        TICKET: '1421'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '113.0',
        RDTO: '24.89',
        HUMEDAD: '45.67',
        ACIDEZ: '0.32',
        TICKET: '1422'
    },
    {
        DIA: '20',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '6004.0',
        RDTO: '23.07',
        HUMEDAD: '46.47',
        ACIDEZ: '0.23',
        TICKET: '1423'
    },
    {
        DIA: '22',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '292.0',
        RDTO: '23.6',
        HUMEDAD: '44.15',
        ACIDEZ: '0.22',
        TICKET: '1425'
    },
    {
        DIA: '22',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '594.0',
        RDTO: '25.77',
        HUMEDAD: '44.32',
        ACIDEZ: '0.23',
        TICKET: '1426'
    },
    {
        DIA: '22',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1142.0',
        RDTO: '19.15',
        HUMEDAD: '45.15',
        ACIDEZ: '0.16',
        TICKET: '1427'
    },
    {
        DIA: '22',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '256.0',
        RDTO: '20.78',
        HUMEDAD: '45.12',
        ACIDEZ: '0.26',
        TICKET: '1428'
    },
    {
        DIA: '22',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '167.0',
        RDTO: '25.5',
        HUMEDAD: '43.34',
        ACIDEZ: '0.25',
        TICKET: '1429'
    },
    {
        DIA: '22',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '6613.0',
        RDTO: '23.63',
        HUMEDAD: '44.95',
        ACIDEZ: '0.24',
        TICKET: '1430'
    },
    {
        DIA: '22',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '454.0',
        RDTO: '22.94',
        HUMEDAD: '48.34',
        ACIDEZ: '0.34',
        TICKET: '1431'
    },
    {
        DIA: '22',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '4926.0',
        RDTO: '22.82',
        HUMEDAD: '45.1',
        ACIDEZ: '0.24',
        TICKET: '1432'
    },
    {
        DIA: '23',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '547.0',
        RDTO: '26.39',
        HUMEDAD: '43.28',
        ACIDEZ: '0.26',
        TICKET: '1433'
    },
    {
        DIA: '22',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2011.0',
        RDTO: '22.92',
        HUMEDAD: '46.31',
        ACIDEZ: '0.25',
        TICKET: '1424'
    },
    {
        DIA: '23',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '5746.0',
        RDTO: '23.11',
        HUMEDAD: '43.92',
        ACIDEZ: '0.25',
        TICKET: '1434'
    },
    {
        DIA: '23',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1271.0',
        RDTO: '21.49',
        HUMEDAD: '45.22',
        ACIDEZ: '0.25',
        TICKET: '1435'
    },
    {
        DIA: '23',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '6463.0',
        RDTO: '23.77',
        HUMEDAD: '45.85',
        ACIDEZ: '0.33',
        TICKET: '1436'
    },
    {
        DIA: '23',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '336.0',
        RDTO: '22.2',
        HUMEDAD: '47.88',
        ACIDEZ: '0.46',
        TICKET: '1437'
    },
    {
        DIA: '23',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '3144.0',
        RDTO: '20.06',
        HUMEDAD: '47.98',
        ACIDEZ: '0.27',
        TICKET: '1438'
    },
    {
        DIA: '25',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2772.0',
        RDTO: '21.6',
        HUMEDAD: '47.94',
        ACIDEZ: '0.27',
        TICKET: '1443'
    },
    {
        DIA: '25',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1222.0',
        RDTO: '20.32',
        HUMEDAD: '46.4',
        ACIDEZ: '0.16',
        TICKET: '1444'
    },
    {
        DIA: '25',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '6029.0',
        RDTO: '22.49',
        HUMEDAD: '46.5',
        ACIDEZ: '0.23',
        TICKET: '1445'
    },
    {
        DIA: '24',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '110.0',
        RDTO: '23.99',
        HUMEDAD: '47.93',
        ACIDEZ: '0.28',
        TICKET: '1439'
    },
    {
        DIA: '24',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '153.0',
        RDTO: '25.67',
        HUMEDAD: '42.15',
        ACIDEZ: '0.25',
        TICKET: '1440'
    },
    {
        DIA: '24',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '1252.0',
        RDTO: '20.95',
        HUMEDAD: '45.84',
        ACIDEZ: '0.18',
        TICKET: '1441'
    },
    {
        DIA: '24',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '6790.0',
        RDTO: '23.24',
        HUMEDAD: '44.13',
        ACIDEZ: '0.23',
        TICKET: '1442'
    },
    {
        DIA: '27',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '2162.0',
        RDTO: '22.46',
        HUMEDAD: '45.51',
        ACIDEZ: '0.4',
        TICKET: '1446'
    },
    {
        DIA: '27',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '980.0',
        RDTO: '18.87',
        HUMEDAD: '45.58',
        ACIDEZ: '0.35',
        TICKET: '1447'
    },
    {
        DIA: '27',
        MES: '1',
        ANYO: '2018',
        KGSACEITUNA: '6929.0',
        RDTO: '22.64',
        HUMEDAD: '44.85',
        ACIDEZ: '0.35',
        TICKET: '1448'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '492.0',
        RDTO: '18.08',
        HUMEDAD: '54.86',
        ACIDEZ: '0.22',
        TICKET: '1'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '492.0',
        RDTO: '18.08',
        HUMEDAD: '54.86',
        ACIDEZ: '0.22',
        TICKET: '2'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '3367.0',
        RDTO: '17.15',
        HUMEDAD: '54.08',
        ACIDEZ: '0.15',
        TICKET: '3'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '6863.0',
        RDTO: '19.88',
        HUMEDAD: '50.15',
        ACIDEZ: '0.13',
        TICKET: '4'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '3990.0',
        RDTO: '17.82',
        HUMEDAD: '59.58',
        ACIDEZ: '0.15',
        TICKET: '5'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '697.0',
        RDTO: '18.52',
        HUMEDAD: '57.21',
        ACIDEZ: '0.25',
        TICKET: '6'
    },
    {
        DIA: '16',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '617.0',
        RDTO: '19.02',
        HUMEDAD: '51.05',
        ACIDEZ: '0.23',
        TICKET: '7'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '627.0',
        RDTO: '20.21',
        HUMEDAD: '50.23',
        ACIDEZ: '0.45',
        TICKET: '8'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '614.0',
        RDTO: '17.5',
        HUMEDAD: '53.76',
        ACIDEZ: '0.18',
        TICKET: '9'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '441.0',
        RDTO: '18.41',
        HUMEDAD: '55.76',
        ACIDEZ: '0.24',
        TICKET: '10'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '441.0',
        RDTO: '18.41',
        HUMEDAD: '55.76',
        ACIDEZ: '0.24',
        TICKET: '11'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '10702.0',
        RDTO: '13.21',
        HUMEDAD: '62.29',
        ACIDEZ: '0.31',
        TICKET: '22'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '189.0',
        RDTO: '19.34',
        HUMEDAD: '50.45',
        ACIDEZ: '0.19',
        TICKET: '12'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '4018.0',
        RDTO: '15.08',
        HUMEDAD: '56.11',
        ACIDEZ: '0.15',
        TICKET: '13'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '3873.0',
        RDTO: '15.93',
        HUMEDAD: '60.48',
        ACIDEZ: '0.29',
        TICKET: '14'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '754.0',
        RDTO: '17.61',
        HUMEDAD: '59.09',
        ACIDEZ: '0.24',
        TICKET: '15'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '4140.0',
        RDTO: '17.6',
        HUMEDAD: '52.96',
        ACIDEZ: '0.14',
        TICKET: '16'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '6164.0',
        RDTO: '22.04',
        HUMEDAD: '46.73',
        ACIDEZ: '0.18',
        TICKET: '17'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '2440.0',
        RDTO: '18.88',
        HUMEDAD: '56.18',
        ACIDEZ: '0.14',
        TICKET: '18'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '251.0',
        RDTO: '17.41',
        HUMEDAD: '58.43',
        ACIDEZ: '0.16',
        TICKET: '19'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '11384.0',
        RDTO: '14.93',
        HUMEDAD: '62.89',
        ACIDEZ: '0.27',
        TICKET: '20'
    },
    {
        DIA: '17',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '7131.0',
        RDTO: '15.31',
        HUMEDAD: '64.32',
        ACIDEZ: '0.23',
        TICKET: '21'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '476.0',
        RDTO: '19.08',
        HUMEDAD: '51.21',
        ACIDEZ: '0.18',
        TICKET: '23'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '446.0',
        RDTO: '12.34',
        HUMEDAD: '63.99',
        ACIDEZ: '0.22',
        TICKET: '24'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '8177.0',
        RDTO: '17.13',
        HUMEDAD: '61.37',
        ACIDEZ: '0.23',
        TICKET: '56'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '400.0',
        RDTO: '17.89',
        HUMEDAD: '55.29',
        ACIDEZ: '0.23',
        TICKET: '27'
    },
    {
        DIA: '22',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '4007.0',
        RDTO: '17.73',
        HUMEDAD: '61.31',
        ACIDEZ: '0.24',
        TICKET: '28'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1541.0',
        RDTO: '15.3',
        HUMEDAD: '63.99',
        ACIDEZ: '0.34',
        TICKET: '30'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '656.0',
        RDTO: '18.87',
        HUMEDAD: '52.74',
        ACIDEZ: '0.25',
        TICKET: '29'
    },
    {
        DIA: '23',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '255.0',
        RDTO: '15.14',
        HUMEDAD: '63.29',
        ACIDEZ: '0.48',
        TICKET: '31'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '462.0',
        RDTO: '17.53',
        HUMEDAD: '56.79',
        ACIDEZ: '0.29',
        TICKET: '32'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1028.0',
        RDTO: '16.04',
        HUMEDAD: '62.72',
        ACIDEZ: '0.25',
        TICKET: '33'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '590.0',
        RDTO: '18.51',
        HUMEDAD: '55.89',
        ACIDEZ: '0.25',
        TICKET: '34'
    },
    {
        DIA: '19',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '5668.0',
        RDTO: '17.07',
        HUMEDAD: '62.8',
        ACIDEZ: '0.14',
        TICKET: '25'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '804.0',
        RDTO: '19.28',
        HUMEDAD: '52.18',
        ACIDEZ: '0.27',
        TICKET: '35'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '599.0',
        RDTO: '15.05',
        HUMEDAD: '61.98',
        ACIDEZ: '0.27',
        TICKET: '36'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '802.0',
        RDTO: '17.74',
        HUMEDAD: '56.43',
        ACIDEZ: '0.24',
        TICKET: '37'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '599.0',
        RDTO: '16.1',
        HUMEDAD: '58.8',
        ACIDEZ: '0.35',
        TICKET: '38'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '599.0',
        RDTO: '16.1',
        HUMEDAD: '58.8',
        ACIDEZ: '0.35',
        TICKET: '39'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '803.0',
        RDTO: '18.8',
        HUMEDAD: '56.41',
        ACIDEZ: '0.24',
        TICKET: '40'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '739.0',
        RDTO: '18.96',
        HUMEDAD: '52.61',
        ACIDEZ: '0.26',
        TICKET: '41'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '604.0',
        RDTO: '18.07',
        HUMEDAD: '54.26',
        ACIDEZ: '0.28',
        TICKET: '42'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1063.0',
        RDTO: '16.77',
        HUMEDAD: '60.46',
        ACIDEZ: '0.24',
        TICKET: '43'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '4788.0',
        RDTO: '16.71',
        HUMEDAD: '54.53',
        ACIDEZ: '0.23',
        TICKET: '44'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '568.0',
        RDTO: '19.57',
        HUMEDAD: '55.6',
        ACIDEZ: '0.32',
        TICKET: '45'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '568.0',
        RDTO: '19.57',
        HUMEDAD: '55.6',
        ACIDEZ: '0.32',
        TICKET: '46'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1497.0',
        RDTO: '18.9',
        HUMEDAD: '52.08',
        ACIDEZ: '0.26',
        TICKET: '47'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1733.0',
        RDTO: '14.79',
        HUMEDAD: '63.6',
        ACIDEZ: '0.3',
        TICKET: '48'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '2595.0',
        RDTO: '20.32',
        HUMEDAD: '55.37',
        ACIDEZ: '0.41',
        TICKET: '49'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '860.0',
        RDTO: '16.39',
        HUMEDAD: '59.72',
        ACIDEZ: '0.29',
        TICKET: '50'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1702.0',
        RDTO: '17.73',
        HUMEDAD: '57.69',
        ACIDEZ: '0.26',
        TICKET: '51'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '2005.0',
        RDTO: '18.94',
        HUMEDAD: '54.17',
        ACIDEZ: '0.27',
        TICKET: '52'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '4702.0',
        RDTO: '16.82',
        HUMEDAD: '57.52',
        ACIDEZ: '0.27',
        TICKET: '53'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1175.0',
        RDTO: '16.82',
        HUMEDAD: '57.52',
        ACIDEZ: '0.27',
        TICKET: '54'
    },
    {
        DIA: '24',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '253.0',
        RDTO: '13.86',
        HUMEDAD: '65.54',
        ACIDEZ: '0.27',
        TICKET: '55'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '683.0',
        RDTO: '15.42',
        HUMEDAD: '61.95',
        ACIDEZ: '0.14',
        TICKET: '65'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '458.0',
        RDTO: '15.5',
        HUMEDAD: '61.05',
        ACIDEZ: '0.33',
        TICKET: '59'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '732.0',
        RDTO: '18.95',
        HUMEDAD: '53.52',
        ACIDEZ: '0.27',
        TICKET: '57'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1015.0',
        RDTO: '18.09',
        HUMEDAD: '53.92',
        ACIDEZ: '0.29',
        TICKET: '58'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '238.0',
        RDTO: '21.22',
        HUMEDAD: '49.91',
        ACIDEZ: '0.25',
        TICKET: '60'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1435.0',
        RDTO: '18.67',
        HUMEDAD: '51.99',
        ACIDEZ: '0.27',
        TICKET: '61'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '4907.0',
        RDTO: '16.35',
        HUMEDAD: '54.7',
        ACIDEZ: '0.18',
        TICKET: '62'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '2272.0',
        RDTO: '20.36',
        HUMEDAD: '53.64',
        ACIDEZ: '0.27',
        TICKET: '63'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '3540.0',
        RDTO: '17.55',
        HUMEDAD: '54.52',
        ACIDEZ: '0.24',
        TICKET: '64'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '802.0',
        RDTO: '15.42',
        HUMEDAD: '61.95',
        ACIDEZ: '0.14',
        TICKET: '66'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '2075.0',
        RDTO: '18.93',
        HUMEDAD: '57.24',
        ACIDEZ: '0.19',
        TICKET: '67'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1824.0',
        RDTO: '18.86',
        HUMEDAD: '59.28',
        ACIDEZ: '0.15',
        TICKET: '68'
    },
    {
        DIA: '26',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '778.0',
        RDTO: '17.55',
        HUMEDAD: '55.25',
        ACIDEZ: '0.18',
        TICKET: '69'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1178.0',
        RDTO: '21.34',
        HUMEDAD: '50.85',
        ACIDEZ: '0.5',
        TICKET: '70'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1089.0',
        RDTO: '17.01',
        HUMEDAD: '59.54',
        ACIDEZ: '0.28',
        TICKET: '71'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '915.0',
        RDTO: '18.58',
        HUMEDAD: '54.04',
        ACIDEZ: '0.33',
        TICKET: '72'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '932.0',
        RDTO: '13.89',
        HUMEDAD: '58.34',
        ACIDEZ: '0.28',
        TICKET: '73'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '932.0',
        RDTO: '13.89',
        HUMEDAD: '58.34',
        ACIDEZ: '0.28',
        TICKET: '74'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '714.0',
        RDTO: '17.2',
        HUMEDAD: '61.39',
        ACIDEZ: '0.26',
        TICKET: '75'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1472.0',
        RDTO: '20.71',
        HUMEDAD: '48.16',
        ACIDEZ: '0.26',
        TICKET: '76'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '5389.0',
        RDTO: '17.37',
        HUMEDAD: '53.33',
        ACIDEZ: '0.24',
        TICKET: '77'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '3283.0',
        RDTO: '16.96',
        HUMEDAD: '61.06',
        ACIDEZ: '0.35',
        TICKET: '78'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '517.0',
        RDTO: '18.28',
        HUMEDAD: '58.27',
        ACIDEZ: '0.37',
        TICKET: '79'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '517.0',
        RDTO: '18.28',
        HUMEDAD: '58.27',
        ACIDEZ: '0.37',
        TICKET: '80'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '700.0',
        RDTO: '16.78',
        HUMEDAD: '57.47',
        ACIDEZ: '0.35',
        TICKET: '81'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '3799.0',
        RDTO: '19.2',
        HUMEDAD: '54.54',
        ACIDEZ: '0.16',
        TICKET: '82'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '4841.0',
        RDTO: '19.05',
        HUMEDAD: '58.34',
        ACIDEZ: '0.21',
        TICKET: '83'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1696.0',
        RDTO: '20.65',
        HUMEDAD: '48.93',
        ACIDEZ: '1.86',
        TICKET: '84'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1296.0',
        RDTO: '18.53',
        HUMEDAD: '56.0',
        ACIDEZ: '0.32',
        TICKET: '85'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '774.0',
        RDTO: '18.86',
        HUMEDAD: '54.33',
        ACIDEZ: '0.3',
        TICKET: '104'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '915.0',
        RDTO: '18.18',
        HUMEDAD: '50.36',
        ACIDEZ: '0.16',
        TICKET: '105'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '4525.0',
        RDTO: '16.43',
        HUMEDAD: '59.56',
        ACIDEZ: '0.15',
        TICKET: '86'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '4367.0',
        RDTO: '18.0',
        HUMEDAD: '58.57',
        ACIDEZ: '0.18',
        TICKET: '87'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '2281.0',
        RDTO: '14.95',
        HUMEDAD: '61.17',
        ACIDEZ: '0.27',
        TICKET: '88'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '931.0',
        RDTO: '18.84',
        HUMEDAD: '56.27',
        ACIDEZ: '0.24',
        TICKET: '89'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1415.0',
        RDTO: '17.29',
        HUMEDAD: '61.2',
        ACIDEZ: '0.12',
        TICKET: '90'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '10886.0',
        RDTO: '14.89',
        HUMEDAD: '64.18',
        ACIDEZ: '0.33',
        TICKET: '91'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1858.0',
        RDTO: '18.75',
        HUMEDAD: '59.05',
        ACIDEZ: '0.15',
        TICKET: '92'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1581.0',
        RDTO: '19.74',
        HUMEDAD: '54.95',
        ACIDEZ: '0.12',
        TICKET: '93'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1400.0',
        RDTO: '13.7',
        HUMEDAD: '60.08',
        ACIDEZ: '0.2',
        TICKET: '94'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '3810.0',
        RDTO: '18.78',
        HUMEDAD: '57.63',
        ACIDEZ: '0.13',
        TICKET: '95'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '883.0',
        RDTO: '16.05',
        HUMEDAD: '59.72',
        ACIDEZ: '0.16',
        TICKET: '96'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '4170.0',
        RDTO: '15.12',
        HUMEDAD: '56.49',
        ACIDEZ: '0.19',
        TICKET: '97'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '315.0',
        RDTO: '21.98',
        HUMEDAD: '48.38',
        ACIDEZ: '0.06',
        TICKET: '98'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '332.0',
        RDTO: '14.38',
        HUMEDAD: '61.12',
        ACIDEZ: '0.21',
        TICKET: '99'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '9161.0',
        RDTO: '16.78',
        HUMEDAD: '60.42',
        ACIDEZ: '0.14',
        TICKET: '100'
    },
    {
        DIA: '27',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '2885.0',
        RDTO: '19.61',
        HUMEDAD: '53.3',
        ACIDEZ: '0.23',
        TICKET: '101'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '469.0',
        RDTO: '18.87',
        HUMEDAD: '53.32',
        ACIDEZ: '0.38',
        TICKET: '102'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1172.0',
        RDTO: '16.39',
        HUMEDAD: '59.46',
        ACIDEZ: '0.18',
        TICKET: '103'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '915.0',
        RDTO: '18.18',
        HUMEDAD: '50.36',
        ACIDEZ: '0.16',
        TICKET: '106'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1191.0',
        RDTO: '16.56',
        HUMEDAD: '58.34',
        ACIDEZ: '0.32',
        TICKET: '107'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '4167.0',
        RDTO: '13.96',
        HUMEDAD: '56.75',
        ACIDEZ: '0.23',
        TICKET: '108'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '655.0',
        RDTO: '17.5',
        HUMEDAD: '55.5',
        ACIDEZ: '0.4',
        TICKET: '109'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1473.0',
        RDTO: '19.25',
        HUMEDAD: '47.92',
        ACIDEZ: '0.19',
        TICKET: '110'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '948.0',
        RDTO: '20.77',
        HUMEDAD: '50.06',
        ACIDEZ: '0.25',
        TICKET: '111'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '5619.0',
        RDTO: '20.16',
        HUMEDAD: '50.9',
        ACIDEZ: '0.26',
        TICKET: '112'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '4250.0',
        RDTO: '18.14',
        HUMEDAD: '57.88',
        ACIDEZ: '0.33',
        TICKET: '113'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '6521.0',
        RDTO: '18.42',
        HUMEDAD: '59.38',
        ACIDEZ: '0.33',
        TICKET: '114'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1181.0',
        RDTO: '18.27',
        HUMEDAD: '59.53',
        ACIDEZ: '0.29',
        TICKET: '115'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '4944.0',
        RDTO: '18.99',
        HUMEDAD: '56.23',
        ACIDEZ: '0.17',
        TICKET: '116'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '4073.0',
        RDTO: '18.95',
        HUMEDAD: '58.7',
        ACIDEZ: '0.39',
        TICKET: '117'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '2406.0',
        RDTO: '19.44',
        HUMEDAD: '54.34',
        ACIDEZ: '0.17',
        TICKET: '118'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '3413.0',
        RDTO: '19.7',
        HUMEDAD: '56.42',
        ACIDEZ: '0.23',
        TICKET: '119'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1713.0',
        RDTO: '22.89',
        HUMEDAD: '48.35',
        ACIDEZ: '0.29',
        TICKET: '120'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1366.0',
        RDTO: '18.7',
        HUMEDAD: '56.03',
        ACIDEZ: '0.21',
        TICKET: '121'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '2809.0',
        RDTO: '14.48',
        HUMEDAD: '59.78',
        ACIDEZ: '0.38',
        TICKET: '122'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '4228.0',
        RDTO: '19.15',
        HUMEDAD: '57.08',
        ACIDEZ: '0.27',
        TICKET: '123'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '9893.0',
        RDTO: '14.97',
        HUMEDAD: '63.26',
        ACIDEZ: '0.4',
        TICKET: '124'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '3927.0',
        RDTO: '19.64',
        HUMEDAD: '56.41',
        ACIDEZ: '0.26',
        TICKET: '152'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '4294.0',
        RDTO: '16.87',
        HUMEDAD: '59.51',
        ACIDEZ: '0.27',
        TICKET: '153'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '11566.0',
        RDTO: '14.85',
        HUMEDAD: '64.07',
        ACIDEZ: '0.45',
        TICKET: '154'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1592.0',
        RDTO: '21.29',
        HUMEDAD: '53.89',
        ACIDEZ: '0.21',
        TICKET: '125'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '2072.0',
        RDTO: '17.23',
        HUMEDAD: '62.55',
        ACIDEZ: '0.23',
        TICKET: '126'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '4518.0',
        RDTO: '18.17',
        HUMEDAD: '56.44',
        ACIDEZ: '0.28',
        TICKET: '155'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '3415.0',
        RDTO: '20.98',
        HUMEDAD: '49.35',
        ACIDEZ: '0.22',
        TICKET: '156'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '6197.0',
        RDTO: '16.47',
        HUMEDAD: '59.43',
        ACIDEZ: '0.27',
        TICKET: '127'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '976.0',
        RDTO: '13.48',
        HUMEDAD: '68.52',
        ACIDEZ: '0.29',
        TICKET: '128'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '4570.0',
        RDTO: '17.73',
        HUMEDAD: '54.84',
        ACIDEZ: '0.14',
        TICKET: '129'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1012.0',
        RDTO: '17.07',
        HUMEDAD: '59.04',
        ACIDEZ: '0.16',
        TICKET: '130'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '333.0',
        RDTO: '16.18',
        HUMEDAD: '58.37',
        ACIDEZ: '0.17',
        TICKET: '131'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '526.0',
        RDTO: '25.93',
        HUMEDAD: '43.59',
        ACIDEZ: '0.26',
        TICKET: '132'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '674.0',
        RDTO: '18.22',
        HUMEDAD: '58.46',
        ACIDEZ: '0.23',
        TICKET: '133'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '3797.0',
        RDTO: '18.35',
        HUMEDAD: '51.59',
        ACIDEZ: '0.23',
        TICKET: '157'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1677.0',
        RDTO: '21.12',
        HUMEDAD: '53.95',
        ACIDEZ: '0.14',
        TICKET: '158'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '2591.0',
        RDTO: '19.63',
        HUMEDAD: '53.14',
        ACIDEZ: '0.2',
        TICKET: '134'
    },
    {
        DIA: '28',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '574.0',
        RDTO: '17.45',
        HUMEDAD: '56.46',
        ACIDEZ: '0.19',
        TICKET: '135'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1172.0',
        RDTO: '16.81',
        HUMEDAD: '54.5',
        ACIDEZ: '0.26',
        TICKET: '136'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '914.0',
        RDTO: '16.81',
        HUMEDAD: '54.5',
        ACIDEZ: '0.26',
        TICKET: '137'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '914.0',
        RDTO: '14.37',
        HUMEDAD: '56.02',
        ACIDEZ: '0.24',
        TICKET: '138'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1124.0',
        RDTO: '19.91',
        HUMEDAD: '50.07',
        ACIDEZ: '0.23',
        TICKET: '139'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1443.0',
        RDTO: '20.58',
        HUMEDAD: '47.16',
        ACIDEZ: '0.24',
        TICKET: '140'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1014.0',
        RDTO: '18.2',
        HUMEDAD: '53.27',
        ACIDEZ: '0.26',
        TICKET: '141'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '3236.0',
        RDTO: '17.67',
        HUMEDAD: '53.55',
        ACIDEZ: '0.25',
        TICKET: '142'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '909.0',
        RDTO: '20.59',
        HUMEDAD: '48.85',
        ACIDEZ: '0.23',
        TICKET: '143'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '3595.0',
        RDTO: '18.02',
        HUMEDAD: '56.51',
        ACIDEZ: '0.3',
        TICKET: '144'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '2515.0',
        RDTO: '21.98',
        HUMEDAD: '52.06',
        ACIDEZ: '0.33',
        TICKET: '145'
    },
    {
        DIA: '29',
        MES: '11',
        ANYO: '2018',
        KGSACEITUNA: '1865.0',
        RDTO: '21.09',
        HUMEDAD: '49.5',
        ACIDEZ: '0.25',
        TICKET: '146'
    },
    {
        DIA: '29',
        MES: '11',
    },
    {
