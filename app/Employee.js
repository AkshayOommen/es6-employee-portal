class Employee {
	constructor (name, age, project, manager) {
		this._name = name;
		this._age = age;
		this._project = project;
		this._manager = manager;
	}

	showDetails () {
		alert(`${this._name} works under ${this._manager}`); 
	}
}

export {Employee};