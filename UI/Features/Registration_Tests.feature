Feature: User Registration Tests

############# User Registration Tests ############

@Ui @UserRegistration
Scenario: Register New User
Given I Naviate to Home Page
When I Click SignIn Button
Then I Populate Email Address Field
Then I Click Create an Account Button
Then I Pupulate All Mandatory Fields
Then I Click Register Button
Then I Verify My Account Page is Displayed
Then I Verify Customer Name on Header
Then I Click on Logout

######################################################