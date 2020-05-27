import Faker from 'faker';
import * as Constants from './../../Utils/Constants.js';

class CustomerDetailsPage {

    get customerTitleRadioMale() { return $('div:nth-of-type(1) > .top > .radio  input[name="id_gender"]') }
    get customerFirstNameTextField() { return $('#customer_firstname') }
    get customerLastNameTextField() { return $('#customer_lastname') }
    get customerEmailIDTextField() { return $('input#email') }
    get customerPasswordTextField() { return $('input#passwd') }
    get customerPasswordTextField() { return $('input#passwd') }
    get customerDOBDayDropDown() { return $('select#days') }
    get customerDOBMonthDropDown() { return $('select#months') }
    get customerDOBYearDropDown() { return $('select#years') }
    get signUpNewsLetterCheckBox() { return $('input#newsletter') }
    get customerFirstNameAdressSecTextField() { return $('input#firstname') }
    get customerLastNameAdressSecTextField() { return $('input#lastname') }
    get customerCompanyNameAdressSecTextField() { return $('input#company') }
    get customerAdressLine1TextField() { return $('input[name="address1"]') }
    get customerAdressLine2TextField() { return $('input[name="address2"]') }
    get customerCityTextField() { return $('input#city') }
    get customerStateDropdown() { return $('select#id_state') }
    get customerZipCodeTextField() { return $('input#postcode') }
    get customerCountryDropdown() { return $('select#id_country') }
    get customerMobilePhoneNumberTextField() { return $('#phone_mobile') }
    get customerAddressAliasTextField() { return $('input#alias') }
    get registerButton() { return $('button#submitAccount > span') }
    

    populateCustomerFirstName() {
        this.customerFirstNameTextField.waitForDisplayed({ timeout: 3000 });
        this.customerFirstNameTextField.setValue(Constants.CustomerFirstName);
    }

    selectCustomerTitleRadioMale() {
        this.customerTitleRadioMale.click();
    }

    populateCustomerLastName() {
        this.customerLastNameTextField.setValue(Constants.CustomerLastName);
    }

    populateCustomerPassword() {
        this.customerPasswordTextField.setValue(Constants.existingUserPassword);
    }

    populateCustomerDOB() {
        this.customerDOBDayDropDown.selectByAttribute('value', Constants.CustomerDOBDay);
        this.customerDOBMonthDropDown.selectByAttribute('value', Constants.CustomerDOBMonth);
        this.customerDOBYearDropDown.selectByAttribute('value', Constants.CustomerDOBYear);
    }

    selectNewsLetterCheckBox() {
        this.signUpNewsLetterCheckBox.click();
    }

    pupulateCustomerCompany() {
        this.customerCompanyNameAdressSecTextField.setValue(Constants.CustomerCompany);
    }

    populateCustomerAddress() {
        this.customerAdressLine1TextField.setValue(Constants.CustomerAddressLine1);
        this.customerAdressLine2TextField.setValue("Name");  
    }

    pupulateCustomerCity() {
        this.customerCityTextField.setValue(Constants.CustomerCity);
    }

    selectCustomerState() {
        this.customerStateDropdown.selectByVisibleText(Constants.CustomerState);
    }

    populateCustomerZipCode() {
        this.customerZipCodeTextField.setValue(Constants.CustomerZipCode);
    }

    selectCustomerCountry() {
        this.customerCountryDropdown.selectByVisibleText(Constants.CustomerCountry);
    }

    populateCustomerMobileNumber() {
        this.customerMobilePhoneNumberTextField.setValue(Constants.CustomerPhoneNumber);
    }

    populateCustomerAddressAliasField() {
        this.customerAddressAliasTextField.setValue(Constants.CustomerAddressAlias);
    }


    clickRegisterButton() {
        this.registerButton.waitForDisplayed({ timeout: 3000 });
        this.registerButton.click();
    }
}

export default new CustomerDetailsPage();