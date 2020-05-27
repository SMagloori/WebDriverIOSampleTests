Feature: Employee Database Tests

############# GetEmployees Enpoint Tests ############

@Api @GetEmployees
Scenario: Get Employees and Validate JSON Schema
Given I Call GetEmployees Endpoint
When I Verify Status Code is "200"
Then I Verify Status is "success"
Then I Validate JSON Schema for "GetEmployees" Endpoint for "200" Response

######################################################

############# PostEmployee Enpoint Tests ############

@Api @PostEmployee
Scenario: Post Employee and Validate respose
Given I Call PostEmployee Endpoint
When I Verify Status Code is "200"
Then I Verify Status is "success"
Then I Validate JSON Schema for "PostEmployee" Endpoint for "200" Response
Then I Verify EmployeeID is Generated and Present in response body
Then I Verify Employee Details in response body is correct

######################################################

############# GetEmployee Enpoint Tests ############

@Api @GetEmployee
Scenario: Get Employee and Validate response
Given I Call PostEmployee Endpoint
Then I Verify EmployeeID is Generated and Present in response body
When I Call GetEmployee Endpoint
Then I Verify Status Code is "200"
Then I Verify Status is "success"
Then I Validate JSON Schema for "GetEmployee" Endpoint for "200" Response
Then I Verify EmployeeID is Generated and Present in response body
Then I Verify Employee Details in response body is correct
Then I Verify Employee Profile Image Link is present in response body

######################################################

############# UpdateEmployee Enpoint Tests ############

@Api @PutEmployee
Scenario: Get Employee and Validate response
Given I Call PostEmployee Endpoint
Then I Verify EmployeeID is Generated and Present in response body
When I Call PutEmployee Endpoint
Then I Verify Status Code is "200"
Then I Verify Status is "success"
Then I Validate JSON Schema for "PutEmployee" Endpoint for "200" Response
Then I Verify EmployeeID Present in response body is correct
Then I Verify Employee Details in response body is correct

######################################################

############# DeleteEmployee Enpoint Tests ############

@Api @DeleteEmployee
Scenario: Get Employee and Validate response
Given I Call PostEmployee Endpoint
Then I Verify EmployeeID is Generated and Present in response body
When I Call DeleteEmployee Endpoint
Then I Verify Status Code is "200"
Then I Verify Status is "success"
Then I Validate JSON Schema for "DeleteEmployee" Endpoint for "200" Response

######################################################