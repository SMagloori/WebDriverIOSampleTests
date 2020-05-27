import { Given, When, Then } from 'cucumber';
import Utils from '../../Utils/Utils.js';
import * as Constants from './../../Utils/Constants.js';
import { expect } from 'chai';
import CustomerDetailsPage from '../PageObjects/CustomerDetailsPage.js';

Given(/^I Pupulate All Mandatory Fields$/, function () {
    CustomerDetailsPage.selectCustomerTitleRadioMale();
    CustomerDetailsPage.populateCustomerFirstName();
    CustomerDetailsPage.populateCustomerLastName();
    CustomerDetailsPage.populateCustomerPassword();
    CustomerDetailsPage.populateCustomerDOB();
    CustomerDetailsPage.populateCustomerAddress();
    CustomerDetailsPage.pupulateCustomerCity();
    CustomerDetailsPage.selectCustomerState();
    CustomerDetailsPage.populateCustomerZipCode();
    CustomerDetailsPage.selectCustomerCountry();
    CustomerDetailsPage.populateCustomerMobileNumber();
});

Given(/^I Click Register Button$/, function () {
    CustomerDetailsPage.clickRegisterButton();
});