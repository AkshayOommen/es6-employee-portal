let express = require('express'),
	router = express.Router(),
	mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/es6_employee_database', function(err, db) {

	let employeeCollection = db.collection('employee');
	//Models
	let fetchEmployees = function(type, callback) {
		employeeCollection.find({type: type}).toArray(callback);	
	}

	let saveEmployee = function(employee, callback) {
		employeeCollection.insert(employee).toArray(callback);	
	}

	//Routes
	router.get('/fetch/type=:type', function(req, res) {
		fetchEmployees(req.params.type, function(err, data) {
			if (err) {
				return res.json(err);
			} else {
				return res.json(data);
			}
		});
	})

	router.post('/save', function(req, res) {
		saveEmployee(req.params.body, function(err, data) {
			if (err) {	
				return res.json(err);
			} else {
				return res.json(data);
			}
		});
	})
})

module.exports = router;