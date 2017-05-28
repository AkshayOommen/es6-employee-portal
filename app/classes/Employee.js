/*global alert*/

export class Employee {
    constructor (name, birthDate, project, manager, type) {
        this._name = name || 'John Doe';
        this._birthDate = birthDate || '01/01/1970';
        this._project = project || 'Buffer';
        this._manager = manager || 'Mayank';
        this._type = type || 'SE';
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

    set type (type) {
        this._type = type;
    }

    get type () {
        return this._type;
    }

    get age () {
        return this.calculateAge();
    }

    calculateAge() { 
        var ageDifMs = Date.now() - new Date(this._birthDate).getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    showDetails () {
        alert(`${this._name} works under ${this._manager}`);
    }
}