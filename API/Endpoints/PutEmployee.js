import frisby from 'frisby';
import * as Constants from './../../Utils/Constants.js';

const PutEmployee = async (employeeID,employeeName,employeeSalary,employeeAge) => {
    const response = frisby
      .fetch(Constants.PutEmployee + employeeID, {method: 'PUT',
      body: JSON.stringify({
        "name":employeeName,
        "salary":employeeSalary,
        "age":employeeAge
      }),
    })
      .inspectHeaders();
    return response;
  };

module.exports = {PutEmployee}