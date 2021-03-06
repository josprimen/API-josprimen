var contactsAPI = {};

module.exports = contactsAPI;

contactsAPI.methods = function(app, BASE_URL, db, InitialContacts) {
    console.log(Date() + ' - Module contactsAPI imported');

    //Resources

    /*app.get(BASE_URL + '/contacts', (req, res) => {
		console.log(Date() + ' - GET /contacts');
		res.send(contacts);
		//res.sendStatus(200); is not necessary, if it return data, it is already sending a 200ok
	});*/

    app.get(BASE_URL + '/contacts', (req, res) => {
        console.log(Date() + ' - GET /contacts');
        db.find({}).toArray((err, contacts) => {
            if (err) {
                console.error('Error accesing DataBase');
                res.sendStatus(500);
            }
            res.send(
                contacts.map(x => {
                    delete x._id;
                    return x;
                })
            );
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
        db.insertOne(contact);
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
        db.deleteMany({}, { multi: true }, (err, numDelete) => {
            console.log(Date() + ' - Several contacts deleted.');
        }); //square brackets are in case some condition is placed when removing data in the database
        res.sendStatus(200);
    });
	
	app.get(BASE_URL + "/contacts/loadInitialData", (req, res) => {
		console.log(Date() + " - GET /contacts/loadInitialData");
		db.insertMany(InitialContacts);
		db.find({}).toArray((err, contacts) => {
            if (err) {
                console.error('Error accesing DataBase');
                res.sendStatus(500);
            }
            res.send(
                contacts.map(x => {
                    delete x._id;
                    return x;
                })
            );
        });
	});
	
	app.get(BASE_URL + "/contacts/help", (req, res) => {
		res.redirect("https://documenter.getpostman.com/view/3950150/SzS2xU2i?version=latest");
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
        db.find({ name: aux }).toArray((err, contacts) => {
            if (err) {
                console.error('Error accesing DataBase');
                res.sendStatus(500);
            }
            res.send(
                contacts.map(x => {
                    delete x._id;
                    return x;
                })
            );
        });
    });

    app.delete(BASE_URL + '/contacts/:name', (req, res) => {
        var aux = req.params.name;
        console.log(Date() + ' - DELETE /contacts/' + aux);
        db.deleteOne({ name: aux }, {}, (err) => {
            console.log(Date() + ' - One contact deleted.');
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
            db.updateOne({ name: aux }, aux2, (err) => {
                console.log(Date() + ' - One contact updated.');
            });
            res.sendStatus(200);
        }
    });
};