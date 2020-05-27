import frisby from 'frisby';
import * as Constants from './../../Utils/Constants.js';

const GetEmployees = async () => {
    const response = frisby
      .fetch(Constants.GetEmployees, {method: 'GET'})
      .inspectHeaders();
    return response;
  };

  module.exports = {GetEmployees}