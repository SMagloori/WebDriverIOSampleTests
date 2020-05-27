Feature: Customer SignIn Tests

############# Customer Signin Tests ############

@Ui @UserSignIn
Scenario: Signin with exsisting User
Given I Naviate to Home Page
When I Click SignIn Button
Then I Populate Registered Customer Credentials
Then I Click Signin Button
Then I Verify My Account Page is Displayed
Then I Verify Customer Name on Header
Then I Click on Logout

######################################################