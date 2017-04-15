'use strict'

import {Manager} from "./Manager";
import {SoftwareEngineer} from "./SoftwareEngineer";

let MainModule = {
	settings: {
		//TODO
	},
	bind: function() {
		Object.assign(window, {
			addEmployeeDetails: this.addEmployeeDetails,
			appendToTable: this.appendToTable,
			modifyAvailableFields: this.modifyAvailableFields,
			that: this
		});
	},
	init: function(){
		this.bind();
	}, 
	addEmployeeDetails: function() {
		let employee,
			params = [],
			classToAdd = document.getElementById('isManager').checked ? 'managerField' : 'engineerField';

		for (let i = 0; i < document.getElementById('employeeInfo').length; i++) {
			if (document.getElementById('employeeInfo').elements[i].parentElement.className.indexOf(classToAdd) !== -1) {
				params.push(document.getElementById('employeeInfo').elements[i].value);
			}
		};

		employee = classToAdd === 'engineerField' ? new SoftwareEngineer(...params) : new Manager(...params);
		employee.showDetails();
		that.appendToTable(employee);
	},
	appendToTable: function(employee) {
		let table = document.getElementById('isManager').checked ? document.getElementById('managerTable') : document.getElementById('engineerTable'),
			classToAdd = document.getElementById('isManager').checked ? 'managerField' : 'engineerField',
			row;

		row = table.insertRow(-1);

		for (let i = 0; i < document.getElementsByClassName(classToAdd).length; i++) {
			let cell =  row.insertCell(i);
			cell.innerHTML = employee[Object.keys(employee)[i]];
		}
	},
	modifyAvailableFields: function() {
		let classToHide = document.getElementById('isManager').checked ? 'engineerField' : 'managerField',
			classToShow = document.getElementById('isManager').checked ? 'managerField' : 'engineerField';

		for (let i = 0; i < document.getElementsByClassName(classToHide).length; i++) {
			document.getElementsByClassName(classToHide)[i].className += ' hide';
		};
		for (let i = 0; i < document.getElementsByClassName(classToShow).length; i++) {
			document.getElementsByClassName(classToShow)[i].className = document.getElementsByClassName(classToShow)[i].className.replace(' hide', '');
		};
	}
};

(function() {
	MainModule.init();
})();