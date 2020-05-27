import frisby from 'frisby';
import * as Constants from './../../Utils/Constants.js';

const GetEmployee = async (employeeID) => {
  var url = Constants.GetEmployee + employeeID;
  console.log(url);
    const response = frisby
      .fetch(url, {method: 'GET'})
      .inspectHeaders();
    return response;
  };

module.exports = {GetEmployee}