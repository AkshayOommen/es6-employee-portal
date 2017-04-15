'use strict'

import {Employee} from "./Employee";

let employee = new Employee('Elijah', 26, 'XY', 'John');

function displayPopup() {
	employee.showDetails();
};

window.onerror = function(errorMsg, url, lineNumber) {
	alert(errorMsg);
}

window.displayPopup = displayPopup;