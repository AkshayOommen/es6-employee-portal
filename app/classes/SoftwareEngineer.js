import {Employee} from "./Employee.js";

export class SoftwareEngineer extends Employee {
    constructor(name, birthDate, project, manager, skillSet, rating) {
        super(name, birthDate, project, manager);
        this._skillSet = skillSet || 'None';
        this._rating = rating || 2;
    }

    set skillSet (skillSet) {
        this._skillSet = skillSet;
    }

    get skillSet () {
        return this._skillSet;
    }

    set rating (rating) {
        this._rating = rating;
    }

    get rating () {
        return this._rating;
    }
}