import { Given, When, Then } from 'cucumber';
const chai = require('chai');
chai.use(require('chai-json-schema'));
global.expect = chai.expect;
global.assert = chai.assert;
global.should = chai.should();

const ResponseSchemas = {
    GetEmployees: require('../Schemas/GetEmployees.json'),
    PostEmployee: require('../Schemas/PostEmployee.json'),
    GetEmployee: require('../Schemas/GetEmployee.json'),
    PutEmployee: require('../Schemas/PutEmployee.json'),
    DeleteEmployee: require('../Schemas/DeleteEmployee.json'),
    Common: require('../Schemas/Common.json')
}

Given(/^I Verify Status Code is \"([^\"]*)\"$/,async function (ResponseCode) {
    expect(response.status.toString()).to.equal(ResponseCode);
});

Given(/^I Verify Status is \"([^\"]*)\"$/,async function (ResponseStatus) {
  expect(responseBody.status.toString()).to.equal(ResponseStatus);
});

Given(/^I Validate JSON Schema for \"([^\"]*)\" Endpoint for \"([^\"]*)\" Response$/,async function (Endpoint, ResponseCode) {
    console.log(responseBody);
    if (ResponseCode == '200') {
      responseBody.should.be.jsonSchema(ResponseSchemas[Endpoint][ResponseCode]);
    } else {
      responseBody.should.be.jsonSchema(ResponseSchemas.Common[ResponseCode]);
    }
});