/*global alert*/

export class Employee {
	constructor (name, birthDate, project, manager) {
		this._name = name;
		this._birthDate = birthDate;
		this._project = project;
		this._manager = manager;
	}

	set name (name) {
		this._name = name;
	}

	get name () {
		return this._name;
	}

	set birthDate (birthDate) {
		this._birthDate = birthDate;
	}

	get birthDate () {
		return this._birthDate;
	}

	set project (project) {
		this._project = project;
	}

	get project () {
		return this._project;
	}

	set manager (manager) {
		this._manager = manager;
	}

	get manager () {
		return this._manager;
	}
 
	showDetails () {
		alert(`${this._name} works under ${this._manager}`); 
	}
}