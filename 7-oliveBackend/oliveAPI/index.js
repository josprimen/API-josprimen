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
	
	app.post(BASE_URL + "/olive/loadInitialData", (req, res) => {
		console.log(Date() + " - POST /olive/loadInitialData");
		db.insertMany(InitialDeliveryNotes);
		res.sendStatus(201);
	});	

/*#MA------------------------------ALLOWED METHODS---------------------------*/
	
	
/*#GE------------------------------GETTERS---------------------------*/

	app.get(BASE_URL + "/olive/help", (req, res) => {
		res.redirect("");
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

	
/*#PP------------------------------ALLOWED POST AND PUT---------------------------*/

    app.post(BASE_URL + '/olive', (req, res) => {
        console.log(Date() + ' - POST /olive');
        var deliveryNote = req.body;
        db.insertOne(deliveryNote);
        res.sendStatus(201);
    });

	
/*#DE------------------------------DELETES---------------------------*/

    app.delete(BASE_URL + '/olive', (req, res) => {
        console.log(Date() + ' - DELETE /olive');
        db.deleteMany({}, { multi: true }, (err, numDelete) => {
            console.log(Date() + ' - Several olive delivery notes deleted.');
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
	
}	
