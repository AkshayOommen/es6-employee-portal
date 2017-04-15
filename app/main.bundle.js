(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Employee = function () {
	function Employee(name, age, project, manager) {
		_classCallCheck(this, Employee);

		this._name = name;
		this._age = age;
		this._project = project;
		this._manager = manager;
	}

	_createClass(Employee, [{
		key: "showDetails",
		value: function showDetails() {
			alert(this._name + " works under " + this._manager);
		}
	}, {
		key: "name",
		set: function set(name) {
			this._name = name;
		},
		get: function get() {
			return this._name;
		}
	}, {
		key: "age",
		set: function set(age) {
			this._age = age;
		},
		get: function get() {
			return this._age;
		}
	}, {
		key: "project",
		set: function set(project) {
			this._project = project;
		},
		get: function get() {
			return this._project;
		}
	}, {
		key: "manager",
		set: function set(manager) {
			this._manager = manager;
		},
		get: function get() {
			return this._manager;
		}
	}]);

	return Employee;
}();

exports.Employee = Employee;

},{}],2:[function(require,module,exports){
'use strict';

var _Employee = require('./Employee');

var MainModule = {
	settings: {
		//TODO
	},
	bind: function bind() {
		Object.assign(window, {
			addEmployeeDetails: this.addEmployeeDetails,
			appendToTable: this.appendToTable,
			that: this
		});
	},
	init: function init() {
		this.bind();
	},
	addEmployeeDetails: function addEmployeeDetails() {
		var employee = void 0,
		    params = [];

		for (var i = 0; i < document.getElementById('employeeInfo').elements.length; i++) {
			params.push(document.getElementById('employeeInfo').elements[i].value);
		};

		employee = new (Function.prototype.bind.apply(_Employee.Employee, [null].concat(params)))();
		employee.showDetails();

		that.appendToTable(employee);
	},
	appendToTable: function appendToTable(employee) {
		var table = document.getElementById('employeeTable'),
		    row = void 0,
		    cell1 = void 0,
		    cell2 = void 0,
		    cell3 = void 0,
		    cell4 = void 0;

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

(function () {
	MainModule.init();
})();

},{"./Employee":1}]},{},[2]);
