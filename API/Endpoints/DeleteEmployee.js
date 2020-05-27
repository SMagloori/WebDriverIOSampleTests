import frisby from 'frisby';
import * as Constants from './../../Utils/Constants.js';

const DeleteEmployee = async (employeeID) => {
    const response = frisby
      .fetch(Constants.DeleteEmployee + employeeID, {method: 'DELETE'})
      .inspectHeaders();
    return response;
  };

module.exports = {DeleteEmployee}