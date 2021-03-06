var express = require('express');
var bodyparser = require('body-parser');
var port = process.env.PORT || 3000;
var BASE_URL = '/josprimenapi/v1';

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

var contacts = [
    { name: 'josenri', tlf: 675132234 },
    { name: 'jesus', tlf: 897789898 },
    { name: 'natalia', tlf: 89987665 }
];

//Resources

app.get(BASE_URL + '/contacts', (req, res) => {
    console.log(Date() + ' - GET /contacts');
    res.send(contacts);
    //res.sendStatus(200); is not necessary, if it returns data, it is already sending a 200ok
});

app.post(BASE_URL + '/contacts', (req, res) => {
    console.log(Date() + ' - POST /contacts');
    var contact = req.body;
    contacts.push(contact);
    res.sendStatus(201);
});

app.put(BASE_URL + '/contacts', (req, res) => {
    console.log(Date() + ' - PUT /contacts');
    res.sendStatus(405);
});

app.delete(BASE_URL + '/contacts', (req, res) => {
    console.log(Date() + ' - DELETE /contacts');
    contacts = [];
    res.sendStatus(200);
});

//Specific resources
app.get(BASE_URL + '/contacts/:name', (req, res) => {
    var aux = req.params.name;
    console.log(Date() + ' - GET /contacts/' + aux);
    var contact = contacts.filter(x => 
        x.name == aux
    );
    res.send(contact);
    //res.sendStatus(200);
});

app.delete(BASE_URL + '/contacts/:name', (req, res) => {
    var aux = req.params.name;
    console.log(Date() + ' - DELETE /contacts/' + aux);
    var local_contacts = contacts.filter(x =>
        x.name != aux
    );
    contacts = local_contacts;
    res.sendStatus(200);
});

app.post(BASE_URL + '/contacts/:name', (req, res) => {
    var aux = req.params.name;
    console.log(Date() + ' - POST /contacts/' + aux);
    res.sendStatus(405);
});

app.put(BASE_URL + '/contacts/:name', (req, res) => {
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
});