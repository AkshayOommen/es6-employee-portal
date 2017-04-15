'use strict'

import {Employee} from "./Employee";

let MainModule = {
	settings: {
		//TODO
	},
	bind: function() {
		Object.assign(window, {
			addEmployeeDetails: this.addEmployeeDetails,
			appendToTable: this.appendToTable,
			that: this
		});
	},
	init: function(){
		this.bind();
	}, 
	addEmployeeDetails: function() {
		let employee,
			params = [];

		for (let i = 0; i < document.getElementById('employeeInfo').elements.length; i++) {
			params.push(document.getElementById('employeeInfo').elements[i].value);
		};

		employee = new Employee(...params);
		employee.showDetails();

		that.appendToTable(employee);
	},
	appendToTable: function(employee) {
		let table = document.getElementById('employeeTable'),
			row,
			cell1, cell2, cell3, cell4;

		row = table.insertRow(-1);

		cell1 = row.insertCell(0);
		cell2 = row.insertCell(1);
		cell3 = row.insertCell(2);
		cell4 = row.insertCell(3);

		cell1.innerHTML = employee.name;
		cell2.innerHTML = employee.age;
		cell3.innerHTML = employee.project;
		cell4.innerHTML = employee.manager;
	}
};

(function() {
	MainModule.init();
})();