//Modules
var express = require('express');
var bodyparser = require('body-parser');
var mongodb = require("mongodb").MongoClient; //It returns the access client to Mongo
var oliveAPI = require('./oliveAPI');//Importing module oliveAPI

//Variables
var port = process.env.PORT || 3000;
var BASE_URL = '/josprimenapi/v1';
var mongoURL = "mongodb://josprimen:josprimenpass1@ds133981.mlab.com:33981/josprimen-api";

var app = express();

//App.use
//app.use(BASE_URL + "/",express.static(__dirname + "/public"));
app.use(bodyparser.json()); //It turns javascript objects in json and vice versa

/*##############################################################################################################*/
//Console.logs to show asynchrony
console.log('Server Ready -> False');
console.log(__dirname);
/*##############################################################################################################*/
//Data code
var InitialDeliveryNotes = [
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
    }
];

mongodb.connect(mongoURL,{native_parser:true, useUnifiedTopology: true},(err, mlabs)=>{
	if (err) {
        console.error('Error accesing Mongodb database: ' + err); //console.error is like console.log for errors
        process.exit(1); //We should turn off the program in case this fail. To do this we put a non zero number.
    }
	
	console.log("Connected to Mongodb!");
	var josprimenDatabase = mlabs.db("josprimen-api");
	var db = josprimenDatabase.collection("oliveData");
	
	//The first square brackets are in case some condition is placed when searching data in the database eg name: "pepe", tlf: 648. If you don't return them all.
	db.find({}).toArray((err, olivedata) => {
    if (olivedata.length == 0) {
        console.log('Empty DataBase - Inserting default data');
        db.insertMany(InitialDeliveryNotes);
    } else {
        console.log(Date() + ' - Data loaded');
    }
});
	//We put the listen here for not running database and preparing the server in parallel, fist we need the database to be ready and after that, we set up the server
	app
    .listen(port, () => {
        console.log('Server Ready -> True');
    })
    .on('error', e => {
        console.log('%s:%s', 'Server not ready, an error ocurred: ' + e);
    });
	
	oliveAPI.methods(app, BASE_URL, db, InitialDeliveryNotes);
	
});