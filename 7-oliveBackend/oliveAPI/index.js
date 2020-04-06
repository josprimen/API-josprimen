var oliveAPI = {};

module.exports = oliveAPI;

oliveAPI.methods = function(app, BASE_URL, db, InitialDeliveryNotes) {
    console.log(Date() + ' - Module oliveAPI imported');

    /* INDEX FOR SEARCHING. PRESS CTRL + F AND WRITE THE DIMINUTIVE FROM THE LEFT*/
    /* 
#I1 -----> INITIAL INSERTION
#I2 -----> INITIALIZER 
#MA -----> ALLOWED METHODS
#GE -----> GETTERS
#PP -----> ALLOWED POST AND PUT
#DE -----> DELETES
#NAM -----> NOT ALLOWED METHODS
#PU -----> NOT ALLOWED PUTS
#PO -----> NOT ALLOWED POSTS
*/

    /*#I2------------------------------INITIALIZER---------------------------*/

    app.get(BASE_URL + '/olive/loadInitialData', (req, res) => {
        console.log(Date() + ' - GET /olive/loadInitialData');
        db.insertMany(InitialDeliveryNotes);
        db.find({}).toArray((err, olive) => {
            if (err) {
                console.error('Error accesing DataBase');
                res.sendStatus(500);
            }
            res.send(
                olive.map(x => {
                    delete x._id;
                    return x;
                })
            );
        });
    });

    /*#MA------------------------------ALLOWED METHODS---------------------------*/

    /*#GE------------------------------GETTERS---------------------------*/

    app.get(BASE_URL + '/olive/help', (req, res) => {
        res.redirect('');
    });

    app.get(BASE_URL + '/olive', (req, res) => {
        console.log(Date() + ' - GET /olive');
        db.find({}).toArray((err, olive) => {
            if (err) {
                console.error('Error accesing DataBase');
                res.sendStatus(500);
            }
            res.send(
                olive.map(x => {
                    delete x._id;
                    return x;
                })
            );
        });
    });

app.get(BASE_URL + '/olive/:year', (req, res) => {
        year = req.params.year;
        console.log(Date() + ' - GET /olive/' + year);
        db.find({ ANYO: year }).toArray((err, olive) => {
            if (err) {
                console.error('Error accesing DataBase');
                res.sendStatus(500);
            }
            res.send(
                olive.map(x => {
                    delete x._id;
                    return x;
                })
            );
        });
    });	

app.get(BASE_URL + '/olive/:year/:month', (req, res) => {
        month = req.params.month;
        year = req.params.year;
        date = '/' + year + '/' + month;
        console.log(Date() + ' - GET /olive/' + date);
        db.find({ MES: month, ANYO: year }).toArray((err, olive) => {
            if (err) {
                console.error('Error accesing DataBase');
                res.sendStatus(500);
            }
            res.send(
                olive.map(x => {
                    delete x._id;
                    return x;
                })
            );
        });
    });	

app.get(BASE_URL + '/olive/:year/:month/:day', (req, res) => {
        day = req.params.day;
        month = req.params.month;
        year = req.params.year;
        date = '' + day + '/' + month + '/' + year;
        console.log(Date() + ' - GET /olive/' + date);
        db.find({ DIA: day, MES: month, ANYO: year }).toArray((err, olive) => {
            if (err) {
                console.error('Error accesing DataBase');
                res.sendStatus(500);
            }
            res.send(
                olive.map(x => {
                    delete x._id;
                    return x;
                })
            );
        });
    });	

    app.get(BASE_URL + '/olive/:year/:month/:day/:ticket', (req, res) => {
        ticket = req.params.ticket;
		day = req.params.day;
        month = req.params.month;
        year = req.params.year;
        date = '' + day + '/' + month + '/' + year;
        console.log(Date() + ' - GET /olive/' + date + ticket);
        db.find({ DIA: day, MES: month, ANYO: year, TICKET: ticket }).toArray((err, olive) => {
            if (err) {
                console.error('Error accesing DataBase');
                res.sendStatus(500);
            }
            res.send(
                olive.map(x => {
                    delete x._id;
                    return x;
                })
            );
        });
    });

  
    /*#PP------------------------------ALLOWED POST AND PUT---------------------------*/

    app.post(BASE_URL + '/olive', (req, res) => {
        console.log(Date() + ' - POST /olive');
        var deliveryNote = req.body;
        db.insertOne(deliveryNote);
        res.sendStatus(201);
    });
	
	app.put(BASE_URL + '/olive/:year/:month/:day/:ticket', (req, res) => {
        var deliverybody = req.body;
        var ticket = req.params.ticket;
        console.log(Date() + ' - PUT /contacts/' + ticket);
        if (ticket != deliverybody.TICKET) {
            res.sendStatus(409);
            console.warn(Date() + ' - Hacking attempt!');
        } else {
            db.updateOne({ TICKET: ticket}, {$set:deliverybody}, (err) => {
                console.log(Date() + ' - One delivery note updated.');
            });
            res.sendStatus(200);
        }
    });
	

    /*#DE------------------------------DELETES---------------------------*/

    app.delete(BASE_URL + '/olive', (req, res) => {
        console.log(Date() + ' - DELETE /olive');
        db.deleteMany({}, { multi: true }, (err, numDelete) => {
            console.log(Date() + ' - Several olive delivery notes deleted.');
        }); //square brackets are in case some condition is placed when removing data in the database
        res.sendStatus(200);
    });
	
	app.delete(BASE_URL + '/olive/:year', (req, res) => {
		year = req.params.year;
        console.log(Date() + ' - DELETE /olive/' + year);
        db.deleteMany({ANYO:year}, {}, (err, numDelete) => {
            console.log(Date() + ' - Several olive delivery notes deleted.');
        }); //square brackets are in case some condition is placed when removing data in the database
        res.sendStatus(200);
    });
	
	app.delete(BASE_URL + '/olive/:year/:month', (req, res) => {
		year = req.params.year;
		month = req.params.month;
		date = '/' + year + '/' + month;
        console.log(Date() + ' - DELETE /olive/' + date);
        db.deleteMany({ANYO:year, MES: month}, {}, (err, numDelete) => {
            console.log(Date() + ' - Several olive delivery notes deleted.');
        }); //square brackets are in case some condition is placed when removing data in the database
        res.sendStatus(200);
    });
	
	app.delete(BASE_URL + '/olive/:year/:month/:day', (req, res) => {
		year = req.params.year;
		month = req.params.month;
		day = req.params.day;
		date = '/' + year + '/' + month + '/' + day;
        console.log(Date() + ' - DELETE /olive/' + date);
        db.deleteMany({ANYO:year, MES: month, DIA: day}, {}, (err, numDelete) => {
            console.log(Date() + ' - Several olive delivery notes deleted.');
        }); //square brackets are in case some condition is placed when removing data in the database
        res.sendStatus(200);
    });
	
	app.delete(BASE_URL + '/olive/:year/:month/:day/:ticket', (req, res) => {
		ticket = req.params.ticket;
        console.log(Date() + ' - DELETE /olive/' + ticket);
        db.deleteOne({ANYO:year, MES: month, DIA: day, TICKET:ticket}, {}, (err, numDelete) => {
            console.log(Date() + ' - Olive delivery note deleted.');
        }); //square brackets are in case some condition is placed when removing data in the database
        res.sendStatus(200);
    });

    /*#NAM------------------------------NOT ALLOWED METHODS---------------------------*/

    /*#PU------------------------------NOT ALLOWED PUTS---------------------------*/

    app.put(BASE_URL + '/olive', (req, res) => {
        console.log(Date() + ' - PUT /olive');
        res.sendStatus(405);
    });

    /*#PO------------------------------NOT ALLOWED POSTS---------------------------*/
	
	app.post(BASE_URL + '/olive/:year/:month/:day/:ticket', (req, res) => {
        var ticket = req.params.ticket;
        console.log(Date() + ' - POST /contacts/' + ticket);
        res.sendStatus(405);
    });
	
	app.post(BASE_URL + '/olive/:year/:month/:day', (req, res) => {
         day = req.params.day;
        month = req.params.month;
        year = req.params.year;
        date = '' + day + '/' + month + '/' + year;
        console.log(Date() + ' - POST /contacts/' + date);
        res.sendStatus(405);
    });
	
	app.post(BASE_URL + '/olive/:year/:month', (req, res) => {
        month = req.params.month;
        year = req.params.year;
        date = '' + month + '/' + year;
        console.log(Date() + ' - POST /contacts/' + date);
        res.sendStatus(405);
    });
	
	app.post(BASE_URL + '/olive/:year', (req, res) => {
        year = req.params.year;
        console.log(Date() + ' - POST /contacts/' + year);
        res.sendStatus(405);
    });
	
	app.post(BASE_URL + '/olive/:ticket', (req, res) => {
        ticket = req.params.ticket;
        console.log(Date() + ' - POST /contacts/' + ticket);
        res.sendStatus(405);
    });
	
	
};