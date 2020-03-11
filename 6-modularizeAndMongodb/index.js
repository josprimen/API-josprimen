//Modules
var express = require('express');
var bodyparser = require('body-parser');
var nedb = require('nedb');

//Variables
var port = process.env.PORT || 3000;
var BASE_URL = '/josprimenapi/v1';
var DataStore = __dirname + '/store.db'; //creating data store file.

var app = express();

app
    .listen(port, () => {
        console.log('Server Ready -> True');
    })
    .on('error', e => {
        console.log('%s:%s', 'Server not ready, an error ocurred: ' + e);
    });

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

var db = new nedb({
    filename: DataStore,
    autoload: true //Load data automatically when starting the web server
});

//The first square brackets are in case some condition is placed when searching data in the database eg name: "pepe", tlf: 648. If you don't return them all.
db.find({}, (err, contacts) => {
    if (err) {
        console.error('Error accesing DataBase'); //console.error is like console.log for errors
        process.exit(1); //We should turn off the program in case this fail. To do this we put a non zero number.
    }
    if (contacts.length == 0) {
        console.log('Empty DataBase - Inserting default data');
        db.insert(InitialContacts);
    } else {
        console.log(Date() + ' - Data loaded');
    }
});

//Test module
require('./testModule'); //is better to use a variable
var test = require('./testModule');
//test();Ç
test.console();

//Importing module contactsAPI
var contactsAPI = require('./contactsAPI');
contactsAPI.methods(app, BASE_URL, db);