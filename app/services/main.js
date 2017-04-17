'use strict'

/*ESLint confugrations*/
/*global document window that*/

import {C} from '../constants/Constants'
import {Manager} from '../classes/Manager';
import {SoftwareEngineer} from '../classes/SoftwareEngineer';


let MainModule = {
    settings: {
        //TODO
    },
    bind: function() {
        // Assign constants to global scope
        this.const = C();

        // Assign methods to global scope
        Object.assign(window, {
            addEmployeeDetails: this.addEmployeeDetails,
            appendToTable: this.appendToTable,
            modifyAvailableFields: this.modifyAvailableFields,
            that: this
        });
    },
    init: function(){
        this.bind();
        that.checkForData(that.const.MANAGER_TABLE);
        that.checkForData(that.const.ENGINEER_TABLE);
    },
    addEmployeeDetails: function() {
        let employee,
            params = [],
            classToAdd = document.getElementById(that.const.IS_MANAGER).checked ? that.const.MANAGER_FIELD : that.const.ENGINEER_FIELD;

        for (let i = 0; i < document.getElementById(that.const.EMPLOYEE_INFO).length; i++) {
            if (document.getElementById(that.const.EMPLOYEE_INFO).elements[i].parentElement.className.indexOf(classToAdd) !== -1) {
                params.push(document.getElementById(that.const.EMPLOYEE_INFO).elements[i].value);
            }
        }

        employee = classToAdd === that.const.ENGINEER_FIELD ? new SoftwareEngineer(...params) : new Manager(...params);
        employee.showDetails();
        that.appendToTable(employee);
    },
    appendToTable: function(employee) {
        let table = document.getElementById(that.const.IS_MANAGER).checked ? document.getElementById(that.const.MANAGER_TABLE) : document.getElementById(that.const.ENGINEER_TABLE),
            params = document.getElementById(that.const.IS_MANAGER).checked ? that.const.MANAGER_PARAMS : that.const.ENGINEER_PARAMS,
            row;

        if (table.getElementsByTagName('tr')[0].getElementsByTagName('td')[0].className === 'noRecords') {
            table.getElementsByTagName('tr')[0].remove();
        }

        row = table.insertRow(-1);

        for (let i = 0; i < params.length; i++) {
            let cell =  row.insertCell(i);
            cell.innerHTML = employee[params[i]];
        }
    },
    checkForData: function(tableName) {
        let table = document.getElementById(tableName),
            isDataAvailable = document.getElementById(tableName).length > 0 ? true : false,
            row,
            cell;

        if (!isDataAvailable) {
            row = table.insertRow(-1);
            cell = row.insertCell(0);
            cell.innerHTML = that.const.NO_RECORDS_FOUND;
            cell.setAttribute('colspan', document.getElementById(tableName === that.const.MANAGER_TABLE ? that.const.MANAGER_TABLE_HEADERS : that.const.ENGINEER_TABLE_HEADERS).getElementsByTagName('th').length.toString());
            cell.className = that.const.NO_RECORDS;
        } else {
            document.getElementById(tableName).getElementsByTagName('tr')[0].remove();
        }
    },
    modifyAvailableFields: function() {
        let classToHide = document.getElementById(that.const.IS_MANAGER).checked ? that.const.ENGINEER_FIELD : that.const.MANAGER_FIELD,
            classToShow = document.getElementById(that.const.IS_MANAGER).checked ? that.const.MANAGER_FIELD : that.const.ENGINEER_FIELD;

        for (let i = 0; i < document.getElementsByClassName(classToHide).length; i++) {
            document.getElementsByClassName(classToHide)[i].className += ' ' + that.const.HIDE;
        }

        for (let i = 0; i < document.getElementsByClassName(classToShow).length; i++) {
            document.getElementsByClassName(classToShow)[i].className = document.getElementsByClassName(classToShow)[i].className.replace(' ' + that.const.HIDE, '');
        }

        document.getElementById(that.const.EMPLOYEE_INFO).reset();
    }
};

(function() {
    MainModule.init();
})();