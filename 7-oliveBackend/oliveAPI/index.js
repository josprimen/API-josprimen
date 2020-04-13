var oliveAPI = {};

module.exports = oliveAPI;

oliveAPI.methods = function(app, BASE_URL, db, InitialDeliveryNotes, alldata) {
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

    app.get(BASE_URL + '/olive/loadAllData', (req, res) => {
        console.log(Date() + ' - GET /olive/loadAllData');
        db.insertMany(alldata);
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

    app.get(BASE_URL + '/olive/test', (req, res) => {
        res.redirect('https://documenter.getpostman.com/view/3950150/SzYdRw3B?version=latest');
    });

    app.get(BASE_URL + '/olive', (req, res) => {
        var limit = parseInt(req.query.limit);
        var offset = parseInt(req.query.offset);
        var afrom = Number(req.query.from);
        var ato = Number(req.query.to);
        var rdto = parseInt(req.query.RDTO);
        var humidity = Number(req.query.HUMEDAD);
        var acidity = Number(req.query.ACIDEZ);
        var kgs = Number(req.query.KGSACEITUNA);
        var day = Number(req.query.DIA);
        var month = Number(req.query.MES);
        var year = Number(req.query.ANYO);
		search = false;
		console.log(search);
		console.log(rdto);
        if (afrom && ato && rdto) { //URL form www.server/resource?searchparam&from=value&to=value with this format search param will be set to 0 and will get in the if
			search = true;
			console.log(Date() + ' - GET /olive search by rdto');
            db
                .find({ RDTO: { $gte: afrom, $lte: ato } })
                .skip(offset)
                .limit(limit)
                .toArray((err, olive) => {
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
        }

        if (afrom && ato && humidity) {
			search = true;
			console.log(Date() + ' - GET /olive search by humidity');
            db
                .find({ HUMEDAD: { $gte: afrom, $lte: ato } })
                .skip(offset)
                .limit(limit)
                .toArray((err, olive) => {
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
        }

        if (afrom && ato && acidity) {
			search = true;
			console.log(Date() + ' - GET /olive search by acidity');
            db
                .find({ ACIDEZ: { $gte: afrom, $lte: ato } })
                .skip(offset)
                .limit(limit)
                .toArray((err, olive) => {
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
        }

        if (kgs) {
			search = true;
			console.log(Date() + ' - GET /olive search by kilograms');
            db
                .find({ KGSACEITUNA: kgs })
                .skip(offset)
                .limit(limit)
                .toArray((err, olive) => {
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
        }
		
		if (afrom && ato && year) {
			search = true;
			console.log(Date() + ' - GET /olive search by year interval');
            db
                .find({ ANYO: { $gte: afrom, $lte: ato } })
                .skip(offset)
                .limit(limit)
                .toArray((err, olive) => {
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
        }
		
		if (afrom && ato && year && month) {
			console.log(Date() + ' - GET /olive search by month interval in a year');
			search = true
            db
                .find({ ANYO: year, MES: { $gte: afrom, $lte: ato } })
                .skip(offset)
                .limit(limit)
                .toArray((err, olive) => {
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
        }
		
		if (afrom && ato && year && month && day) {
			console.log(Date() + ' - GET /olive search by day interval in a month of the year');
			search = true;
            db
                .find({ ANYO: year, MES: month, DIA: { $gte: afrom, $lte: ato } })
                .skip(offset)
                .limit(limit)
                .toArray((err, olive) => {
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
        }
		
		if(!search){
			console.log(Date() + ' - GET /olive');
			db
            .find({})
            .skip(offset)
            .limit(limit)
            .toArray((err, olive) => {
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
		   
		   }
/*
        db
            .find({})
            .skip(offset)
            .limit(limit)
            .toArray((err, olive) => {
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
            });*/
    });

    app.get(BASE_URL + '/olive/:year', (req, res) => {
        var year = req.params.year;
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
        var month = req.params.month;
        var year = req.params.year;
        var date = '/' + year + '/' + month;
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
        var day = req.params.day;
        var month = req.params.month;
        var year = req.params.year;
        var date = '' + day + '/' + month + '/' + year;
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
        var ticket = req.params.ticket;
        var day = req.params.day;
        var month = req.params.month;
        var year = req.params.year;
        var date = '' + day + '/' + month + '/' + year;
        console.log(Date() + ' - GET /olive/' + date + '/' + ticket);
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
            db.updateOne({ TICKET: ticket }, { $set: deliverybody }, err => {
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
        var year = req.params.year;
        console.log(Date() + ' - DELETE /olive/' + year);
        db.deleteMany({ ANYO: year }, {}, (err, numDelete) => {
            console.log(Date() + ' - Several olive delivery notes deleted.');
        }); //square brackets are in case some condition is placed when removing data in the database
        res.sendStatus(200);
    });

    app.delete(BASE_URL + '/olive/:year/:month', (req, res) => {
        var year = req.params.year;
        var month = req.params.month;
        var date = '/' + year + '/' + month;
        console.log(Date() + ' - DELETE /olive/' + date);
        db.deleteMany({ ANYO: year, MES: month }, {}, (err, numDelete) => {
            console.log(Date() + ' - Several olive delivery notes deleted.');
        }); //square brackets are in case some condition is placed when removing data in the database
        res.sendStatus(200);
    });

    app.delete(BASE_URL + '/olive/:year/:month/:day', (req, res) => {
        var year = req.params.year;
        var month = req.params.month;
        var day = req.params.day;
        var date = '/' + year + '/' + month + '/' + day;
        console.log(Date() + ' - DELETE /olive/' + date);
        db.deleteMany({ ANYO: year, MES: month, DIA: day }, {}, (err, numDelete) => {
            console.log(Date() + ' - Several olive delivery notes deleted.');
        }); //square brackets are in case some condition is placed when removing data in the database
        res.sendStatus(200);
    });

    app.delete(BASE_URL + '/olive/:year/:month/:day/:ticket', (req, res) => {
        var year = req.params.year;
        var month = req.params.month;
        var day = req.params.day;
        var ticket = req.params.ticket;
        console.log(Date() + ' - DELETE /olive/' + ticket);
        db.deleteOne({ ANYO: year, MES: month, DIA: day, TICKET: ticket }, {}, (err, numDelete) => {
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
        var day = req.params.day;
        var month = req.params.month;
        var year = req.params.year;
        var date = '' + day + '/' + month + '/' + year;
        console.log(Date() + ' - POST /contacts/' + date);
        res.sendStatus(405);
    });

    app.post(BASE_URL + '/olive/:year/:month', (req, res) => {
        var month = req.params.month;
        var year = req.params.year;
        var date = '' + month + '/' + year;
        console.log(Date() + ' - POST /contacts/' + date);
        res.sendStatus(405);
    });

    app.post(BASE_URL + '/olive/:year', (req, res) => {
        var year = req.params.year;
        console.log(Date() + ' - POST /contacts/' + year);
        res.sendStatus(405);
    });

    app.post(BASE_URL + '/olive/:ticket', (req, res) => {
        var ticket = req.params.ticket;
        console.log(Date() + ' - POST /contacts/' + ticket);
        res.sendStatus(405);
    });
};