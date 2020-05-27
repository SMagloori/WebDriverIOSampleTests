Feature: Checkout Tests

############# Checkout Tests ############

@Ui @Checkout
Scenario: Checkout and Verify Order
Given I Naviate to Home Page
When I Click SignIn Button
Then I Populate Registered Customer Credentials
Then I Click Signin Button
Then I Verify Customer Name on Header
Then I Click Woman Category Tab
Then I Select Product with name Faded Short Sleeve T-shirts
Then I Verify Product Description Page is Displayed
Then I Add Product to Kart
Then I Click Proceed to Checkout Button On Product Description Page
Then I Click Proceed to Checkout Button On Shopping Cart Page
Then I Click Proceed to Checkout Button On Addresses Page
Then I Click on Terms and Conditions CheckBox On Shipping Page
Then I Click Proceed to Checkout Button On Shipping Page
Then I Select Pay By Wire Option on Payment Page
Then I Click I Confirm My Order Button On Payment Page
Then I Verify that Order Confirmation Page is Displayed
Then I Verify that Order is Complete Text is Displayed

######################################################