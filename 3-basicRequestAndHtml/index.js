var express = require('express');
var bodyparser = require('body-parser');
var port = process.env.PORT || 3000;
var BASE_URL = "/josprimenapi/v1";

var app = express();

//app.listen(port); Ahora hacemos un listen con tratamiento de errores
app.listen(port, () => {
        console.log('Server Ready -> True');
    })
    .on('error', e => {
        console.log('%s:%s','Server not ready, an error ocurred: ' + e);
    });


//Recursos

//app.use(BASE_URL + "/",express.static("/workspace/sandbox/APIjosprimen/tercervideo/public"));
app.use(BASE_URL + "/",express.static(__dirname + "/public"));
app.use(bodyparser.json());//Pasa los objetos javascript a json y viceversa


app.get(BASE_URL + '/time', (request, response) => {
    console.log('Get Date');
    //console.log(process.env);
    response.send(Date());
});

/*##############################################################################################################*/
//Esto no es síncrono, cuando aparece este mensaje al correr el servidor, realmente aun no está preparado
//Esto es porque el listen tarda unos milisegundos en ponerse a escuchar y preparar todo.
//Creamos dos logs para ver como realmente este se ejecuta antes de tiempo.
console.log('Server Ready -> False');
console.log(__dirname);
console.log(BASE_URL + '/time');
/*##############################################################################################################*/

var contacts = [{"name":"josenri", "tlf":675132234},
			   {"name":"jesus", "tlf": 897789898},
			   {"name":"natalia", "tlf":89987665}];


/*var si = {"contacts":[{"name":"josenri","tlf":675132234},{"name":"jesus","tlf":897789898},{"name":"natalia","tlf":8
9987665},{"name":"alfonso","tlf":987789987}]}*/

app.get(BASE_URL + "/contacts", (req, res) =>{
	res.send(contacts);
});

app.post(BASE_URL + "/contacts", (req, res) =>{
	var contact = req.body;
	contacts.push(contact);
	res.sendStatus(201);
});
