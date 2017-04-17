import {Employee} from "./Employee.js";

export class Manager extends Employee {
    constructor(name, birthDate, project, manager, allocatedEmployees) {
        super(name, birthDate, project, manager);
        this._allocatedEmployees = allocatedEmployees || '';
    }

    set allocatedEmployees (allocatedEmployees) {
        this._allocatedEmployees = allocatedEmployees;
    }

    get allocatedEmployees () {
        return this._allocatedEmployees;
    }

    get numberOfAllocatedEmployees () {
        return this._allocatedEmployees.length === 0 ? 0 : this._allocatedEmployees.split(',').length;
    }
}