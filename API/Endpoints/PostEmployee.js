import frisby from 'frisby';
import * as Constants from './../../Utils/Constants.js';

const PostEmployee = async (employeeName,employeeSalary,employeeAge) => {
    const response = frisby
      .fetch(Constants.PostEmployee, {method: 'POST',
      body: JSON.stringify({
        "name":employeeName,
        "salary":employeeSalary,
        "age":employeeAge
      }),
    })
      .inspectHeaders();
    return response;
  };

module.exports = {PostEmployee}