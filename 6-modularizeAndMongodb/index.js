//Modules
var express = require('express');
var bodyparser = require('body-parser');
//var nedb = require('nedb');
var mongodb = require("mongodb").MongoClient; //It returns the access client to Mongo

//Variables
var port = process.env.PORT || 3000;
var BASE_URL = '/josprimenapi/v1';
//var DataStore = __dirname + '/store.db'; //creating data store file.
var mongoURL = "mongodb://josprimen:josprimenpass1@ds133981.mlab.com:33981/josprimen-api";

var app = express();

//App.use
//app.use(BASE_URL + "/",express.static(__dirname + "/public"));
app.use(bodyparser.json()); //Pasa los objetos javascript a json y viceversa

/*##############################################################################################################*/
//Console.logs to show asynchrony
console.log('Server Ready -> False');
console.log(__dirname);
/*##############################################################################################################*/

//Data code
var InitialContacts = [
    { name: 'josenri', tlf: 675132234 },
    { name: 'jesus', tlf: 897789898 },
    { name: 'natalia', tlf: 89987665 }
];

mongodb.connect(mongoURL,{native_parser:true, useUnifiedTopology: true},(err, mlabs)=>{
	if (err) {
        console.error('Error accesing Mongodb database: ' + err); //console.error is like console.log for errors
        process.exit(1); //We should turn off the program in case this fail. To do this we put a non zero number.
    }
	
	console.log("Connected to Mongodb!");
	var josprimenDatabase = mlabs.db("josprimen-api");
	var db = josprimenDatabase.collection("contacts");
	
	//The first square brackets are in case some condition is placed when searching data in the database eg name: "pepe", tlf: 648. If you don't return them all.
	db.find({}).toArray((err, contacts) => {
    if (contacts.length == 0) {
        console.log('Empty DataBase - Inserting default data');
        db.insert(InitialContacts);
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
	
	contactsAPI.methods(app, BASE_URL, db);
	
});


//Test module
require('./testModule'); //is better to use a variable
var test = require('./testModule');
//test();Ç
test.console();

//Importing module contactsAPI
var contactsAPI = require('./contactsAPI');