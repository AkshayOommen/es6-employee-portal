const express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	employeeRouter = require('./server/controllers/EmployeeController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function () {
	console.log('Listening for web service calls on localhost:3000 ...');

	app.use('/employee', employeeRouter);
})

