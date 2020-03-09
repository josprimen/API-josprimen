//Modules
var express = require('express');
var bodyparser = require('body-parser');
var nedb = require('nedb');

//Test module
require("./test.js"); //is better to use a variable
var test = require("./test.js");
//test();Ç
test.console();

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

//Resources

/*app.get(BASE_URL + '/contacts', (req, res) => {
    console.log(Date() + ' - GET /contacts');
    res.send(contacts);
    //res.sendStatus(200); is not necessary, if it return data, it is already sending a 200ok
});*/

app.get(BASE_URL + '/contacts', (req, res) => {
    console.log(Date() + ' - GET /contacts');
    db.find({}, (err, contacts) => {
        if (err) {
            console.error('Error accesing DataBase');
            res.sendStatus(500);
        }
        res.send(contacts);
    });
});

/*app.post(BASE_URL + '/contacts', (req, res) => {
    console.log(Date() + ' - POST /contacts');
    var contact = req.body;
    contacts.push(contact);
    res.sendStatus(201);
});*/

app.post(BASE_URL + '/contacts', (req, res) => {
    console.log(Date() + ' - POST /contacts');
    var contact = req.body;
    db.insert(contact);
    res.sendStatus(201);
});

app.put(BASE_URL + '/contacts', (req, res) => {
    console.log(Date() + ' - PUT /contacts');
    res.sendStatus(405);
});

/*app.delete(BASE_URL + '/contacts', (req, res) => {
    console.log(Date() + ' - DELETE /contacts');
    contacts = [];
    res.sendStatus(200);
});*/

app.delete(BASE_URL + '/contacts', (req, res) => {
    console.log(Date() + ' - DELETE /contacts');
    db.remove({}, { multi: true }, (err, numDelete) => {
        console.log(Date() + numDelete + ' contacts deleted.');
    }); //square brackets are in case some condition is placed when removing data in the database
    res.sendStatus(200);
});

//Specific resources
/*app.get(BASE_URL + '/contacts/:name', (req, res) => {
    var aux = req.params.name;
    console.log(Date() + ' - GET /contacts/' + aux);
    var contact = contacts.filter(x => 
        x.name == aux
    );
    res.send(contact);
    //res.sendStatus(200);
});*/

app.get(BASE_URL + '/contacts/:name', (req, res) => {
    var aux = req.params.name;
    console.log(Date() + ' - GET /contacts/' + aux);
    db.find({ name: aux }, (err, contacts) => {
        if (err) {
            console.error('Error accesing DataBase');
            res.sendStatus(500);
        }
        res.send(contacts);
    });
});

app.delete(BASE_URL + '/contacts/:name', (req, res) => {
    var aux = req.params.name;
    console.log(Date() + ' - DELETE /contacts/' + aux);
    db.remove({ name: aux }, {}, (err, numDelete) => {
        console.log(Date() + numDelete + ' contacts deleted.');
    }); //square brackets are in case some condition is placed when removing data in the database
    res.sendStatus(200);
});
//if you set true the multi param, you will delete all objects with that features (for example {"name":aux})
app.post(BASE_URL + '/contacts/:name', (req, res) => {
    var aux = req.params.name;
    console.log(Date() + ' - POST /contacts/' + aux);
    res.sendStatus(405);
});

/*app.put(BASE_URL + '/contacts/:name', (req, res) => {
    var aux2 = req.body;
    var aux = req.params.name;
    console.log(Date() + ' - PUT /contacts/' + aux);
    //console.log(aux);
    console.log(contacts.name);
    //console.log(contacts.name.some(aux));
    if (aux != aux2.name) {
        res.sendStatus(409);
		console.warn(Date() + " - Hacking attempt!");
    } else {
        var local_contacts = contacts.filter(x => x.name != aux);
        contacts = local_contacts;
        contacts.push(aux2);
        res.sendStatus(200);
    }
});*/

app.put(BASE_URL + '/contacts/:name', (req, res) => {
    var aux2 = req.body;
    var aux = req.params.name;
    console.log(Date() + ' - PUT /contacts/' + aux);
    if (aux != aux2.name) {
        res.sendStatus(409);
        console.warn(Date() + ' - Hacking attempt!');
    } else {
        db.update({ name: aux }, aux2, (err, numUpdate) => {
            console.log(Date() + numUpdate + ' contacts updated.');
        });
        res.sendStatus(200);
    }
});