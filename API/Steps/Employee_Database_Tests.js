import { Given, When, Then } from 'cucumber';
import Utils from '../../Utils/Utils.js';
import { expect } from 'chai';
var employeeName,employeeSalary,employeeAge,employeeID,updatedEmployeeName,updatedEmployeeSalary,updatedEmployeeAge;

const GetEmployees = require('../Endpoints/GetEmployees.js');
const PostEmployee = require('../Endpoints/PostEmployee.js');
const GetEmployee = require('../Endpoints/GetEmployee.js');
const PutEmployee = require('../Endpoints/PutEmployee.js');
const DeleteEmployee = require('../Endpoints/DeleteEmployee.js');


Given(/^I Call GetEmployees Endpoint$/, async function () {
    response = await GetEmployees.GetEmployees();
    responseBody = JSON.parse(response.body);
    console.log(response);
});

Given(/^I Call DeleteEmployee Endpoint$/, async function () {
    response = await DeleteEmployee.DeleteEmployee(employeeID);
    responseBody = JSON.parse(response.body);
    console.log(response);
});

Given(/^I Call GetEmployee Endpoint$/, async function () {
    response = await GetEmployee.GetEmployee(employeeID);
    responseBody = JSON.parse(response.body);
    console.log(response);
});

Given(/^I Call PostEmployee Endpoint$/, async function () {
    employeeName = Utils.GetRandonString(8);
    employeeSalary = Utils.GetRandomNumber(4).toString();
    employeeAge = Utils.GetRandomNumber(2).toString();
    response = await PostEmployee.PostEmployee(employeeName,employeeSalary,employeeAge);
    responseBody = JSON.parse(response.body);
    console.log(response);
});

Given(/^I Call PutEmployee Endpoint$/, async function () {
    updatedEmployeeName = Utils.GetRandonString(8);
    updatedEmployeeSalary = Utils.GetRandomNumber(4).toString();
    updatedEmployeeAge = Utils.GetRandomNumber(2).toString();
    response = await PutEmployee.PutEmployee(employeeID,updatedEmployeeName,updatedEmployeeSalary,updatedEmployeeAge);
    responseBody = JSON.parse(response.body);
    console.log(response);
});

Given(/^I Verify EmployeeID is Generated and Present in response body$/, async function () {
    expect((responseBody.data.id.toString()).length).to.be.above(0);
    employeeID = responseBody.data.id.toString();
});

Given(/^I Verify EmployeeID Present in response body is correct$/, async function () {
    expect(responseBody.data.id.toString()).to.equal(employeeID);
    employeeID = responseBody.data.id.toString();
});

Given(/^I Verify Employee Details in response body is correct$/, async function () {
    expect(responseBody.data.name).to.equal(employeeName);
    expect(responseBody.data.salary).to.equal(employeeSalary);
    expect(responseBody.data.age).to.equal(employeeAge);
});

Given(/^I Verify Employee Profile Image Link is present in response body$/, async function () {
    expect(responseBody.data.image).to.equal("");
});

