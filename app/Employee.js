class Employee {
	constructor (name, age, project, manager) {
		this._name = name;
		this._age = age;
		this._project = project;
		this._manager = manager;
	}

	set name (name) {
		this._name = name;
	}

	get name () {
		return this._name;
	}

	set age (age) {
		this._age = age;
	}

	get age () {
		return this._age;
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

export {Employee};